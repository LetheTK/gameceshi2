'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLanguageChange = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  // 在客户端渲染之前显示默认值
  if (!mounted) {
    return (
      <button className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors">
        English
      </button>
    )
  }

  return (
    <motion.button
      onClick={handleLanguageChange}
      className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {language === 'zh' ? '中文' : 'English'}
    </motion.button>
  )
} 