"use client";

import { useEffect, useRef } from "react";

/** Native modal semantics include background inertness and the browser's focus trap. */
export function useAccessibleDialog(isOpen: boolean, onClose: () => void) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    const supportsNativeModal = typeof dialog.showModal === "function";
    const background: Array<{ element: HTMLElement; wasInert: boolean }> = [];

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    if (supportsNativeModal) {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
      // Keep the fallback operable without making the dialog's ancestors inert.
      let branch: HTMLElement = dialog;
      while (branch.parentElement) {
        for (const sibling of Array.from(branch.parentElement.children)) {
          if (sibling !== branch && sibling instanceof HTMLElement) {
            background.push({ element: sibling, wasInert: sibling.inert });
            sibling.inert = true;
          }
        }
        branch = branch.parentElement;
        if (branch === document.body) break;
      }
    }

    const cancel = (event: Event) => {
      event.preventDefault();
      closeRef.current();
    };
    const backdropClick = (event: MouseEvent) => {
      if (event.target === dialog) closeRef.current();
    };
    const handleKeyboard = (event: KeyboardEvent) => {
      // Native Escape uses the cancel event so exiting video fullscreen still
      // takes precedence. Tab boundaries are explicit in every browser.
      if (event.key === "Escape" && !supportsNativeModal) {
        event.preventDefault();
        closeRef.current();
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])',
      )).filter((element) => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first) {
        event.preventDefault();
        dialog.focus();
      } else if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialog)) {
        event.preventDefault();
        first.focus();
      }
    };

    dialog.addEventListener("cancel", cancel);
    dialog.addEventListener("click", backdropClick);
    dialog.addEventListener("keydown", handleKeyboard);
    dialog.querySelector<HTMLElement>("[data-dialog-initial-focus], button, a[href]")?.focus({ preventScroll: true });

    return () => {
      dialog.removeEventListener("cancel", cancel);
      dialog.removeEventListener("click", backdropClick);
      dialog.removeEventListener("keydown", handleKeyboard);
      if (supportsNativeModal && dialog.open) dialog.close();
      else dialog.removeAttribute("open");
      for (const { element, wasInert } of background) element.inert = wasInert;
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isOpen]);

  return dialogRef;
}
