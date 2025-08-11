'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { LINKS, CONTACT_INFO, PRICING, IMAGES } from './constants'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(anchor => {
      const handleClick = (e: Event) => {
        e.preventDefault()
        
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
        if (targetId === '#') return
        
        const targetElement = document.querySelector(targetId!)
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 20,
            behavior: 'smooth'
          })
        }
      }
      
      anchor.addEventListener('click', handleClick)
    })
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.fade-in')
    
    function reveal() {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < windowHeight - elementVisible) {
          const el = revealElements[i] as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      }
    }
    
    // Set initial state for fade-in elements
    revealElements.forEach(el => {
      const element = el as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(30px)'
      element.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
    })
    
    window.addEventListener('scroll', reveal)
    window.addEventListener('load', reveal)
    
    // Initial reveal check
    reveal()
    
    return () => {
      window.removeEventListener('scroll', reveal)
      window.removeEventListener('load', reveal)
    }
  }, [])

  return (
    <>
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">マインドエンジニアリング・コーチング</h1>
            <h2 className="hero-subtitle">あなたの人生を根本から変える、科学的アプローチ</h2>
            <p className="hero-text">
              マインドが動き出す。努力はいらない。
            </p>
            <div className="hero-actions">
              <a href={LINKS.APPLICATION_FORM} target="_blank" rel="noopener noreferrer" className="btn btn-primary">初回トライアルに申し込む</a>
              <a href="#about" className="btn btn-secondary">詳しく見る</a>
            </div>
            
            <a href="#about" className="scroll-btn">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="pain-points">
        <div className="container text-center">
          <h2 className="section-title">こんな思いはありませんか？</h2>
          <div className="pain-points-container">
            <div className="pain-point fade-in">
              <h3 className="pain-point-title">「今の現状を超えて、本当にやりたいことを実現したい」</h3>
              <p>
                心の奥にある本当の望みに気づき、それを実現するための道筋が見えない。現状の枠組みを超えた可能性を探りたい。
              </p>
            </div>
            <div className="pain-point fade-in delay-1">
              <h3 className="pain-point-title">「努力はしているのに、なぜか前に進めない」</h3>
              <p>
                頑張っているはずなのに、なかなか結果が出ない。何か根本的なアプローチが足りていないのかもしれない。
              </p>
            </div>
            <div className="pain-point fade-in delay-2">
              <h3 className="pain-point-title">「何かもっと大きな目標に向かって生きたい」</h3>
              <p>
                現状に満足できず、もっと大きな目標、社会に貢献できる生き方を模索している。自分の可能性をさらに広げたい。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container about-container">
          <div className="about-content fade-in">
            <h2 className="section-title">マインドエンジニアリング・コーチングとは</h2>
            <p>
              マインドエンジニアリング・コーチングは、最新の認知科学的知見を基盤とし、人が本来持つマインドの力を最大限に引き出す実践的プログラムです。
            </p>
            <p>
              このコーチングの核心は「<strong>現状の外側にゴールを設定する</strong>」という考え方です。単なるスキルアップや問題解決ではなく、人生全体を変革する道筋を開きます。
            </p>
            <p>
              従来の「根性論」や「ポジティブシンキング」とは一線を画した、科学的アプローチであなたの可能性を解放します。
            </p>
            <h3 style={{marginTop: '30px', fontSize: '22px', fontWeight: 700}}>このコーチングで得られること</h3>
            <ul style={{marginTop: '15px', marginLeft: '20px'}}>
              <li>現状の制約を超えた、真のゴール設定</li>
              <li>努力感なく自然にゴールに向かうマインドの獲得</li>
              <li>あなたが100%やりたいことを明確にする力</li>
              <li>ホメオスタシス（恒常性維持機能）を活用した持続的な成長</li>
              <li>社会との調和の中で自己実現を果たす視点</li>
            </ul>
          </div>
          <div className="about-image fade-in delay-1">
            <Image src={IMAGES.LOGO} alt="マインドエンジニアリング・コーチングのイメージ" width={500} height={500} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container text-center">
          <h2 className="section-title">なぜマインドエンジニアリング・コーチングなのか？</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-rocket"></i></div>
              <h3 className="feature-title">「現状の外」にゴールを設定</h3>
              <p className="feature-text">
                多くの人は「現状の内側」、つまり今の延長線上にゴールを設定してしまいます。真の変化は<strong>現状の外側</strong>にゴールを設定することから始まります。これがホメオスタシスを最大限に機能させる鍵です。
              </p>
            </div>
            <div className="feature-card fade-in delay-1">
              <div className="feature-icon"><i className="fas fa-brain"></i></div>
              <h3 className="feature-title">脳の仕組みを活用</h3>
              <p className="feature-text">
                私たちの脳には「ホメオスタシス」という恒常性維持機能があります。この脳の働きを利用して、努力感なく自然とゴールに向かうエネルギーを生み出します。現状と理想状態の差がエネルギーを生み出す原理です。
              </p>
            </div>
            <div className="feature-card fade-in delay-2">
              <div className="feature-icon"><i className="fas fa-heart"></i></div>
              <h3 className="feature-title">100%やりたいことに集中</h3>
              <p className="feature-text">
                「やるべきこと」や「できること」ではなく、「やりたいこと」に焦点を合わせます。やりたいことをやりたいだけやる—それが最も早く確実に結果を出す道です。好きなことは継続しやすく、上達も早いのです。
              </p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon"><i className="fas fa-hourglass-half"></i></div>
              <h3 className="feature-title">過去ではなく未来から考える</h3>
              <p className="feature-text">
                「時間は未来から過去へ流れる」という視点で考えます。過去の経験や制約に縛られず、未来のゴール達成という視点から現在すべきことを導き出します。過去は一切関係ありません。
              </p>
            </div>
            <div className="feature-card fade-in delay-1">
              <div className="feature-icon"><i className="fas fa-balance-scale"></i></div>
              <h3 className="feature-title">バランスホイールの活用</h3>
              <p className="feature-text">
                人生の各領域（健康、家族、教養、職業、ファイナンス、社会貢献など）にバランスよくゴールを設定し、相乗効果を生み出します。各ゴールが相互に影響し合い、より豊かな人生を創出します。
              </p>
            </div>
            <div className="feature-card fade-in delay-2">
              <div className="feature-icon"><i className="fas fa-handshake"></i></div>
              <h3 className="feature-title">社会貢献の視点</h3>
              <p className="feature-text">
                個人の幸せと社会の調和の両立を目指します。真の自己実現は、社会貢献という視点から生まれます。誰かが苦痛を感じるようなゴールではなく、みんながやさしい世界を実現するゴールを設定します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">他のコーチングとの違い</h2>
            <p>マインドエンジニアリング・コーチングは、従来のコーチング手法と比較して明確な違いがあります</p>
          </div>
          <div className="comparison-cards">
            <div className="comparison-card fade-in">
              <div className="comparison-card-header">
                <i className="fas fa-bullseye"></i>
                <h3>ゴール設定の位置</h3>
              </div>
              <div className="comparison-card-body">
                <div className="comparison-item">
                  <div className="comparison-label">一般的なコーチング</div>
                  <div className="comparison-value">現状の延長線上に設定</div>
                </div>
                <div className="comparison-item highlight">
                  <div className="comparison-label">マインドエンジニアリング・コーチング</div>
                  <div className="comparison-value"><strong className="check">現状の外側に設定</strong></div>
                </div>
              </div>
            </div>
            
            <div className="comparison-card fade-in delay-1">
              <div className="comparison-card-header">
                <i className="fas fa-route"></i>
                <h3>アプローチ</h3>
              </div>
              <div className="comparison-card-body">
                <div className="comparison-item">
                  <div className="comparison-label">一般的なコーチング</div>
                  <div className="comparison-value">問題解決型・ステップバイステップ</div>
                </div>
                <div className="comparison-item highlight">
                  <div className="comparison-label">マインドエンジニアリング・コーチング</div>
                  <div className="comparison-value"><strong className="check">創造型・現状打破</strong></div>
                </div>
              </div>
            </div>
            
            <div className="comparison-card fade-in delay-2">
              <div className="comparison-card-header">
                <i className="fas fa-history"></i>
                <h3>過去の扱い</h3>
              </div>
              <div className="comparison-card-body">
                <div className="comparison-item">
                  <div className="comparison-label">一般的なコーチング</div>
                  <div className="comparison-value">過去の分析に時間を費やす</div>
                </div>
                <div className="comparison-item highlight">
                  <div className="comparison-label">マインドエンジニアリング・コーチング</div>
                  <div className="comparison-value"><strong className="check">過去は関係なし、未来から考える</strong></div>
                </div>
              </div>
            </div>
            
            <div className="comparison-card fade-in">
              <div className="comparison-card-header">
                <i className="fas fa-bolt"></i>
                <h3>エネルギー源</h3>
              </div>
              <div className="comparison-card-body">
                <div className="comparison-item">
                  <div className="comparison-label">一般的なコーチング</div>
                  <div className="comparison-value">意志の力、努力</div>
                </div>
                <div className="comparison-item highlight">
                  <div className="comparison-label">マインドエンジニアリング・コーチング</div>
                  <div className="comparison-value"><strong className="check">ホメオスタシスの自然なエネルギー</strong></div>
                </div>
              </div>
            </div>
            
            <div className="comparison-card fade-in delay-1">
              <div className="comparison-card-header">
                <i className="fas fa-users"></i>
                <h3>社会との関係</h3>
              </div>
              <div className="comparison-card-body">
                <div className="comparison-item">
                  <div className="comparison-label">一般的なコーチング</div>
                  <div className="comparison-value">個人の成功に重点</div>
                </div>
                <div className="comparison-item highlight">
                  <div className="comparison-label">マインドエンジニアリング・コーチング</div>
                  <div className="comparison-value"><strong className="check">社会貢献を包含したゴール設定</strong></div>
                </div>
              </div>
            </div>
            
            <div className="comparison-card fade-in delay-2">
              <div className="comparison-card-header">
                <i className="fas fa-book"></i>
                <h3>理論的基盤</h3>
              </div>
              <div className="comparison-card-body">
                <div className="comparison-item">
                  <div className="comparison-label">一般的なコーチング</div>
                  <div className="comparison-value">経験則や心理学</div>
                </div>
                <div className="comparison-item highlight">
                  <div className="comparison-label">マインドエンジニアリング・コーチング</div>
                  <div className="comparison-value"><strong className="check">最新の認知科学と脳科学</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="program" id="program">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">マインドエンジニアリング・コーチングプログラム</h2>
            <p>
              人生を根本から変革し、社会貢献を果たすための科学的アプローチ
            </p>
          </div>
          <div className="program-details fade-in">
            <div className="program-row">
              <div className="program-label">期間</div>
              <div className="program-value">6ヶ月間</div>
            </div>
            <div className="program-row">
              <div className="program-label">形式</div>
              <div className="program-value">パーソナルセッション（月1回・各約30分）<br />対面またはオンライン（Google Meet）</div>
            </div>
            <div className="program-row">
              <div className="program-label">回数</div>
              <div className="program-value">全6回（初回トライアル + 継続5回）</div>
            </div>
            <div className="program-row">
              <div className="program-label">主な内容</div>
              <div className="program-value">
                <ul style={{marginLeft: '20px'}}>
                  <li>現状の外側のゴール設定</li>
                  <li>バランスホイールを活用した人生全体の調和</li>
                  <li>ブリーフシステム（信念体系）の変革</li>
                  <li>新しいコンフォートゾーンの創造</li>
                  <li>ホメオスタシスの力でゴール達成までのエネルギーを生み出す</li>
                  <li>エフィカシー（自己効力感）の向上</li>
                </ul>
              </div>
            </div>
            <div className="program-row">
              <div className="program-label">特徴</div>
              <div className="program-value">
                <ul style={{marginLeft: '20px'}}>
                  <li>クライアント一人ひとりに合わせた個別対応</li>
                  <li>決まった流れや手順を設けない柔軟なアプローチ</li>
                  <li>マインドの自然な流れを尊重した創造的な関わり</li>
                  <li>努力感不要、やりたいことをやりたいだけやる</li>
                  <li>科学的根拠に基づくアプローチ</li>
                </ul>
              </div>
            </div>
            <p className="program-note">
              ※ セッション内容はクライアント一人ひとりのニーズに合わせてカスタマイズされます。
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process" id="process">
        <div className="container text-center">
          <h2 className="section-title">お申し込みから始めるまで</h2>
          <p>マインドエンジニアリング・コーチングは、以下の流れで始まります</p>
          
          <div className="process-steps">
            <div className="process-step fade-in">
              <div className="step-number">1</div>
              <h3 className="step-title">初回トライアル申込</h3>
              <p className="step-description">専用フォームから初回トライアルセッションに申し込みます。お支払いは6,000円（税込）です。</p>
            </div>
            
            <div className="process-step fade-in delay-1">
              <div className="step-number">2</div>
              <h3 className="step-title">トライアルセッション</h3>
              <p className="step-description">約30分のセッションで、コーチングの概要説明とあなたのニーズやゴールの初期探索を行います。</p>
            </div>
            
            <div className="process-step fade-in delay-2">
              <div className="step-number">3</div>
              <h3 className="step-title">継続判断・契約</h3>
              <p className="step-description">トライアル後、継続を希望される場合は1週間以内に継続申込と残金のお支払い(214,000円)をお願いします。</p>
            </div>
            
            <div className="process-step fade-in delay-3">
              <div className="step-number">4</div>
              <h3 className="step-title">コーチング開始</h3>
              <p className="step-description">契約完了後、2回目以降のセッションスケジュールを調整し、本格的なコーチングプログラムを開始します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="price" id="price">
        <div className="container text-center">
          <h2 className="section-title">料金プラン</h2>
          <p>
            まずは初回トライアルセッションから、マインドエンジニアリング・コーチングを体験してみませんか？
          </p>
          <div className="price-container">
            <div className="price-box fade-in">
              <h3 className="price-title">マインドエンジニアリング・コーチングプログラム</h3>
              <div className="price-value">220,000円 <span style={{fontSize: '18px', fontWeight: 'normal'}}>(税込)</span></div>
              <div className="price-details">
                <div className="price-detail">
                  <i className="fas fa-check-circle"></i>
                  <div><strong>初回トライアルセッション: 6,000円（税込）</strong><br />
                  マインドエンジニアリング・コーチングの概要説明<br />
                  あなたのニーズとゴールの初期探索<br />
                  コーチとの相性確認</div>
                </div>
                <div className="price-detail">
                  <i className="fas fa-check-circle"></i>
                  <div><strong>継続セッション（2〜6回目）: 214,000円（税込）</strong><br />
                  トライアル後に継続を希望される場合の一括支払い</div>
                </div>
                <div className="price-detail">
                  <i className="fas fa-check-circle"></i>
                  <div><strong>期間: 6ヶ月間</strong><br />
                  セッション: 月1回×6回（各30分程度）</div>
                </div>
                <div className="price-detail">
                  <i className="fas fa-check-circle"></i>
                  <div><strong>お申し込みプロセス</strong><br />
                  1. 初回トライアルセッションにお申し込み<br />
                  2. トライアルセッション実施（約30分）<br />
                  3. 継続をご希望の場合は1週間以内に継続申込<br />
                  4. ご契約・お支払い手続き<br />
                  5. 2回目以降のセッションスケジュール調整</div>
                </div>
                <div className="price-detail">
                  <i className="fas fa-check-circle"></i>
                  <div><strong>セッション形式</strong><br />
                  対面またはオンライン（Google Meet）対応</div>
                </div>
              </div>
              <a href={LINKS.APPLICATION_FORM} target="_blank" rel="noopener noreferrer" className="btn btn-primary">初回トライアルに申し込む</a>
              <p className="price-note">
                ※ トライアルセッション後の継続は任意です。<br />
                ※ 継続を希望される場合は、1週間以内に継続申込をお願いいたします。<br />
                ※ 継続セッションは一括前払いとなります。<br />
                ※ お支払い後のキャンセル・返金はできませんのでご了承ください。<br />
                ※ 詳細については<a href={LINKS.LEGAL} style={{color: 'var(--primary)', textDecoration: 'underline'}}>特定商取引法に基づく表記</a>をご確認ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="profile" id="profile">
        <div className="container">
          <h2 className="section-title text-center">コーチプロフィール</h2>
          <div className="profile-container">
            <div className="profile-image fade-in">
              <Image src={IMAGES.PROFILE} alt={CONTACT_INFO.SELLER_NAME} width={300} height={300} />
            </div>
            <div className="profile-content fade-in delay-1">
              <h3 className="profile-name">森山 雄太</h3>
              <p className="profile-text">
                マインドエンジニアリング・コーチ。認知科学とコーチングを融合した実践的アプローチを提供しています。「みんながやさしい世界を実現する」をビジョンに、個人と組織の変革をサポート。
              </p>
              <p className="profile-text">
                最新の認知科学の知見を取り入れた独自のコーチング手法を確立。クライアントの現状の外側にゴールを設定し、自然なエネルギーでゴール達成へと導く実績を持つ。
              </p>
              <p className="profile-text">
                「コーチングマインドをひとりでも多くの人にインストール」をミッションに、真のゴール設定と社会貢献を通じて、より良い世界を創造するためのサポートを行っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title fade-in">人生を変えるその一歩を、今踏み出しませんか？</h2>
          <p className="cta-text fade-in delay-1">
            「やりたいことを、やりたいだけやる。それだけで人生は変わる。」<br />
            まずは初回トライアルセッションで、可能性への一歩を踏み出してみませんか？
          </p>
          <a href={LINKS.APPLICATION_FORM} target="_blank" rel="noopener noreferrer" className="btn btn-cta fade-in delay-2">初回トライアルに申し込む</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container footer-container">
          <div>
            <a href="#" className="footer-logo">Mind Engineering Coaching</a>
            <p>
              <strong>「みんながやさしい世界を実現する」</strong><br />
              現状の外側にゴールを設定し、世界をより良く変えていきましょう。
            </p>
            <div className="footer-contact">
              <div>
                <i className="fas fa-envelope"></i>
                <span><a href={`mailto:${CONTACT_INFO.EMAIL}`} style={{color: '#fff', textDecoration: 'underline', transition: 'color 0.3s ease'}}>{CONTACT_INFO.EMAIL}</a></span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="footer-menu-title">サイトマップ</h3>
            <ul className="footer-menu">
              <li><a href="#about">コーチングとは</a></li>
              <li><a href="#features">特徴</a></li>
              <li><a href="#program">プログラム</a></li>
              <li><a href="#price">料金</a></li>
              <li><a href="#process">申し込みの流れ</a></li>
              <li><a href="#profile">プロフィール</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-menu-title">お申し込み</h3>
            <ul className="footer-menu">
              <li><a href={LINKS.APPLICATION_FORM} target="_blank" rel="noopener noreferrer">初回トライアルセッション</a></li>
              <li><a href="#contact">お問い合わせ</a></li>
              <li><a href={LINKS.TERMS}>利用規約</a></li>
              <li><a href={LINKS.LEGAL}>特定商取引法に基づく表記</a></li>
              <li><a href={LINKS.PRIVACY}>プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; 2025 森山雄太 マインドエンジニアリング・コーチング All Rights Reserved.
        </div>
      </footer>
    </>
  )
}