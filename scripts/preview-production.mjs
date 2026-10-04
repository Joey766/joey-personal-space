// Local-only preview of the actual Nitro/Vercel output. This does not deploy.
import { createServer } from "node:http";
import { stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { Readable } from "node:stream";

const root = resolve(import.meta.dirname, "..");
const staticRoot = resolve(root, ".vercel/output/static");
const handler = (await import(pathToFileURL(resolve(root, ".vercel/output/functions/__server.func/index.mjs")).href)).default;
const port = Number(process.env.PORT || 4173);
const contentTypes = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".jpg": "image/jpeg", ".mp4": "video/mp4", ".woff2": "font/woff2" };

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://127.0.0.1:${port}`);
    const file = resolve(staticRoot, `.${decodeURIComponent(url.pathname)}`);
    if ((req.method === "GET" || req.method === "HEAD") && file.startsWith(staticRoot + sep)) {
      const info = await stat(file).catch(() => null);
      if (info?.isFile()) {
        const extension = file.slice(file.lastIndexOf("."));
        const headers = { "Content-Type": contentTypes[extension] || "application/octet-stream", "Accept-Ranges": "bytes" };
        const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
        const start = range ? Number(range[1]) : 0;
        const end = range?.[2] ? Math.min(Number(range[2]), info.size - 1) : info.size - 1;
        if (start > end || start >= info.size) { res.writeHead(416, { "Content-Range": `bytes */${info.size}` }); res.end(); return; }
        if (range) headers["Content-Range"] = `bytes ${start}-${end}/${info.size}`;
        headers["Content-Length"] = String(end - start + 1);
        res.writeHead(range ? 206 : 200, headers);
        if (req.method === "HEAD") res.end(); else createReadStream(file, { start, end }).pipe(res);
        return;
      }
    }
    const requestHeaders = new Headers();
    for (const [key, value] of Object.entries(req.headers)) if (value !== undefined) requestHeaders.set(key, Array.isArray(value) ? value.join(", ") : value);
    const request = new Request(url, { method: req.method, headers: requestHeaders, ...(req.method !== "GET" && req.method !== "HEAD" ? { body: Readable.toWeb(req), duplex: "half" } : {}) });
    const response = await handler.fetch(request, { waitUntil: (promise) => promise.catch(console.error) });
    res.writeHead(response.status, Object.fromEntries(response.headers));
    if (!response.body || req.method === "HEAD") res.end(); else Readable.fromWeb(response.body).pipe(res);
  } catch (error) {
    console.error(error);
    if (!res.headersSent) res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Local production preview could not serve this request.");
  }
}).listen(port, "127.0.0.1", () => console.log(`Local production preview: http://127.0.0.1:${port}`));
