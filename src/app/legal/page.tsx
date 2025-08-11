import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | マインドエンジニアリング・コーチング',
  description: 'マインドエンジニアリング・コーチングの特定商取引法に基づく表記です。',
}

export default function Legal() {
  return (
    <div style={{ backgroundColor: 'var(--light)', minHeight: '100vh', padding: '50px 0' }}>
      <div className="container">
        <h1 className="section-title text-center" style={{ marginBottom: '50px' }}>
          特定商取引法に基づく表記
        </h1>
        
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '15px', 
          padding: '50px', 
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: 'var(--primary)', 
              marginBottom: '15px',
              borderBottom: '2px solid var(--primary)',
              paddingBottom: '8px'
            }}>
              販売者
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>森山雄太</p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: 'var(--primary)', 
              marginBottom: '15px',
              borderBottom: '2px solid var(--primary)',
              paddingBottom: '8px'
            }}>
              所在地
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              〒790-0012<br />
              愛媛県松山市湊町2-5-2 リコオビル401
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: 'var(--primary)', 
              marginBottom: '15px',
              borderBottom: '2px solid var(--primary)',
              paddingBottom: '8px'
            }}>
              連絡先
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '10px' }}>
              <strong>電話番号：</strong>090-5710-7627
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '10px' }}>
              <strong>メールアドレス：</strong>
              <a href="mailto:mindengineeringcoaching@gmail.com" 
                 style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                mindengineeringcoaching@gmail.com
              </a>
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <strong>受付時間：</strong>平日 9:00-18:00
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: 'var(--primary)', 
              marginBottom: '15px',
              borderBottom: '2px solid var(--primary)',
              paddingBottom: '8px'
            }}>
              販売価格
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '10px' }}>
              <strong>トライアルセッション：</strong>6,000円（税込）
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '10px' }}>
              <strong>継続プログラム（6ヶ月間）：</strong>214,000円（税込）
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', fontWeight: '700', color: 'var(--primary)' }}>
              <strong>総額：220,000円（税込）</strong>
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: 'var(--primary)', 
              marginBottom: '15px',
              borderBottom: '2px solid var(--primary)',
              paddingBottom: '8px'
            }}>
              商品の引渡時期
            </h2>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>トライアルセッション：</strong>決済完了後、担当者よりご連絡し日程調整いたします
              </li>
              <li>
                <strong>継続プログラム：</strong>トライアルセッション後、契約成立次第開始いたします
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: 'var(--primary)', 
              marginBottom: '15px',
              borderBottom: '2px solid var(--primary)',
              paddingBottom: '8px'
            }}>
              お支払い方法
            </h2>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>クレジットカード決済</strong>（VISA、Mastercard、American Express、JCB）
              </li>
              <li>
                <strong>銀行振込</strong>
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: 'var(--primary)', 
              marginBottom: '15px',
              borderBottom: '2px solid var(--primary)',
              paddingBottom: '8px'
            }}>
              返品・キャンセルについて
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '10px' }}>
              サービスの性質上、以下のとおり取り扱います：
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>トライアルセッション実施前：</strong>キャンセル可能（全額返金）
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>トライアルセッション実施後：</strong>継続プログラムへの参加義務はありません
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>継続プログラム：</strong>返金不可
              </li>
              <li>
                <strong>サービス提供者の都合による中止：</strong>全額返金いたします
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '0' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: 'var(--primary)', 
              marginBottom: '15px',
              borderBottom: '2px solid var(--primary)',
              paddingBottom: '8px'
            }}>
              その他
            </h2>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                本サービスは個人向けコーチングサービスです。
              </li>
              <li style={{ marginBottom: '10px' }}>
                セッションはオンライン（Google Meet）または対面で実施いたします。
              </li>
              <li>
                詳細については、お申し込み前にお気軽にお問い合わせください。
              </li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div style={{ marginBottom: '20px' }}>
            <a href="/terms" 
               style={{ 
                 color: 'var(--primary)', 
                 textDecoration: 'underline',
                 fontSize: '16px',
                 marginRight: '20px'
               }}>
              利用規約
            </a>
            <a href="/privacy" 
               style={{ 
                 color: 'var(--primary)', 
                 textDecoration: 'underline',
                 fontSize: '16px'
               }}>
              プライバシーポリシー
            </a>
          </div>
          <a href="/" 
             style={{ 
               display: 'inline-block',
               padding: '15px 40px',
               backgroundColor: 'var(--primary)',
               color: 'white',
               textDecoration: 'none',
               borderRadius: '50px',
               fontWeight: '700',
               fontSize: '18px',
               transition: 'all 0.3s ease'
             }}
             onMouseOver={(e) => {
               e.currentTarget.style.backgroundColor = 'var(--primary-dark)'
               e.currentTarget.style.transform = 'translateY(-3px)'
             }}
             onMouseOut={(e) => {
               e.currentTarget.style.backgroundColor = 'var(--primary)'
               e.currentTarget.style.transform = 'translateY(0)'
             }}>
            トップページに戻る
          </a>
        </div>
      </div>
    </div>
  )
}