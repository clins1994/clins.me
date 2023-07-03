import { defineAstroI18nConfig } from 'astro-i18n'

export default defineAstroI18nConfig({
  defaultLangCode: 'en',
  supportedLangCodes: ['en', 'ja'],
  showDefaultLangCode: false,
  trailingSlash: 'never',
  translations: {},
  routeTranslations: {}
})
