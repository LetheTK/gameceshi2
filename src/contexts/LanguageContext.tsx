/**
 * 语言上下文组件
 * @file LanguageContext.tsx
 */

'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/locales/translations'

export type Language = 'zh' | 'en'

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.zh | keyof typeof translations.en) => string
}

/**
 * 创建语言上下文
 */
const LanguageContext = createContext<LanguageContextType | null>(null)

/**
 * 语言提供者组件
 * @param children - 子组件
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  // 只设置 mounted 状态，不检测浏览器语言
  useEffect(() => {
    setMounted(true)
  }, [])

  const t = (key: keyof typeof translations.zh | keyof typeof translations.en) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * 使用语言的 Hook
 * @returns LanguageContextType
 * @throws Error 如果在 LanguageProvider 外部使用
 */
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export { LanguageContext } 