// Prints the four CV pages (2 career paths x 2 languages) to PDF in public/cv.
// Run with `npm run cv:pdf` (it builds the site first). Uses the Chrome or Edge already installed.
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.CV_PORT ?? 4173);
const base = `http://localhost:${port}`;

// Keep in sync with src/lib/i18n.ts (trackSlugs and cvPdfName).
const pages = [
  { path: '/es/cv/biomedico', file: 'CV_Mario_Hernandez_Ing_Biomedico_ES.pdf' },
  { path: '/es/cv/datos', file: 'CV_Mario_Hernandez_Datos_IA_ES.pdf' },
  { path: '/en/cv/biomedical', file: 'CV_Mario_Hernandez_Biomedical_Eng_EN.pdf' },
  { path: '/en/cv/data-ai', file: 'CV_Mario_Hernandez_Data_AI_EN.pdf' },
];

const waitForServer = async () => {
  for (let attempt = 0; attempt < 60; attempt++) {
    try {
      const response = await fetch(`${base}${pages[0].path}`);
      if (response.ok) return;
    } catch {
      // not listening yet
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`The site did not start on ${base}. Run "npm run build" first.`);
};

const launchBrowser = async () => {
  for (const channel of ['chrome', 'msedge']) {
    try {
      return await chromium.launch({ channel });
    } catch {
      // try the next installed browser
    }
  }
  throw new Error('Neither Chrome nor Edge was found. Install one of them to export the CVs.');
};

const server = spawn(process.execPath, [join(root, 'node_modules/next/dist/bin/next'), 'start', '-p', String(port)], {
  cwd: root,
  stdio: 'ignore',
});

try {
  await waitForServer();
  await mkdir(join(root, 'public/cv'), { recursive: true });
  const browser = await launchBrowser();
  const page = await browser.newPage();

  for (const { path, file } of pages) {
    await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
    await page.pdf({
      path: join(root, 'public/cv', file),
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
    console.log(`✓ ${file}`);
  }

  await browser.close();
} finally {
  server.kill();
}
