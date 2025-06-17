import React, { useEffect } from 'react';
import { ArrowLeft, Users, BarChart3, Calendar, School } from 'lucide-react';
import './KanoCaseStudy.css';

const KanoCaseStudy = ({ onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study">
      {/* Navigation */}
      <nav className="case-nav">
        <div className="container">
          <button onClick={onBack} className="back-button">
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="hero-image-section">
        <div className="hero-image-container">
          <img src="/images/kano.jpg" alt="Kano Analysis Research Overview" />
        </div>
      </section>

      {/* Title Section */}
      <section className="title-section">
        <div className="container">
          <h1 className="case-title">Feature Prioritization for Educational Platform</h1>
          <p className="case-subtitle">Product Strategy Research</p>
          <p className="case-description">
            <strong>Client:</strong> Online Learning Institution • <strong>Timeline:</strong> September 2024 • <strong>My role:</strong> UX Researcher
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-item">
              <Calendar className="overview-icon" />
              <h3>Timeline</h3>
              <p>4 weeks from survey design to final recommendations</p>
            </div>
            <div className="overview-item">
              <Users className="overview-icon" />
              <h3>Participants</h3>
              <p>248 students across 4 academic programs</p>
            </div>
            <div className="overview-item">
              <School className="overview-icon" />
              <h3>Programs</h3>
              <p>Engineering, Health Sciences, Business, Education</p>
            </div>
            <div className="overview-item">
              <BarChart3 className="overview-icon" />
              <h3>Method</h3>
              <p>Kano analysis with functional and dysfunctional question pairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Method Section */}
      <section className="problem-method-section">
        <div className="container">
          <h2>Challenge & Research Approach</h2>
          
          {/* Challenge Content */}
          <div className="problem-content">
            <div className="problem-text">
              <p>
                The university needed to prioritize which features to develop for their online learning platform. 
                With limited resources and multiple potential features, they required data-driven insights to understand 
                which features would have the greatest impact on student satisfaction and learning outcomes.
              </p>
            </div>
            <div className="problem-highlights">
              <h4>Goals of this research:</h4>
              <ul>
                <li>Identify priorities for course curriculum features on the student portal</li>
                <li>Understand learners' reactions to different features using Kano methodology</li>
                <li>Classify features as must-be, one-dimensional, attractive, indifferent, or reverse</li>
                <li>Provide actionable recommendations for development prioritization</li>
              </ul>
            </div>
          </div>

          {/* Method Content */}
          <div className="method-content">
            <div className="method-intro">
              <h3>Research Method</h3>
              <p>
                The Kano model is a quantitative survey method that reveals customer reactions and preferences. 
                Each feature was evaluated using both functional and dysfunctional question pairs to understand user sentiment comprehensively.
              </p>
            </div>
            
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">01</div>
                <h4>Demographic Data</h4>
                <p>
                  Collected participant information across different programs to ensure representative sampling.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <h4>Kano Survey</h4>
                <p>
                  Implemented using Qualtrics with functional and dysfunctional question pairs for each feature.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <h4>Qualitative Analysis</h4>
                <p>
                  Analyzed user comments to understand the reasoning behind quantitative responses.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">04</div>
                <h4>Feature Classification</h4>
                <p>
                  Used Kano evaluation matrix to classify features as attractive, performance, must-be, indifferent, or reverse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Analyzed */}
      <section className="features-section">
        <div className="container">
          <h2>Features Analyzed</h2>
          <p className="section-intro">Five key features were evaluated across all user groups to understand their impact on student satisfaction and learning experience.</p>
          
          {/* Featured Examples with Images */}
          <div className="featured-examples">
            <div className="feature-example">
              <div className="feature-example-content">
                <h3>Notes & Annotation System</h3>
                <p className="feature-description">
                  A comprehensive annotation system that allows students to highlight sections of course materials, 
                  add sticky notes, and save important course pages. Students can create personal study collections 
                  and organize their learning materials effectively.
                </p>
                <div className="feature-details">
                  <h4>Key Capabilities:</h4>
                  <ul>
                    <li>Highlight text selections with color coding</li>
                    <li>Add contextual sticky notes and comments</li>
                    <li>Save and bookmark important course sections</li>
                    <li>Create personalized study collections</li>
                  </ul>
                </div>
              </div>
              <div className="feature-example-image">
                <img src="/images/annotation-feature.jpg" alt="Notes and annotation feature showing highlighted text and sticky notes interface" />
              </div>
            </div>

            <div className="feature-example reverse">
              <div className="feature-example-content">
                <h3>Mentor Tagging System</h3>
                <p className="feature-description">
                  An intelligent communication feature that enables students to directly alert faculty and staff 
                  when posting questions or comments. The system provides mentor suggestions and facilitates 
                  seamless student-instructor interaction.
                </p>
                <div className="feature-details">
                  <h4>Key Capabilities:</h4>
                  <ul>
                    <li>@ mention functionality for direct communication</li>
                    <li>Smart mentor suggestions based on course context</li>
                    <li>Integrated discussion threads with faculty</li>
                    <li>Real-time notifications for tagged mentors</li>
                  </ul>
                </div>
              </div>
              <div className="feature-example-image">
                <img src="/images/mentor-tagging.jpg" alt="Mentor tagging interface showing @mention suggestions and conversation thread" />
              </div>
            </div>

            <div className="feature-example">
              <div className="feature-example-content">
                <h3>Collapsible/Expandable Item</h3>
                <p className="feature-description">
                  Dynamic content management that allows students to expand and collapse course sections 
                  based on their learning needs. This feature helps manage information density and creates 
                  a personalized navigation experience through course materials.
                </p>
                <div className="feature-details">
                  <h4>Key Capabilities:</h4>
                  <ul>
                    <li>Expandable and collapsible content sections</li>
                    <li>Improved page organization and readability</li>
                    <li>Customizable content visibility preferences</li>
                    <li>Enhanced focus on relevant course materials</li>
                  </ul>
                </div>
              </div>
              <div className="feature-example-image">
                <img src="/images/collapsible.jpg" alt="Collapsible content interface showing expandable course sections and navigation" />
              </div>
            </div>

            <div className="feature-example reverse">
              <div className="feature-example-content">
                <h3>Adaptive Course Content</h3>
                <p className="feature-description">
                  AI-powered personalized learning system that analyzes student performance and learning 
                  patterns to provide tailored content recommendations. The system adapts to individual 
                  learning styles and suggests relevant resources for improved outcomes.
                </p>
                <div className="feature-details">
                  <h4>Key Capabilities:</h4>
                  <ul>
                    <li>Personalized resource recommendations</li>
                    <li>Assessment-based content adaptation</li>
                    <li>Learning pattern analysis and insights</li>
                    <li>Intelligent study path suggestions</li>
                  </ul>
                </div>
              </div>
              <div className="feature-example-image">
                <img src="/images/Adaptive.jpg" alt="Adaptive content system showing personalized recommendations and learning analytics" />
              </div>
            </div>

            <div className="feature-example">
              <div className="feature-example-content">
                <h3>Task Scheduler</h3>
                <p className="feature-description">
                  Comprehensive task management system designed specifically for online learning environments. 
                  Students can organize assignments, set study reminders, track progress, and manage deadlines 
                  across multiple courses with intelligent scheduling recommendations.
                </p>
                <div className="feature-details">
                  <h4>Key Capabilities:</h4>
                  <ul>
                    <li>Assignment and deadline tracking across courses</li>
                    <li>Smart study session scheduling and reminders</li>
                    <li>Progress visualization and milestone tracking</li>
                    <li>Integration with course calendar and notifications</li>
                  </ul>
                </div>
              </div>
              <div className="feature-example-image">
                <img src="/images/task-scheduler.jpg" alt="Task scheduler interface showing assignment deadlines, study reminders, and progress tracking" />
              </div>
            </div>
          </div>

          {/* Results Note */}
          <div className="features-note">
            <p><em>All five features were systematically evaluated using Kano methodology to determine their impact on student satisfaction and learning outcomes.</em></p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <h2>Analysis Methodology & Key Findings</h2>
          
          {/* Analysis Steps */}
          <div className="analysis-methodology">
            <h3>Step-by-Step Kano Analysis Process</h3>
            <p className="methodology-intro">
              Our analysis followed a systematic approach to classify features and determine their impact on student satisfaction across all academic programs.
            </p>
            
            <div className="analysis-steps">
              <div className="analysis-step">
                <div className="step-header">
                  <div className="step-badge">01</div>
                  <h4>Kano Classification Matrix Creation</h4>
                </div>
                <p>
                  For each feature across all four programs, we created detailed classification matrices by analyzing 
                  functional and dysfunctional question responses to determine feature categories and percentages.
                </p>
                <div className="analysis-image">
                  <img src="/images/kano-matrix.jpg" alt="Kano classification matrix showing feature categorization across functional and dysfunctional responses" />
                  <p className="image-caption">Example: Kano classification matrix showing percentage distribution across categories (A=Attractive, M=Must-be, P=Performance, I=Indifferent, R=Reverse)</p>
                </div>
              </div>

              <div className="analysis-step">
                <div className="step-header">
                  <div className="step-badge">02</div>
                  <h4>Customer Satisfaction Coefficient Calculation</h4>
                </div>
                <div className="formula-layout">
                  <div className="formula-content">
                    <div className="formula-box">
                      <h5>Satisfaction Coefficient (CS+)</h5>
                      <div className="formula">
                        CS<sup>+</sup> = <div className="fraction">
                          <div className="numerator">A + O</div>
                          <div className="denominator">A + O + M + I</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="formula-box">
                      <h5>Dissatisfaction Coefficient (CS-)</h5>
                      <div className="formula">
                        CS<sup>-</sup> = -1 × <div className="fraction">
                          <div className="numerator">O + M</div>
                          <div className="denominator">A + O + M + I</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="formula-legend">
                      <strong>Where:</strong><br />
                      A = Attractive, O = One-dimensional (Performance)<br />
                      M = Must-be, I = Indifferent
                    </div>
                  </div>
                  <div className="formula-description">
                    <p>
                      We computed satisfaction and dissatisfaction coefficients using established Kano formulas to 
                      quantify the impact of each feature on student satisfaction and dissatisfaction levels.
                    </p>
                    <p>
                      <strong>CS+</strong> measures how much satisfaction increases when a feature is present, 
                      while <strong>CS-</strong> measures how much dissatisfaction occurs when a feature is absent. 
                      These coefficients help prioritize features based on their emotional impact on users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="analysis-step">
                <div className="step-header">
                  <div className="step-badge">03</div>
                  <h4>2D Positioning & Feature Classification</h4>
                </div>
                <div className="positioning-layout">
                  <div className="positioning-image">
                    <img src="/images/2d-positioning.jpg" alt="2D scatter plot showing features positioned by satisfaction and dissatisfaction coefficients" />
                  </div>
                  <div className="positioning-description">
                    <p>
                      Features were plotted on a 2D satisfaction-dissatisfaction space to visualize their positioning 
                      and determine final classifications as Excitement, Performance, or Threshold attributes.
                    </p>
                    <div className="classification-guide">
                      <h5>Classification Regions:</h5>
                      <ul>
                        <li><strong>Excitement Attributes:</strong> High CS+, Low |CS-|</li>
                        <li><strong>Performance Attributes:</strong> High CS+, High |CS-|</li>
                        <li><strong>Threshold Attributes:</strong> Low CS+, High |CS-|</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="analysis-step">
                <div className="step-header">
                  <div className="step-badge">04</div>
                  <h4>Importance Analysis & Feature Ranking</h4>
                </div>
                <p>
                  We analyzed responses to importance-level questions and combined them with Kano classifications 
                  to create a comprehensive feature ranking for development prioritization across each academic program.
                </p>
                
                {/* Program-specific 2D Charts */}
                <div className="program-charts">
                  <h5>2D Positioning by Academic Program</h5>
                  <p className="charts-description">
                    Each program showed unique patterns in feature positioning and importance rankings, 
                    providing insights into discipline-specific learning preferences and priorities.
                  </p>
                  
                  <div className="charts-grid">
                    <div className="chart-item">
                      <h6>College of Information Technology</h6>
                      <div className="chart-image">
                        <img src="/images/Kano/IT.jpg" alt="2D positioning chart for College of Information Technology showing feature distribution and importance ranking" />
                      </div>
                      <p className="chart-caption">n=59 students</p>
                    </div>
                    
                    <div className="chart-item">
                      <h6>College of Health</h6>
                      <div className="chart-image">
                        <img src="/images/Kano/HE.jpg" alt="2D positioning chart for College of Health showing feature distribution and importance ranking" />
                      </div>
                      <p className="chart-caption">n=53 students</p>
                    </div>
                    
                    <div className="chart-item">
                      <h6>College of Business</h6>
                      <div className="chart-image">
                        <img src="/images/Kano/BU.jpg" alt="2D positioning chart for College of Business showing feature distribution and importance ranking" />
                      </div>
                      <p className="chart-caption">n=59 students</p>
                    </div>
                    
                    <div className="chart-item">
                      <h6>Teacher College</h6>
                      <div className="chart-image">
                        <img src="/images/Kano/TC.jpg" alt="2D positioning chart for Teacher College showing feature distribution and importance ranking" />
                      </div>
                      <p className="chart-caption">n=77 students</p>
                    </div>
                  </div>
                </div>
                
                <div className="ranking-summary">
                  <h5>Final Feature Priority Ranking:</h5>
                  <p className="ranking-intro">
                    Based on cross-program analysis of satisfaction coefficients and importance ratings, 
                    the following priority order emerged for development implementation:
                  </p>
                  <ol className="priority-list">
                    <li><strong>Notes & Annotation System</strong> - Highest satisfaction impact across all programs</li>
                    <li><strong>Adaptive Course Content</strong> - Strong personalization value for learning outcomes</li>
                    <li><strong>Task Scheduler</strong> - Critical for time management and organization</li>
                    <li><strong>Mentor Tagging System</strong> - Important for communication and support</li>
                    <li><strong>Collapsible/Expandable Items</strong> - Useful for content organization</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="findings-highlight">
            <div className="finding-item">
              <h4>Cross-Program Consistency</h4>
              <p>
                Most features were classified as <strong>Attractive</strong> across all programs, 
                indicating they delight users when present but don't cause dissatisfaction when absent.
              </p>
            </div>
            <div className="finding-item">
              <h4>Priority Recommendations</h4>
              <p>
                Notes and Adaptive Content emerged as the highest-priority features with strong 
                positive satisfaction coefficients across all user groups.
              </p>
            </div>
          </div>

          {/* Results Table */}
          <div className="results-table">
            <table>
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Notes</th>
                  <th>Tagging Mentors</th>
                  <th>Task Scheduler</th>
                  <th>Adaptive Content</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Engineering (n=59)</strong></td>
                  <td><span className="attractive">Attractive</span></td>
                  <td><span className="attractive">Attractive</span></td>
                  <td><span className="attractive">Attractive</span></td>
                  <td><span className="attractive">Attractive</span></td>
                </tr>
                <tr>
                  <td><strong>Health Sciences (n=53)</strong></td>
                  <td><span className="attractive">Attractive</span></td>
                  <td><span className="attractive">Attractive</span></td>
                  <td><span className="attractive">Attractive</span></td>
                  <td><span className="attractive">Attractive</span></td>
                </tr>
                <tr>
                  <td><strong>Business (n=59)</strong></td>
                  <td><span className="attractive">Attractive</span></td>
                  <td><span className="indifferent">Indifferent</span></td>
                  <td><span className="indifferent">Indifferent</span></td>
                  <td><span className="attractive">Attractive</span></td>
                </tr>
                <tr>
                  <td><strong>Education (n=77)</strong></td>
                  <td><span className="attractive">Attractive</span></td>
                  <td><span className="attractive">Attractive</span></td>
                  <td><span className="attractive">Attractive</span></td>
                  <td><span className="attractive">Attractive</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Word Cloud Section */}
      <section className="word-cloud-section">
        <div className="container">
          <h2>Qualitative Insights: User Voice Analysis</h2>
          <p className="section-intro">
            Following the quantitative Kano analysis, we collected qualitative responses from participants asking 
            "Why did you feel this way about this feature?" Word clouds below visualize the most frequent themes 
            and sentiments expressed by students for two features as examples across all programs.
          </p>
          
          <div className="word-cloud-examples">
            <div className="word-cloud-item">
              <div className="word-cloud-content">
                <h3>Mentor Tagging System</h3>
                <p className="word-cloud-description">
                  Students emphasized themes around <strong>communication</strong>, <strong>support</strong>, and 
                  <strong>accessibility</strong>. Many responses highlighted the value of direct faculty connection 
                  and improved learning support through streamlined communication channels.
                </p>
                <div className="word-cloud-insights">
                  <h4>Key Themes:</h4>
                  <ul>
                    <li><strong>Communication:</strong> "Easy to reach instructors," "Direct contact with faculty"</li>
                    <li><strong>Support:</strong> "Better help when needed," "Quick assistance"</li>
                    <li><strong>Efficiency:</strong> "Saves time," "Streamlined process"</li>
                  </ul>
                </div>
              </div>
              <div className="word-cloud-image">
                <img src="/images/Kano/wordcloud-mentor.jpg" alt="Word cloud visualization showing student responses about mentor tagging feature, with prominent words like communication, support, helpful, and faculty" />
                <p className="image-caption">Word cloud generated from 248 student responses about mentor tagging functionality</p>
              </div>
            </div>

            <div className="word-cloud-item reverse">
              <div className="word-cloud-content">
                <h3>Task Scheduler</h3>
                <p className="word-cloud-description">
                  Student responses centered on <strong>organization</strong>, <strong>time management</strong>, and 
                  <strong>productivity</strong>. Many emphasized the importance of deadline tracking and structured 
                  learning approaches for academic success.
                </p>
                <div className="word-cloud-insights">
                  <h4>Key Themes:</h4>
                  <ul>
                    <li><strong>Organization:</strong> "Keeps me organized," "Better structure"</li>
                    <li><strong>Time Management:</strong> "Helps with deadlines," "Efficient planning"</li>
                    <li><strong>Stress Reduction:</strong> "Less overwhelming," "Peace of mind"</li>
                  </ul>
                </div>
              </div>
              <div className="word-cloud-image">
                <img src="/images/Kano/wordcloud-scheduler.jpg" alt="Word cloud visualization showing student responses about task scheduler feature, with prominent words like organization, deadlines, helpful, and planning" />
                <p className="image-caption">Word cloud generated from 248 student responses about task scheduling functionality</p>
              </div>
            </div>
          </div>

          <div className="qualitative-summary">
            <h3>Qualitative Analysis Summary</h3>
            <p>
              The word cloud analysis revealed consistent themes across features, with students emphasizing {' '}
              <strong>efficiency</strong>, <strong>support</strong>, and <strong>organization</strong> as primary 
              motivators. These qualitative insights validated our quantitative Kano classifications and provided 
              deeper context for understanding user satisfaction drivers.
            </p>
            <div className="methodology-note">
              <p><em>Word clouds were generated using qualitative responses from all 248 participants. Text analysis 
              excluded common stop words and focused on meaningful descriptive terms and phrases.</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2>Impact & Outcome</h2>
          
          <div className="impact-stats">
            <div className="stat-item">
              <div className="stat-number">248</div>
              <div className="stat-label">Students surveyed across 4 programs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Features prioritized with clear development order</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Programs showed consistent top preferences</div>
            </div>
          </div>

          <div className="impact-details">
            <h3>How this research helped the institution:</h3>
            <ul className="impact-list">
              <li><strong>Data-driven prioritization:</strong> Replaced subjective feature decisions with quantitative user satisfaction data</li>
              <li><strong>Resource optimization:</strong> Enabled focused development efforts on highest-impact features first</li>
              <li><strong>User-centered strategy:</strong> Established framework for ongoing feature evaluation and student feedback integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="next-steps">
        <div className="container">
          <h2>Next Steps</h2>
          <p>
            The research provided clear development priorities, with Notes and Adaptive Content 
            features recommended for immediate implementation, followed by Task Scheduler and 
            Tagging Mentors based on program-specific needs and resource availability.
          </p>
        </div>
      </section>
    </div>
  );
};

export default KanoCaseStudy;