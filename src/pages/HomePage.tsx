import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/design-system.css';
import '../styles/homepage.css';

const HomePage: React.FC = () => {
  const services = [
    {
      id: 'ai-prism',
      name: 'AI PRISM',
      icon: '🔍',
      description: '맞춤형 뉴스 큐레이션 서비스로 대학생부터 CEO까지, 각자에게 필요한 경제 뉴스를 AI가 선별해 제공합니다.',
      link: '/ai-prism'
    },
    {
      id: 'economic-dragon',
      name: '경제용',
      icon: '🐲',
      description: '경제를 쉽고 재미있게 배우는 콘텐츠! 인스타그램, 네이버TV, 뉴스레터를 통해 매일 새로운 경제 지식을 전달합니다.',
      link: '/economic-dragon'
    },
    {
      id: 'sedaily',
      name: '서울경제신문',
      icon: '📰',
      description: '대한민국 대표 경제신문! 실시간 경제 뉴스와 심층 분석 기사를 통해 경제 흐름을 정확하게 파악하세요.',
      link: 'https://sedaily.com',
      external: true
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">AI-Powered News Platform</div>
            <h1>경제 뉴스의 새로운 기준</h1>
            <p className="hero-subtitle">
              AI 기술로 더 빠르고, 더 정확하고, 더 깊이 있는<br />
              경제 정보를 제공합니다
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">서비스 둘러보기</a>
              <a href="https://sedaily.com" target="_blank" className="btn btn-secondary">서울경제 바로가기</a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="features" id="services">
        <div className="container">
          <div className="features-header">
            <h2>핵심 서비스</h2>
            <p>서울경제가 제공하는 차별화된 디지털 서비스를 만나보세요</p>
          </div>
          
          <div className="features-grid-3">
            {services.map((service) => (
              service.external ? (
                <a key={service.id} href={service.link} target="_blank" rel="noopener noreferrer" className="feature-card clickable">
                  <div className="feature-icon">{service.icon}</div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <span className="feature-link">
                    {service.name} 방문하기 →
                  </span>
                </a>
              ) : (
                <Link key={service.id} to={service.link} className="feature-card clickable">
                  <div className="feature-icon">{service.icon}</div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <span className="feature-link">
                    자세히 보기 →
                  </span>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;