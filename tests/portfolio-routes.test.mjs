import test from "node:test";
import assert from "node:assert/strict";
import { localizedPath } from "../content/routes.ts";
import { portfolioProjects, creditMatrices } from "../content/projects.ts";

const base = process.env.PORTFOLIO_TEST_URL || "http://127.0.0.1:4173";
const core = ["/", "/explore", "/career", "/projects", "/life", "/life/music", ...portfolioProjects.map(({ slug }) => `/projects/${slug}`)];

for (const locale of ["zh", "en"]) {
  test(`${locale}: direct URLs, SSR language, metadata, navigation and references`, async () => {
    for (const path of core) {
      const localized = localizedPath(locale, path);
      const response = await fetch(base + localized);
      assert.equal(response.status, 200, localized);
      const html = await response.text();
      assert.match(html, new RegExp(`<html[^>]*lang="${locale === "en" ? "en" : "zh-CN"}"`), localized);
      assert.match(html, /<h1[\s>]/, `${localized} has a page heading`);
      assert.match(html, /<title>[^<]+<\/title>/, `${localized} has metadata`);
      const hrefs = [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => match[1]);
      assert.ok(!hrefs.some((href) => href.startsWith("//")), `${localized}: no protocol-relative chapter links`);
      assert.ok(!hrefs.some((href) => /\/(work|build|think)(?:[/#?]|$)/.test(href)), `${localized}: no legacy public navigation`);
      assert.ok(!hrefs.some((href) => /\.pdf(?:[?#]|$)/i.test(href)), `${localized}: reference PDFs remain private`);
      assert.ok(hrefs.includes(localizedPath(locale === "zh" ? "en" : "zh", path)), `${localized}: language switch preserves the page`);
      for (const href of new Set(hrefs.filter((href) => href.startsWith("/") && !href.startsWith("//")))) {
        const linked = await fetch(base + href, { method: "HEAD" });
        assert.equal(linked.status, 200, `${localized} -> ${href}`);
      }
    }
  });

  test(`${locale}: redirects preserve language and empty Life cards do not open placeholders`, async () => {
    for (const [from, to, status] of [["/build", "/projects", 308], ["/work", "/career", 308], ["/think", "/explore", 307]]) {
      const response = await fetch(base + localizedPath(locale, from), { redirect: "manual" });
      assert.equal(response.status, status);
      assert.equal(response.headers.get("location"), localizedPath(locale, to));
    }
    for (const slug of ["campus", "football", "chess", "travel", "everyday"]) {
      const response = await fetch(base + localizedPath(locale, `/life/${slug}`), { redirect: "manual" });
      assert.equal(response.status, 307);
      assert.equal(response.headers.get("location"), `${localizedPath(locale, "/life")}#${slug}`);
    }
    const html = await (await fetch(base + localizedPath(locale, "/life"))).text();
    assert.match(html, new RegExp(`href="${localizedPath(locale, "/life/music")}"`));
    for (const slug of ["campus", "football", "chess", "travel", "everyday"]) {
      assert.ok(html.includes(`id="${slug}"`));
      assert.ok(!html.includes(`href="${localizedPath(locale, `/life/${slug}`)}"`));
    }
  });

  test(`${locale}: invalid routes produce localized HTTP 404`, async () => {
    for (const path of ["/missing", "/not.found", "/projects/not-a-project", "/life/not-a-category"]) {
      const response = await fetch(base + localizedPath(locale, path));
      assert.equal(response.status, 404, path);
      const html = await response.text();
      assert.match(html, new RegExp(`<html[^>]*lang="${locale === "en" ? "en" : "zh-CN"}"`));
      assert.ok(html.includes(locale === "en" ? "This page isn&#x27;t here" : "这里还没有页面") || html.includes("This page isn't here"));
    }
  });
}

test("music source supports native seeking and local posters load", async () => {
  const html = await (await fetch(base + "/en/life/music")).text();
  const posters = [...new Set([...html.matchAll(/src="(\/videos\/life\/music\/[^" ]+\.jpg)"/g)].map((match) => match[1]))];
  assert.equal(posters.length, 4);
  for (const poster of posters) {
    assert.equal((await fetch(base + poster, { method: "HEAD" })).status, 200);
    const video = poster.replace(/\.jpg$/, ".mp4");
    const response = await fetch(base + video, { headers: { Range: "bytes=0-31" } });
    assert.equal(response.status, 206);
    assert.equal((await response.arrayBuffer()).byteLength, 32);
  }
});

test("reported STAT matrices are stochastic and match multi-year powers within report precision", () => {
  const P = creditMatrices.annual;
  for (const row of P) assert.ok(Math.abs(row.reduce((sum, value) => sum + value, 0) - 1) < 1e-10);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
    const squared = P[i].reduce((sum, value, k) => sum + value * P[k][j], 0);
    assert.ok(Math.abs(squared - creditMatrices.twoYear[i][j]) < 1e-10);
  }
  assert.deepEqual(P[2], [0, 0, 1]);
  let powered = P.map((row) => [...row]);
  for (let year = 2; year <= 5; year++) {
    powered = powered.map((row) => row.map((_, j) => row.reduce((sum, value, k) => sum + value * P[k][j], 0)));
  }
  for (let i = 0; i < 3; i++) {
    assert.ok(Math.abs(creditMatrices.fiveYear[i].reduce((sum, value) => sum + value, 0) - 1) < 1e-8);
    for (let j = 0; j < 3; j++) assert.ok(Math.abs(powered[i][j] - creditMatrices.fiveYear[i][j]) < 1e-8);
  }
});

for (const locale of ["zh", "en"]) {
  test(`${locale}: current recruiting facts and public-link boundaries`, async () => {
    const career = await (await fetch(base + localizedPath(locale, "/career"))).text();
    const careerText = career.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    assert.ok(careerText.includes("GRE 329"), "GRE is displayed once as 329, without stale sub-scores");
    for (const fact of ["82.17/100", "FARM", "PRM", "Distinction", "2024", "JupyterLab", "Pandas", "LeRobot", "Codex"]) {
      assert.ok(career.includes(fact), `Career includes ${fact}`);
    }
    assert.ok(career.includes(locale === "zh" ? "2027.06" : "Jun. 2027"), "Expected graduation remains June 2027");
    assert.ok(career.includes("3,000+") && career.includes("8,000+") && career.includes("100+"), "Supported experience quantities remain visible");
    assert.ok(!/\b(?:VBA|PyTorch)\b|50%\+|Top (?:15|20)%/.test(career), "No removed skills or unsupported outcome/rank claims");
    assert.ok(career.includes("a46luo@uwaterloo.ca"), "Current shared email");
    assert.ok(career.includes('href="https://github.com/Joey766"'), "Public GitHub profile");

    const zhiyue = await (await fetch(base + localizedPath(locale, "/projects/zhiyue-ai"))).text();
    const hrefs = [...zhiyue.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => match[1]);
    assert.ok(!hrefs.some((href) => /^https:\/\/github\.com\/Joey766\//i.test(href)), "Zhiyue has no direct source repository link");
    assert.ok(!zhiyue.includes("Chrome Extension"), "Superseded Chrome-extension presentation removed");
    assert.ok(zhiyue.includes(locale === "zh" ? "持续完善" : "In development"), "Zhiyue maturity stays bounded");

    const credit = await (await fetch(base + localizedPath(locale, "/projects/credit-transition"))).text();
    assert.ok(credit.includes(locale === "zh" ? "组长" : "Team Leader"), "Credit project identifies the confirmed team role");
    assert.ok(credit.includes(locale === "zh" ? "给定" : "supplied"), "The S&P matrix is supplied input");
    const personalSpace = await (await fetch(base + localizedPath(locale, "/projects/personal-space"))).text();
    assert.ok(!personalSpace.includes('href="https://github.com/Joey766/joey-personal-space"'), "No public CTA to the private portfolio repository");
  });
}
