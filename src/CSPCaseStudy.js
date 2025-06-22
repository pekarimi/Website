import React from 'react';
import { ArrowLeft, Users, Brain, Lightbulb, Target, BarChart3, Palette } from 'lucide-react';

const CSPCaseStudy = ({ onBack }) => {
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
        <div className="hero-image-container-csp">
          <img src="/images/CSP/csp-interface.png" alt="Creative Sketching Partner Interface showing user and AI collaboration" />
        </div>
      </section>

      {/* Project Overview */}
      <section className="content-section">
        <div className="container">
          <h2>The Challenge</h2>
          <p>
            Designers often experience design fixation - the inability to move beyond their first ideas when sketching. 
            This mental block prevents designers from exploring the full creative space and limits innovative solutions. 
            Traditional design tools provide limited support for breaking out of fixation patterns, particularly during 
            the critical conceptual design phase where creativity is most essential.
          </p>

          {/* Project Details Row */}
          <div className="project-details-row">
            <div className="detail-item">
              <span className="detail-label">Timeline</span>
              <span className="detail-value">2020</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Role</span>
              <span className="detail-value">Lead Researcher & AI System Designer</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Research Methods</span>
              <span className="detail-value">User study, Interaction behavior analysis, Think-aloud protocol, Thematic analysis</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Participants</span>
              <span className="detail-value">50 design students</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Publication</span>
              <span className="detail-value">ACM IUI 2020 Conference</span>
            </div>
          </div>

          <div className="content-main">
              <h2>Research Approach</h2>
              <p>
                I developed the Creative Sketching Partner (CSP), an AI-powered co-creative system that collaborates 
                with designers in real-time during sketching tasks. The system uses deep learning models trained on 
                the QuickDraw! dataset (345 categories, 50+ million sketches) to provide inspirational sketches based 
                on controllable visual and conceptual similarity measures.
              </p>

              <div className="system-overview-section">
                <h3>System Architecture</h3>
                <p>
                  The CSP system operates through two main AI components: a CNN-LSTM architecture for visual similarity 
                  mapping and a word embedding model for conceptual similarity. Users can control the degree of both 
                  visual and conceptual similarity through interactive sliders, enabling them to receive inspirational 
                  sketches that range from structurally similar to conceptually related objects from different categories.
                </p>
                <div className="prototype-image system-arch-image">
                  <img src="/images/CSP/system-architecture.png" alt="CSP system architecture showing CNN-LSTM model for visual similarity and word embedding for conceptual similarity" />
                  <p className="image-caption">Figure 1: CSP system architecture combining visual similarity (CNN-LSTM) and conceptual similarity (word embeddings) models</p>
                </div>
              </div>

              <div className="user-interface-section">
                <h3>User Interface Design</h3>
                <p>
                  The interface facilitates turn-taking between the user and AI agent. Designers work on their sketch 
                  in the left panel, adjust similarity preferences via sliders, and request inspiration from the system. 
                  The AI responds with a labeled sketch from a different category in the right panel, enabling users to 
                  incorporate new ideas through visual and conceptual connections.
                </p>
                <div className="prototype-image medium-image">
                  <img src="/images/CSP/interface-components.png" alt="CSP interface showing design task panel, similarity sliders, user drawing canvas, and AI response canvas" />
                  <p className="image-caption">Figure 2: CSP interface components: (A) Design task, (B) Similarity controls, (C) Inspire me button, (D) Start again, (E) Drawing modes, (F) User canvas, (G) AI response canvas</p>
                </div>
              </div>

              <h2>User Study Design</h2>
              <div className="study-overview-highlight">
                <div className="study-stats">
                  <div className="stat-item">
                    <span className="stat-number">50</span>
                    <span className="stat-label">Architecture Students</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">25♀ 25♂</span>
                    <span className="stat-label">Gender Balance</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">15-20</span>
                    <span className="stat-label">Minutes per Session</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3</span>
                    <span className="stat-label">AI Inspirations Required</span>
                  </div>
                </div>
                <div className="study-task">
                  <h4>"Design a bridge to cross a river near a national park"</h4>
                  <p>Each participant worked on this consistent design challenge to ensure comparable results across all sessions.</p>
                </div>
              </div>

              <div className="study-methodology">
                <h3>Data Collection & Analysis Methods</h3>
                <div className="methodology-grid">
                  <div className="method-card">
                    <Brain className="method-icon" size={24} />
                    <h4>Creativity Analysis</h4>
                    <p>Coded participants' sketches using Boden's creativity framework: combinatorial, exploratory, and transformational creativity types</p>
                  </div>
                  <div className="method-card">
                    <BarChart3 className="method-icon" size={24} />
                    <h4>Interaction Behavior</h4>
                    <p>Screen recordings analyzed and coded for drawing, erasing, inspiration-seeking, and idle behaviors using K-means clustering</p>
                  </div>
                  <div className="method-card">
                    <Users className="method-icon" size={24} />
                    <h4>Think-Aloud Protocol</h4>
                    <p>Retrospective interviews with participants watching their interaction videos to understand design thinking processes</p>
                  </div>
                </div>
              </div>

              <h2>Key Research Findings</h2>
              
              <div className="creativity-analysis-section">
                <h3>Types of Design Creativity</h3>
                <div className="creativity-intro">
                  <p>I analyzed participants' creative responses using Boden's three-part creativity framework, revealing distinct patterns in how AI similarity influenced different types of creative output.</p>
                </div>
                <div className="prototype-image">
                  <img src="/images/CSP/creativity-examples.png" alt="Examples of three creativity types: combinatorial showing fence added to bridge, exploratory showing bridge parameter changes, transformational showing lamp posts added as new function" />
                  <p className="image-caption">Figure 3: Examples of three creativity types - Combinatorial: adding fence elements to bridge; Exploratory: changing bridge parameters; Transformational: adding lamp posts as new function</p>
                </div>
                
                <div className="creativity-types-grid">
                  <div className="creativity-type-card combinatorial">
                    <div className="creativity-icon">🔗</div>
                    <h4>Combinatorial Creativity</h4>
                    <p>Users combined elements from the AI's sketch with their current design, typically occurring with high visual and conceptual similarity (53% of high-high similarity cases).</p>
                  </div>
                  <div className="creativity-type-card exploratory">
                    <div className="creativity-icon">🔍</div>
                    <h4>Exploratory Creativity</h4>
                    <p>Participants modified parameters like size, scale, or orientation, often adding contextual elements like landscapes around their bridge designs.</p>
                  </div>
                  <div className="creativity-type-card transformational">
                    <div className="creativity-icon">⚡</div>
                    <h4>Transformational Creativity</h4>
                    <p>Complete conceptual shifts occurred, especially with low similarity conditions (100% of low-low similarity cases), leading to radical design changes.</p>
                  </div>
                </div>
              </div>

              <div className="similarity-patterns-section">
                <h3>Similarity Patterns & Creative Responses</h3>
                <div className="pattern-intro">
                  <p>Our analysis revealed fascinating correlations between AI similarity settings and the types of creativity they sparked in designers.</p>
                </div>
                <div className="prototype-image medium-image">
                  <img src="/images/CSP/creativity-distribution.png" alt="Grid showing distribution of creativity types across nine similarity conditions from high-high to low-low visual and conceptual similarity" />
                  <p className="image-caption">Figure 4: Distribution of creativity types across nine similarity conditions showing relationship between similarity levels and creative responses</p>
                </div>
                
                <div className="findings-summary">
                  <h4>Key Pattern Discoveries</h4>
                  <ul>
                    <li><strong>High Visual + High Conceptual Similarity:</strong> 53% combinatorial creativity - users combined similar structural elements</li>
                    <li><strong>High Visual + Low Conceptual Similarity:</strong> Progressive increase in transformational creativity as users reinterpreted designs in new contexts</li>
                    <li><strong>Low Visual + Low Conceptual Similarity:</strong> 100% transformational creativity - complete conceptual shifts in design approach</li>
                    <li><strong>Medium Similarity Conditions:</strong> Balanced distribution between exploratory and transformational creativity</li>
                  </ul>
                </div>
              </div>

              <div className="interaction-behavior-section">
                <h3>Interaction Behavior Clusters</h3>
                <div className="behavior-intro">
                  <p>Through K-means clustering analysis of user interaction patterns, I identified three distinct designer personalities in their collaboration with AI.</p>
                </div>
                
                <div className="behavior-images-grid-fixed">
                  <div className="behavior-scatter-fixed">
                    <img src="/images/CSP/behavior-clusters.png" alt="Scatter plot showing three distinct clusters of user behavior based on drawing time vs inspiration-seeking time" />
                    <p className="image-caption">Figure 5a: Three interaction behavior clusters identified through K-means analysis of drawing and inspiration-seeking patterns</p>
                  </div>
                  <div className="behavior-table-fixed">
                    <img src="/images/CSP/behavior-correlation.png" alt="Table showing correlation between interaction clusters and creativity types with percentages for combinatorial, exploratory, and transformational creativity" />
                    <p className="image-caption">Figure 5b: Correlation between interaction behavior clusters and creativity types showing statistical distribution across C (Combinatorial), E (Exploratory), and T (Transformational) creativity</p>
                  </div>
                </div>
                
                <div className="cluster-analysis">
                  <h4>Behavioral Patterns & Creativity Correlation</h4>
                  <div className="cluster-grid">
                    <div className="cluster-card">
                      <h5>Cluster 1: High Inspiration Seekers</h5>
                      <p>64.3% completed with exploratory creativity. These users frequently requested AI inspiration and made parametric changes to their designs.</p>
                    </div>
                    <div className="cluster-card">
                      <h5>Cluster 2: Balanced Creators</h5>
                      <p>Even distribution across creativity types (44.5% transformational, 33.3% exploratory, 22.2% combinatorial).</p>
                    </div>
                    <div className="cluster-card">
                      <h5>Cluster 3: Independent Drawers</h5>
                      <p>50% transformational creativity. Spent maximum time drawing with minimal inspiration-seeking, leading to radical design changes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2>User Experience Insights</h2>
              
              <div className="thematic-analysis-section">
                <h3>Thematic Analysis Results</h3>
                <p>
                  Through retrospective interviews and thematic analysis, I identified three major themes describing 
                  how the CSP system supported the design process:
                </p>
                
                <div className="theme-cards">
                  <div className="theme-card">
                    <Lightbulb className="theme-icon" size={32} />
                    <h4>Design Ideation Support</h4>
                    <p>
                      "It did inspire me. Especially if I was working on a project I think that would really help. 
                      Most likely the initial parts of the design." - P45
                    </p>
                    <p>
                      The CSP proved particularly valuable during early design stages, helping participants overcome 
                      blank page syndrome and rapidly generate multiple design iterations.
                    </p>
                  </div>
                  
                  <div className="theme-card">
                    <Target className="theme-icon" size={32} />
                    <h4>Fixation Breaking</h4>
                    <p>
                      "I think the conceptual one was more inspiring to me personally... With the conceptual one I 
                      could re-interpret it in any way I wanted to." - P39
                    </p>
                    <p>
                      Conceptual similarity helped users connect disparate ideas and reinterpret their designs in 
                      new domains, successfully breaking design fixation patterns.
                    </p>
                  </div>
                  
                  <div className="theme-card">
                    <Palette className="theme-icon" size={32} />
                    <h4>Variable Similarity Benefits</h4>
                    <p>
                      "I think low similarity is more inspiring. Because part of it is art and art is not about making 
                      things exactly like each other but it's about having things or shapes in unexpected places." - P26
                    </p>
                    <p>
                      64% of participants found low similarity more inspiring for creative exploration, while high 
                      similarity helped with design refinement and detail addition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="educational-impact-section">
                <h3>Educational Design Applications</h3>
                <div className="education-intro">
                  <p>Participants consistently highlighted the transformative potential of AI-powered co-creative tools in design education, particularly for overcoming creative blocks and generating rapid iterations.</p>
                </div>
                
                <div className="education-applications-grid">
                  <div className="application-card">
                    <div className="application-icon">🎓</div>
                    <h4>Iteration Exercises</h4>
                    <p>Students can rapidly generate multiple design variations without getting stuck on their first idea, addressing the common challenge of design fixation in educational settings.</p>
                  </div>
                  <div className="application-card">
                    <div className="application-icon">💡</div>
                    <h4>Ideation Workshops</h4>
                    <p>Group design sessions where AI provides diverse inspiration sources, helping students explore unexpected creative directions and learn from cross-domain connections.</p>
                  </div>
                  <div className="application-card">
                    <div className="application-icon">🧠</div>
                    <h4>Creativity Training</h4>
                    <p>Structured exercises using different similarity levels to teach students about combinatorial, exploratory, and transformational creativity approaches.</p>
                  </div>
                </div>
                
                <div className="education-quote">
                  <blockquote>
                    "I would love to use it when my teachers would ask me to produce iterations and I get to a point where I am just lost... having something to just constantly have new ideas pop in your head is really helpful"
                  </blockquote>
                  <cite>— Participant P15</cite>
                </div>
              </div>

              <h2>Research Impact & Significance</h2>
              
              <div className="impact-metrics">
                <h3>Quantitative Results</h3>
                <div className="metrics-grid">
                  <div className="metric-card-accessible">
                    <h4>150</h4>
                    <p>Design sketches analyzed across creativity types</p>
                  </div>
                  <div className="metric-card-accessible">
                    <h4>Chi² = 10.798</h4>
                    <p>Significant correlation (p&lt;0.05) between interaction behavior and creativity</p>
                  </div>
                  <div className="metric-card-accessible">
                    <h4>64%</h4>
                    <p>Participants preferred low similarity for creative inspiration</p>
                  </div>
                  <div className="metric-card-accessible">
                    <h4>3 Clusters</h4>
                    <p>Distinct interaction behavior patterns identified</p>
                  </div>
                </div>
              </div>

              <div className="research-contributions">
                <h3>Theoretical Contributions</h3>
                <div className="contribution-card">
                  <h4>Human-AI Co-creativity Framework</h4>
                  <p>
                    Established empirical evidence that controllable AI similarity measures can systematically influence 
                    different types of design creativity, providing a framework for designing AI creative partners.
                  </p>
                </div>
                
                <div className="contribution-card">
                  <h4>Interaction-Creativity Correlation</h4>
                  <p>
                    First study to demonstrate significant correlation between designers' interaction behaviors with AI 
                    systems and their creative output types, informing future co-creative system design.
                  </p>
                </div>
                
                <div className="contribution-card">
                  <h4>Fixation Breaking Mechanisms</h4>
                  <p>
                    Provided evidence that conceptual similarity mapping can effectively trigger "seeing-as" perception 
                    modes, helping designers overcome design fixation through cross-domain inspiration.
                  </p>
                </div>
              </div>

              <h2>Future Research Directions</h2>
              <p>
                This research opens several avenues for future investigation in human-AI co-creativity. Future work 
                should explore the long-term effects of AI collaboration on designers' creative processes, investigate 
                optimal timing for AI intervention during design sessions, and develop personalized similarity measures 
                that adapt to individual designers' creative preferences and expertise levels.
              </p>

              <div className="future-directions">
                <h3>Ongoing & Future Studies</h3>
                <div className="future-grid">
                  <div className="future-card">
                    <h4>Longitudinal Creative Development</h4>
                    <p>Investigating how extended use of AI creative partners affects designers' independent creative abilities and ideation strategies over time.</p>
                  </div>
                  <div className="future-card">
                    <h4>Personalized AI Collaboration</h4>
                    <p>Developing adaptive systems that learn individual designers' creative preferences and adjust similarity recommendations accordingly.</p>
                  </div>
                  <div className="future-card">
                    <h4>Domain-Specific Applications</h4>
                    <p>Extending the co-creative framework to other design domains including product design, architecture, and digital interface design.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default CSPCaseStudy;