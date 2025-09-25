import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AIPrismPage from './pages/AIPrismPage';
import AIPrismServicePage from './pages/AIPrismServicePage';
import EconomicDragonPage from './pages/EconomicDragonPage';
import IssueMapPage from './pages/IssueMapPage';
import AIWriterPage from './pages/AIWriterPage';
import AIShortsPage from './pages/AIShortsPage';
import AIRadarPage from './pages/AIRadarPage';
import AINexusPage from './pages/AINexusPage';
import AINovaPage from './pages/AINovaPage';
import AIServicesPage from './pages/AIServicesPage';
import TitleGeneratorPage from './pages/TitleGeneratorPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-prism" element={<AIPrismPage />} />
          <Route path="/ai-prism-service" element={<AIPrismServicePage />} />
          <Route path="/economic-dragon" element={<EconomicDragonPage />} />
          <Route path="/issue-map" element={<IssueMapPage />} />
          <Route path="/ai-writer" element={<AIWriterPage />} />
          <Route path="/ai-shorts" element={<AIShortsPage />} />
          <Route path="/ai-radar" element={<AIRadarPage />} />
          <Route path="/ai-nexus" element={<AINexusPage />} />
          <Route path="/ai-nova" element={<AINovaPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/title-generator" element={<TitleGeneratorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;