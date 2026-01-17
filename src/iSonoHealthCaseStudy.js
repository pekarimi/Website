import React, { useEffect } from 'react';
import { ArrowLeft, Users, Target, Calendar, Stethoscope, FileText, Crosshair, CheckCircle, GitCompare, UserCheck } from 'lucide-react';
import './iSonoHealthCaseStudy.css';

const ISonoHealthCaseStudy = ({ onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study isono-case-study">
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
      <section className="hero-image-section isono-hero">
        <div className="hero-image-container">
          <img src="/images/isono/createreport4.png" alt="iSono Health Medical Interface Design - Comparison Mode" />
        </div>
      </section>

      {/* Title Section */}
      <section className="title-section">
        <div className="container">
          <h1 className="case-title">Medical Imaging Interface Design</h1>
          <p className="case-subtitle">Healthcare UX for Breast Ultrasound Systems</p>
          <p className="case-description">
            <strong>Client:</strong> iSono Health • <strong>Timeline:</strong> 2025 • <strong>My role:</strong> UX Design Consultant
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
              <p>Ongoing design consultation for iterative product development</p>
            </div>
            <div className="overview-item">
              <Users className="overview-icon" />
              <h3>Users</h3>
              <p>Radiologists, sonographers, and clinical staff</p>
            </div>
            <div className="overview-item">
              <Stethoscope className="overview-icon" />
              <h3>Domain</h3>
              <p>Automated breast ultrasound (ABUS) imaging systems</p>
            </div>
            <div className="overview-item">
              <Target className="overview-icon" />
              <h3>Focus</h3>
              <p>Report creation, annotation review, and targeted scanning workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Context Section */}
      <section className="problem-method-section">
        <div className="container">
          <h2>Challenge & Context</h2>
          
          <div className="problem-content">
            <div className="problem-text">
              <p>
                iSono Health is developing an AI-powered automated breast ultrasound system designed to make 
                breast cancer screening more accessible and efficient. The challenge was to design intuitive 
                interfaces that support radiologists' diagnostic workflows—from scan acquisition to report 
                generation—while integrating clinical standards like BI-RADS assessment seamlessly.
              </p>
              <p>
                Medical imaging interfaces must balance information density with clarity, support precise 
                measurements and annotations, enable comparison of findings over time, and facilitate 
                collaboration through peer review—all while maintaining compliance with clinical documentation 
                standards.
              </p>
            </div>
            <div className="problem-highlights">
              <h4>Design Goals:</h4>
              <ul>
                <li>Streamline the report creation workflow from annotation to final documentation</li>
                <li>Enable efficient comparison of multiple findings and historical studies</li>
                <li>Design intuitive target scan selection for follow-up examinations</li>
                <li>Integrate BI-RADS assessment standards into natural workflow patterns</li>
                <li>Support peer review collaboration for complex cases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Target Scan */}
      <section className="feature-section">
        <div className="container">
          <div className="feature-header">
            <Crosshair className="feature-header-icon" />
            <div>
              <h2>Target Scan Feature</h2>
              <p className="feature-subtitle">Precision scanning for follow-up examinations</p>
            </div>
          </div>

          <div className="feature-intro">
            <p>
              The target scan feature enables radiologists to perform focused follow-up scans on specific 
              areas of interest identified in previous studies. This workflow reduces scan time and allows 
              precise monitoring of known findings.
            </p>
          </div>

          {/* Scan Mode Selection */}
          <div className="workflow-step">
            <div className="workflow-content">
              <div className="workflow-text">
                <div className="step-badge">Step 1</div>
                <h3>Scan Mode Selection</h3>
                <p>
                  The scan interface presents both peripheral and central breast views with targeting 
                  crosshairs. Users can choose between a full comprehensive scan or a targeted scan 
                  focused on specific regions.
                </p>
                <div className="design-decisions">
                  <h4>Key Design Decisions:</h4>
                  <ul>
                    <li><strong>Dual-view display:</strong> Peripheral and central views provide complete spatial context</li>
                    <li><strong>Study history tabs:</strong> Quick access to previous examination dates enables comparison</li>
                    <li><strong>Technical parameters:</strong> MI, TIS, frequency, and mode settings visible but non-intrusive</li>
                    <li><strong>Clear mode toggle:</strong> Full Scan vs. Target Scan selection with visual radio buttons</li>
                    <li><strong>Prominent scan button:</strong> Large, centrally-placed button reduces interaction time</li>
                  </ul>
                </div>
              </div>
              <div className="workflow-image">
                <img src="/images/isono/targetscan1.png" alt="Target scan setup interface with dual breast views and scan mode selection" />
                <p className="image-caption">Scan setup interface with peripheral/central views, study history, and Full/Target scan mode selection</p>
              </div>
            </div>
          </div>

          {/* Location Selection */}
          <div className="workflow-step reverse">
            <div className="workflow-content">
              <div className="workflow-text">
                <div className="step-badge">Step 2</div>
                <h3>Target Location Selection</h3>
                <p>
                  The target selection interface displays a schematic breast diagram with a grid overlay. 
                  Previous annotation locations are marked, allowing radiologists to select specific 
                  regions for focused scanning.
                </p>
                <div className="design-decisions">
                  <h4>Key Design Decisions:</h4>
                  <ul>
                    <li><strong>Interactive grid:</strong> Clickable regions correspond to standard ultrasound scan positions</li>
                    <li><strong>Historical markers:</strong> Yellow numbered indicators show locations of previous findings</li>
                    <li><strong>Real-time location data:</strong> Clock position, distance from nipple, and quadrant update as user selects</li>
                    <li><strong>Draggable crosshair:</strong> Fine-tune target position with direct manipulation</li>
                    <li><strong>Clear confirmation flow:</strong> Back and Confirm Location buttons prevent accidental actions</li>
                  </ul>
                </div>
              </div>
              <div className="workflow-image">
                <img src="/images/isono/targetscan2.png" alt="Target location selection with breast diagram grid and previous annotation markers" />
                <p className="image-caption">Location selection interface with interactive grid, previous finding markers, and real-time position data</p>
              </div>
            </div>
          </div>

          {/* Scan Results Gallery */}
          <div className="workflow-step">
            <div className="workflow-content">
              <div className="workflow-text">
                <div className="step-badge">Step 3</div>
                <h3>Scan Results Gallery</h3>
                <p>
                  After scanning, results are displayed in a gallery view organized by target location. 
                  Each image shows depth markers and anatomical position, with quick navigation to 
                  specific frames for detailed review.
                </p>
                <div className="design-decisions">
                  <h4>Key Design Decisions:</h4>
                  <ul>
                    <li><strong>Tab-based organization:</strong> Gallery view plus individual target tabs for focused review</li>
                    <li><strong>Consistent image cards:</strong> Each scan shows depth scale, position data (Clock, CMFN, Depth)</li>
                    <li><strong>Quick navigation:</strong> "Go to Frame" buttons jump directly to detailed view</li>
                    <li><strong>Grid layout:</strong> Multiple scans visible simultaneously for pattern recognition</li>
                    <li><strong>Study context:</strong> Date selector and breast side (R/L) always visible for orientation</li>
                  </ul>
                </div>
              </div>
              <div className="workflow-image">
                <img src="/images/isono/targetscan3.png" alt="Target scan results gallery showing multiple ultrasound images with location data" />
                <p className="image-caption">Results gallery with target tabs, ultrasound images with depth markers, and navigation controls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usability Study for Target Scan */}
      <section className="research-section">
        <div className="container">
          <h2>Usability Evaluation: Target Scan</h2>
          <p className="section-intro">
            I conducted task-based usability sessions with healthcare providers to evaluate the Target Scan 
            interface, observing how users interact with automated scanning and AI detection capabilities.
          </p>

          <div className="usability-study">
            <div className="study-metrics">
              <div className="metric-card">
                <span className="metric-value">~45 min</span>
                <span className="metric-label">Session Duration</span>
              </div>
              <div className="metric-card">
                <span className="metric-value">9</span>
                <span className="metric-label">Critical Issues Found</span>
              </div>
              <div className="metric-card">
                <span className="metric-value">4</span>
                <span className="metric-label">Task Scenarios</span>
              </div>
            </div>

            <div className="study-tasks">
              <h4>Evaluation Tasks:</h4>
              <div className="tasks-grid">
                <div className="task-item">
                  <span className="task-number">1</span>
                  <div>
                    <strong>Patient Setup Simulation</strong>
                    <p>Observe equipment handling, positioning approach, and setup sequence</p>
                  </div>
                </div>
                <div className="task-item">
                  <span className="task-number">2</span>
                  <div>
                    <strong>Target Area Selection</strong>
                    <p>Evaluate circle drawing behavior, targeting confidence, and adjustment patterns</p>
                  </div>
                </div>
                <div className="task-item">
                  <span className="task-number">3</span>
                  <div>
                    <strong>Scan Execution</strong>
                    <p>Monitor trust indicators, manual intervention attempts, and automation comfort</p>
                  </div>
                </div>
                <div className="task-item">
                  <span className="task-number">4</span>
                  <div>
                    <strong>AI Integration Review</strong>
                    <p>Assess reactions to AI suggestions, preference for AI timing, and confidence levels</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="study-findings">
              <h4>Key Findings:</h4>
              <ul>
                <li><strong>Circle Drawing Tool:</strong> Critical usability issue requiring immediate redesign—users spent excessive time on basic targeting tasks</li>
                <li><strong>Navigation Flow:</strong> Multiple dead ends per session required clearer wayfinding and escape routes</li>
                <li><strong>Icon Clarity:</strong> Transducer position, pause controls, and clock navigation icons needed improved visual design</li>
                <li><strong>AI Timing Preference:</strong> Users expressed varied preferences for when AI suggestions should appear (before, during, or after their own assessment)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Report Creation */}
      <section className="feature-section alt-bg">
        <div className="container">
          <div className="feature-header">
            <FileText className="feature-header-icon" />
            <div>
              <h2>Report Creation Workflow</h2>
              <p className="feature-subtitle">From annotation review to clinical documentation</p>
            </div>
          </div>

          {/* Annotation Review */}
          <div className="workflow-step">
            <div className="workflow-content">
              <div className="workflow-text">
                <div className="step-badge">Step 1</div>
                <h3>Reviewing Annotations</h3>
                <p>
                  The report creation interface presents all annotations from a study in a scannable list format. 
                  Radiologists can quickly identify findings that require attention through visual status indicators 
                  and size change alerts.
                </p>
                <div className="design-decisions">
                  <h4>Key Design Decisions:</h4>
                  <ul>
                    <li><strong>Progress tracking:</strong> Clear completion percentage and estimated time remaining helps radiologists manage their workload</li>
                    <li><strong>Workflow tabs:</strong> Sequential steps (Clinical History → Technical Quality → Findings → Measurements → Assessment → Recommendations) guide the documentation process</li>
                    <li><strong>Smart alerts:</strong> Size increase warnings (e.g., "Size increase 50% - Flag for follow-up") surface critical information immediately</li>
                    <li><strong>Selective inclusion:</strong> "Include in Report" checkboxes let radiologists control which findings appear in the final documentation</li>
                  </ul>
                </div>
              </div>
              <div className="workflow-image">
                <img src="/images/isono/createreport1.png" alt="Report creation interface showing annotation list with progress tracking and workflow tabs" />
                <p className="image-caption">Annotation review list with progress indicator, workflow tabs, and smart alerts for findings requiring attention</p>
              </div>
            </div>
          </div>

          {/* Detailed Finding View */}
          <div className="workflow-step reverse">
            <div className="workflow-content">
              <div className="workflow-text">
                <div className="step-badge">Step 2</div>
                <h3>Detailed Finding Assessment</h3>
                <p>
                  Expanding an annotation reveals comprehensive measurement data, historical comparison, 
                  and clinical documentation tools. The BI-RADS assessment selector provides quick access 
                  to standardized classifications with clear labels.
                </p>
                <div className="design-decisions">
                  <h4>Key Design Decisions:</h4>
                  <ul>
                    <li><strong>Measurement display:</strong> Current vs. previous size shown side-by-side with automated change calculation</li>
                    <li><strong>Visual BI-RADS selector:</strong> Horizontal scale (0-6) with descriptive labels (Incomplete → Biopsy Proven Malignancy) reduces cognitive load</li>
                    <li><strong>Spatial reference:</strong> Clock position and anatomical diagrams (TOP, ISOMETRIC views) provide precise localization</li>
                    <li><strong>Recommendation shortcuts:</strong> Pre-defined follow-up options (Mammogram, Ultrasound, MRI) speed documentation</li>
                  </ul>
                </div>
              </div>
              <div className="workflow-image">
                <img src="/images/isono/createreport3.png" alt="Detailed annotation view with measurements, BI-RADS assessment, and clinical notes" />
                <p className="image-caption">Detailed finding view with measurement comparison, BI-RADS selector, anatomical reference, and recommendation options</p>
              </div>
            </div>
          </div>

          {/* Comparison Mode */}
          <div className="workflow-step">
            <div className="workflow-content">
              <div className="workflow-text">
                <div className="step-badge">Step 3</div>
                <h3>Comparison Mode</h3>
                <p>
                  When multiple findings need to be evaluated together, the comparison mode displays 
                  annotations side-by-side with synchronized measurement overlays. This view is essential 
                  for ensuring consistent assessment across all findings.
                </p>
                <div className="design-decisions">
                  <h4>Key Design Decisions:</h4>
                  <ul>
                    <li><strong>Card-based layout:</strong> Each annotation gets equal visual weight for unbiased comparison</li>
                    <li><strong>Consistent measurements:</strong> Yellow dashed measurement overlays use the same visual language across all images</li>
                    <li><strong>Status indicators:</strong> Color-coded labels (red for size increase, green for stable, yellow for new finding) provide quick status assessment</li>
                    <li><strong>Batch actions:</strong> "Apply Consistent BI-RADS" and "Mark All for Follow-up" buttons reduce repetitive tasks</li>
                    <li><strong>Summary bar:</strong> Bottom summary ("1 with size increase, 1 new findings, 2 require follow-up") gives immediate overview</li>
                  </ul>
                </div>
              </div>
              <div className="workflow-image">
                <img src="/images/isono/createreport4.png" alt="Comparison mode showing three annotations side by side with measurements and BI-RADS assessments" />
                <p className="image-caption">Comparison mode with side-by-side annotation cards, measurement overlays, and batch action controls</p>
              </div>
            </div>
          </div>

          {/* Peer Review */}
          <div className="workflow-step reverse">
            <div className="workflow-content">
              <div className="workflow-text">
                <div className="step-badge">Step 4</div>
                <h3>Peer Review Request</h3>
                <p>
                  For complex cases requiring a second opinion, the peer review modal streamlines 
                  the consultation process. Radiologists can select available colleagues, provide 
                  context, and track review history.
                </p>
                <div className="design-decisions">
                  <h4>Key Design Decisions:</h4>
                  <ul>
                    <li><strong>Availability indicators:</strong> Real-time status (Available/Busy) helps requesters choose appropriately</li>
                    <li><strong>Specialty display:</strong> Showing each reviewer's specialty (Breast Imaging, Ultrasound, Radiology) aids selection</li>
                    <li><strong>Review context:</strong> Estimated time, priority level, and previous review count set expectations</li>
                    <li><strong>Structured notes:</strong> Text field for specific questions ensures focused consultations</li>
                  </ul>
                </div>
              </div>
              <div className="workflow-image">
                <img src="/images/isono/createreport2.png" alt="Peer review request modal with available reviewers and review details" />
                <p className="image-caption">Peer review modal with real-time availability, reviewer specialties, and contextual notes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="personas-section-standalone">
        <div className="container">
          <h2>User Personas: Automation Preferences</h2>
          <p className="section-intro">
            Research revealed distinct user groups with dramatically different preferences for AI involvement. 
            The interface needed to accommodate automation levels ranging from 20% to 100%.
          </p>

          <div className="personas-grid">
            {/* Persona 1: Minimal AI */}
            <div className="persona-card minimal-ai">
              <div className="persona-header">
                <div className="persona-avatar"></div>
                <div className="persona-title">
                  <h4>Dr. Michael Rodriguez</h4>
                  <span className="persona-role">Expert Radiologist</span>
                </div>
                <div className="automation-badge low">20-30% AI</div>
              </div>
              
              <div className="automation-bar">
                <div className="bar-fill" style={{ width: '25%' }}></div>
                <span className="bar-label-left">Manual</span>
                <span className="bar-label-right">Full Auto</span>
              </div>

              <p className="persona-description">
                Reviews 40+ scans daily. Prefers to form his own impressions first, then toggles 
                AI findings (95%+ confidence only) to ensure nothing critical was missed. Uses AI 
                primarily for documentation efficiency, not diagnostic assistance.
              </p>

              <div className="persona-quote">
                <p>"If something is guiding them like 'go 6 o'clock,' they would want to see it, but only when it's truly necessary."</p>
              </div>

              <div className="design-implications-list">
                <h5>Design Implications:</h5>
                <ul>
                  <li>AI annotations hidden by default</li>
                  <li>Quick keyboard toggles for AI visibility</li>
                  <li>Adjustable confidence thresholds</li>
                  <li>Rapid false-positive dismissal</li>
                  <li>Silent mode with minimal notifications</li>
                </ul>
              </div>
            </div>

            {/* Persona 2: Full AI */}
            <div className="persona-card full-ai">
              <div className="persona-header">
                <div className="persona-avatar"></div>
                <div className="persona-title">
                  <h4>Dr. Amanda Foster</h4>
                  <span className="persona-role">General Practitioner</span>
                </div>
                <div className="automation-badge high">90-100% AI</div>
              </div>
              
              <div className="automation-bar">
                <div className="bar-fill" style={{ width: '95%' }}></div>
                <span className="bar-label-left">Manual</span>
                <span className="bar-label-right">Full Auto</span>
              </div>

              <p className="persona-description">
                GP offering in-office breast screening without specialized training. Relies on AI 
                to identify and circle all suspicious areas with clear location markers. Confirms 
                pre-drawn targets rather than interpreting images independently.
              </p>

              <div className="persona-quote">
                <p>"I need the AI to handle everything technical—the system shows me exactly where to look, like '4 o'clock at 2.2 cm,' with targets already circled."</p>
              </div>

              <div className="design-implications-list">
                <h5>Design Implications:</h5>
                <ul>
                  <li>AI pre-selects all areas of concern</li>
                  <li>Traffic light color coding (green/yellow/red)</li>
                  <li>Clock position and distance labels</li>
                  <li>Automatic referral recommendations</li>
                  <li>Plain-language explanations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="principles-section">
        <div className="container">
          <h2>Design Principles</h2>
          <p className="section-intro">
            Throughout the design process, several core principles guided decisions to ensure 
            the interface would support—not hinder—clinical workflows.
          </p>

          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <CheckCircle className="principle-icon" />
              </div>
              <h3>Clinical Accuracy First</h3>
              <p>
                Every measurement, label, and classification follows established medical standards. 
                BI-RADS categories use exact terminology; measurements display in clinically relevant units; 
                anatomical references match standard imaging conventions.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <GitCompare className="principle-icon" />
              </div>
              <h3>Comparison by Default</h3>
              <p>
                Breast imaging relies heavily on change detection. The interface surfaces historical 
                data automatically—previous sizes, prior studies, change percentages—so radiologists 
                don't have to search for context.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <Target className="principle-icon" />
              </div>
              <h3>Progressive Disclosure</h3>
              <p>
                Complex information is layered appropriately. The annotation list shows essential details; 
                expanded views reveal comprehensive data; comparison mode enables deep analysis. Users 
                access complexity when needed, not before.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <UserCheck className="principle-icon" />
              </div>
              <h3>Support Collaboration</h3>
              <p>
                Medical decisions often require consultation. The peer review workflow integrates naturally 
                into the documentation process, making it easy to request and provide second opinions 
                without disrupting the primary workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Design System */}
      <section className="visual-system-section">
        <div className="container">
          <h2>Visual Design Language</h2>
          <p className="section-intro">
            The dark interface theme reduces eye strain during extended reading sessions while 
            maintaining high contrast for critical information.
          </p>

          <div className="visual-elements">
            <div className="color-system">
              <h3>Color Usage</h3>
              <div className="color-swatches">
                <div className="swatch-item">
                  <div className="swatch" style={{ background: '#00D4AA' }}></div>
                  <span>Primary Actions & Positive Status</span>
                </div>
                <div className="swatch-item">
                  <div className="swatch" style={{ background: '#FFB800' }}></div>
                  <span>Annotations & Warnings</span>
                </div>
                <div className="swatch-item">
                  <div className="swatch" style={{ background: '#FF6B6B' }}></div>
                  <span>Critical Alerts & Size Increases</span>
                </div>
                <div className="swatch-item">
                  <div className="swatch" style={{ background: '#1A1D21' }}></div>
                  <span>Background (Reduced Eye Strain)</span>
                </div>
              </div>
            </div>

            <div className="status-system">
              <h3>Status Indicators</h3>
              <div className="status-examples">
                <div className="status-item">
                  <span className="status-badge stable">Within normal parameters</span>
                  <span className="status-label">Stable findings</span>
                </div>
                <div className="status-item">
                  <span className="status-badge warning">Size increase 50%</span>
                  <span className="status-label">Requires attention</span>
                </div>
                <div className="status-item">
                  <span className="status-badge new">New finding</span>
                  <span className="status-label">First detection</span>
                </div>
                <div className="status-item">
                  <span className="status-badge followup">Follow-up required • 6 months</span>
                  <span className="status-label">Action needed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2>Impact & Outcomes</h2>
          
          <div className="impact-stats">
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Major feature workflows designed end-to-end</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Distinct interface screens prototyped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">BI-RADS standard compliance in assessment tools</div>
            </div>
          </div>

          <div className="impact-details">
            <h3>Design Contributions:</h3>
            <ul className="impact-list">
              <li><strong>Streamlined report creation:</strong> Progressive workflow from annotation review to peer consultation reduces documentation time</li>
              <li><strong>Enhanced comparison capabilities:</strong> Side-by-side finding comparison with batch actions improves diagnostic consistency</li>
              <li><strong>Precision scanning interface:</strong> Target scan feature enables efficient follow-up examinations</li>
              <li><strong>Clinical-grade UI:</strong> Dark theme with high-contrast status indicators optimized for extended diagnostic sessions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="next-steps">
        <div className="container">
          <h2>Reflection</h2>
          <p>
            Designing for medical imaging required deep understanding of radiologists' mental models 
            and clinical standards like BI-RADS. The most valuable insight was recognizing that efficiency 
            in clinical interfaces comes not from removing information, but from organizing it to match 
            the natural diagnostic thought process—surfacing comparisons automatically, providing batch 
            actions for common patterns, and integrating collaboration without disrupting individual workflow.
          </p>
          <p style={{ marginTop: '16px' }}>
            <em>Note: Interface designs shown with sample patient data. Some elements modified for portfolio presentation.</em>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ISonoHealthCaseStudy;
