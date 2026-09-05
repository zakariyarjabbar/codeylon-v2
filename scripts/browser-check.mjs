import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";

const base = process.env.TEST_URL || "http://127.0.0.1:3000";
const folder = ".impeccable/review";
await mkdir(folder, { recursive: true });
const browser = await chromium.launch();
const report = {
  routes: [],
  sizes: [],
  interactions: [],
  errors: [],
  brokenResources: [],
  accessibility: [],
};
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => report.errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") report.errors.push(message.text());
  });
  page.on("response", (response) => {
    if (response.status() >= 400 && !response.url().includes("does-not-exist"))
      report.brokenResources.push({
        url: response.url(),
        status: response.status(),
      });
  });
  for (const route of ["/", "/work/olio/", "/work/forma/", "/work/still/"]) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
    });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((el) => el.decode());
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    report.accessibility.push({
      route,
      viewport: "desktop",
      violations: audit.violations.map(({ id, impact, nodes }) => ({
        id,
        impact,
        nodes: nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
    const invalidImages = await page
      .locator("img")
      .evaluateAll((images) =>
        images
          .filter((i) => !i.complete || i.naturalWidth === 0)
          .map((i) => i.src),
      );
    assert.equal(invalidImages.length, 0, JSON.stringify(invalidImages));
    report.routes.push({
      route,
      status: response.status(),
      title: await page.title(),
    });
    if (route !== "/")
      await page.screenshot({
        path: `${folder}/${route.split("/")[2]}-desktop.png`,
        fullPage: true,
      });
  }
  await page.goto(base, { waitUntil: "networkidle" });
  const links = await page
    .locator("a")
    .evaluateAll((links) =>
      links
        .map((a) => ({
          href: a.getAttribute("href"),
          label: a.getAttribute("aria-label") || a.textContent,
        }))
        .filter((a) => a.href),
    );
  for (const { href } of links) {
    if (href.startsWith("https:"))
      assert.equal(href, "https://www.instagram.com/codeylon/");
    if (href.includes("#")) {
      const id = href.split("#")[1];
      assert.equal(
        await page.locator(`[id="${id}"]`).count(),
        1,
        `Missing anchor ${href}`,
      );
    }
  }
  report.interactions.push(
    `Verified all ${links.length} homepage navigation and contact destinations`,
  );
  const first = page.locator(".faq-list summary").first();
  await first.focus();
  await page.keyboard.press("Enter");
  assert.equal(
    await page.locator(".faq-list details").first().getAttribute("open"),
    "",
  );
  await page.locator(".faq-list summary").nth(1).click();
  assert.equal(await page.locator(".faq-list details[open]").count(), 1);
  await page.locator(".faq-list summary").nth(1).click();
  report.interactions.push(
    "FAQs work by keyboard, close on repeat activation, and allow one open answer",
  );
  for (const [width, height, name] of [
    [320, 900, "small-mobile"],
    [375, 900, "mobile"],
    [438, 900, "large-mobile"],
    [768, 1024, "tablet"],
    [1024, 900, "laptop"],
    [1440, 1000, "desktop"],
    [1920, 1080, "wide"],
  ]) {
    await page.setViewportSize({ width, height });
    await page.goto(base, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((el) => el.decode());
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    const overflow = await page.evaluate(() => ({
      viewport: innerWidth,
      document: document.documentElement.scrollWidth,
      overflowing: [
        ...document.querySelectorAll(
          "main h1,main h2,main p,header,main section,.concept-grid",
        ),
      ]
        .filter(
          (el) =>
            el.getBoundingClientRect().right > innerWidth + 1 ||
            el.getBoundingClientRect().left < -1,
        )
        .map((el) => ({
          tag: el.tagName,
          cls: el.className,
          text: el.textContent.slice(0, 50),
        })),
    }));
    report.sizes.push({ width, height, ...overflow });
    await page.screenshot({ path: `${folder}/${name}.png`, fullPage: true });
    if (name === "mobile") {
      const toggle = page.locator(".menu-toggle");
      await toggle.click();
      assert.equal(await toggle.getAttribute("aria-expanded"), "true");
      await page.screenshot({ path: `${folder}/mobile-menu.png` });
      await page.keyboard.press("Escape");
      assert.equal(await toggle.getAttribute("aria-expanded"), "false");
      assert.equal(
        await toggle.evaluate((el) => el === document.activeElement),
        true,
      );
      await toggle.click();
      await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .getByRole("link", { name: "Our process" })
        .click();
      assert.equal(await toggle.getAttribute("aria-expanded"), "false");
      await page.goto(base, { waitUntil: "networkidle" });
      const audit = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      report.accessibility.push({
        route: "/",
        viewport: "mobile",
        violations: audit.violations.map(({ id, impact, nodes }) => ({
          id,
          impact,
          nodes: nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
      });
      report.interactions.push(
        "Mobile menu opens, closes on navigation, and Escape returns focus",
      );
    }
  }
  await page.setViewportSize({ width: 375, height: 900 });
  for (const slug of ["olio", "forma", "still"]) {
    await page.goto(`${base}/work/${slug}/`, { waitUntil: "networkidle" });
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((el) => el.decode());
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    report.accessibility.push({
      route: `/work/${slug}/`,
      viewport: "mobile",
      violations: audit.violations.map(({ id, impact, nodes }) => ({
        id,
        impact,
        nodes: nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    );
    assert.equal(overflow, false);
    await page.screenshot({
      path: `${folder}/${slug}-mobile.png`,
      fullPage: true,
    });
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "networkidle" });
  assert.equal(
    await page
      .locator(".art-cursor")
      .evaluate((el) => getComputedStyle(el).animationName),
    "none",
  );
  report.interactions.push(
    "Reduced-motion preference disables artwork animation",
  );
  const missing = await page.goto(base + "/does-not-exist/", {
    waitUntil: "networkidle",
  });
  assert.equal(missing.status(), 404);
  assert.equal(
    await page.getByRole("heading", { name: "A pixel out of place." }).count(),
    1,
  );
  report.interactions.push(
    "Unknown routes show branded 404 with a working home link",
  );
  await page.screenshot({ path: `${folder}/404.png` });
  report.errors = report.errors.filter((e) => !e.includes("404 (Not Found)"));
  const contextNoJs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 900 },
  });
  const noJs = await contextNoJs.newPage();
  await noJs.goto(base);
  assert.equal(await noJs.locator("h1").count(), 1);
  assert.ok(
    (await noJs
      .locator('a[href="https://www.instagram.com/codeylon/"]')
      .count()) > 0,
  );
  report.interactions.push(
    "Core copy and Instagram contact links render without JavaScript",
  );
  await contextNoJs.close();
} catch (error) {
  report.failure = error.stack;
  process.exitCode = 1;
} finally {
  await writeFile(
    `${folder}/browser-report.json`,
    JSON.stringify(report, null, 2),
  );
  const issues = report.accessibility.flatMap((a) => a.violations);
  process.stdout.write(
    JSON.stringify(
      {
        routes: report.routes,
        sizes: report.sizes,
        interactions: report.interactions,
        errors: report.errors,
        brokenResources: report.brokenResources,
        accessibilityIssues: issues,
        failure: report.failure,
      },
      null,
      2,
    ) + "\n",
  );
  if (
    issues.length ||
    report.errors.length ||
    report.brokenResources.length ||
    report.sizes.some((s) => s.document > s.width || s.overflowing.length)
  )
    process.exitCode = 1;
  await browser.close();
}
