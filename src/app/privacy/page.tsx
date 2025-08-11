import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | マインドエンジニアリング・コーチング',
  description: 'マインドエンジニアリング・コーチングの個人情報の取り扱いに関するプライバシーポリシーです。',
}

export default function Privacy() {
  return (
    <div style={{ backgroundColor: 'var(--light)', minHeight: '100vh', padding: '50px 0' }}>
      <div className="container">
        <h1 className="section-title text-center" style={{ marginBottom: '50px' }}>
          プライバシーポリシー
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
              1. 個人情報の取り扱いについて
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              マインドエンジニアリング・コーチング（以下、「当サービス」）では、お客様の個人情報を適切に管理し、以下の方針に基づいて取り扱います。
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
              2. 収集する個人情報
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              当サービスでは、以下の個人情報を収集する場合があります：
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>お名前、フリガナ</li>
              <li style={{ marginBottom: '8px' }}>メールアドレス</li>
              <li style={{ marginBottom: '8px' }}>電話番号</li>
              <li style={{ marginBottom: '8px' }}>住所</li>
              <li style={{ marginBottom: '8px' }}>生年月日</li>
              <li style={{ marginBottom: '8px' }}>性別</li>
              <li style={{ marginBottom: '8px' }}>コーチングセッションに関する情報</li>
              <li>決済に関する情報（クレジットカード情報は決済代行会社にて管理）</li>
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
              3. 個人情報の利用目的
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              収集した個人情報は、以下の目的で利用いたします：
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>コーチングサービスの提供</li>
              <li style={{ marginBottom: '8px' }}>セッションの予約・調整に関する連絡</li>
              <li style={{ marginBottom: '8px' }}>料金の請求・決済処理</li>
              <li style={{ marginBottom: '8px' }}>サービスの改善・向上</li>
              <li style={{ marginBottom: '8px' }}>重要なお知らせの配信</li>
              <li>お客様からのお問い合わせへの対応</li>
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
              4. 個人情報の第三者提供
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              当サービスは、以下の場合を除き、お客様の同意なく第三者に個人情報を提供することはありません：
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>法令に基づく場合</li>
              <li style={{ marginBottom: '8px' }}>人の生命、身体または財産の保護のために必要がある場合</li>
              <li style={{ marginBottom: '8px' }}>決済処理のために必要な範囲で決済代行会社に提供する場合</li>
              <li>業務委託先に必要な範囲で提供する場合（適切な管理・監督を行います）</li>
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
              5. 個人情報の管理
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              当サービスは、個人情報の漏洩、滅失、毀損の防止その他の安全管理のため、必要かつ適切な措置を講じます：
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>SSL暗号化通信による情報送信</li>
              <li style={{ marginBottom: '8px' }}>アクセス権限の適切な管理</li>
              <li style={{ marginBottom: '8px' }}>定期的なセキュリティ監査の実施</li>
              <li>従業員への個人情報保護教育の徹底</li>
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
              6. 決済情報の取り扱い
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              クレジットカード情報等の決済情報は、決済代行会社（Stripe）にて適切に管理されます。当サービスでは、決済完了情報のみを保存し、カード番号等の機密情報は保存いたしません。
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
              7. Cookieの使用について
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              当サービスでは、サービス向上のためにCookieを使用する場合があります。Cookieを無効にされても基本的なサービスをご利用いただけますが、一部機能が制限される場合があります。
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
              8. 個人情報の開示・訂正・削除
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              お客様は、ご自身の個人情報について、以下の権利を有します：
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>個人情報の開示を求める権利</li>
              <li style={{ marginBottom: '8px' }}>個人情報の訂正・追加・削除を求める権利</li>
              <li style={{ marginBottom: '8px' }}>個人情報の利用停止・消去を求める権利</li>
            </ul>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginTop: '15px' }}>
              これらのご要望については、本人確認の上、適切に対応いたします。
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
              9. お問い合わせ窓口
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：
            </p>
            <div style={{ 
              backgroundColor: 'var(--gray)', 
              padding: '20px', 
              borderRadius: '10px',
              fontSize: '16px', 
              lineHeight: '1.8'
            }}>
              <p style={{ marginBottom: '10px' }}>
                <strong>マインドエンジニアリング・コーチング</strong>
              </p>
              <p style={{ marginBottom: '10px' }}>
                <strong>担当者：</strong>森山雄太
              </p>
              <p style={{ marginBottom: '10px' }}>
                <strong>所在地：</strong>〒790-0012 愛媛県松山市湊町2-5-2 リコオビル401
              </p>
              <p style={{ marginBottom: '10px' }}>
                <strong>電話番号：</strong>090-5710-7627
              </p>
              <p style={{ marginBottom: '10px' }}>
                <strong>メールアドレス：</strong>
                <a href="mailto:mindengineeringcoaching@gmail.com" 
                   style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                  mindengineeringcoaching@gmail.com
                </a>
              </p>
              <p>
                <strong>受付時間：</strong>平日 9:00-18:00
              </p>
            </div>
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
              10. プライバシーポリシーの変更
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              当プライバシーポリシーは、法令の変更やサービス内容の変更に伴い、予告なく変更する場合があります。変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'var(--gray)', 
            padding: '20px', 
            borderRadius: '10px',
            fontSize: '16px',
            textAlign: 'center'
          }}>
            <p style={{ marginBottom: '10px' }}>
              <strong>制定日：</strong>2025年1月11日
            </p>
            <p style={{ marginBottom: '10px' }}>
              <strong>最終更新日：</strong>2025年1月11日
            </p>
            <p>
              <strong>マインドエンジニアリング・コーチング</strong>
            </p>
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
            <a href="/legal" 
               style={{ 
                 color: 'var(--primary)', 
                 textDecoration: 'underline',
                 fontSize: '16px'
               }}>
              特定商取引法に基づく表記
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