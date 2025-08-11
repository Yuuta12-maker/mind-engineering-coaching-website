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
      <body>{children}</body>
    </html>
  )
}