import { test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('/login')
  await page.getByRole('textbox', { name: 'email' }).click()
  await page.getByRole('textbox', { name: 'email' }).fill('correct@mail.com')
  await page.getByRole('textbox', { name: 'password' }).click()
  await page.getByRole('textbox', { name: 'password' }).fill('correct-password')
  // await page.getByRole('textbox', { name: 'password' }).press('Enter')
})