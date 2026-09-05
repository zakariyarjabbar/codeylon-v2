import { chromium } from "@playwright/test";
import { readFile } from "node:fs/promises";

const mainFont = (
  await readFile(
    "node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  )
).toString("base64");
const pixelFont = (
  await readFile(
    "node_modules/@fontsource/pixelify-sans/files/pixelify-sans-latin-400-normal.woff2",
  )
).toString("base64");
const logo = (await readFile("public/brand/logo.svg")).toString("base64");
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.setContent(`<!doctype html><html><head><style>
  @font-face{font-family:Space;src:url(data:font/woff2;base64,${mainFont});font-weight:300 700}@font-face{font-family:Pixel;src:url(data:font/woff2;base64,${pixelFont})}*{box-sizing:border-box}body{margin:0;background:#f7f5ee;color:#091a44;font-family:Space;width:1200px;height:630px;border:16px solid #091a44;padding:51px;background-image:radial-gradient(#091a4429 1px,transparent 1px);background-size:18px 18px}.brand{display:flex;align-items:center;font-size:39px;font-weight:650;letter-spacing:-2px;gap:14px}.mark{background:#091a44;padding:10px;width:66px;height:52px}.mark img{width:100%;height:100%}.dot{color:#bd9a41}h1{margin:59px 0 24px;font-size:89px;letter-spacing:-4px;line-height:1.08;font-weight:600}h1 span{font-family:Pixel;font-size:106px;font-weight:400;letter-spacing:-4px}p{font-size:23px;line-height:1.5;max-width:660px;margin:0}.foot{position:absolute;bottom:56px;left:67px;font-size:16px}.star{position:absolute;right:83px;top:194px;width:146px;height:146px;transform:rotate(9deg)}.blocks{position:absolute;right:79px;bottom:78px;display:flex;gap:0;border:3px solid #091a44;box-shadow:7px 7px #091a44;padding:8px;background:#f7f5ee;transform:rotate(-6deg)}.blocks i{width:37px;height:40px;background:#091a44}.blocks i:nth-child(2){background:#bd9a41}.blocks i:nth-child(3){background:#576e64}
  </style></head><body><div class="brand"><span class="mark"><img src="data:image/svg+xml;base64,${logo}"/></span><span>codeylon<span class="dot">.</span></span></div><h1>Good business.<br/><span>Great website.</span></h1><p>Distinctive, thoughtful websites.<br/>Built around your business.</p><div class="foot">WEB DESIGN WITH CHARACTER &nbsp; / &nbsp; CODEYLON.COM</div><svg class="star" viewBox="0 0 24 24" fill="#bd9a41" shape-rendering="crispEdges"><path d="M10 0h4v6h4v4h6v4h-6v4h-4v6h-4v-6H6v-4H0v-4h6V6h4z"/></svg><div class="blocks"><i></i><i></i><i></i></div></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: "public/og.png" });
  process.stdout.write(
    "Created public/og.png (1200 × 630) with the supplied logo and local fonts.\n",
  );
} finally {
  await browser.close();
}
