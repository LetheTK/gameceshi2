import Link from 'next/link'

/**
 * 页脚组件
 * @returns 网站页脚，包含联系方式和支持链接
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo区域 */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Epic Game
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              打造极致的游戏体验
            </p>
          </div>

          {/* 链接区域 */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">支持</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                    常见问题
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                    技术支持
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    隐私政策
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">联系我们</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@epicgame.com" className="text-gray-400 hover:text-white transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    联系方式
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Epic Game. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 