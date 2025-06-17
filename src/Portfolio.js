import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Eye, Mail, Linkedin, MapPin } from 'lucide-react';

const Portfolio = ({ onProjectClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactInfo = {
    email: "pekarimi67@gmail.com",
    linkedin: "https://www.linkedin.com/in/pegah-karimi-9194b4126",
    location: "San Francisco Bay Area",
    resumeFile: "pegah-karimi-resume.pdf"
  };

  // Add CSS to override existing styles with maximum specificity
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Force contact info styling with maximum specificity */
      .header .container .header-content .contact-info.portfolio-contact-override,
      .portfolio-contact-override {
        background: rgba(224, 247, 255, 0.95) !important;
        padding: 12px 20px !important;
        border-radius: 8px !important;
        border: 1px solid rgba(255, 255, 255, 0.3) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        backdrop-filter: blur(10px) !important;
        margin-bottom: 20px !important;
      }

      .header .container .header-content .contact-info.portfolio-contact-override *,
      .header .container .header-content .contact-info.portfolio-contact-override span,
      .header .container .header-content .contact-info.portfolio-contact-override a,
      .portfolio-contact-override *,
      .portfolio-contact-override span,
      .portfolio-contact-override a {
        color: #1a1a1a !important;
        font-weight: 500 !important;
        text-decoration: none !important;
      }

      .header .container .header-content .contact-info.portfolio-contact-override a:hover,
      .portfolio-contact-override a:hover {
        color: #0066cc !important;
        text-decoration: underline !important;
        transition: all 0.2s ease !important;
      }

      /* Override any existing header text colors specifically for contact section */
      .header .portfolio-contact-override {
        color: #1a1a1a !important;
      }

      /* Ensure icons are also dark */
      .portfolio-contact-override svg {
        color: #1a1a1a !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const projects = [
    {
      id: 1,
      title: "From Personas to Mindsets",
      subtitle: "Educational Design Tool",
      description: "A mental model tool that captures how learners interact with educational materials, helping create adaptive experiences tailored to different student mindsets.",
      year: "2025",
      category: "UX Research",
      image: "/images/mindset.jpg",
      tags: ["Educational Technology", "User Research", "Design Strategy"],
      link: "#",
      github: "#",
      hasDetailPage: true
    },
    {
      id: 3,
      title: "Student Dropout Research",
      subtitle: "Statistical Analysis",
      description: "Data-driven research analyzing correlation patterns between educational factors and student dropout intentions for retention strategies.",
      year: "2025",
      category: "Data Analysis",
      image: "/images/drop.jpg",
      tags: ["Linear Regression", "Structural Equation Modeling", "Segmentation Analysis"],
      link: "#",
      github: "#",
      hasDetailPage: true
    },
    {
      id: 4,
      title: "Health Information Management",
      subtitle: "Healthcare UX Design",
      description: "Web interface design for managing older adults' health information tasks at home, focusing on AI features and user control.",
      year: "2024",
      category: "Healthcare UX",
      image: "/images/older-adult.jpg",
      tags: ["Healthcare Design", "Accessibility", "AI Features"],
      link: "#",
      github: "#",
      hasDetailPage: true
    },
    {
      id: 2,
      title: "Feature Prioritization",
      subtitle: "Product Strategy Research",
      description: "Comprehensive user research study using Kano analysis to prioritize product features based on user satisfaction and fulfillment metrics.",
      year: "2023",
      category: "Product Research",
      image: "/images/kano.jpg",
      tags: ["Product Research", "Kano Analysis", "User Satisfaction"],
      link: "#",
      github: "#",
      hasDetailPage: true
    },
    {
      id: 5,
      title: "Textflow: Screenless Typing",
      subtitle: "Wearable Technology, Hands-free Interaction",
      description: "Research and design of screen-less navigation system using hand gestures and audio feedback for accessible smart device interaction.",
      year: "2023",
      category: "Accessibility",
      image: "/images/textflow.jpg",
      tags: ["Accessibility", "Gesture Recognition", "User Behavior Analysis"],
      link: "#",
      github: "#",
      hasDetailPage: true
    },
    {
      id: 6,
      title: "Co-Creative Sketching Partner",
      subtitle: "Human-AI Collaboration",
      description: "AI-powered sketching tool that facilitates creative collaboration between designers and AI, enhancing the design process by helping overcome creative blocks and supporting iterative thinking.",
      year: "2021",
      category: "AI Design Research",
      image: "/images/CSP.jpg",
      tags: ["AI Design", "Creative Tools", "User Behavior Analysis"],
      link: "#",
      github: "#",
      hasDetailPage: true
    }
  ];

  const handleCardClick = (project) => {
    if (project.hasDetailPage) {
      onProjectClick(project.id);
    }
  };

  return (
    <>
      

{/* Header */}
<header className="header">
  <div className="container">
    <div className="header-content" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="header-main" style={{ 
        display: 'flex', 
        gap: '60px', 
        alignItems: 'flex-start',
        marginBottom: '40px'
      }}>
        <div className="profile-image" style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          border: '3px solid rgba(255, 255, 255, 0.3)'
        }}>
          <img 
            src="/images/profile.jpg" 
            alt="Pegah Karimi"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        
        <div className="header-text" style={{ flex: 1 }}>
          <h1 className="name">Pegah Karimi</h1>
          <p className="title" style={{ marginBottom: '10px' }}>Senior UX Researcher</p>
          <div 
            className="contact-info portfolio-contact-override" 
            style={{ 
              display: 'flex', 
              gap: '20px', 
              alignItems: 'center',
              fontSize: '16px'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px'
            }}>
              <MapPin size={16} />
              <span>{contactInfo.location}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px'
            }}>
              <Mail size={16} />
              <a href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px'
            }}>
              <Linkedin size={16} />
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <p className="description" style={{ 
        maxWidth: '100%', 
        width: '100%', 
        lineHeight: '1.7', 
        fontSize: '20px',
        margin: '0'
      }}>
        I am a Human-Computer Interaction researcher with 8+ years of experience in qualitative and quantitative research, specializing in the convergence of AI systems and user experience, with a focus on creating intuitive, intelligent interfaces that adapt to human needs. I employ user-centered methodologies to design AI-augmented experiences that solve complex challenges. I leverage mixed-methods approaches—combining ethnographic research, behavioral analytics, and participatory design—to develop systems that are aligned with users' needs.
      </p>
    </div>
  </div>
