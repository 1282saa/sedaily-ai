import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/design-system.css';
import '../styles/ai-services.css';

interface ServiceCardProps {
  title: string;
  description: string;
  status: string;
  statusColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  status,
  statusColor
}) => {
  return (
    <div className="nova-service-card">
      <div className="service-status">
        <span className={`status-label ${statusColor}`}>{status}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const AINovaPage: React.FC = () => {
  return (
    <div className="ai-page">
      <Navigation />
      
      <section className="service-hero nova-hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI Nova</h1>
            <p>독자를 위한 스마트 뉴스 서비스</p>
          </div>
        </div>
      </section>

      <section className="nova-services">
        <div className="container">
          <div className="services-grid">
            <ServiceCard
              title="AI 챗봇"
              description="서울경제 AI 챗봇, 빅카인즈 AI 챗봇, AI Asst. 챗봇을 통한 대화형 뉴스 서비스"
              status="서비스중"
              statusColor="status-active"
            />
            <ServiceCard
              title="이슈 맵"
              description="주요 이슈의 연관관계를 시각적으로 표현하여 뉴스의 맥락을 한눈에 파악"
              status="서비스중"
              statusColor="status-active"
            />
            <ServiceCard
              title="이슈 흐름분석"
              description="시간에 따른 이슈의 변화와 발전 과정을 분석하여 트렌드 파악"
              status="개발중"
              statusColor="status-dev"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AINovaPage;