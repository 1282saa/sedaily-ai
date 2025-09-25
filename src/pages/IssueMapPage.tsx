import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const IssueMapPage: React.FC = () => {
  const [keyword, setKeyword] = useState('경제');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [wordCloudData, setWordCloudData] = useState<any[]>([]);

  useEffect(() => {
    // 초기 날짜 설정 (오늘부터 30일 전)
    const today = new Date();
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);
    
    setEndDate(today.toISOString().split('T')[0]);
    setStartDate(thirtyDaysAgo.toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    // 초기 로드 시 샘플 검색 실행
    if (startDate && endDate) {
      handleSearch();
    }
  }, [startDate, endDate]);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    setLoading(true);
    setError(false);
    setShowStats(false);
    
    try {
      // 더미 데이터 사용 (실제 구현 시 API 호출)
      const dummyData = [
        { name: "경제성장", weight: 1.5 },
        { name: "금리인상", weight: 1.3 },
        { name: "인플레이션", weight: 1.2 },
        { name: "부동산", weight: 1.0 },
        { name: "주식시장", weight: 0.9 },
        { name: "환율", weight: 0.8 },
        { name: "고용", weight: 0.7 },
        { name: "수출", weight: 0.6 },
        { name: "원자재", weight: 0.5 },
        { name: "반도체", weight: 0.4 }
      ];
      
      setWordCloudData(dummyData);
      setShowStats(true);
      
    } catch (error) {
      console.error('Error:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const renderWordCloud = () => {
    const maxWeight = Math.max(...wordCloudData.map(d => d.weight));
    const minWeight = Math.min(...wordCloudData.map(d => d.weight));
    
    const getSize = (weight: number) => {
      const normalized = (weight - minWeight) / (maxWeight - minWeight);
      return 16 + normalized * 48; // 16px to 64px
    };
    
    const getColor = (index: number) => {
      const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
      return colors[index % colors.length];
    };
    
    return (
      <div className="word-cloud-container">
        {wordCloudData.map((word, index) => (
          <span
            key={index}
            className="word-cloud-item"
            style={{
              fontSize: `${getSize(word.weight)}px`,
              color: getColor(index),
              margin: '10px',
              display: 'inline-block',
              cursor: 'pointer',
              fontWeight: word.weight > 1 ? 'bold' : 'normal',
              transition: 'opacity 0.3s'
            }}
            onClick={() => setKeyword(word.name)}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            {word.name}
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <Navigation />
      
      <header className="page-header">
        <div className="container">
          <h1>이슈 맵</h1>
          <p>빅데이터 분석을 통한 실시간 이슈 시각화</p>
        </div>
      </header>

      <section className="content-section">
        <div className="issue-map-container">
          <div className="search-section">
            <h2>이슈 검색</h2>
            <form className="search-form" onSubmit={handleSearch}>
              <input 
                type="text" 
                className="search-input" 
                placeholder="검색어를 입력하세요 (예: 경제, 금리, 부동산)"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                required
              />
              <input 
                type="date" 
                className="date-input" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
              <input 
                type="date" 
                className="date-input" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
              <button type="submit" className="search-button">검색</button>
            </form>
          </div>

          <div className="visualization-section">
            <h2>연관 키워드 분석</h2>
            <div id="wordcloud">
              {loading && (
                <div className="loading">
                  데이터를 불러오는 중입니다...
                </div>
              )}
              {error && (
                <div className="error">
                  데이터를 불러오는 중 오류가 발생했습니다.
                </div>
              )}
              {!loading && !error && wordCloudData.length > 0 && renderWordCloud()}
            </div>
            
            {showStats && (
              <div className="stats-section">
                <div className="stat-card">
                  <div className="stat-value">{wordCloudData.length}</div>
                  <div className="stat-label">총 키워드 수</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{wordCloudData[0]?.name || '-'}</div>
                  <div className="stat-label">최다 빈도 키워드</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{`${startDate} ~ ${endDate}`}</div>
                  <div className="stat-label">검색 기간</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default IssueMapPage;