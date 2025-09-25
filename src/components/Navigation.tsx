import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-left">
            {!isHomePage && (
              <button onClick={handleBack} className="nav-back-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}
            <Link to="/" className="nav-logo">
              <span className="logo-text">서울경제</span>
            </Link>
          </div>

          <div className="nav-right">
            {/* Search Bar */}
            <div className="nav-search">
              <svg className="nav-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input 
                type="text" 
                placeholder="검색..." 
                className="nav-search-input"
              />
            </div>

            {/* AI Portal Button */}
            <Link 
              to={isHomePage ? "/ai-services" : "/"} 
              className="nav-ai-btn"
            >
              {isHomePage ? (
                <>
                  <span>AI 포털</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                  </svg>
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18m-9-9v18" />
                  </svg>
                  <span>뉴스 홈</span>
                </>
              )}
            </Link>

            {/* User Avatar */}
            <div className="nav-user-menu">
              <button className="nav-user-btn">
                <div className="user-avatar">U</div>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="nav-mobile-links">
          <Link to="/" className={`nav-mobile-link ${isHomePage ? 'active' : ''}`}>
            홈
          </Link>
          <Link to="/ai-services" className={`nav-mobile-link ${location.pathname.includes('/ai-') ? 'active' : ''}`}>
            AI 서비스
          </Link>
          <div className="nav-dropdown-divider" />
          <Link to="/ai-nova" className="nav-mobile-link">
            AI Nova
          </Link>
          <Link to="/ai-nexus" className="nav-mobile-link">
            AI Nexus
          </Link>
          <Link to="/ai-prism" className="nav-mobile-link">
            AI Prism
          </Link>
        </div>
      </div>

      {/* Spacer for fixed navigation */}
      <div style={{ height: '60px' }} />
    </>
  );
};

export default Navigation;