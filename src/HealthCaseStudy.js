import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const HealthCaseStudy = ({ onBack }) => {
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
          <img src="/images/older-adult.jpg" alt="Health Information Management Interface" />
        </div>
      </section>

      {/* Project Overview */}
      <section className="content-section">
        <div className="container">
          <h2>The Challenge</h2>
          <p>
            Managing health information such as accessing doctors' notes or seeking health-related 
            queries can be challenging for older adults who have to manage multiple chronic illnesses. 
            Older adults face accessibility challenges including hearing information and recalling 
            medical instructions that require additional time or follow-up with the doctor.
          </p>

          {/* Project Details Row */}
          <div className="project-details-row">
            <div className="detail-item">
              <span className="detail-label">Timeline</span>
              <span className="detail-value">2024</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Role</span>
              <span className="detail-value">UX Researcher & Designer</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Research Methods</span>
              <span className="detail-value">Semi-structured interviews, Focus groups, In-situ user studies, Usability testing, WOZ studies</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Participants</span>
              <span className="detail-value">65 older adults across multiple studies</span>
            </div>
          </div>

          <div className="content-main">
              <h2>Research Approach</h2>
              <p>
                I conducted semi-structured interviews with 12 older adults to understand their strategies 
                for gathering and recalling medical information, the challenges they face, and their opinions about 
                automatic transcription of their conversations with doctors to help them recall medical information 
                after a visit.
              </p>

              <div className="insight-box">
                <h3>Key Research Findings</h3>
                <ul>
                  <li>Participants face accessibility challenges such as hearing information and recalling medical instructions</li>
                  <li>Patients saw potential value for a tool that automatically transcribes medical conversations</li>
                  <li>Users desired additional features to summarize, categorize, and highlight critical information</li>
                </ul>
              </div>

              <h2>Design Process & Research Outcomes</h2>
              <p>
                Through the initial research, I identified key strategies older adults currently use and the 
                challenges they face, which informed the design opportunities for AI-assisted tools to support 
                health information management.
              </p>

              <div className="prototype-section">
                <h3>Research Insights - Design Opportunities</h3>
                <div className="prototype-image">
                  <img src="/images/Health/image1.png" alt="Research findings showing strategies, challenges, and design opportunities for AI-assisted tools" />
                  <p className="image-caption">Figure 1: Research outcomes identifying strategies, challenges, and design opportunities for AI-assisted health information tools</p>
                </div>
                <p>
                  The research revealed that older adults use various strategies like personal notes and family 
                  caregivers, but face significant challenges with hearing impairments and recalling information. 
                  This led to design opportunities for AI-assisted tools that can summarize lengthy text, classify 
                  information into key categories, and highlight critical information.
                </p>
              </div>

              <div className="prototype-section">
                <h3>Initial Prototype - Scribe</h3>
                <p>
                  Based on the research findings, I created a mobile interface called Scribe that allows users to 
                  navigate and organize medical conversations as well as set up reminders. The prototype provides 
                  older patients with access to transcripts of medical conversations associated with multiple 
                  doctors' visits. The tool automatically creates notes from doctors' visits that contain key 
                  information to assist individuals in navigating through information.
                </p>
                <div className="prototype-image">
                  <img src="/images/Health/image2.png" alt="Scribe mobile interface showing patient-physician conversations, summary of notes, outline of notes, and reminders" />
                  <p className="image-caption">Figure 2: Scribe mobile interface with (a) patient-physician conversations, (b) summary of doctor's notes, (c) outline of doctor's notes, and (d) reminders for visits</p>
                </div>
                
                <div className="study-results">
                  <h4>Study & Results</h4>
                  <p>
                    I conducted a user study with 10 older adults (ages 60-78) to evaluate Scribe's perceived usefulness 
                    and ease of use. Participants completed five tasks across three scenarios: recording conversations, 
                    reviewing notes, and managing reminders. Using the Technology Acceptance Model (TAM), 90% found 
                    Scribe useful and 80% found it easy to use. Key findings showed that participants valued Scribe's 
                    ability to improve organization and navigation of medical information, support recall of complex 
                    medical instructions, and enhance relationships with both formal and informal caregivers by enabling 
                    easy information sharing and reducing dependency on others during visits.
                  </p>
                  
                  <div className="barriers-analysis">
                    <div className="barriers-grid">
                      <div className="barrier-diagram">
                        <img src="/images/Health/barriers-before.png" alt="Venn diagram showing access barriers participants encountered: Gathering, Recalling, and Organizing challenges" />
                        <p className="diagram-caption">Figure 3: Summary of access barriers participants encountered accessing information from doctor's visits</p>
                      </div>
                      <div className="barrier-diagram">
                        <img src="/images/Health/barriers-after.png" alt="Venn diagram showing potential barriers after Scribe introduction: Navigating, Security/Safety, and Interpreting/Synthesizing" />
                        <p className="diagram-caption">Figure 4: Summary of potential open access barriers after the introduction of tools similar to Scribe</p>
                      </div>
                    </div>
                    
                    <div className="barriers-summary">
                      <h5>Access Barriers Analysis</h5>
                      <p>
                        The study revealed that while Scribe successfully addressed many existing barriers (such as gathering information 
                        from disparate systems, recalling complex medical instructions, and organizing information from multiple doctors), 
                        new challenges emerged. Participants identified needs for improved navigation within the app, enhanced security 
                        and privacy controls, and better tools for interpreting and synthesizing medical information. This analysis 
                        informed the design of subsequent prototypes that focused on addressing these newly identified barriers while 
                        maintaining the benefits of automated conversation capture and organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prototype-section">
                <h3>Next Prototype - MIHA (Medical Information Health Assistant)</h3>
                <p>
                  MIHA supports older adults with searching and navigating information provided by their 
                  doctor and provides tailored answers to users' questions. It includes several features 
                  to support users' understanding of information through a conversational interface, allowing 
                  patients to ask questions like "Did the doctor prescribe any medicine?" and receive structured, 
                  accessible responses with links to additional resources.
                </p>
                <div className="prototype-image medium-image">
                  <img src="/images/Health/image3.png" alt="MIHA interface showing conversational medical information access with doctor's notes and medication information" />
                  <p className="image-caption">Figure 5: MIHA conversational interface providing access to doctor's notes and medication information through natural language queries</p>
                </div>
                
                <div className="woz-study-results">
                  <h4>Wizard of Oz Study & Results</h4>
                  <div className="woz-image">
                    <img src="/images/Health/miha-woz.png" alt="MIHA wizard of oz study interface showing conversation flow and interaction steps" />
                    <p className="image-caption">MIHA Wizard of Oz study interface demonstrating conversational interaction flow</p>
                  </div>
                  <p>
                    I conducted a within-subjects wizard-of-oz study with 10 older adults (ages 61-83) to evaluate 
                    their perceptions of MIHA for navigating personal health information. Participants completed four 
                    tasks across different medical scenarios using doctor's notes from electronic health records. 
                    Results showed that 90% of participants rated MIHA's responses as relevant after viewing the 
                    explanatory notes, and 95% rated closed-ended responses as accurate. Participants valued MIHA's 
                    connection to verified sources (doctor's notes) and its "explainability" features that showed how 
                    responses were derived. Key findings indicated that participants saw MIHA as useful for verifying 
                    medical information at home, managing information from multiple doctors, and becoming more engaged 
                    in their health care. However, participants suggested improvements in understanding question intent, 
                    simplifying medical terminology, and supporting better conversational interactions.
                  </p>
                </div>
              </div>

              <div className="prototype-section">
                <h3>Third Prototype - Understanding Automation Preferences</h3>
                <p>
                  Following the development of MIHA, I conducted focus group studies with 9 older adults to investigate 
                  their preferences regarding automation levels across different AI features. The study used a paper 
                  prototype that simulated voice and chat functionalities with varying degrees of automation - from 
                  fully automated features to user-controlled capabilities. This research revealed that older adults' 
                  desired level of automation varied significantly based on task characteristics and complexity.
                </p>
                <div className="prototype-image medium-image">
                  <img src="/images/Health/paper-prototype.png" alt="Paper prototype interface showing health assistant with various automation levels" />
                  <p className="image-caption">Figure 6: Paper prototype used in focus group studies to explore different levels of automation in health information tasks</p>
                </div>
                <p>
                  The focus group findings led to the development of a classification framework that categorizes 
                  features according to older adults' interaction preferences: <strong>full delegation</strong> 
                  (for routine tasks like text summarization), <strong>direct control</strong> (for critical tasks 
                  like medical term understanding and information sharing), and <strong>collaborative completion</strong> 
                  (for complex tasks like medical conversation documentation and search functionality).
                </p>
                
                <div className="prototype-image">
                  <img src="/images/Health/framework.png" alt="Framework showing categorization of features by automation preferences" />
                  <p className="image-caption">Figure 7: Framework categorizing features based on older adults' interaction preferences: full delegation, direct control, and collaborative completion</p>
                </div>
              </div>

              <h2>Final Solution - Comprehensive Health Management Platform</h2>
              <p>
                Based on all research results and user feedback, I created a comprehensive web interface 
                that integrates all the tested features into a cohesive, accessible platform for older 
                adults to manage their health information once at home.
              </p>

              <div className="final-solution">
                <h3>Doctor Visits & Information Management</h3>
                <div className="prototype-image">
                  <img src="/images/Health/image4.png" alt="Personal notes interface showing user-written notes about blood sugar management, glucose monitoring, and dawn phenomenon" />
                  <p className="image-caption">Figure 8: Personal notes feature allowing patients to save and organize health information with source links</p>
                </div>
                <p>
                  The final platform organizes medical conversations based on the date and time of each visit into 
                  key categories. Users can edit and add personal notes which are then saved into their personal notes 
                  section. Important information can be marked as favorite by selecting save, which stores it in saved 
                  items for easy retrieval. The system also enables sharing of visit information with caregivers, 
                  addressing the research finding that older adults often rely on personal note-taking strategies 
                  and caregiver support to remember important health information.
                </p>
              </div>

              <div className="final-solution">
                <h3>Caregiver Sharing</h3>
                <div className="prototype-image">
                  <img src="/images/Health/image5.png" alt="Visit summary interface with caregiver sharing modal showing formal and informal caregiver options" />
                  <p className="image-caption">Figure 9: Visit summary with integrated caregiver sharing functionality for both formal and informal caregivers</p>
                </div>
                <p>
                  The platform includes robust sharing capabilities that allow patients to easily share visit 
                  summaries with both formal caregivers (doctors, nurses) and informal caregivers (family members). 
                  Users also have the option to add a new caregiver by specifying the type, name and their role.
                </p>
              </div>

              <div className="final-solution">
                <h3>Personal Notes</h3>
                <div className="prototype-image">
                  <img src="/images/Health/image6.png" alt="Personal notes interface showing user-written notes organized by categories with editing capabilities" />
                  <p className="image-caption">Figure 10: Personal notes feature allowing users to create, edit, and organize their health-related notes by categories</p>
                </div>
                <p>
                  The personal notes feature provides users with the ability to create, edit, and organize their 
                  health-related thoughts and observations. Notes can be categorized for easy retrieval and users 
                  can add personal insights about their health conditions, medication effects, or questions for 
                  future doctor visits. This design directly addresses the challenge of maintaining personal 
                  health records and provides multiple access points for retrieving specific information when needed.
                </p>
              </div>

              <div className="final-solution">
                <h3>Questions & Answers Capabilities</h3>
                <div className="prototype-image">
                  <img src="/images/Health/questions-answers.png" alt="Questions and answers interface showing medical assistant responding to user queries about diabetes medications with source citations" />
                  <p className="image-caption">Figure 11: Questions & Answers feature enabling users to ask health-related questions and receive evidence-based responses with source citations</p>
                </div>
                <p>
                  The platform includes an intelligent question-answering system that allows users to ask health-related 
                  questions and receive personalized responses based on verified medical sources. Users can inquire about 
                  medications, side effects, diabetes management, or other health topics, and the system provides accurate 
                  information with clear source citations from reputable medical institutions. This feature empowers older 
                  adults to access reliable health information at their own pace and helps them prepare informed questions 
                  for their healthcare providers.
                </p>
              </div>

              <h2>Ongoing Research Efforts</h2>
              <p>
                To validate the comprehensive health management platform, we are currently conducting in-situ user studies 
                with older adults in their home environments. These studies evaluate real-world usage patterns and user 
                autonomy across different features of the system.
              </p>

              <div className="prototype-section">
                <h3>Current In-Situ User Study</h3>
                <p>
                  The ongoing study focuses on understanding how older adults interact with the platform's key features 
                  in their natural environment. Participants complete realistic healthcare scenarios using the web interface, 
                  including accessing doctor visit summaries, sharing information with caregivers, adding personal notes, 
                  and asking health-related questions. The study particularly examines user perceptions of control, confidence, 
                  and support across different automated and manual features.
                </p>
                
                <div className="study-highlights">
                  <h4>Key Study Components</h4>
                  <ul>
                    <li><strong>Visit Management Tasks:</strong> Participants navigate doctor visit summaries organized by categories (History, Medication, Exam, Plan) and utilize audio playback features for accessibility</li>
                    <li><strong>Caregiver Sharing Scenarios:</strong> Users practice sharing visit information with formal and informal caregivers, including adding new caregivers with specified roles</li>
                    <li><strong>Personal Note Creation:</strong> Participants add manual notes to automatically generated summaries and save important information for future reference</li>
                    <li><strong>Question-Answering Interactions:</strong> Users ask health-related questions about medications and side effects, exploring multiple sources and medical terminology definitions</li>
                    <li><strong>Autonomy Assessment:</strong> Comprehensive evaluation of user perceptions regarding control, confidence, and system support across interface and task levels</li>
                  </ul>
                </div>
                
                <p>
                  The study measures user autonomy through multiple dimensions including control over health information 
                  access, confidence in system responses, and perceived support for health management tasks. Early findings 
                  suggest that providing multiple interaction modalities (audio and text), source transparency, and editing 
                  capabilities significantly impacts user trust and sense of control over their health information.
                </p>
              </div>
            </div>
        </div>
      </section>

      <style jsx>{`
        .case-study {
          background: #fafafa;
          min-height: 100vh;
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

        /* Hero Image Section - matching KanoCaseStudy style */
        .hero-image-section {
          width: 100%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          padding: 30px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-container {
          max-width: 1200px;
          width: 90%;
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
          max-height: 500px;
        }

        .content-section {
          padding: 80px 0;
        }

        .content-main {
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-details-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin: 48px 0;
          padding: 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .content-main h2 {
          font-size: 32px;
          font-weight: 600;
          margin: 48px 0 24px 0;
          color: #1a1a1a;
          text-align: center;
        }

        .content-main h2:first-child {
          margin-top: 0;
          text-align: center;
        }

        .content-main h3 {
          font-size: 24px;
          font-weight: 600;
          margin: 32px 0 16px 0;
          color: #1a1a1a;
        }

        .content-main p {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 20px;
        }

        .content-main ul {
          margin: 20px 0;
          padding-left: 20px;
        }

        .content-main li {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 8px;
        }

        .detail-item {
          text-align: center;
        }

        .detail-label {
          font-weight: 600;
          color: #667eea;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 8px;
        }

        .detail-value {
          color: #1a1a1a;
          font-size: 16px;
          line-height: 1.5;
        }

        .insight-box {
          background: #f8f9ff;
          border-left: 4px solid #667eea;
          padding: 32px;
          margin: 32px 0;
          border-radius: 8px;
        }

        .insight-box h3 {
          margin-top: 0;
          color: #667eea;
        }

        .prototype-section {
          margin: 48px 0;
          padding: 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .prototype-image {
          margin: 24px 0;
        }

        .prototype-image img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }

        .small-image img {
          width: 80%;
          height: auto;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          margin: 0 auto;
          display: block;
        }

        .medium-image img {
          width: 70%;
          height: auto;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          margin: 0 auto;
          display: block;
        }

        .smaller-image img {
          width: 60%;
          height: auto;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          margin: 0 auto;
          display: block;
        }

        .image-caption {
          font-size: 16px;
          color: #666;
          text-align: center;
          margin-top: 12px;
          font-style: italic;
        }

        .woz-study-results {
          margin-top: 32px;
          padding: 24px;
          background: #f0f7ff;
          border-left: 4px solid #667eea;
          border-radius: 8px;
        }

        .woz-study-results h4 {
          font-size: 18px;
          font-weight: 600;
          color: #667eea;
          margin-bottom: 16px;
        }

        .woz-study-results p {
          font-size: 16px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 16px;
        }

        .woz-study-results p:last-child {
          margin-bottom: 0;
        }

        .woz-image {
          margin: 24px 0;
          text-align: center;
        }

        .woz-image img {
          width: 60%;
          height: auto;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          margin: 0 auto;
          display: block;
        }

        .woz-image .image-caption {
          font-size: 14px;
          color: #666;
          text-align: center;
          margin-top: 12px;
          font-style: italic;
        }

        .barriers-analysis {
          margin-top: 32px;
        }

        .barriers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin: 24px 0;
        }

        .barrier-diagram {
          text-align: center;
        }

        .barrier-diagram img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: contain;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }

        .diagram-caption {
          font-size: 14px;
          color: #666;
          text-align: center;
          margin-top: 12px;
          font-style: italic;
          line-height: 1.4;
        }

        .barriers-summary {
          margin-top: 32px;
          padding: 24px;
          background: white;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }

        .barriers-summary h5 {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 16px;
        }

        .barriers-summary p {
          font-size: 15px;
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        .results-section {
          margin: 48px 0;
        }

        .results-grid {
          display: grid;
          gap: 24px;
          margin-top: 24px;
        }

        .result-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 24px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .result-icon {
          color: #667eea;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .result-item h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1a1a1a;
        }

        .result-item p {
          font-size: 16px;
          margin: 0;
        }

        .final-solution {
          margin: 48px 0;
          padding: 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .final-solution h3 {
          margin-top: 0;
          margin-bottom: 24px;
          color: #1a1a1a;
          font-size: 24px;
          font-weight: 600;
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

          .project-details-row {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 24px;
          }

          .barriers-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .barriers-summary {
            padding: 20px;
          }

          .small-image img {
            width: 70%;
          }

          .medium-image img {
            width: 60%;
          }

          .smaller-image img {
            width: 50%;
          }
          
          .content-main h2 {
            font-size: 28px;
          }
          
          .prototype-section {
            padding: 24px;
          }

          /* Health Case Study Mobile Figure Adjustments - HIGHEST SPECIFICITY */
          
          /* Figure 1: Research outcomes - much bigger with maximum specificity */
          .case-study .content-main .prototype-section .prototype-image img[src="/images/Health/image1.png"],
          .prototype-section .prototype-image img[src="/images/Health/image1.png"],
          .prototype-image img[src="/images/Health/image1.png"] {
            width: 100% !important;
            margin: 0 auto !important;
            display: block !important;
            max-width: calc(100vw - 32px) !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }
          
          /* Override any container constraints for Figure 1 */
          .case-study .content-main .prototype-section:has(img[src="/images/Health/image1.png"]) .prototype-image,
          .prototype-section:has(img[src="/images/Health/image1.png"]) .prototype-image {
            width: 100% !important;
            max-width: 100% !important;
            margin: 24px 0 !important;
            padding: 0 !important;
          }
          
          /* Figure 2: Scribe mobile interface - much bigger */
          .case-study .content-main .prototype-section .prototype-image img[src="/images/Health/image2.png"],
          .prototype-image img[src="/images/Health/image2.png"] {
            width: 95% !important;
            margin: 0 auto !important;
            display: block !important;
          }
          
          /* Figure 3: Barriers before (Summary of access barriers) - slightly bigger */
          .barrier-diagram img[src="/images/Health/barriers-before.png"] {
            width: 80% !important;
            margin: 0 auto;
            display: block;
          }
          
          /* Figure 4: Barriers after (Summary of potential open access barriers) - slightly bigger */
          .barrier-diagram img[src="/images/Health/barriers-after.png"] {
            width: 80% !important;
            margin: 0 auto;
            display: block;
          }
          
          /* Figure 5: MIHA conversational interface - keep medium */
          .prototype-image img[src="/images/Health/image3.png"] {
            width: 70% !important;
            margin: 0 auto;
            display: block;
          }
          
          /* Wizard of Oz study interface - keep current size */
          .woz-image img[src="/images/Health/miha-woz.png"] {
            width: 95% !important;
            margin: 0 auto;
            display: block;
          }
          
          /* Figure 6: Paper prototype - keep medium */
          .prototype-image img[src="/images/Health/paper-prototype.png"] {
            width: 70% !important;
            margin: 0 auto;
            display: block;
          }
          
          /* Figure 7: Framework - keep medium */
          .prototype-image img[src="/images/Health/framework.png"] {
            width: 70% !important;
            margin: 0 auto;
            display: block;
          }
          
          /* The four images under "Final Solution - Comprehensive Health Management Platform" */
          /* Figure 8: Doctor Visits & Information Management - bigger */
          .prototype-image img[src="/images/Health/image4.png"] {
            width: 90% !important;
            margin: 0 auto;
            display: block;
          }
          
          /* Figure 9: Caregiver Sharing - bigger */
          .prototype-image img[src="/images/Health/image5.png"] {
            width: 90% !important;
            margin: 0 auto;
            display: block;
          }
          
          /* Figure 10: Personal Notes - bigger */
          .prototype-image img[src="/images/Health/image6.png"] {
            width: 90% !important;
            margin: 0 auto;
            display: block;
          }
          
          /* Figure 11: Questions & Answers - bigger */
          .prototype-image img[src="/images/Health/questions-answers.png"] {
            width: 90% !important;
            margin: 0 auto;
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default HealthCaseStudy;