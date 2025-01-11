'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

/**
 * 游戏框架组件
 * @returns iframe 包装的游戏框架
 */
export default function GameFrame() {
  const [isLoading, setIsLoading] = useState(true)
  const { language, t } = useLanguage()
  const [isClient, setIsClient] = useState(false)

  // 处理加载状态
  useEffect(() => {
    setIsLoading(false)
    setIsClient(true)
  }, [])

  // 日期渲染函数
  const renderDate = (zhDate: string, enDate: string) => {
    if (!isClient) {
      return '...' // 服务端渲染时显示占位符
    }
    return language === 'zh' ? zhDate : enDate
  }

  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 游戏框架 */}
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
            </div>
          ) : null}
          
          <iframe
            src="https://www.crazygames.com/embed/bag-defense"
            className={`w-full h-full transition-opacity duration-500 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            allow="fullscreen"
            referrerPolicy="origin"
          />
        </div>

        {/* 游戏信息 */}
        <div className="mt-8 space-y-6 text-gray-300">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <h4 className="text-white font-semibold">{t('rating')}</h4>
              <p>{t('ratingValue')}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">{t('developer')}</h4>
              <p>{t('developerName')}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">{t('releaseDate')}</h4>
              <p>{renderDate('2025年1月', 'January 2025')}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">{t('lastUpdate')}</h4>
              <p>{renderDate('2025年1月9日', 'January 9, 2025')}</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">{t('gameIntro')}</h4>
            <p className="text-gray-400">
              {t('gameIntroText')}
            </p>
          </div>

          {/* 游戏控制说明 */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{t('controls')}</h3>
            <p className="text-gray-400">
              {t('controlsText')}
            </p>
          </div>

          {/* 技术信息 */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div>
              <h4 className="text-white font-semibold">{t('technology')}</h4>
              <p>{t('technologyText')}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">{t('platform')}</h4>
              <p>{t('platformText')}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">{t('category')}</h4>
              <p>{t('categoryText')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 