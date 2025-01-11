'use client'

import { NextFont } from 'next/dist/compiled/@next/font'
import { useLanguage } from "@/contexts/LanguageContext";

interface RootLayoutInnerProps {
  children: React.ReactNode;
  inter: NextFont;
}

export default function RootLayoutInner({ children, inter }: RootLayoutInnerProps) {
  const { language } = useLanguage()
  
  return (
    <div className={inter.className}>
      {children}
    </div>
  )
} 