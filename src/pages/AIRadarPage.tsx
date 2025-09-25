import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/ai-pages.css';

interface FeatureCardProps {
  title: string;
  description: string;
  status: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, status }) => {
  return (
    <div className="feature-card">
      <div className={`feature-status ${status === '운영중' ? 'active' : 'dev'}`}>
        {status}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const AIRadarPage: React.FC = () => {
  return (
    <>
      <Navigation />
      
      <section className="radar-hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI Radar</h1>
            <p>실시간 뉴스 트렌드 감지 및 분석 시스템</p>
          </div>
        </div>
      </section>

      <section className="radar-features">
        <div className="container">
          <div className="features-grid">
            <FeatureCard
              title="실시간 모니터링"
              description="24시간 뉴스 트렌드를 실시간으로 감지하고 분석합니다"
              status="운영중"
            />
            <FeatureCard
              title="이슈 알림"
              description="중요한 뉴스 이슈를 즉시 알려드립니다"
              status="운영중"
            />
            <FeatureCard
              title="트렌드 분석"
              description="뉴스 트렌드의 변화와 패턴을 분석합니다"
              status="운영중"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AIRadarPage;