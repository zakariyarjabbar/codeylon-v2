import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../out/", import.meta.url);
const routes = [
  "index.html",
  "work/olio/index.html",
  "work/forma/index.html",
  "work/still/index.html",
];
test("all exported routes have unique canonical URLs and honest concept labels", async () => {
  const canonicals = new Set();
  for (const route of routes) {
    const html = await readFile(new URL(route, root), "utf8");
    assert.match(html, /<html lang="en"/);
    assert.match(html, /id="main-content"/);
    assert.match(html, /https:\/\/www.instagram.com\/codeylon\//);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
    assert.ok(canonical?.startsWith("https://codeylon.com/"));
    canonicals.add(canonical);
    if (route !== "index.html") assert.match(html, /Concept project/);
    assert.doesNotMatch(
      html.replace(/<script[\s\S]*?<\/script>/g, ""),
      /href="#"|lorem ipsum|coming soon|starting at|\$\d/i,
    );
  }
  assert.equal(canonicals.size, 4);
});
test("search and sharing assets are exported", async () => {
  const sitemap = await readFile(new URL("sitemap.xml", root), "utf8");
  for (const name of ["olio", "forma", "still"])
    assert.ok(sitemap.includes(`/work/${name}/`));
  assert.match(
    await readFile(new URL("robots.txt", root), "utf8"),
    /Sitemap: https:\/\/codeylon.com\/sitemap.xml/,
  );
  const png = await readFile(new URL("og.png", root));
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  assert.match(
    await readFile(new URL("404.html", root), "utf8"),
    /A pixel out of place/,
  );
});
test("logo path data exactly matches supplied source", async () => {
  const original = await readFile(
    new URL("../public/brand/logo-original.svg", import.meta.url),
    "utf8",
  );
  const cropped = await readFile(
    new URL("../public/brand/logo.svg", import.meta.url),
    "utf8",
  );
  assert.deepEqual(
    cropped.match(/<path[^>]+>/g),
    original.match(/<path[^>]+>/g),
  );
});
