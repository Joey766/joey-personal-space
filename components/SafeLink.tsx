import type { AnchorHTMLAttributes } from "react";

type SafeLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function SafeLink({ href, ...props }: SafeLinkProps) {
  return <a href={href} {...props} />;
}
