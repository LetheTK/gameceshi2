'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * FAQ组件
 * @returns 常见问题列表
 */
export default function FAQ() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          常见问题
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <FAQItem 
            question="如何开始游戏？" 
            answer='点击游戏界面中的"开始游戏"按钮即可开始。首次进入可能需要等待资源加载。'
          />
          <FAQItem 
            question="游戏支持什么设备？" 
            answer="目前支持PC端网页游戏，建议使用Chrome、Firefox、Edge等现代浏览器获得最佳体验。"
          />
          <FAQItem 
            question="如何保存游戏进度？" 
            answer="游戏会自动保存进度。您也可以通过登录账号同步进度到云端。"
          />
          <FAQItem 
            question="遇到问题怎么办？" 
            answer="您可以查看帮助文档，或通过页面底部的联系方式与我们取得联系。"
          />
        </div>
      </div>
    </section>
  )
}

/**
 * FAQ项目组件
 */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border border-gray-800 rounded-lg overflow-hidden"
      initial={false}
    >
      <button
        className="w-full px-6 py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <motion.span
          className="ml-4 flex-shrink-0 text-purple-400"
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 text-gray-400 bg-gray-800/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 