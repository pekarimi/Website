import React, { useState } from 'react';
import Portfolio from './Portfolio';
import MindsetsCaseStudy from './MindsetsCaseStudy';
import KanoCaseStudy from './KanoCaseStudy';
import HealthCaseStudy from './HealthCaseStudy';
import DropoutCaseStudy from './DropoutCaseStudy';
import TextflowCaseStudy from './TextflowCaseStudy';
import CSPCaseStudy from './CSPCaseStudy';
import ISonoHealthCaseStudy from './iSonoHealthCaseStudy';
import CustomerPortalCaseStudy from './CustomerPortalCaseStudy';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('portfolio'); // 'portfolio', 'mindsets', 'kano', 'health', 'dropout', 'textflow', 'csp', 'isono', or 'customerportal'

  const handleProjectClick = (projectId) => {
    if (projectId === 1) {
      setCurrentView('mindsets');
    } else if (projectId === 2) {
      setCurrentView('kano');
    } else if (projectId === 3) {
      setCurrentView('dropout');
    } else if (projectId === 4) {
      setCurrentView('health');
    } else if (projectId === 5) {
      setCurrentView('textflow');
    } else if (projectId === 6) {
      setCurrentView('csp');
    } else if (projectId === 7) {
      setCurrentView('isono');
    } else if (projectId === 8) {
      setCurrentView('customerportal');
    }
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
  };

  return (
    <div className="App">
      {currentView === 'portfolio' && (
        <Portfolio onProjectClick={handleProjectClick} />
      )}
      {currentView === 'mindsets' && (
        <MindsetsCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'kano' && (
        <KanoCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'dropout' && (
        <DropoutCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'health' && (
        <HealthCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'textflow' && (
        <TextflowCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'csp' && (
        <CSPCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'isono' && (
        <ISonoHealthCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'customerportal' && (
        <CustomerPortalCaseStudy onBack={handleBackToPortfolio} />
      )}
    </div>
  );
}

export default App;
