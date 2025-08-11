import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'マインドエンジニアリング・コーチング | 人生を根本から変える科学的アプローチ',
  description: 'マインドエンジニアリング・コーチングは、最新の認知科学的知見を基盤とし、人が本来持つマインドの力を最大限に引き出す実践的プログラムです。現状の外側にゴールを設定し、人生を根本から変革します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&family=Noto+Sans+JP:wght@300;400;500;700;900&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body>{children}</body>
    </html>
  )
}