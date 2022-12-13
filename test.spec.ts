import { test } from '@playwright/test';

const sessions = process.env.SESSIONS ? +process.env.SESSIONS : 1;
for (var i = 0; i < sessions; i++) {
  test(`Open homepage [#${i}]`, async ({ browser }) => {
    var page = await browser.newPage();
    await page.goto('/');
  });
}