import { developmentBaseUrl as baseUrl } from '@/utils/constants/development'
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl,
    experimentalRunAllSpecs: true
  }
})