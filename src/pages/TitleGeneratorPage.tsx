import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import '../styles/title-generator.css';

const TitleGeneratorPage: React.FC = () => {
  const [articleContent, setArticleContent] = useState('');
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const handleGenerateTitles = async () => {
    if (!articleContent.trim()) {
      alert('기사 내용을 입력해주세요.');
      return;
    }

    setIsLoading(true);
    // API 호출 시뮬레이션
    setTimeout(() => {
      setGeneratedTitles([
        '서울경제, AI 기술로 뉴스 산업 혁신 선도',
        'AI가 바꾸는 뉴스의 미래, 서울경제가 앞장선다',
        '차세대 뉴스 플랫폼으로 진화하는 서울경제',
        '서울경제 AI 서비스, 독자 맞춤형 뉴스 시대 연다',
        '인공지능과 저널리즘의 만남, 서울경제가 보여주는 미래'
      ]);
      setIsLoading(false);
    }, 1500);
  };

  const handleCopyTitle = (title: string) => {
    navigator.clipboard.writeText(title);
    setSelectedTitle(title);
    setTimeout(() => setSelectedTitle(''), 2000);
  };

  return (
    <>
      <Navigation />
      
      <div className="title-generator-page">
        <div className="container">
          <div className="generator-header">
            <h1>AI 제목달기</h1>
            <p>기사 내용을 분석하여 효과적인 제목을 자동으로 생성합니다</p>
          </div>

          <div className="generator-content">
            <div className="input-section">
              <label htmlFor="article-content">기사 내용 입력</label>
              <textarea
                id="article-content"
                className="article-input"
                placeholder="제목을 생성할 기사 내용을 입력하세요..."
                value={articleContent}
                onChange={(e) => setArticleContent(e.target.value)}
                rows={12}
              />
              <div className="input-footer">
                <span className="char-count">{articleContent.length} 자</span>
                <button 
                  className="generate-btn"
                  onClick={handleGenerateTitles}
                  disabled={isLoading || !articleContent.trim()}
                >
                  {isLoading ? (
                    <>
                      <span className="loading-spinner"></span>
                      생성 중...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                      제목 생성
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="results-section">
              <h2>생성된 제목 추천</h2>
              {generatedTitles.length > 0 ? (
                <div className="titles-list">
                  {generatedTitles.map((title, index) => (
                    <div 
                      key={index} 
                      className={`title-item ${selectedTitle === title ? 'copied' : ''}`}
                    >
                      <span className="title-number">{index + 1}</span>
                      <span className="title-text">{title}</span>
                      <button 
                        className="copy-btn"
                        onClick={() => handleCopyTitle(title)}
                        title="복사"
                      >
                        {selectedTitle === title ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                  <p>기사 내용을 입력하고 '제목 생성' 버튼을 클릭하세요</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleGeneratorPage;