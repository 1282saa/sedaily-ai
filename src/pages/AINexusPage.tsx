import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../styles/design-system.css';
import '../styles/ai-services.css';

interface ToolCardProps {
  title: string;
  description: string;
  link: string;
  status: string;
  statusColor: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  link,
  status,
  statusColor
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="nexus-tool-card" onClick={() => navigate(link)}>
      <div className="tool-status">
        <span className={`status-label ${statusColor}`}>{status}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const AINexusPage: React.FC = () => {
  return (
    <div className="ai-page">
      <Navigation />
      
      <section className="service-hero nexus-hero">
        <div className="container">
          <div className="hero-content">
            <h1>AI Nexus</h1>
            <p>기자와 편집자를 위한 전문 AI 도구</p>
          </div>
        </div>
      </section>

      <section className="nexus-tools">
        <div className="container">
          <div className="tools-grid">
            <ToolCard
              title="AI Radar"
              description="실시간 뉴스 트렌드 감지 및 분석 시스템"
              link="/ai-radar"
              status="운영중"
              statusColor="status-active"
            />
            <ToolCard
              title="AI Writer"
              description="교열, 제목추천, 기사작성을 지원하는 통합 작성 도구"
              link="/ai-writer"
              status="운영중"
              statusColor="status-active"
            />
            <ToolCard
              title="AI Shorts"
              description="숏츠, 팟캐스트 등 숏폼 콘텐츠 제작 도구"
              link="/ai-shorts"
              status="개발중"
              statusColor="status-dev"
            />
            <ToolCard
              title="AI Prism"
              description="독자별 맞춤분류, 동영상 스크립트 생성 도구"
              link="/ai-prism-service"
              status="운영중"
              statusColor="status-active"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AINexusPage;