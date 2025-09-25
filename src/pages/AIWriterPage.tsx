import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../styles/ai-pages.css';

interface FeatureCardProps {
  title: string;
  description: string;
  status: string;
  link?: string;
  isExternal?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, status, link, isExternal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      if (isExternal) {
        window.open(link, '_blank');
      } else {
        navigate(link);
      }
    }
  };

  return (
    <div 
      className="feature-card" 
      onClick={handleClick}
      style={{ cursor: link ? 'pointer' : 'default' }}
    >
      <div className={`feature-status ${status === '운영중' ? 'active' : 'dev'}`}>
        {status}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const AIWriterPage: React.FC = () => {
  return (
    <>
      <Navigation />
      
      <section className="writer-hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI Writer</h1>
            <p>전문 기자를 위한 AI 작성 도구</p>
          </div>
        </div>
      </section>

      <section className="writer-features">
        <div className="container">
          <div className="features-grid">
            <FeatureCard
              title="교열"
              description="AI 기반 문장 교정 및 맞춤법 검사, 문체 개선 제안"
              status="운영중"
              link="https://p1.sedaily.ai"
              isExternal={true}
            />
            <FeatureCard
              title="제목추천"
              description="기사 내용을 분석하여 효과적인 제목 자동 생성"
              status="운영중"
              link="https://t1.sedaily.ai"
              isExternal={true}
            />
            <FeatureCard
              title="기사작성"
              description="주제와 키워드를 기반으로 기사 초안 자동 작성"
              status="개발중"
              link="https://nx-wt-rout-dev-v1.sedaily.io"
              isExternal={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AIWriterPage;