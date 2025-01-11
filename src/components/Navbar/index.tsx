'use client'

import { motion } from 'framer-motion'
import LanguageSelector from '@/components/LanguageSelector'
import { useLanguage } from '@/contexts/LanguageContext'

/**
 * 导航栏组件
 * @returns 包含游戏名称和语言切换的导航栏
 */
export default function Navbar() {
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 左侧空白，用于保持居中对称 */}
          <div className="w-20"></div>

          {/* 游戏名称 - 居中 */}
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {t('gameName')}
          </motion.h1>

          {/* 右侧语言切换按钮 */}
          <div className="w-20 flex justify-end">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  )
} 