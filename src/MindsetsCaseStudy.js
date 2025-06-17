import React, { useEffect } from 'react';
import { ArrowLeft, Users, Clock, Target, Lightbulb } from 'lucide-react';
import './MindsetsCaseStudy.css';

// Import the design interfaces
import MobileDesignSolution from './MobileDesignSolution';
import SingleLearningInterface from './DividedAttentionInterface';
import LearningPortalInterface from './GettingBackOnTrackInterface';

const MindsetsCaseStudy = ({ onBack }) => {
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
      <section className="hero-image-section mindsets-hero">
        <div className="hero-image-container mindsets-hero-container">
          <img src="/images/mindset.jpg" alt="Mindsets Research Overview" />
        </div>
      </section>

      {/* Title Section */}
      <section className="title-section">
        <div className="container">
          <h1 className="case-title">From Personas to Mindsets</h1>
          <p className="case-subtitle">Understanding the Student Experience</p>
          <p className="case-description">
            A research project exploring how students engage with course materials and assessments, 
            developing dynamic mindsets to capture the fluid nature of student attitudes, beliefs, and motivations.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-item">
              <Users className="overview-icon" />
              <h3>Research Participants</h3>
              <p>58 WGU students across 4 schools (WSE, WSB, WST, WSH)</p>
            </div>
            <div className="overview-item">
              <Clock className="overview-icon" />
              <h3>Method</h3>
              <p>In-depth semi-structured interviews and thematic analysis</p>
            </div>
            <div className="overview-item">
              <Target className="overview-icon" />
              <h3>Focus</h3>
              <p>How students think and behave vs. WHO they are</p>
            </div>
            <div className="overview-item">
              <Lightbulb className="overview-icon" />
              <h3>Outcome</h3>
              <p>Dynamic mindset framework for adaptive learning design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="problem-section">
        <div className="container">
          <h2>The Challenge</h2>
          <div className="problem-content">
            <div className="problem-text">
              <p>
                Traditional personas focus on WHO users are (demographics, backgrounds), but this approach 
                falls short in educational contexts where student behaviors and attitudes are fluid and context-dependent.
              </p>
              <p>
                We needed a more dynamic approach that could capture how students actually think and behave 
                in different learning situations, leading to designs that can adapt to or help change mindsets.
              </p>
            </div>
            <div className="problem-highlights">
              <h4>Why Mindsets Over Personas:</h4>
              <ul>
                <li>Highlights the fluidity of learning behaviors</li>
                <li>Details beliefs, attitudes, and emotions that drive learning choices</li>
                <li>Supports designs that can adapt to or help change mindsets</li>
                <li>Provides a more nuanced understanding of student needs</li>
              </ul>
            </div>
          </div>
          
          {/* Full-width image */}
          <div className="full-width-image">
            <div className="full-width-image-container">
              <img src="/images/personas-to-mindsets.jpg" alt="Evolution from Personas to Mindsets" />
              <p className="image-caption">The evolution from traditional personas to dynamic mindsets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="process-section">
        <div className="container">
          <h2>Research Approach</h2>
          <div className="process-intro">
            <div className="process-intro-text">
              <p>
                Our research methodology was designed to capture the nuanced and dynamic nature of student 
                learning behaviors through comprehensive interviews and systematic analysis.
              </p>
              <p>
                I developed a structured interview approach with three distinct phases, each designed to 
                gather different types of insights about student experiences and preferences.
              </p>
            </div>
            <div className="process-intro-visual">
              <div className="section-image-container">
                <img src="/images/interview-questions.jpg" alt="Semi-structured Interview Framework" />
                <p className="image-caption">Three-phase interview structure: Opening, Deep Dive, and Wrap-up questions</p>
              </div>
            </div>
          </div>
          
          <div className="research-outcomes">
            <div className="outcomes-text">
              <h3>From Interviews to Framework</h3>
              <p>
                Through thematic analysis of our 58 interviews, I identified five key dimensions that shape 
                student learning experiences. Analysis revealed that traditional demographic categories 
                failed to predict learning approaches—instead, contextual and behavioral factors emerged as primary drivers.
              </p>
            </div>
            <div className="outcomes-visual">
              <div className="section-image-container">
                <img src="/images/mindset-dimensions.jpg" alt="Student Mindset Dimensions Framework" />
                <p className="image-caption">Five main categories with specific attributes that influence student learning approaches</p>
              </div>
            </div>
            
            <div className="outcomes-explanation">
              <h4>Five Key Dimensions:</h4>
              <ul className="insights-list">
                <li><strong>Personal Characteristics:</strong> Disposition and personality traits that influence engagement strategies</li>
                <li><strong>Learning Preferences:</strong> Content format and interaction preferences that vary widely across students</li>
                <li><strong>Situational Factors:</strong> Time management styles and study scenarios that determine success</li>
                <li><strong>Support Needs:</strong> Feedback frequency and type preferences that cross demographic boundaries</li>
                <li><strong>Motivation Factors:</strong> Career goals and learning motivations that create unique behavioral clusters</li>
              </ul>
            </div>
          </div>
          
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Interview Design</h3>
              <p>
                Semi-structured interviews with opening, deep dive, and wrap-up questions 
                designed to understand student experiences with course materials and assessments.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Data Collection</h3>
              <p>
                58 in-depth interviews across four WGU schools, focusing on engagement patterns, 
                mobile device usage, and learning portal preferences.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Thematic Analysis</h3>
              <p>
                Open coding of transcripts, pattern identification, theme development, 
                and integration into cohesive narratives and user stories.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Framework Development</h3>
              <p>
                Created five main dimension categories with specific attributes 
                that influence student learning approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mindset Profiles */}
      <section className="profiles-section">
        <div className="container">
          <h2>The Mindset Profiles</h2>
          
          {/* Learning On-the-go */}
          <div className="mindset-profile">
            <div className="profile-image-container">
              <img src="/images/learning-on-the-go.jpg" alt="Learning On-the-go mindset" />
            </div>
            <div className="profile-text">
              <div className="profile-description">
                <p>
                  This mindset represents students who prioritize mobility and flexibility in their learning approach. 
                  Their educational journey is characterized by the need to seamlessly transition between different 
                  environments and devices while maintaining academic progress.
                </p>
                <p>
                  These learners often face unique challenges with technology limitations and platform constraints 
                  that don't align with their mobile-centric lifestyle. They require educational systems that can 
                  adapt to their dynamic schedules and varying connectivity situations.
                </p>
                <h4>Key Insights:</h4>
                <ul>
                  <li>Technology gaps between mobile capabilities and platform requirements create friction</li>
                  <li>Assessment submission processes often assume desktop access</li>
                  <li>Real-time technical support is crucial for uninterrupted learning</li>
                  <li>Voice and audio features could significantly enhance their learning experience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Coping with Divided Attention */}
          <div className="mindset-profile">
            <div className="profile-image-container">
              <img src="/images/divided-attention.jpg" alt="Coping with Divided Attention mindset" />
            </div>
            <div className="profile-text">
              <div className="profile-description">
                <p>
                  This mindset reflects learners who must balance competing priorities and frequently interrupted 
                  study sessions. Their learning happens in fragments, requiring tools and strategies that 
                  accommodate unpredictable schedules and attention patterns.
                </p>
                <p>
                  These students have developed adaptive strategies to maximize limited study windows, but often 
                  struggle with traditional linear learning approaches that assume dedicated, uninterrupted focus time.
                </p>
                <h4>Key Insights:</h4>
                <ul>
                  <li>Learning must fit into unpredictable time slots and competing responsibilities</li>
                  <li>Progress tracking and bookmarking features are essential for continuity</li>
                  <li>Audio content enables multitasking during routine activities</li>
                  <li>Flexible pacing helps manage stress from competing demands</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Getting Back on Track */}
          <div className="mindset-profile">
            <div className="profile-image-container">
              <img src="/images/back-on-track.jpg" alt="Getting Back on Track mindset" />
            </div>
            <div className="profile-text">
              <div className="profile-description">
                <p>
                  This mindset emerges when life circumstances disrupt established learning routines. These students 
                  face the challenge of re-engaging with their studies after periods of absence or distraction, 
                  requiring systems that help them rebuild momentum and confidence.
                </p>
                <p>
                  Recovery-focused learners need educational approaches that acknowledge gaps in engagement and 
                  provide structured pathways back into active learning without overwhelming them with accumulated content.
                </p>
                <h4>Key Insights:</h4>
                <ul>
                  <li>Re-entry into studies requires scaffolded support and review mechanisms</li>
                  <li>Personal circumstances significantly impact learning capacity and focus</li>
                  <li>Comprehensive note-taking and review systems become critical coping strategies</li>
                  <li>Flexible deadlines and personalized pacing support recovery from disruptions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Implications */}
      <section className="impact-section">
        <div className="container">
          <h2>Design Implications</h2>
          
          {/* Learning On-the-go Design Solutions */}
          <div className="design-solution">
            <div className="solution-header">
              <h3>Learning On-the-go: Mobile-First Design</h3>
              <p>Addressing technology gaps and mobile accessibility challenges</p>
            </div>
            <div className="solution-content">
              <div className="solution-text">
                <h4>Design Recommendations:</h4>
                <ul>
                  <li><strong>Mobile-optimized assessment submission:</strong> Streamlined workflows that work seamlessly across devices without requiring desktop access</li>
                  <li><strong>Voice input and dictation features:</strong> Allow students to complete assignments through speech-to-text when typing is impractical</li>
                  <li><strong>Offline capability:</strong> Enable content download and progress saving for areas with unreliable connectivity</li>
                  <li><strong>Cross-platform synchronization:</strong> Automatic saving and syncing between mobile and desktop environments</li>
                  <li><strong>24/7 technical support integration:</strong> Real-time troubleshooting accessible through mobile interfaces</li>
                </ul>
              </div>
              <div className="solution-visual">
                <MobileDesignSolution />
              </div>
            </div>
          </div>

          {/* Divided Attention Design Solutions */}
          <div className="design-solution">
            <div className="solution-header">
              <h3>Coping with Divided Attention: Fragmented Learning Support</h3>
              <p>Tools and features for interrupted and multitasking study sessions</p>
            </div>
            <div className="solution-content">
              <div className="solution-text">
                <h4>Design Recommendations:</h4>
                <ul>
                  <li><strong>Advanced bookmarking and progress tracking:</strong> Visual indicators showing exactly where students left off in readings, videos, and assignments</li>
                  <li><strong>Micro-learning modules:</strong> Content broken into 5-10 minute segments that fit into unpredictable schedules</li>
                  <li><strong>Audio-first content options:</strong> Podcast-style lectures and materials that enable learning during multitasking</li>
                  <li><strong>Quick resume features:</strong> One-click return to last activity with context preservation</li>
                  <li><strong>Flexible deadline management:</strong> Adaptive scheduling that accommodates irregular study patterns</li>
                </ul>
              </div>
              <div className="solution-visual">
                <SingleLearningInterface />
              </div>
            </div>
          </div>

          {/* Getting Back on Track Design Solutions */}
          <div className="design-solution">
            <div className="solution-header">
              <h3>Getting Back on Track: Re-engagement Support</h3>
              <p>Systems that help students recover from learning disruptions</p>
            </div>
            <div className="solution-content">
              <div className="solution-text">
                <h4>Design Recommendations:</h4>
                <ul>
                  <li><strong>Integrated review and summary systems:</strong> Automated generation of key points and progress summaries for returning students</li>
                  <li><strong>Personalized re-entry pathways:</strong> Customized learning plans that acknowledge gaps and provide structured catch-up options</li>
                  <li><strong>Enhanced note-taking integration:</strong> Seamless connection between personal notes, course materials, and assignment submissions</li>
                  <li><strong>Comprehensive content organization:</strong> Unified interfaces that reduce need to navigate between multiple pages and resources</li>
                  <li><strong>Flexible assessment scheduling:</strong> Extended deadlines and makeup options for students experiencing disruptions</li>
                </ul>
              </div>
              <div className="solution-visual">
                <LearningPortalInterface />
              </div>
            </div>
          </div>

          <div className="design-summary">
            <h3>Implementation Framework</h3>
            <p>
              These design implications were developed through AI-assisted ideation based on our mindset profiles, 
              then evaluated against technical feasibility and learning objectives. The solutions represent a synthesis 
              of research findings, technology capabilities, and user-centered design principles that can adapt to 
              students' changing needs and circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="learnings-section">
        <div className="container">
          <h2>Key Learnings</h2>
          <div className="learnings-grid">
            <div className="learning-item">
              <h4>Fluidity Over Fixed Identity</h4>
              <p>
                Students' learning approaches change based on context, stress, and life circumstances. 
                Designs must accommodate this fluidity rather than assuming consistent behavior.
              </p>
            </div>
            <div className="learning-item">
              <h4>One-Size-Fits-All Fails</h4>
              <p>
                The complexity of student experiences demonstrates why uniform approaches to education 
                technology often fall short of meeting diverse needs.
              </p>
            </div>
            <div className="learning-item">
              <h4>Technology as Bridge</h4>
              <p>
                Thoughtful technology design can bridge gaps for remote learners with unique constraints, 
                enabling success across varied circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="next-steps">
        <div className="container">
          <h2>Next Steps</h2>
          <p>
            Future research will focus on developing adaptive learning systems that can automatically 
            detect and respond to different mindsets, creating truly personalized educational experiences 
            that evolve with students' changing needs and circumstances.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MindsetsCaseStudy;