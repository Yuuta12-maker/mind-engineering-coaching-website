// アプリケーション全体で使用するリンクと設定値
export const LINKS = {
  // 申し込みフォーム
  APPLICATION_FORM: 'https://mec-manage.vercel.app/apply',
  
  // 法的ページ
  TERMS: '/terms',
  PRIVACY: '/privacy',
  LEGAL: '/legal',
  
  // ソーシャルメディア（必要に応じて追加）
  // TWITTER: '',
  // FACEBOOK: '',
  // INSTAGRAM: '',
} as const

// その他の定数
export const CONTACT_INFO = {
  EMAIL: 'mindengineeringcoaching@gmail.com',
  PHONE: '090-5710-7627',
  BUSINESS_HOURS: '平日 9:00-18:00',
  SELLER_NAME: '森山雄太',
  COMPANY_NAME: 'マインドエンジニアリング・コーチング',
} as const

// 料金情報
export const PRICING = {
  TRIAL_SESSION: 6000,
  CONTINUATION_PROGRAM: 214000,
  TOTAL: 220000,
} as const

// 画像パス
export const IMAGES = {
  LOGO: '/logo-mec.png',
  PROFILE: '/profile.JPG',
} as const

// メタデータの共通部分
export const SITE_INFO = {
  SITE_NAME: 'マインドエンジニアリング・コーチング',
  BASE_DESCRIPTION: 'マインドエンジニアリング・コーチング',
  AUTHOR: CONTACT_INFO.SELLER_NAME,
} as const