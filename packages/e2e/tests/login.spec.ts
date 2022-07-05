import { test } from '@playwright/test';

test.describe('team-timesheets login page', () => {

  test("should open popup to login with google", async ({ page }) => {
    await page.goto('https://team-timesheets.web.app/login');
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('text=Log in with Google').click(),
    ]);
    await popup.waitForLoadState();
  });
});

test.describe('react-google-login demo', () => {
  test("should open popup to login with google", async ({ page }) => {
    await page.goto("https://anthonyjgrove.github.io/react-google-login/iframe.html?id=google-login-button--default-button");
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('text=Sign in with Google').click(),
    ]);
    await popup.waitForLoadState();
  });
});

test.describe('react-google-login', () => {
  test("should open popup to login with google", async ({ page }) => {
    await page.goto("http://localhost:3000/login1");
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('text=Sign in with Google').click(),
    ]);
    await popup.waitForLoadState();
  });
});


test.describe('react-google-login with custom render function returning react-google-button', () => {
  test("should open popup to login with google", async ({ page }) => {
    await page.goto("http://localhost:3000/login2");
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('text=Sign in with Google').click(),
    ]);
    await popup.waitForLoadState();
  });
});

test.describe('react-google-login with custom render function returning native button', () => {
  test("should open popup to login with google", async ({ page }) => {
    await page.goto("http://localhost:3000/login3");
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('text=Sign in with Google').click(),
    ]);
    await popup.waitForLoadState();
  });
});



// test("should open clover popup to login with google", async ({ page }) => {
//   await page.goto("https://clover-qa.stgr.cloud/#/login");
//   const [popup] = await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('text=Sign in with Google').click(),
//   ]);
//   await popup.waitForLoadState();
// });

test.describe('popup example from playwright docs', () => {
  test("should open the popup", async ({ page }) => {
    // Note that Promise.all prevents a race condition
    // between clicking and waiting for the popup.
    const [popup] = await Promise.all([
      // It is important to call waitForEvent first.
      page.waitForEvent('popup'),
      // This action triggers the popup
      page.evaluate('window.open()')
    ]);
    await popup.goto('https://wikipedia.org');
  });
});
