import React from 'react';
import '../styles/ai-prism.css';
import Navigation from '../components/Navigation';

const prismCategories = [
  { 
    id: 1, 
    title: '대학생·취준생 뉴스 프리즘', 
    emoji: '🦊', 
    description: '채용·인턴십부터 청년정책까지, 오늘의 취업 준비 필수 정보를 한눈에 확인하세요.',
    link: 'https://www.sedaily.com/Cube/CubeCollect/368',
    badge: 'HOT'
  },
  { 
    id: 2, 
    title: '신입 직장인 뉴스 프리즘', 
    emoji: '💼', 
    description: '연봉·업무 스킬부터 재테크까지, 사회초년생을 위한 성장 가이드를 제공합니다.',
    link: 'https://www.sedaily.com/Cube/CubeCollect/372'
  },
  { 
    id: 3, 
    title: '스타트업 창업자 뉴스 프리즘', 
    emoji: '🚀', 
    description: '투자 유치부터 성장 전략까지, 스타트업 생태계의 핵심 인사이트를 전달합니다.',
    link: 'https://www.sedaily.com/Cube/CubeCollect/366'
  },
  { 
    id: 4, 
    title: '기업 CEO 뉴스 프리즘', 
    emoji: '👔', 
    description: '산업 동향부터 ESG 경영까지, 기업 경영에 필요한 핵심 정보를 선별했습니다.',
    link: 'https://www.sedaily.com/Cube/CubeCollect/367'
  },
  { 
    id: 5, 
    title: '주식 투자자 뉴스 프리즘', 
    emoji: '📈', 
    description: '기업 분석부터 시장 전망까지, 성공적인 주식투자를 위한 필수 정보입니다.',
    link: 'https://www.sedaily.com/Cube/CubeCollect/371',
    badge: '인기'
  },
  { 
    id: 6, 
    title: '부동산 투자자 뉴스 프리즘', 
    emoji: '🏠', 
    description: '시장 동향부터 정책 분석까지, 부동산 투자 결정에 필요한 모든 정보를 담았습니다.',
    link: 'https://www.sedaily.com/Cube/CubeCollect/369'
  },
  { 
    id: 7, 
    title: '금융상품 투자자 뉴스 프리즘', 
    emoji: '💰', 
    description: '예·적금부터 다양한 투자상품까지, 똑똑한 금융자산 운용 전략을 제시합니다.',
    link: 'https://www.sedaily.com/Cube/CubeCollect/373'
  },
  { 
    id: 8, 
    title: '글로벌 투자자 뉴스 프리즘', 
    emoji: '🌐', 
    description: '국제 금융시장부터 해외 진출까지, 글로벌 투자를 위한 전략적 인사이트입니다.',
    link: 'https://www.sedaily.com/Cube/CubeCollect/370'
  }
];

const processSteps = [
  { number: '⏰', title: '시간 절약 90%', description: '하루 2시간 뉴스 읽기 → 15분으로 단축\n핵심만 골라서 제공합니다' },
  { number: '🎯', title: '정확한 맞춤화', description: '당신의 직업과 관심사 분석\n꼭 필요한 정보만 선별 제공' },
  { number: '📈', title: '투자 성과 향상', description: '중요한 시장 신호를 놓치지 않아\n더 나은 투자 결정을 도와드려요' },
  { number: '🚀', title: '업무 경쟁력', description: '업계 동향을 누구보다 빠르게 파악\n회사에서 인정받는 전문가 되기' }
];

const testimonials = [
  {
    quote: "매일 아침 AI PRISM으로 하루를 시작합니다. 제가 놓칠 수 있는 중요한 채용 정보를 한 번도 놓치지 않았어요.",
    author: '김민지',
    role: '대학생·취준생 프리즘 구독자',
    avatar: '🦊'
  },
  {
    quote: "투자 결정에 필요한 핵심 정보만 골라서 볼 수 있어 시간이 정말 많이 절약됩니다. 수익률도 눈에 띄게 개선됐어요.",
    author: '이준호',
    role: '주식 투자자 프리즘 구독자',
    avatar: '📈'
  }
];

const AIPrismPage: React.FC = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="prism-hero">
        <div className="container">
          <div className="hero-badge">AI-Powered News Curation</div>
          <h1>AI PRISM</h1>
          <p className="subtitle">
            매일 쏟아지는 수많은 뉴스 속에서<br />
            AI가 당신에게 꼭 필요한 정보만 골라드립니다
          </p>
          <p className="hero-description">
            하루 100개 이상의 경제 뉴스를 모두 읽을 수 있나요?<br />
            이제 AI PRISM이 당신의 직업과 관심사에 딱 맞는 뉴스만 전달합니다.
          </p>
          
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">100K+</div>
              <div className="stat-label">일일 분석 기사</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8개</div>
              <div className="stat-label">전문 큐레이션</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">실시간 업데이트</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <div className="container">
          <div className="features-header">
            <h2>왜 AI PRISM을 써야 할까요?</h2>
            <p className="section-subtitle">
              "매일 쏟아지는 뉴스 때문에 정작 중요한 것을 놓치고 계신가요?"<br />
              AI PRISM으로 시간은 절약하고 정보는 놓치지 마세요.
            </p>
          </div>
          
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-item">
                <div className="process-number">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.description.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < step.description.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prism Categories */}
      <section className="features">
        <div className="container">
          <div className="features-header">
            <h2>당신을 위한 맞춤 큐레이션</h2>
            <p>AI가 선별한 8개 분야의 전문 큐레이션을 만나보세요</p>
          </div>
          
          <div className="features-grid">
            {prismCategories.map(category => (
              <a 
                key={category.id} 
                href={category.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="feature-card"
              >
                {category.badge && <div className="card-badge">{category.badge}</div>}
                <div className="feature-icon">{category.emoji}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="feature-link">바로가기 →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="features-header">
            <h2>AI PRISM 사용자들의 이야기</h2>
            <p>매일 AI PRISM과 함께하는 사용자들의 생생한 후기</p>
          </div>
          
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h5>{testimonial.author}</h5>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="prism-section">
        <div className="container">
          <div className="prism-header">
            <h2>지금 바로 시작하세요</h2>
            <p>AI PRISM과 함께 더 스마트한 정보 소비를 경험해보세요</p>
            <div className="hero-actions">
              <a href="https://sedaily.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">서울경제 방문하기</a>
              <a href="/" className="btn btn-secondary">다른 서비스 보기</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIPrismPage;