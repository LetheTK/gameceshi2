'use client'

import { NextFont } from 'next/dist/compiled/@next/font'

interface RootLayoutInnerProps {
  children: React.ReactNode;
  inter: NextFont;
}

export default function RootLayoutInner({ children, inter }: RootLayoutInnerProps) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  )
} 