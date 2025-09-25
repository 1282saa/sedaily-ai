import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  isExternal?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  link, 
  linkText, 
  isExternal = false 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isExternal) {
      window.open(link, '_blank');
    } else {
      navigate(link);
    }
  };

  return (
    <div className="feature-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {isExternal ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="feature-link"
          onClick={(e) => e.stopPropagation()}
        >
          {linkText} →
        </a>
      ) : (
        <span className="feature-link">{linkText} →</span>
      )}
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="features" id="services">
      <div className="container">
        <div className="features-header">
          <h2>핵심 서비스</h2>
          <p>서울경제가 제공하는 차별화된 디지털 서비스를 만나보세요</p>
        </div>
        
        <div 
          className="features-grid-3"
          style={{
            backgroundImage: 'url(/seoul-skyline.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '16px',
            padding: '3rem',
            position: 'relative'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.85))',
              borderRadius: '16px',
              pointerEvents: 'none'
            }}
          />
          
          <FeatureCard
            icon="🔍"
            title="AI PRISM"
            description="맞춤형 뉴스 큐레이션 서비스로 대학생부터 CEO까지, 각자에게 필요한 경제 뉴스를 AI가 선별해 제공합니다."
            link="/ai-prism"
            linkText="자세히 보기"
          />

          <FeatureCard
            icon="🗺️"
            title="이슈 맵"
            description="빅데이터 분석을 통한 실시간 이슈 시각화! 키워드 분석과 트렌드를 한눈에 파악할 수 있습니다."
            link="/issue-map"
            linkText="이슈맵 보기"
          />
          
          <FeatureCard
            icon="🐲"
            title="경제용"
            description="경제를 쉽고 재미있게 배우는 콘텐츠! 인스타그램, 네이버TV, 뉴스레터를 통해 매일 새로운 경제 지식을 전달합니다."
            link="/economic-dragon"
            linkText="경제용 만나기"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;