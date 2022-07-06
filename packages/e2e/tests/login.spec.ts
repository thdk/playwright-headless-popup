import { test } from '@playwright/test';

test.describe('react-google-login-1', () => {
  test("should open popup to login with google", async ({ page }) => {
    await page.goto("http://localhost:3000/login1");
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('text=Sign in with Google').click(),
    ]);
    await popup.waitForLoadState();
  });
});


test.describe('react-google-login-2 with custom render function returning react-google-button', () => {
  test("should open popup to login with google", async ({ page }) => {
    await page.goto("http://localhost:3000/login2");
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('text=Sign in with Google').click(),
    ]);
    await popup.waitForLoadState();
  });
});

test.describe('react-google-login-3 with custom render function returning native button', () => {
  test("should open popup to login with google (This fails because click event is on div element)", async ({ page }) => {
    await page.goto("http://localhost:3000/login3");
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('text=Sign in with Google').click(),
    ]);
    await popup.waitForLoadState();
  });
});

test.describe('react-google-login-4 with custom render function returning react component', () => {
  test("should open popup to login with google", async ({ page }) => {
    await page.goto("http://localhost:3000/login4");
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('text=Sign in with Google').click(),
    ]);
    await popup.waitForLoadState();
  });
});

test.describe('login-5 simple button opening popup', () => {
  test("should open popup to login with google", async ({ page }) => {
    await page.goto("http://localhost:3000/login5");
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


