import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約 | マインドエンジニアリング・コーチング',
  description: 'マインドエンジニアリング・コーチングのサービス利用規約です。',
}

export default function Terms() {
  return (
    <div style={{ backgroundColor: 'var(--light)', minHeight: '100vh', padding: '50px 0' }}>
      <div className="container">
        <h1 className="section-title text-center" style={{ marginBottom: '50px' }}>
          利用規約
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
              第1条（適用）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              本利用規約（以下、「本規約」）は、マインドエンジニアリング・コーチング（以下、「当サービス」）が提供するコーチングサービスの利用条件を定めるものです。お客様（以下、「利用者」）は、本規約に同意したうえで当サービスをご利用ください。
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
              第2条（サービス内容）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              当サービスは、以下のサービスを提供します：
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>マインドエンジニアリング・コーチングセッション</li>
              <li style={{ marginBottom: '8px' }}>目標設定および達成に向けたサポート</li>
              <li style={{ marginBottom: '8px' }}>進捗管理および継続的なフォローアップ</li>
              <li>その他、当サービスが提供するコーチング関連サービス</li>
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
              第3条（利用登録）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              利用者は、所定の申し込み手続きを完了することで、当サービスの利用登録を行うことができます。登録にあたっては、正確かつ最新の情報を提供する必要があります。
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
              第4条（料金および支払い）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              当サービスの料金は以下のとおりです：
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '8px' }}><strong>トライアルセッション：</strong>6,000円（税込）</li>
              <li><strong>継続プログラム（6ヶ月間）：</strong>214,000円（税込）</li>
            </ul>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              <strong>支払い方法：</strong>
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px', marginBottom: '20px' }}>
              <li style={{ marginBottom: '8px' }}>クレジットカード決済</li>
              <li>銀行振込</li>
            </ul>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              料金は事前払いとし、利用者は指定された期日までに支払いを完了する必要があります。
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
              第5条（キャンセル・返金）
            </h2>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '10px', fontWeight: '700' }}>
                トライアルセッション：
              </p>
              <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>セッション実施前：キャンセル可能（全額返金）</li>
                <li>セッション開始後：返金不可</li>
              </ul>
            </div>
            <div>
              <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '10px', fontWeight: '700' }}>
                継続プログラム：
              </p>
              <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
                <li style={{ marginBottom: '8px' }}>返金不可</li>
                <li>当サービス都合による中止：全額返金いたします</li>
              </ul>
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
              第6条（セッションの実施）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              セッションは、事前に双方で合意した日時・方法（オンラインまたは対面）で実施します。
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>遅刻や欠席の場合は、事前に連絡をお願いします</li>
              <li style={{ marginBottom: '8px' }}>利用者都合による無断欠席の場合、セッション料金は返金されません</li>
              <li>日程変更は、原則として48時間前までにご連絡ください</li>
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
              第7条（禁止事項）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              利用者は、以下の行為を行ってはなりません：
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>虚偽の情報を提供すること</li>
              <li style={{ marginBottom: '8px' }}>第三者の権利を侵害する行為</li>
              <li style={{ marginBottom: '8px' }}>公序良俗に反する行為</li>
              <li style={{ marginBottom: '8px' }}>当サービスの運営を妨害する行為</li>
              <li>その他、当サービスが不適切と判断する行為</li>
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
              第8条（守秘義務）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              当サービスは、セッション中に知り得た利用者の個人情報および秘密情報について、厳重に管理し、第三者に開示または漏洩しないものとします。同様に、利用者も当サービスの機密情報を第三者に開示してはなりません。
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
              第9条（免責事項）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              当サービスは、以下について責任を負いません：
            </p>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>利用者の期待する成果が得られなかった場合</li>
              <li style={{ marginBottom: '8px' }}>利用者の都合によるサービス利用の中断</li>
              <li style={{ marginBottom: '8px' }}>天災地変その他の不可抗力による影響</li>
              <li>その他当サービスの責に帰すべき事由以外の損害</li>
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
              第10条（知的財産権）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              当サービスが提供するコンテンツ、資料等の知的財産権は、当サービスまたはその他の権利者に帰属します。利用者は、これらを無断で複製、配布、転用することを禁じます。
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
              第11条（サービスの変更・中止）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              当サービスは、事前に通知することにより、サービス内容の変更、追加、または中止することができます。これにより利用者に損害が生じた場合でも、当サービスは責任を負いません。
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
              第12条（利用契約の解除）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              当サービスは、利用者が本規約に違反した場合、事前の通知なくサービス利用契約を解除することができます。この場合、支払済みの料金は返金されません。
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
              第13条（準拠法・管轄裁判所）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              本規約は日本法に準拠し、本規約に関する紛争については、当サービスの所在地を管轄する地方裁判所を第一審の専属的合意管轄裁判所とします。
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
              第14条（規約の変更）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
              当サービスは、必要に応じて本規約を変更することができます。変更後の規約は、本ページに掲載した時点で効力を生じるものとします。
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
              第15条（お問い合わせ）
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '15px' }}>
              本規約に関するお問い合わせは、以下までご連絡ください：
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
            <a href="/legal" 
               style={{ 
                 color: 'var(--primary)', 
                 textDecoration: 'underline',
                 fontSize: '16px',
                 marginRight: '20px'
               }}>
              特定商取引法に基づく表記
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
             className="back-to-top-btn">
            トップページに戻る
          </a>
        </div>
      </div>
    </div>
  )
}