</header>

{/* Work Section */}
<section className="work-section">
  <div className="container">
    <h2 className="section-title">Selected Work</h2>
    
    <div className="projects-grid">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project-card ${hoveredCard === project.id ? 'hovered' : ''} ${project.hasDetailPage ? 'clickable' : ''}`}
          onMouseEnter={() => setHoveredCard(project.id)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => handleCardClick(project)}
        >
          <div className="project-image-container">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-img"
              />
            </div>
            <div className="project-overlay">
              <div className="project-links">
                {project.hasDetailPage ? (
                  <span className="project-link view-case-study">
                    <Eye size={20} />
                    <span>View Case Study</span>
                  </span>
                ) : (
                  <>
                    <a href={project.link} className="project-link" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} className="project-link" onClick={(e) => e.stopPropagation()}>
                      <Github size={20} />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="project-content">
            <div className="project-header">
              <div className="project-title-section">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              <div className="project-year">{project.year}</div>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            
            <div className="project-arrow">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>Let's work together</h2>
            <p>I'm always interested in new opportunities and collaborations.</p>
            <div className="contact-links">
              <a href={`mailto:${contactInfo.email}`} className="contact-link">
                Get in touch
              </a>
              <button className="contact-link secondary" onClick={() => window.open(`/${contactInfo.resumeFile}`, '_blank')}>
                View Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;