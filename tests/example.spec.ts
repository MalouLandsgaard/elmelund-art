import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('has title', async ({ page }) => {
    await page.goto('');
    await expect(page).toHaveTitle(/Elmelund Art/);
  });
  test('error page', async ({ page }) => {
    await page.goto('');
    await expect(page).toHaveTitle(/Home/);
  });
});

test.describe('Gallery page', () => {
  test('has title', async ({ page }) => {
    await page.goto('/gallery');
    await expect(page).toHaveTitle(/Gallery/);
  });
});