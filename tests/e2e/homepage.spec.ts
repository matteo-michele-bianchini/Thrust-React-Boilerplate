import { developmentBaseUrl } from '@/utils/constants/development'
import { appTitle } from '@/utils/constants/uiText'
import { test, expect } from '@playwright/test'

test('Open homepage', async ({ page }) => {
  await page.goto(developmentBaseUrl)
  await expect(page).toHaveTitle(appTitle)
})