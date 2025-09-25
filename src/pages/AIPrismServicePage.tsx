import React from 'react';
import Navigation from '../components/Navigation';

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

const AIPrismServicePage: React.FC = () => {
  return (
    <>
      <Navigation />
      
      <section className="prism-hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI Prism</h1>
            <p>다각도 뉴스 분석 및 맞춤 서비스</p>
          </div>
        </div>
      </section>

      <section className="prism-features">
        <div className="container">
          <div className="features-grid">
            <FeatureCard
              title="독자별 맞춤분류"
              description="독자의 관심사와 선호도를 분석하여 맞춤형 뉴스 제공"
              status="운영중"
            />
            <FeatureCard
              title="동영상 스크립트"
              description="기사를 동영상 콘텐츠용 스크립트로 자동 변환"
              status="운영중"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AIPrismServicePage;