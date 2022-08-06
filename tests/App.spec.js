//Valid login
const users = require("../user");
const { test, expect } = require("@playwright/test");


test("testValid", async ({ page }) => {
 
  // Go to https://netology.ru/
  await page.goto('https://netology.ru/');

  // Click text=Войти
  await page.click('text=Войти');
  await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');

  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');

  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]',users.users);

  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');

  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', users.password);

  // Click [data-testid="login-submit-btn"]
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page).toHaveURL('https://netology.ru/profile');  
});
//const { test, expect } = require("@playwright/test");

test("testNotValid", async ({ page }) => {
    await page.goto('https://netology.ru/');

    // Click text=Войти
    await page.click('text=Войти');
    await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');

    // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');

    // Fill [placeholder="Email"]
    await page.fill('[placeholder="Email"]', users.users1);

    // Click [placeholder="Пароль"]
    await page.click('[placeholder="Пароль"]');

    // Fill [placeholder="Пароль"]
    await page.fill('[placeholder="Пароль"]', users.password1);

    // Click [data-testid="login-submit-btn"]
    await page.click('[data-testid="login-submit-btn"]');
    // Click text=Неверный email
  await page.click('text=Неверный email');
  await expect(page).toHaveURL('https://netology.ru/?modal=sign_in');
});

