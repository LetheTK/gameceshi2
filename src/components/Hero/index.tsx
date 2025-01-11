'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Hero 组件 - 展示游戏主要信息
 * @returns Hero 区域，包含标题和描述
 */
export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-16 bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        {/* 背景渐变 */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-900" />
        
        {/* 动态背景效果 */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 游戏图标 */}
          <div className="mx-auto w-24 h-24 rounded-full bg-purple-500/20 flex items-center justify-center mb-8">
            <svg 
              className="w-12 h-12 text-purple-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-6">
            {t('heroTitle')}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('heroDescription')}
          </p>
        </motion.div>
      </div>
    </section>
  )
} 