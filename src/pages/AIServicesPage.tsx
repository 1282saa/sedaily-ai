import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../styles/design-system.css';
import '../styles/ai-services.css';

const AIServicesPage: React.FC = () => {
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
  }, []);

  return (
    <div className="ai-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="ai-portal-hero">
        <div className="container">
          <div className="portal-hero-content">
            <div className="portal-hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>AI PORTAL</span>
            </div>
            <h1 className="portal-hero-title">
              서울경제 AI 서비스
            </h1>
            <p className="portal-hero-subtitle">
              최첨단 AI 기술로 뉴스 콘텐츠 생산과 소비를 혁신합니다
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="services-portal-grid">
        <div className="container">
          <div className="portal-cards">
            {/* AI Nova Card */}
            <Link 
              to="/ai-nova" 
              className={`portal-service-card nova-card ${animateCards ? 'animate' : ''}`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="portal-card-icon nova-icon">
                ✨
              </div>
              <h2 className="portal-card-title">AI Nova</h2>
              <p className="portal-card-description">
                독자를 위한 스마트 뉴스 서비스로 개인화된 뉴스 경험을 제공합니다
              </p>
              <div className="portal-card-features">
                <div className="portal-feature">
                  <span className="portal-feature-dot" />
                  <span>AI 챗봇 - 대화형 뉴스 서비스</span>
                </div>
                <div className="portal-feature">
                  <span className="portal-feature-dot" />
                  <span>이슈 맵 - 실시간 이슈 시각화</span>
                </div>
                <div className="portal-feature">
                  <span className="portal-feature-dot" />
                  <span>이슈 흐름분석 - 트렌드 예측</span>
                </div>
              </div>
              <div className="portal-card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                </svg>
              </div>
            </Link>

            {/* AI Nexus Card */}
            <Link 
              to="/ai-nexus" 
              className={`portal-service-card nexus-card ${animateCards ? 'animate' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="portal-card-icon nexus-icon">
                🚀
              </div>
              <h2 className="portal-card-title">AI Nexus</h2>
              <p className="portal-card-description">
                기자와 편집자를 위한 전문 AI 도구로 콘텐츠 생산성을 극대화합니다
              </p>
              <div className="portal-card-features">
                <div className="portal-feature">
                  <span className="portal-feature-dot" />
                  <span>AI Radar - 실시간 뉴스 감지</span>
                </div>
                <div className="portal-feature">
                  <span className="portal-feature-dot" />
                  <span>AI Writer - 기사 작성 도구</span>
                </div>
                <div className="portal-feature">
                  <span className="portal-feature-dot" />
                  <span>AI Shorts - 숏폼 콘텐츠 제작</span>
                </div>
                <div className="portal-feature">
                  <span className="portal-feature-dot" />
                  <span>AI Prism - 맞춤 분석 서비스</span>
                </div>
              </div>
              <div className="portal-card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIServicesPage;