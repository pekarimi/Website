import React, { useState, useEffect } from 'react';
import { ArrowLeft, Users, Clock, Target, Brain, Eye, ChevronRight } from 'lucide-react';

const TextflowCaseStudy = ({ onBack }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

const TextflowCaseStudy = ({ onBack }) => {
  return (
    <div className="case-study-container">
      <style jsx>{`
        .case-study-container {
          min-height: 100vh;
          background: #ffffff;
        }
        
        .case-study-nav {
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e5e7eb;
          z-index: 100;
          padding: 16px 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #667eea;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          padding: 8px 0;
          transition: all 0.2s ease;
        }
        
        .back-button:hover {
          color: #5a67d8;
          transform: translateX(-4px);
        }
        
        .hero-image-section {
          background: linear-gradient(135deg, #e8ebff 0%, #f0e6ff 100%);
          padding: 40px 0;
          position: relative;
          overflow: hidden;
        }
        
        .hero-image-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .hero-image-container img {
          width: 100%;
          height: auto;
          max-height: 350px;
          object-fit: contain;
          display: block;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        
        .content-section {
          padding: 80px 0;
          background: #ffffff;
        }
        
        .hero-meta {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          color: #667eea;
          font-weight: 600;
        }
        
        .process-section {
          padding: 80px 0;
          background: #f8fafc;
        }
        
        .section-title {
          font-size: 36px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 48px;
          color: #1a202c;
        }
        
        .process-timeline {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
        }
        
        .process-timeline::before {
          content: '';
          position: absolute;
          left: 40px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #667eea, #764ba2);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 60px;
          padding-left: 100px;
        }
        
        .timeline-marker {
          position: absolute;
          left: 16px;
          top: 0;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .timeline-number {
          color: white;
          font-weight: 700;
          font-size: 18px;
        }
        
        .timeline-content {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-left: 4px solid #667eea;
        }
        
        .timeline-content h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 16px;
        }
        
        .timeline-details {
          margin-top: 20px;
        }
        
        .timeline-description p {
          font-size: 16px;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 20px;
        }
        
        .study-image-container {
          margin: 24px 0;
          max-width: 100%;
          overflow: hidden;
        }
        
        .study-image {
          width: 100% !important;
          height: auto !important;
          max-width: 100% !important;
          max-height: 400px !important;
          object-fit: contain !important;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }
        
        .gesture-controls-image {
          width: 90% !important;
          height: 300px !important;
          max-height: 300px !important;
          object-fit: contain !important;
          margin: 0 auto !important;
          display: block !important;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }
        
        .image-caption {
          margin-top: 8px;
          margin-bottom: 0;
          font-size: 14px;
          line-height: 1.5;
          color: #666;
          font-style: italic;
          text-align: center;
        }
        
        .timeline-results {
          margin-top: 24px;
          padding: 20px;
          background: #f7fafc;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        
        .timeline-results h4 {
          color: #667eea;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        
        .timeline-results ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .timeline-results li {
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
          font-size: 15px;
          line-height: 1.5;
        }
        
        .timeline-results li:last-child {
          border-bottom: none;
        }
        
        .timeline-results strong {
          color: #2d3748;
          font-weight: 600;
        }
        
        .insights-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .insights-section .section-title {
          color: white;
        }
        
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .insight-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 32px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
        }
        
        .insight-card:hover {
          transform: translateY(-4px);
        }
        
        .insight-icon {
          width: 48px;
          height: 48px;
          color: #ffd700;
          margin-bottom: 16px;
        }
        
        .insight-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: white;
        }
        
        .insight-card p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .innovation-section {
          padding: 80px 0;
          background: #ffffff;
        }
        
        .innovation-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
          align-items: center;
        }
        
        .innovation-content h2 {
          font-size: 36px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 32px;
        }
        
        .innovation-features {
          space-y: 24px;
        }
        
        .feature-item {
          margin-bottom: 24px;
          padding: 20px;
          background: #f7fafc;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        
        .feature-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        
        .feature-header h3 {
          font-size: 18px;
          font-weight: 700;
          color: #667eea;
          margin: 0;
        }
        
        .feature-item p {
          font-size: 15px;
          line-height: 1.6;
          color: #4a5568;
          margin: 0;
        }
        
        .innovation-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .system-diagram {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 32px;
          border-radius: 12px;
          color: white;
          text-align: center;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .diagram-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
        }
        
        .diagram-components {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .component {
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }
        
        .experiential-themes-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .themes-overview {
          text-align: center;
          margin-bottom: 48px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .themes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        
        .theme-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-left: 4px solid #667eea;
        }
        
        .theme-card h3 {
          color: #667eea;
          margin-bottom: 12px;
          font-size: 18px;
        }
        
        .theme-card p {
          margin-bottom: 16px;
          line-height: 1.6;
        }
        
        .theme-card blockquote {
          margin: 0;
          padding: 16px;
          background: #f8f9fa;
          border-left: 3px solid #667eea;
          font-style: italic;
          border-radius: 4px;
        }
        
        .theme-card cite {
          display: block;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #667eea;
          font-style: normal;
        }
        
        .impact-section {
          padding: 80px 0;
          background: #ffffff;
        }
        
        .impact-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .impact-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-bottom: 48px;
        }
        
        .highlight-item {
          padding: 32px;
          background: #f7fafc;
          border-radius: 12px;
          border-left: 4px solid #667eea;
        }
        
        .highlight-item h3 {
          font-size: 20px;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 12px;
        }
        
        .highlight-item p {
          font-size: 16px;
          line-height: 1.6;
          color: #4a5568;
        }
        
        .validation-metrics {
          margin-top: 32px;
          padding: 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          color: white;
        }
        
        .validation-metrics h3 {
          margin-bottom: 20px;
          color: white;
          text-align: center;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
        }
        
        .metric-item {
          text-align: center;
          padding: 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }
        
        .metric-value {
          display: block;
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }
        
        .metric-label {
          display: block;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .next-steps-section {
          padding: 80px 0;
          background: #f8fafc;
        }
        
        .next-steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .next-step-card {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-left: 4px solid #667eea;
        }
        
        .next-step-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 12px;
        }
        
        .next-step-card p {
          font-size: 16px;
          line-height: 1.6;
          color: #4a5568;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 16px;
          }
          
          /* LARGER HERO IMAGE ON MOBILE */
          .hero-image-container {
            width: 98%;
            max-width: 98%;
            border-radius: 8px;
          }
          
          .hero-image-container img {
            max-height: 400px;
          }
          
          .innovation-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .hero-meta {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          
          /* SMALLER TITLE TEXT ON MOBILE */
          .content-section h1 {
            font-size: 28px !important;
            line-height: 1.3 !important;
            padding: 0 8px !important;
          }
          
          .content-section p {
            font-size: 16px !important;
            padding: 0 8px !important;
          }
          
          /* MOBILE TIMELINE REDESIGN - More compact and efficient */
          .process-timeline {
            max-width: 100%;
            margin: 0;
            position: relative;
          }
          
          .process-timeline::before {
            display: none; /* Hide the timeline line on mobile */
          }
          
          .timeline-item {
            padding-left: 0; /* Remove left padding */
            margin-bottom: 32px; /* Reduce bottom margin */
            position: relative;
          }
          
          .timeline-marker {
            position: static; /* Make it part of the normal flow */
            width: 40px;
            height: 40px;
            margin: 0 auto 16px auto; /* Center it and add bottom margin */
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          }
          
          .timeline-number {
            color: white;
            font-weight: 700;
            font-size: 16px;
          }
          
          .timeline-content {
            margin-top: 0;
            padding: 20px;
            border-left: none;
            border-top: 4px solid #667eea;
          }
          
          .timeline-content h3 {
            font-size: 20px;
            margin-bottom: 12px;
          }
          
          .timeline-description p {
            font-size: 15px;
            margin-bottom: 16px;
          }
          
          /* MOBILE IMAGE OPTIMIZATION */
          .study-image-container {
            margin: 16px 0;
            background: #f8f9fa;
            border-radius: 8px;
            padding: 12px;
          }
          
          .study-image {
            width: 100% !important;
            height: auto !important;
            max-width: 100% !important;
            min-height: auto !important;
            max-height: 300px !important; /* Limit max height on mobile */
            object-fit: contain !important;
            border-radius: 6px;
            border: 1px solid #e0e0e0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          
          .gesture-controls-image {
            width: 100% !important;
            height: auto !important;
            max-height: 200px !important; /* Smaller for mobile */
            object-fit: contain !important;
            margin: 0 auto !important;
            display: block !important;
            border-radius: 6px;
            border: 1px solid #e0e0e0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          
          .image-caption {
            margin-top: 8px;
            margin-bottom: 0;
            font-size: 13px;
            line-height: 1.4;
            color: #666;
            font-style: italic;
            text-align: center;
            padding: 0 8px;
          }
          
          /* MOBILE RESULTS SECTION OPTIMIZATION */
          .timeline-results {
            margin-top: 16px;
            padding: 16px;
            background: #f7fafc;
            border-radius: 6px;
            border-left: 3px solid #667eea;
          }
          
          .timeline-results h4 {
            color: #667eea;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 10px;
          }
          
          .timeline-results li {
            padding: 6px 0;
            border-bottom: 1px solid #e2e8f0;
            font-size: 14px;
            line-height: 1.4;
          }
          
          .timeline-results strong {
            color: #2d3748;
            font-weight: 600;
          }
          
          /* MOBILE SPECIFIC IMAGE SIZES FOR EACH STEP */
          
          /* Step 1 - Topic frequency chart */
          .timeline-item:nth-child(1) .study-image {
            max-height: 350px !important; /* Allow more height for the chart */
          }
          
          /* Step 2 - Message generation model - LARGER */
          .timeline-item:nth-child(2) .study-image {
            max-height: 400px !important; /* INCREASED from 280px */
          }
          
          /* Step 3 - System architecture - LARGER */
          .timeline-item:nth-child(3) .study-image {
            max-height: 350px !important; /* INCREASED from 250px */
          }
          
          /* Step 4 - Interaction flow and gesture controls */
          .timeline-item:nth-child(4) .study-image {
            max-height: 400px !important; /* Allow more height for interaction flow */
          }
          
          /* Step 5 - Charts and tables with specific sizing */
          .timeline-item:nth-child(5) .study-image {
            max-height: 300px !important; /* Default for step 5 */
          }
          
          /* Step 5 specific image adjustments */
          .timeline-item:nth-child(5) .study-image-container:first-of-type .study-image {
            max-height: 350px !important; /* First image - Task success - BIGGER */
          }
          
          .timeline-item:nth-child(5) .study-image-container:nth-of-type(2) .study-image {
            max-height: 250px !important; /* Second image - Error rate - SMALLER */
          }
          
          .timeline-item:nth-child(5) .study-image-container:nth-of-type(3) .study-image {
            max-height: 350px !important; /* Third image - Learnability - BIGGER */
          }
          
          .timeline-item:nth-child(5) .study-image-container:last-of-type .study-image {
            max-height: 380px !important; /* Last image - Table - BIGGER */
          }
          
          /* MOBILE SECTION SPACING */
          .process-section {
            padding: 60px 0 40px 0;
          }
          
          .section-title {
            font-size: 28px;
            margin-bottom: 32px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="case-study-nav">
        <div className="container">
          <button onClick={onBack} className="back-button">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </nav>

      {/* Hero Image Section */}
      <section className="hero-image-section">
        <div className="hero-image-container" style={{ 
          maxWidth: isMobile ? '98%' : '1000px',
          width: isMobile ? '98%' : '85%'
        }}>
          <img 
            src="/images/textflow.jpg" 
            alt="TextFlow system showing hand gestures and interface flow"
            style={{
              maxHeight: isMobile ? '400px' : '350px',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              border: 'none'
            }}
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className="content-section">
        <div className="container">
          <h1 style={{ 
            fontSize: isMobile ? '28px' : '48px', 
            fontWeight: '700', 
            marginBottom: '16px', 
            textAlign: 'center', 
            color: '#1a1a1a',
            padding: isMobile ? '0 8px' : '0',
            lineHeight: isMobile ? '1.3' : 'normal'
          }}>TextFlow: Screenless Access to Non-Visual Smart Messaging</h1>
          <p style={{ 
            fontSize: isMobile ? '18px' : '24px', 
            marginBottom: '32px', 
            textAlign: 'center', 
            color: '#666',
            padding: isMobile ? '0 8px' : '0'
          }}>A Mixed-Initiative Context-Aware System for Accessible Mobile Communication</p>
          
          <div className="hero-meta">
            <span className="meta-item">
              <Users size={16} />
              30 BVI Participants
            </span>
            <span className="meta-item">
              <Target size={16} />
              88.6% Success Rate
            </span>
            <span className="meta-item">
              <Brain size={16} />
              AI-Driven Contextual Messaging
            </span>
          </div>

          <h2>The Research Challenge</h2>
          <p>
            TextFlow addresses the significant barriers blind and visually impaired users face when 
            texting on mobile devices. Current approaches rely on screen-centric visual paradigms, 
            requiring users to hold devices and interact with visual displays primarily designed for 
            sighted users. This research explores entirely non-visual texting through AI-driven 
            contextual messaging, auditory interfaces, and screenless finger-worn input.
          </p>
        </div>
      </section>

      {/* Research Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Research Process</h2>
          
          <div className="process-timeline">
            {/* Phase 1 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">01</span>
              </div>
              <div className="timeline-content">
                <h3>Formative Study: Understanding BVI Texting Practices</h3>
                <div className="timeline-details">
                  <div className="timeline-description">
                    <p>
                      Conducted in-depth interviews with 20 BVI participants to understand their mobile 
                      texting challenges, recurrent messaging topics, and daily communication needs.
                    </p>
                  </div>
                  
                  {/* Topic Frequency Chart */}
                  <div className="study-image-container">
                    <img 
                      src="/images/textflow/topic-frequency-chart.png" 
                      alt="Bar chart showing frequency of messaging topics across four situations: in-vehicle, on-foot, point-of-interest, and frequent location"
                      className="study-image"
                      style={{
                        minHeight: '570px',
                        maxHeight: '570px',
                        height: '570px',
                        width: '100%',
                        objectFit: 'contain'
                      }}
                    />
                    <p className="image-caption">
                      Frequency of messaging topics identified by participants across four different situations. 
                      "On my way" and "get to a location" emerge as the most frequent topics, with clear 
                      situational patterns influencing communication needs.
                    </p>
                  </div>
                  
                  <div className="timeline-results">
                    <h4>Key Findings</h4>
                    <ul>
                      <li><strong>6 High-Level Themes:</strong> Notifying, requesting assistance, scheduling, coordinating, reminding, offering assistance</li>
                      <li><strong>17 Specific Topics:</strong> From "arrive late" to "bring food" based on situational contexts</li>
                      <li><strong>Context Dependencies:</strong> Message types vary by location (in-vehicle, on-foot, points of interest)</li>
                      <li><strong>Privacy Concerns:</strong> Users prefer not to use speech-based interfaces in public</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">02</span>
              </div>
              <div className="timeline-content">
                <h3>AI Model Development: Context-Aware Message Generation</h3>
                <div className="timeline-details">
                  <div className="timeline-description">
                    <p>
                      Developed an AI model using RoBERTa to generate contextually relevant message 
                      suggestions from a large-scale dataset, driven by location, activity, and time factors.
                    </p>
                  </div>
                  
                  {/* Message Generation Model */}
                  <div className="study-image-container">
                    <img 
                      src="/images/textflow/message-generation-model.png" 
                      alt="Conceptual model showing the three-stage process for generating message samples for BVI users, from defining candidate message types through augmenting samples to generating final values"
                      className="study-image"
                      style={{
                        maxHeight: isMobile ? '400px' : '400px',
                        width: '100%',
                        objectFit: 'contain'
                      }}
                    />
                    <p className="image-caption">
                      Conceptual model used to generate message samples for BVI users while texting on the go. 
                      The three-stage process transforms interview insights into over 250k contextual message samples 
                      through AI augmentation. Numbers in parentheses indicate instances at each stage.
                    </p>
                  </div>
                  
                  <div className="timeline-results">
                    <h4>Technical Implementation</h4>
                    <ul>
                      <li><strong>Dataset:</strong> 4.4M samples from Weibo Chinese microblog service</li>
                      <li><strong>Model:</strong> Pre-trained RoBERTa with MultiNLI corpus training</li>
                      <li><strong>Classification:</strong> Entailment (>20%) and contradiction (>10%) confidence scores</li>
                      <li><strong>Contextual Factors:</strong> Time, location, audience, purpose, and method</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">03</span>
              </div>
              <div className="timeline-content">
                <h3>System Architecture: Three-Component Design</h3>
                <div className="timeline-details">
                  <div className="timeline-description">
                    <p>
                      Designed TextFlow with three integrated components: User Model for context capture, 
                      Reasoning Model for situational rules, and Task Model for interaction flow.
                    </p>
                  </div>
                  
                  {/* System Architecture Diagram */}
                  <div className="study-image-container">
                    <img 
                      src="/images/textflow/system-architecture.png" 
                      alt="TextFlow system architecture showing the three integrated components: Task Model with user interaction, User Model with context and situation, and Reasoning Model with rules and critical situations"
                      className="study-image"
                      style={{
                        maxHeight: isMobile ? '350px' : '400px',
                        width: '100%',
                        objectFit: 'contain'
                      }}
                    />
                    <p className="image-caption">
                      TextFlow system architecture showing the integration of three core components: Task Model 
                      (handling user interaction and message flow), User Model (capturing context and generating 
                      dynamic profiles), and Reasoning Model (applying rules for critical situations).
                    </p>
                  </div>
                  
                  <div className="timeline-results">
                    <h4>System Components</h4>
                    <ul>
                      <li><strong>User Model:</strong> Captures context (location, time, activity) and personal commitments</li>
                      <li><strong>Reasoning Model:</strong> Four rules for critical situations (missing commitments, waiting too long, getting lost)</li>
                      <li><strong>Task Model:</strong> Two interaction modes - topic-by-topic browsing and self-disclosing flow</li>
                      <li><strong>Hardware:</strong> TapStrap finger-worn device with 5-finger gesture recognition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">04</span>
              </div>
              <div className="timeline-content">
                <h3>Interaction Design: Screenless Auditory Interface</h3>
                <div className="timeline-details">
                  <div className="timeline-description">
                    <p>
                      Developed two distinct interaction modalities optimized for different usage contexts, 
                      with careful attention to dwell times and navigation patterns for blind users.
                    </p>
                  </div>
                  
                  {/* Interaction Flow */}
                  <div className="study-image-container">
                    <img 
                      src="/images/textflow/interaction-flow.png" 
                      alt="Two interaction modalities showing self-disclosing flow with automatic message progression and topic-by-topic browsing with user-controlled navigation"
                      className="study-image"
                      style={{
                        minHeight: '630px',
                        maxHeight: '630px',
                        height: '630px',
                        width: '100%',
                        objectFit: 'contain'
                      }}
                    />
                    <p className="image-caption">
                      Two interaction modalities: Self-Disclosing Flow with automatic progression and 
                      Topic-by-Topic Browsing with user-controlled navigation.
                    </p>
                  </div>
                  
                  {/* Gesture Controls */}
                  <div className="study-image-container">
                    <img 
                      src="/images/textflow/gesture-controls.png" 
                      alt="Five finger gesture controls for TextFlow: thumb for select, index for forward, middle for backward, ring for delete, and pinky for stop/start"
                      className="gesture-controls-image"
                    />
                    <p className="image-caption">
                      Five-finger gesture vocabulary for screenless control.
                    </p>
                  </div>
                  
                  <div className="timeline-results">
                    <h4>Interaction Modalities</h4>
                    <ul>
                      <li><strong>Topic-by-Topic Browsing:</strong> User-controlled navigation with explicit forward/back commands</li>
                      <li><strong>Self-Disclosing Flow:</strong> Sequential auto-play with 150ms node-to-node, 1s topic-to-message dwell times</li>
                      <li><strong>Gesture Mapping:</strong> Index (forward), middle (back), thumb (select), ring (cancel), pinky (ignore)</li>
                      <li><strong>Audio Feedback:</strong> Android TTS with speed optimization for rapid comprehension</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-number">05</span>
              </div>
              <div className="timeline-content">
                <h3>Evaluative Study: Comprehensive System Validation</h3>
                <div className="timeline-details">
                  <div className="timeline-description">
                    <p>
                      Conducted in-person usability testing with 10 BVI participants (6 female, 4 male, ages 33-68) 
                      across 15 tasks in three real-world scenarios using a within-subject design to validate 
                      system effectiveness, efficiency, and user experience.
                    </p>
                  </div>
                  
                  {/* Task Success Chart */}
                  <div className="study-image-container" style={{ padding: '8px', margin: '8px 0' }}>
                    <img 
                      src="/images/textflow/task-success-scenarios.png" 
                      alt="Task success rates across three scenarios showing 88.6% average success rate with breakdown of full success, partial success, and failure rates"
                      className="study-image"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: isMobile ? '350px' : 'none',
                        objectFit: 'contain'
                      }}
                    />
                    <p className="image-caption">
                      Task success rates across three scenarios. Average 88.6% success rate with 4 out of 15 
                      tasks achieving 100% success across all participants.
                    </p>
                  </div>
                  
                  {/* Error Rate Comparison */}
                  <div className="study-image-container" style={{ padding: '8px', margin: '8px 0' }}>
                    <img 
                      src="/images/textflow/error-rate-comparison.png" 
                      alt="Comparison of error rates between Topic-by-Topic (TBT) and Self-Disclosing Flow (SDF) interaction modalities"
                      className="study-image"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: isMobile ? '250px' : 'none',
                        objectFit: 'contain'
                      }}
                    />
                    <p className="image-caption">
                      Error rate comparison showing TBT condition produced significantly fewer errors 
                      than SDF condition (p = 0.003 &lt; 0.05).
                    </p>
                  </div>
                  
                  {/* Learnability Analysis */}
                  <div className="study-image-container" style={{ padding: '8px', margin: '8px 0' }}>
                    <img 
                      src="/images/textflow/learnability-analysis.png" 
                      alt="Learnability analysis showing decreasing cancellation and back rates across three scenarios for both interaction modalities"
                      className="study-image"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: isMobile ? '350px' : 'none',
                        objectFit: 'contain'
                      }}
                    />
                    <p className="image-caption">
                      Learnability analysis showing average cancellation and back rates decreased from scenarios 1-2 
                      to scenario 3, indicating improved system familiarity and reduced interaction errors over time.
                    </p>
                  </div>
                  
                  <div className="timeline-results">
                    <h4>Detailed Performance Results</h4>
                    <ul>
                      <li><strong>Overall Success Rate:</strong> 88.6% average task completion across all scenarios</li>
                      <li><strong>Time Efficiency (TBT):</strong> 17.4s for top-list items, 33.97s for mid-list, 43.7s for end-list items</li>
                      <li><strong>Time Efficiency (SDF):</strong> 35.6s average (28.7-46.3s range) with higher variability</li>
                      <li><strong>Error Analysis:</strong> TBT condition: 0.15 errors per participant; SDF condition: 0.77 errors per participant</li>
                      <li><strong>Learnability:</strong> 7 out of 10 participants showed improved performance by scenario 3</li>
                      <li><strong>Interaction Fluidity:</strong> 80% fluidity rate for TBT vs 45% for SDF condition</li>
                    </ul>
                    
                    <h4>Interaction Behavior Analysis</h4>
                    <ul>
                      <li><strong>Hand Placement:</strong> 80% preferred leg placement, 20% chest placement</li>
                      <li><strong>Finger Position:</strong> Split between clenched (50%) and flat (50%) finger positions</li>
                      <li><strong>Error Sources:</strong> Rapid browsing (18 backward actions), semantic similarity confusion (15 cancellations)</li>
                      <li><strong>Hesitation Patterns:</strong> 10.91% of interactions involved 2+ second pauses for decision making</li>
                    </ul>
                    
                    {/* Interaction Behavior Table */}
                    <div className="study-image-container" style={{ padding: '8px', margin: '16px 0' }}>
                      <img 
                        src="/images/textflow/interaction-behavior-table.png" 
                        alt="Table showing percentage of tasks coded as fluidity, difficulty, and hesitation for three combinations of hand placement and finger position in TBT and SDF conditions"
                        className="study-image"
                        style={{
                          width: '100%',
                          height: 'auto',
                          maxWidth: '100%',
                          maxHeight: isMobile ? '380px' : 'none',
                          objectFit: 'contain'
                        }}
                      />
                      <p className="image-caption">
                        Percentage of tasks coded as fluidity, difficulty, and hesitation for three combination of hand placement and finger position in TBT and SDF conditions across all participants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="insights-section">
        <div className="container">
          <h2 className="section-title">Key Research Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <Brain className="insight-icon" />
              <h3>Context-Driven Messaging</h3>
              <p>
                BVI users have predictable messaging patterns tied to specific contexts. 
                Location, activity, and time strongly influence message content and urgency.
              </p>
            </div>
            <div className="insight-card">
              <Eye className="insight-icon" />
              <h3>Privacy-First Design</h3>
              <p>
                Avoiding public speech input is crucial for BVI users. Silent, tactile 
                interaction preserves privacy while maintaining communication efficiency.
              </p>
            </div>
            <div className="insight-card">
              <Users className="insight-icon" />
              <h3>Hands-Free Necessity</h3>
              <p>
                Mobile BVI users need one hand for navigation aids and the other for environmental 
                awareness, making screenless interaction essential for safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Innovation */}
      <section className="innovation-section">
        <div className="container">
          <div className="innovation-grid">
            <div className="innovation-content">
              <h2>Technical Innovation</h2>
              <div className="innovation-features">
                <div className="feature-item">
                  <div className="feature-header">
                    <ChevronRight size={16} />
                    <h3>Mixed-Initiative AI</h3>
                  </div>
                  <p>System can both respond to user requests and proactively suggest messages based on detected situations</p>
                </div>
                <div className="feature-item">
                  <div className="feature-header">
                    <ChevronRight size={16} />
                    <h3>Contextual Awareness</h3>
                  </div>
                  <p>Integrates GPS, calendar, activity recognition, and time data to generate relevant message options</p>
                </div>
                <div className="feature-item">
                  <div className="feature-header">
                    <ChevronRight size={16} />
                    <h3>Auditory Optimization</h3>
                  </div>
                  <p>Carefully tuned dwell times and sequential flows optimized for blind users' auditory processing</p>
                </div>
                <div className="feature-item">
                  <div className="feature-header">
                    <ChevronRight size={16} />
                    <h3>Gesture Integration</h3>
                  </div>
                  <p>Five-finger gesture vocabulary enables precise control without visual feedback or screen dependency</p>
                </div>
              </div>
            </div>
            <div className="innovation-image">
              <div className="system-diagram">
                <div className="diagram-title">System Architecture</div>
                <div className="diagram-components">
                  <div className="component user-model">User Model</div>
                  <div className="component reasoning-model">Reasoning Model</div>
                  <div className="component task-model">Task Model</div>
                </div>
                <div className="diagram-flows">
                  <div className="flow-arrow"></div>
                  <div className="flow-arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiential Themes */}
      <section className="experiential-themes-section">
        <div className="container">
          <h2 className="section-title">User Experience Analysis</h2>
          <div className="themes-content">
            <div className="themes-overview">
              <p>
                Thematic analysis of participant interviews revealed four major experiential themes 
                that highlight TextFlow's impact on BVI users' mobile communication practices.
              </p>
            </div>
            
            <div className="themes-grid">
              <div className="theme-card">
                <h3>Bypassing the Phone</h3>
                <p>
                  TextFlow significantly reduces interaction barriers by eliminating the need to 
                  hold and manipulate a mobile device, enabling hands-free communication while 
                  maintaining environmental awareness and mobility safety.
                </p>
                <blockquote>
                  "The system helps you send text messages without using your hands for the phone. 
                  You could use your cane and fully concentrate on traveling as opposed to texting 
                  and traveling at the same time."
                  <cite>— P1</cite>
                </blockquote>
              </div>
              
              <div className="theme-card">
                <h3>Privacy, Efficiency & Accuracy</h3>
                <p>
                  Users highlighted three key advantages over existing solutions: privacy (no public 
                  speech), efficiency (faster than dictation repetitions), and accuracy (reduced 
                  errors compared to screen-based typing).
                </p>
                <blockquote>
                  "With dictation, I have to speak...everybody else can hear what I'm saying. 
                  But if I was using this system and I had earphones on, nobody else can hear. 
                  So, there's privacy, which is a big deal for blind people."
                  <cite>— P4</cite>
                </blockquote>
              </div>
              
              <div className="theme-card">
                <h3>Control vs. Automation</h3>
                <p>
                  Participants expressed strong preference for topic-by-topic browsing over 
                  self-disclosing flow, valuing control and thinking time while acknowledging 
                  SDF's potential for multitasking scenarios.
                </p>
                <blockquote>
                  "When you browse, you can control the way it repeats them for you. The one that 
                  reads topics takes more time before it becomes usable for most people and you 
                  have to memorize them first."
                  <cite>— P6</cite>
                </blockquote>
              </div>
              
              <div className="theme-card">
                <h3>Extended Use Cases</h3>
                <p>
                  Users identified additional scenarios where TextFlow would be valuable: public 
                  transportation, crowded places, meetings, and navigation assistance, suggesting 
                  broad applicability beyond initial design scope.
                </p>
                <blockquote>
                  "Even though I can get to the building, but I have a hard time finding a way to 
                  get in or to actually even get back out of the place. Because GPS works to get 
                  me to the spot, but it won't tell me where the door itself is."
                  <cite>— P7</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Research Impact & Validation</h2>
          <div className="impact-content">
            <div className="impact-highlights">
              <div className="highlight-item">
                <h3>Novel Research Contribution</h3>
                <p>
                  First system to successfully demonstrate integration of AI-driven contextual messaging 
                  with entirely screenless interaction, establishing a new paradigm for accessible 
                  mobile communication.
                </p>
              </div>
              <div className="highlight-item">
                <h3>Empirical Validation</h3>
                <p>
                  Comprehensive user study with 10 BVI participants across 150 total tasks 
                  demonstrated 88.6% success rate and significant usability improvements over 
                  existing solutions.
                </p>
              </div>
              <div className="highlight-item">
                <h3>Broader Applications</h3>
                <p>
                  Framework and findings applicable to various assistive technologies, hands-free 
                  interfaces, and context-aware communication systems beyond the BVI community.
                </p>
              </div>
            </div>
            
            <div className="validation-metrics">
              <h3>Key Performance Metrics</h3>
              <div className="metrics-grid">
                <div className="metric-item">
                  <span className="metric-value">88.6%</span>
                  <span className="metric-label">Task Success Rate</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">17.4s</span>
                  <span className="metric-label">Average Time (Top Items)</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">80%</span>
                  <span className="metric-label">Interaction Fluidity (TBT)</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Participant Completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="next-steps-section">
        <div className="container">
          <h2 className="section-title">Future Directions</h2>
          <div className="next-steps-grid">
            <div className="next-step-card">
              <h3>Message Personalization</h3>
              <p>
                Implement user-specific message customization and learning algorithms to adapt 
                to individual communication patterns and preferences.
              </p>
            </div>
            <div className="next-step-card">
              <h3>Extended Context</h3>
              <p>
                Incorporate additional contextual cues like weather, social calendar events, 
                and location-specific information for richer message suggestions.
              </p>
            </div>
            <div className="next-step-card">
              <h3>Multi-Modal Integration</h3>
              <p>
                Explore integration with other assistive technologies and expand beyond 
                messaging to comprehensive mobile interaction frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextflowCaseStudy;