import 'server-only'
import type { Locale } from './config'

const dictionaries = {
  en: () => import('~/messages/en.json').then((module) => module.default),
  zh: () => import('~/messages/zh.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
