import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/economic-dragon.css';

const EconomicDragonPage: React.FC = () => {
  return (
    <>
      <Navigation />
      
      {/* Clean Hero */}
      <section className="dragon-hero">
        <div className="container">
          <h1>🐲 경제용</h1>
          <p className="subtitle">경제, 이제 쉽고 재미있게 배워보세요</p>
          <p style={{ 
            color: 'white', 
            fontSize: '1.125rem', 
            margin: '1rem auto 2rem', 
            maxWidth: '600px', 
            lineHeight: 1.6, 
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' 
          }}>
            매일 10분, 경제 뉴스가 재미있어집니다.<br />
            복잡한 경제 용어도 쉽게, 어려운 차트도 간단하게 설명해드려요.
          </p>
          
          <a href="https://www.instagram.com/economy_dragon_/" target="_blank" rel="noopener noreferrer" className="hero-follow-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
            </svg>
            인스타그램 팔로우하기
          </a>
          
          <div className="social-links">
            <a href="https://tv.naver.com/sedaily02" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Naver TV">
              <svg viewBox="0 0 24 24">
                <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/>
              </svg>
            </a>
            <a href="https://page.stibee.com/subscriptions/130181" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Newsletter">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section">
        <div className="container">
          <div className="why-header">
            <h2>왜 경제용이어야 할까요?</h2>
            <p style={{ fontSize: '1.125rem', color: '#6B7280' }}>
              경제 뉴스를 제대로 이해하지 못해 답답하셨나요?<br />
              이제 경제용과 함께라면 누구나 경제 전문가가 될 수 있습니다.
            </p>
          </div>
          
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">⏰</div>
              <h3>매일 10분이면 충분</h3>
              <p>출퇴근길, 점심시간에도 부담없이<br />오늘의 경제 이슈를 파악할 수 있어요</p>
            </div>
            
            <div className="why-item">
              <div className="why-icon">🎯</div>
              <h3>핵심만 쏙쏙</h3>
              <p>복잡한 경제 기사에서 꼭 알아야 할<br />핵심 내용만 골라서 전달합니다</p>
            </div>
            
            <div className="why-item">
              <div className="why-icon">😊</div>
              <h3>쉽고 재미있게</h3>
              <p>어려운 경제 용어도 일상 언어로<br />친근하고 재미있게 설명해드려요</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">인스타그램 팔로워</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">300+</div>
              <div className="stat-label">경제 콘텐츠</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10분</div>
              <div className="stat-label">일일 학습 시간</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="content-container">
          <div className="embed-wrapper">
            {/* 경제용 콘텐츠 */}
            <div className="embed-box">
              <div className="embed-header">
                <h2 className="embed-title">경제용 콘텐츠</h2>
                <p className="embed-subtitle">매일 업데이트되는 경제 이야기</p>
              </div>
              <iframe src="https://edragon.oopy.io/" loading="lazy" title="경제용 콘텐츠"></iframe>
            </div>
            
            {/* 뉴스레터 아카이브 */}
            <div className="embed-box">
              <div className="embed-header">
                <h2 className="embed-title">뉴스레터 아카이브</h2>
                <p className="embed-subtitle">매주 발행되는 경제 인사이트</p>
              </div>
              <iframe src="https://page.stibee.com/archives/130181" loading="lazy" title="뉴스레터 아카이브"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-header">
            <h2>경제용 독자들의 이야기</h2>
            <p style={{ color: '#6B7280' }}>매일 경제용과 함께하는 독자들의 생생한 후기</p>
          </div>
          
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">"경제 기사가 이렇게 재미있을 줄 몰랐어요! 이제는 매일 아침 경제용 보는 게 일상이 됐습니다."</p>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h5>김서연</h5>
                  <p>20대 직장인</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-quote">"복잡한 경제 지표도 경제용이 설명하면 쉽게 이해돼요. 투자 결정에 큰 도움이 됩니다."</p>
              <div className="testimonial-author">
                <div className="author-avatar">👨</div>
                <div className="author-info">
                  <h5>박준호</h5>
                  <p>30대 투자자</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EconomicDragonPage;