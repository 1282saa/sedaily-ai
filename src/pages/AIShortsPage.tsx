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

const AIShortsPage: React.FC = () => {
  return (
    <>
      <Navigation />
      
      <section className="shorts-hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI Shorts</h1>
            <p>숏폼 콘텐츠 제작 도구</p>
          </div>
        </div>
      </section>

      <section className="shorts-features">
        <div className="container">
          <div className="features-grid">
            <FeatureCard
              title="숏츠"
              description="긴 기사를 짧고 임팩트 있는 영상 콘텐츠로 변환"
              status="개발중"
            />
            <FeatureCard
              title="팟캐스트"
              description="기사를 오디오 콘텐츠로 변환하여 팟캐스트 제작"
              status="개발중"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AIShortsPage;