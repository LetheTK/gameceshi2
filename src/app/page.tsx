import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GameFrame from '@/components/GameFrame'

/**
 * 主页面组件
 * @returns 完整的游戏站页面
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <GameFrame />
    </main>
  )
}

// 添加元数据以优化SEO
export const metadata = {
  title: 'Epic Game - 2025最火的游戏',
  description: '创新的塔防玩法，精美的画面设计，让你体验前所未有的游戏乐趣。',
  keywords: '游戏, 在线游戏, 网页游戏, 塔防游戏',
}
