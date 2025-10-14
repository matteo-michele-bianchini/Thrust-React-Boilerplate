import { appTitle } from '@/utils/constants/uiText'
import { test, expect } from '@playwright/test'

test('Open homepage', async ({ page }) => {
  await page.goto('http://localhost:5174')
  await expect(page).toHaveTitle(appTitle)
})