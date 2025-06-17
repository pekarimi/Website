import React from 'react';
import { ArrowLeft, Users, BarChart3, Target, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

const DropoutCaseStudy = ({ onBack }) => {
  return (
    <div className="case-study">
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
        <div className="hero-image-container">
          <img src="/images/drop/correlation-matrix.png" alt="Student Retention Correlation Matrix" />
        </div>
      </section>

      {/* Project Overview */}
      <section className="content-section">
        <div className="container">
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', textAlign: 'center', color: '#1a1a1a' }}>Understanding Student Program Retention</h1>
          <p style={{ fontSize: '24px', marginBottom: '32px', textAlign: 'center', color: '#666' }}>A Comprehensive Survey on Factors Influencing Drop Rates</p>
          
          <div className="hero-meta" style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', color: '#667eea', fontWeight: '600' }}>
              <Users size={16} />
              656 Students
            </span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', color: '#667eea', fontWeight: '600' }}>
              <BarChart3 size={16} />
              Multiple Linear Regression & SEM
            </span>
            <span className="meta-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', color: '#667eea', fontWeight: '600' }}>
              <Target size={16} />
              8 Critical Factors
            </span>
          </div>

          <h2>The Research Challenge</h2>
          <p>
            Understanding the likelihood of students dropping from their program and examining the 
            relationship between drop rates and eight major influencing factors. This comprehensive study 
            aimed to identify key predictors of student retention and provide actionable insights for 
            educational institutions.
          </p>
        </div>
      </section>

      {/* Demographics & Sample */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Sample Demographics</h2>
          
          <div className="demo-grid">
            <div className="demo-card">
              <h3>Sample Demographics</h3>
              <div className="demo-stats">
                <div className="demo-stat">
                  <span className="demo-number">656</span>
                  <span className="demo-label">Total Students</span>
                </div>
                <div className="demo-stat">
                  <span className="demo-number">37.7</span>
                  <span className="demo-label">Average Age</span>
                </div>
                <div className="demo-stat">
                  <span className="demo-number">65.4%</span>
                  <span className="demo-label">Female</span>
                </div>
                <div className="demo-stat">
                  <span className="demo-number">70%</span>
                  <span className="demo-label">Undergraduate</span>
                </div>
              </div>
            </div>

            <div className="demo-card">
              <h3>College Distribution</h3>
              <div className="college-list">
                <div className="college-item">
                  <span className="college-name">Business</span>
                  <span className="college-percent">34.5%</span>
                </div>
                <div className="college-item">
                  <span className="college-name">Teachers College</span>
                  <span className="college-percent">32.3%</span>
                </div>
                <div className="college-item">
                  <span className="college-name">Health Professions</span>
                  <span className="college-percent">17.1%</span>
                </div>
                <div className="college-item">
                  <span className="college-name">Information Technology</span>
                  <span className="college-percent">16.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Research Methodology</h2>
          
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Study Design</h3>
              <p><strong>Type:</strong> Cross-sectional survey</p>
              <p><strong>Approach:</strong> Quantitative analysis</p>
              <p><strong>Target:</strong> Students from different schools</p>
              <p><strong>Duration:</strong> ~15 minutes</p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Eight Critical Factors</h3>
              <div className="factors-grid">
                <span className="factor-tag">Course Quality</span>
                <span className="factor-tag">Instructor Support</span>
                <span className="factor-tag">Mentor Support</span>
                <span className="factor-tag">Course Relevance</span>
                <span className="factor-tag">Resource Adequacy</span>
                <span className="factor-tag">Interaction Modality</span>
                <span className="factor-tag">Peer Interaction</span>
                <span className="factor-tag">Assessment Strategy</span>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Statistical Analysis</h3>
              <p><strong>Primary:</strong> Multiple Linear Regression to identify key predictors</p>
              <p><strong>Advanced:</strong> Structural Equation Modeling (SEM) for latent constructs</p>
              <p><strong>Segmentation:</strong> Comparative analysis across student segments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Key Research Findings</h2>
          
          {/* Multiple Linear Regression Results */}
          <div className="regression-results">
            <h3>Multiple Linear Regression Analysis</h3>
            <p>Multiple Linear Regression was conducted to identify key predictors of student dropout across three critical outcome measures. The analysis reveals consistent patterns in how different factors influence student retention.</p>
            
            <div className="regression-images">
              <div className="regression-card">
                <h4>Drop-out Likelihood</h4>
                <div className="regression-image">
                  <img src="/images/drop/dropout-likelihood.png" alt="Drop-out Likelihood Regression Results" />
                </div>
                <p className="regression-caption">Course Relevance (β = -0.330) and Course Quality (β = -0.329) emerge as the strongest predictors of dropout likelihood, with all factors showing significant protective effects.</p>
              </div>
              
              <div className="regression-card">
                <h4>Withdrawal Consideration</h4>
                <div className="regression-image">
                  <img src="/images/drop/withdrawal-consideration.png" alt="Withdrawal Consideration Regression Results" />
                </div>
                <p className="regression-caption">Withdrawal consideration shows the most dramatic effects, with Course Relevance having nearly 2x stronger impact (β = -0.620) and Course Quality explaining 21.3% of variance.</p>
              </div>
              
              <div className="regression-card">
                <h4>Commitment to Complete</h4>
                <div className="regression-image">
                  <img src="/images/drop/commitment-complete.png" alt="Commitment to Complete Regression Results" />
                </div>
                <p className="regression-caption">Positive relationships demonstrate that higher satisfaction with course factors increases student commitment to completing their program (β = 0.304 for Course Relevance).</p>
              </div>
            </div>
          </div>
          
          <div className="findings-grid">
            <div className="finding-card primary">
              <div className="finding-icon">
                <TrendingUp size={24} />
              </div>
              <h3>Primary Drivers</h3>
              <p>Course Relevance and Course Quality consistently emerge as the top two predictors across all three drop-out risk measures.</p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-value">β = -0.330</span>
                  <span className="stat-label">Course Relevance</span>
                </div>
                <div className="stat">
                  <span className="stat-value">β = -0.329</span>
                  <span className="stat-label">Course Quality</span>
                </div>
              </div>
            </div>

            <div className="finding-card">
              <div className="finding-icon">
                <AlertTriangle size={24} />
              </div>
              <h3>Strongest Impact</h3>
              <p>Withdrawal Consideration shows the most dramatic effects, with Course Relevance having nearly 2x stronger impact (β = -0.620) compared to other outcomes.</p>
            </div>

            <div className="finding-card">
              <div className="finding-icon">
                <CheckCircle size={24} />
              </div>
              <h3>Consistent Patterns</h3>
              <p>Peer Interaction consistently ranks last but remains statistically significant across all metrics. All factors work as protective elements against dropout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Equation Modeling */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Advanced Analysis: Structural Equation Modeling</h2>
          
          <div className="sem-content">
            <div className="sem-explanation">
              <h3>What is SEM?</h3>
              <p>Structural Equation Modeling combines factor analysis and multiple regression to test complex theoretical models involving latent (unmeasured) variables and their relationships.</p>
              
              <div className="sem-benefits">
                <div className="benefit">
                  <h4>Tests Complex Relationships</h4>
                  <p>Multiple predictors → Multiple outcomes</p>
                </div>
                <div className="benefit">
                  <h4>Handles Latent Variables</h4>
                  <p>Measures concepts you can't directly observe</p>
                </div>
                <div className="benefit">
                  <h4>Accounts for Measurement Error</h4>
                  <p>More accurate than simple regression</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* SEM Results */}
          <div className="sem-results-section">
            <h3>SEM Analysis & Results</h3>
            <p>Building on the regression findings, Structural Equation Modeling was employed to examine the complex relationships between factors and understand how they work together as an interconnected system to influence student retention.</p>
            
            <div className="sem-analysis-grid">
              <div className="sem-card large">
                <h4>Individual Factor Analysis</h4>
                <div className="sem-image">
                  <img src="/images/drop/individual-predictors.png" alt="Individual Predictor Correlations and Explanatory Power" />
                </div>
                <p className="sem-caption">Course Content emerges as the strongest individual predictor with the highest correlation with dropout intention and greatest explanatory power. The analysis shows clear hierarchy in factor importance, with academic factors (content, delivery, assessment) demonstrating stronger protective effects than support factors.</p>
              </div>
              
              <div className="sem-card small">
                <h4>Interconnected System Model</h4>
                <div className="sem-image">
                  <img src="/images/drop/interconnected-system.png" alt="Factor Interconnection Network showing Academic, Support, and Experience categories" />
                </div>
                <p className="sem-caption">The system reveals Course Content as the central hub with strong interconnections between academic factors. Support systems (instructor and mentor support) work together, while experience factors (proctoring, peer interaction) operate more independently with specialized protective effects.</p>
              </div>
            </div>
          </div>

          <div className="mediation-analysis">
            <h3>Key Mediation Findings</h3>
            <div className="mediation-paths">
              <div className="path">
                <h4>Course Content → Delivery Mode → Dropout Intention</h4>
                <p>Well-organized, engaging content makes online delivery more effective, reducing dropout intention</p>
              </div>
              <div className="path">
                <h4>Course Content → Assessment → Dropout Intention</h4>
                <p>Good content leads to clearer, fairer assessments, which reduces dropout thoughts</p>
              </div>
              <div className="path">
                <h4>Career Relevance → Learning Resources → Dropout Intention</h4>
                <p>Career-relevant courses make students find learning resources more valuable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentation Analysis */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Segmentation Analysis</h2>
          
          <div className="segmentation-grid">
            <div className="segment-card">
              <h4>Dropout Risk by College</h4>
              <div className="segment-image">
                <img src="/images/drop/college-risk.png" alt="Dropout Risk by College showing IT with highest risk at 8.5%" />
              </div>
              <p className="segment-caption">Information Technology College shows significantly higher dropout risk (8.5%) compared to other colleges, indicating need for targeted IT-specific retention interventions.</p>
            </div>
            
            <div className="segment-card">
              <h4>Dropout Risk by Age Group</h4>
              <div className="segment-image">
                <img src="/images/drop/age-risk.png" alt="Dropout Risk by Age Group showing peak at 36-45 age range" />
              </div>
              <p className="segment-caption">Mid-career students (36-45) show highest dropout risk at 5.0%, while students 55+ demonstrate remarkable commitment with 0% high risk.</p>
            </div>
            
            <div className="segment-card">
              <h4>Dropout Risk by Program Stage</h4>
              <div className="segment-image">
                <img src="/images/drop/stage-risk.png" alt="Dropout Risk by Program Stage with Sophomores at highest risk" />
              </div>
              <p className="segment-caption">Sophomore students face critical transition challenges with 6.1% high dropout risk, while Graduate students show lowest risk at 2.5%.</p>
            </div>
            
            <div className="segment-card">
              <h4>Risk Profile Comparison</h4>
              <div className="segment-image">
                <img src="/images/drop/risk-profiles.png" alt="Radar chart comparing satisfaction levels across risk groups" />
              </div>
              <p className="segment-caption">High-risk students show consistently lower satisfaction across all eight factors, with Course Quality and Relevance gaps being most pronounced compared to low-risk students.</p>
            </div>
          </div>
          
          <div className="risk-analysis">
            <div className="risk-overview">
              <h3>Institution-Wide Risk Profile</h3>
              <div className="risk-stats">
                <div className="risk-stat low">
                  <span className="risk-percent">84.4%</span>
                  <span className="risk-label">Low Risk</span>
                </div>
                <div className="risk-stat medium">
                  <span className="risk-percent">12.2%</span>
                  <span className="risk-label">Medium Risk</span>
                </div>
                <div className="risk-stat high">
                  <span className="risk-percent">3.4%</span>
                  <span className="risk-label">High Risk</span>
                </div>
              </div>
            </div>

            <div className="risk-insights">
              <h3>Key Risk Patterns</h3>
              <ul className="insight-list">
                <li>IT College shows 8.5% high dropout risk (significantly higher than other colleges)</li>
                <li>Sophomore students at 6.1% high risk during critical transition year</li>
                <li>Age 36-45 group shows 5.0% high risk due to mid-career challenges</li>
                <li>Age 55+ group shows 0% high risk with highest commitment levels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Work */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Future Work</h2>
          
          <div className="future-work-content">
            <div className="future-work-card">
              <h3>Longitudinal Analysis</h3>
              <p>
                Our findings reveal that course content quality is the single most important factor in student retention, 
                while academic factors demonstrate larger effects than support factors. With all eight factors showing 
                interconnected relationships, institutions have multiple intervention points to address dropout risk.
              </p>
              
              <div className="future-objectives">
                <h4>Building on Current Insights</h4>
                <p>
                  While this cross-sectional study provides comprehensive evidence for immediate actions—including 
                  forming content quality improvement task forces, conducting comprehensive content audits, developing 
                  faculty training programs, and implementing student feedback systems—longitudinal analysis will 
                  deepen our understanding of how these interventions perform over time.
                </p>
              </div>
              
              <div className="future-methodology">
                <h4>Proposed Longitudinal Study</h4>
                <p>
                  We plan to follow the same students who completed this survey over multiple time points to understand 
                  how their dropout intentions and perceptions of the eight critical factors evolve throughout their 
                  academic journey. This approach will enable us to track the effectiveness of implemented interventions 
                  and identify optimal timing for support measures.
                </p>
                
                <ul className="objective-list">
                  <li>Track changes in dropout intentions across multiple time points</li>
                  <li>Monitor how student perceptions of content quality and other factors change over time</li>
                  <li>Evaluate the long-term impact of content improvement initiatives</li>
                  <li>Identify critical intervention windows where support is most effective</li>
                </ul>
              </div>
              
              <div className="future-impact">
                <h4>Expected Impact</h4>
                <p>
                  This longitudinal perspective will validate our current recommendations while providing dynamic 
                  insights into student retention patterns. Understanding temporal changes will enable institutions 
                  to refine their integrated approach, ensuring that content quality improvements and support 
                  interventions are deployed at the most impactful moments in a student's academic journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="next-project">
        <div className="container">
          <div className="next-content">
            <h3>Explore More Research</h3>
            <p>Discover other user experience and research projects</p>
            <button onClick={onBack} className="next-button">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .case-study {
          background: #fafafa;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .case-study-nav {
          background: white;
          border-bottom: 1px solid #e0e0e0;
          padding: 20px 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #666;
          font-size: 16px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .back-button:hover {
          color: #667eea;
        }

        .hero-image-section {
          width: 100%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          padding: 30px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-container {
          max-width: 1600px;
          width: 98%;
          height: auto;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: white;
        }

        .hero-image-container img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          max-height: 700px;
        }

        /* BALANCED SECTION SPACING */
        .content-section {
          padding: 50px 0; /* Reduced from 80px for better flow */
        }

        .content-section:first-of-type {
          padding-top: 40px; /* Less space after hero */
        }

        .content-section h2 {
          font-size: 32px;
          font-weight: 600;
          margin: 0 0 24px 0; /* Removed top margin, kept bottom */
          color: #1a1a1a;
          text-align: center;
        }

        .content-section h3 {
          font-size: 24px;
          font-weight: 600;
          margin: 24px 0 16px 0; /* Reduced top margin */
          color: #1a1a1a;
        }

        .content-section p {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 20px;
        }

        .alt-bg {
          background: white;
        }

        .section-title {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 36px; /* Reduced from 48px */
          text-align: center;
          color: #1a1a1a;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin: 36px 0; /* Reduced from 48px */
        }

        .demo-card {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .demo-card h3 {
          margin: 0 0 24px 0;
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .demo-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .demo-stat {
          text-align: center;
        }

        .demo-number {
          display: block;
          font-size: 32px;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 8px;
        }

        .demo-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }

        .college-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .college-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #f8f9ff;
          border-radius: 8px;
          border: 1px solid #e0e8ff;
        }

        .college-name {
          font-weight: 500;
          color: #1a1a1a;
        }

        .college-percent {
          font-weight: 600;
          color: #667eea;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin: 36px 0; /* Reduced from 48px */
        }

        .process-step {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-left: 4px solid #667eea;
        }

        .step-number {
          background: #667eea;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .factors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 8px;
          margin-top: 16px;
        }

        .factor-tag {
          background: #f8f9ff;
          color: #667eea;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          border: 1px solid #e0e8ff;
        }

        .regression-results {
          margin-bottom: 48px; /* Reduced from 64px */
          padding: 40px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-left: 4px solid #667eea;
        }

        .regression-results h3 {
          margin: 0 0 16px 0;
          font-size: 28px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .regression-results > p {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 24px; /* Reduced from 32px */
        }

        .regression-images {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
          gap: 40px;
          margin-top: 24px; /* Reduced from 32px */
        }

        .regression-card {
          background: #f8f9ff;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid #e0e8ff;
        }

        .regression-card h4 {
          margin: 0 0 16px 0;
          font-size: 20px;
          font-weight: 600;
          color: #667eea;
          text-align: center;
        }

        .regression-image {
          margin: 16px 0;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .regression-image img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .regression-caption {
          font-size: 14px;
          line-height: 1.5;
          color: #666;
          margin: 16px 0 0 0;
          font-style: italic;
        }

        .findings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin: 36px 0; /* Reduced from 48px */
        }

        .finding-card {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-left: 4px solid #667eea;
        }

        .finding-card.primary {
          border-left-color: #28a745;
          background: linear-gradient(135deg, #f8fff9 0%, #f0f8ff 100%);
        }

        .finding-icon {
          color: #667eea;
          margin-bottom: 16px;
        }

        .finding-card.primary .finding-icon {
          color: #28a745;
        }

        .finding-card h3 {
          margin: 0 0 16px 0;
          font-size: 20px;
          font-weight: 600;
        }

        .finding-card p {
          margin: 0 0 16px 0;
          font-size: 16px;
          line-height: 1.6;
        }

        .stats {
          display: flex;
          gap: 24px;
          margin-top: 16px;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-size: 24px;
          font-weight: 700;
          color: #28a745;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }

        .risk-analysis {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin: 36px 0; /* Reduced from 48px */
        }

        .risk-overview {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .risk-overview h3 {
          margin: 0 0 24px 0;
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .risk-stats {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .risk-stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border-radius: 8px;
        }

        .risk-stat.low {
          background: #f0f8ff;
          border-left: 4px solid #28a745;
        }

        .risk-stat.medium {
          background: #fff8e1;
          border-left: 4px solid #ff9800;
        }

        .risk-stat.high {
          background: #ffebee;
          border-left: 4px solid #f44336;
        }

        .risk-percent {
          font-size: 24px;
          font-weight: 700;
        }

        .risk-stat.low .risk-percent {
          color: #28a745;
        }

        .risk-stat.medium .risk-percent {
          color: #ff9800;
        }

        .risk-stat.high .risk-percent {
          color: #f44336;
        }

        .risk-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }

        .risk-insights {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .risk-insights h3 {
          margin: 0 0 24px 0;
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .insight-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .insight-list li {
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          position: relative;
          padding-left: 24px;
        }

        .insight-list li:before {
          content: '•';
          color: #667eea;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .segmentation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
          gap: 40px;
          margin: 36px 0; /* Reduced from 48px */
        }

        .segment-card {
          background: #f8f9ff;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid #e0e8ff;
        }

        .segment-card h4 {
          margin: 0 0 16px 0;
          font-size: 20px;
          font-weight: 600;
          color: #667eea;
          text-align: center;
        }

        .segment-image {
          margin: 16px 0;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .segment-image img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .segment-caption {
          font-size: 14px;
          line-height: 1.5;
          color: #666;
          margin: 16px 0 0 0;
          font-style: italic;
        }

        .future-work-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .future-work-card {
          background: white;
          padding: 48px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-left: 4px solid #667eea;
        }

        .future-work-card h3 {
          margin: 0 0 24px 0;
          font-size: 28px;
          font-weight: 600;
          color: #1a1a1a;
          text-align: center;
        }

        .future-work-card > p {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 24px; /* Reduced from 32px */
          text-align: center;
        }

        .future-objectives,
        .future-methodology,
        .future-impact {
          margin-bottom: 24px; /* Reduced from 32px */
        }

        .future-objectives h4,
        .future-methodology h4,
        .future-impact h4 {
          margin: 0 0 16px 0;
          font-size: 20px;
          font-weight: 600;
          color: #667eea;
        }

        .future-objectives p,
        .future-methodology p,
        .future-impact p {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        .objective-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .objective-list li {
          padding: 8px 0;
          position: relative;
          padding-left: 20px;
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        }

        .objective-list li:before {
          content: '→';
          color: #667eea;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .sem-results-section {
          margin-bottom: 48px; /* Reduced from 64px */
          padding: 40px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-left: 4px solid #764ba2;
        }

        .sem-results-section h3 {
          margin: 0 0 16px 0;
          font-size: 28px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .sem-results-section > p {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 24px; /* Reduced from 32px */
        }

        .sem-analysis-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px; /* Reduced from 40px */
          margin-top: 24px; /* Reduced from 32px */
        }

        .sem-card.large {
          background: #f5f3ff;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid #e0d4ff;
          max-width: 100%;
        }

        .sem-card.small {
          background: #f5f3ff;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid #e0d4ff;
          max-width: 80%;
          margin: 0 auto;
        }

        .sem-card {
          background: #f5f3ff;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid #e0d4ff;
        }

        .sem-card h4 {
          margin: 0 0 16px 0;
          font-size: 20px;
          font-weight: 600;
          color: #764ba2;
          text-align: center;
        }

        .sem-image {
          margin: 16px 0;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .sem-image img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        .sem-caption {
          font-size: 14px;
          line-height: 1.5;
          color: #666;
          margin: 16px 0 0 0;
          font-style: italic;
        }

        .sem-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 36px; /* Reduced from 48px */
          margin: 36px 0; /* Reduced from 48px */
        }

        .sem-explanation {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .sem-explanation h3 {
          margin: 0 0 16px 0;
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .sem-benefits {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }

        .benefit {
          padding: 16px;
          background: #f8f9ff;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }

        .benefit h4 {
          margin: 0 0 8px 0;
          font-size: 16px;
          font-weight: 600;
          color: #667eea;
        }

        .benefit p {
          margin: 0;
          font-size: 14px;
          color: #666;
        }

        .mediation-analysis {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-top: 36px; /* Reduced from 48px */
        }

        .mediation-analysis h3 {
          margin: 0 0 24px 0;
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .mediation-paths {
          display: flex;
          flex-direction: column;
          gap: 20px; /* Reduced from 24px */
        }

        .path {
          padding: 20px;
          background: #f0f8ff;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }

        .path h4 {
          margin: 0 0 12px 0;
          font-size: 16px;
          font-weight: 600;
          color: #667eea;
        }

        .path p {
          margin: 0;
          font-size: 15px;
          color: #555;
          line-height: 1.6;
        }

        .next-project {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 0; /* Reduced from 80px */
          text-align: center;
        }

        .next-content h3 {
          margin: 0 0 16px 0;
          font-size: 32px;
          font-weight: 600;
        }

        .next-content p {
          margin: 0 0 32px 0;
          font-size: 18px;
          opacity: 0.9;
        }

        .next-button {
          background: white;
          color: #667eea;
          border: none;
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .next-button:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-image-section {
            padding: 20px 0;
          }
          
          .hero-image-container {
            width: 85%;
            border-radius: 12px;
          }
          
          .hero-image-container img {
            max-height: 250px;
          }

          .content-section {
            padding: 30px 0; /* Further reduced for mobile */
          }

          .content-section:first-of-type {
            padding-top: 25px; /* Less space after hero on mobile */
          }

          .container {
            padding: 0 16px;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .findings-grid {
            grid-template-columns: 1fr;
          }

          .demo-grid {
            grid-template-columns: 1fr;
          }

          .risk-analysis {
            grid-template-columns: 1fr;
          }

          .sem-content {
            grid-template-columns: 1fr;
          }

          .demo-stats {
            grid-template-columns: 1fr;
          }

          .stats {
            flex-direction: column;
            gap: 16px;
          }

          .hero-meta {
            flex-direction: column !important;
            gap: 16px !important;
          }

          .regression-images {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .regression-card {
            padding: 20px;
          }

          .regression-results {
            padding: 24px;
            margin-bottom: 36px; /* Reduced mobile spacing */
          }

          .sem-analysis-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .sem-card.large, .sem-card.small {
            padding: 20px;
            max-width: 100%;
            margin: 0;
          }

          .segmentation-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .future-work-card {
            padding: 32px 24px;
          }

          .future-work-card h3 {
            font-size: 24px;
          }

          .future-work-card > p {
            font-size: 16px;
          }

          .factors-grid {
            grid-template-columns: 1fr;
          }

          .factor-tag {
            font-size: 12px;
            padding: 6px 10px;
          }

          .content-section h1 {
            font-size: 36px !important;
          }

          .content-section h2 {
            font-size: 28px;
          }

          .section-title {
            font-size: 28px;
          }

          .next-content h3 {
            font-size: 28px;
          }

          .next-content p {
            font-size: 16px;
          }

          .next-project {
            padding: 40px 0; /* Reduced mobile padding */
          }
        }

        @media (max-width: 480px) {
          .content-section h1 {
            font-size: 28px !important;
          }

          .content-section h2 {
            font-size: 24px;
          }

          .section-title {
            font-size: 24px;
          }

          .regression-results h3 {
            font-size: 24px;
          }

          .sem-results-section h3 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default DropoutCaseStudy;