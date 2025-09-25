import React from 'react';

const HeroSection: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
            <a 
              href="#services" 
              className="btn btn-primary"
              onClick={handleScrollToServices}
            >
              서비스 둘러보기
            </a>
            <a 
              href="https://sedaily.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              서울경제 바로가기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;