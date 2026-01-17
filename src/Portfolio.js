import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Eye, Mail, Linkedin, MapPin, ArrowLeft } from 'lucide-react';

const Portfolio = ({ onProjectClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null); // null = show category boxes

  const contactInfo = {
    email: "pekarimi67@gmail.com",
    linkedin: "https://www.linkedin.com/in/pegah-karimi-9194b4126",
    location: "San Francisco Bay Area",
    resumeFile: "pegah-karimi-resume.pdf"
  };

  // Category definitions with preview images
  const categories = [
    {
      id: 'education',
      title: 'Education',
      subtitle: 'Learning & Student Success',
      description: 'Research on how learners interact with educational technology, from mental models to retention strategies.',
      icon: '📚',
      color: '#667eea',
      colorDark: '#5a67d8',
      previewImage: '/images/mindset.jpg',
      projectCount: 3
    },
    {
      id: 'health',
      title: 'Health',
      subtitle: 'Clinical Interfaces & Accessibility',
      description: 'Designing intuitive interfaces for healthcare professionals and accessible health management tools.',
      icon: '🏥',
      color: '#00D4AA',
      colorDark: '#00a88a',
      previewImage: '/images/isono/createreport4.png',
      projectCount: 3
    },
    {
      id: 'innovation',
      title: 'AI & Innovation',
      subtitle: 'Creativity, Wearables & Human-AI',
      description: 'Exploring the intersection of artificial intelligence, creative tools, and accessible interaction design.',
      icon: '🚀',
      color: '#f5576c',
      colorDark: '#e53e3e',
      previewImage: '/images/CSP.jpg',
      projectCount: 2
    }
  ];

  // Projects by category
  const projectsByCategory = {
    education: [
      {
        id: 1,
        title: "From Personas to Mindsets",
        subtitle: "Educational Design Tool",
        description: "A mental model tool that captures how learners interact with educational materials, helping create adaptive experiences tailored to different student mindsets.",
        year: "2025",
        image: "/images/mindset.jpg",
        tags: ["Educational Technology", "User Research", "Design Strategy"],
        hasDetailPage: true
      },
      {
        id: 3,
        title: "Student Dropout Research",
        subtitle: "Statistical Analysis",
        description: "Data-driven research analyzing correlation patterns between educational factors and student dropout intentions for retention strategies.",
        year: "2025",
        image: "/images/drop.jpg",
        tags: ["Linear Regression", "Structural Equation Modeling", "Segmentation Analysis"],
        hasDetailPage: true
      },
      {
        id: 2,
        title: "Feature Prioritization",
        subtitle: "Product Strategy Research",
        description: "Comprehensive user research study using Kano analysis to prioritize product features based on user satisfaction and fulfillment metrics.",
        year: "2023",
        image: "/images/kano.jpg",
        tags: ["Product Research", "Kano Analysis", "User Satisfaction"],
        hasDetailPage: true
      }
    ],
    health: [
      {
        id: 7,
        title: "Medical Imaging Interface",
        subtitle: "Healthcare UX Design",
        description: "Interface design for AI-powered breast ultrasound systems, including report creation, annotation comparison, and targeted scanning workflows for radiologists.",
        year: "2025",
        image: "/images/isono/createreport4.png",
        tags: ["Medical Design", "Clinical Workflows", "Figma Prototyping"],
        hasDetailPage: true
      },
      {
        id: 8,
        title: "Customer Portal",
        subtitle: "Healthcare SaaS Platform",
        description: "End-to-end customer portal for iSono Health featuring order management, training modules with progress tracking, support ticketing, and a dashboard for medical device customers.",
        year: "2025",
        image: "/images/isono/customerportal1.png",
        tags: ["Product Design", "SaaS", "Lovable"],
        hasDetailPage: true
      },
      {
        id: 4,
        title: "Health Information Management",
        subtitle: "Healthcare UX Design",
        description: "Web interface design for managing older adults' health information tasks at home, focusing on AI features and user control.",
        year: "2024",
        image: "/images/older-adult.jpg",
        tags: ["Healthcare Design", "Accessibility", "AI Features"],
        hasDetailPage: true
      }
    ],
    innovation: [
      {
        id: 6,
        title: "Co-Creative Sketching Partner",
        subtitle: "Human-AI Collaboration",
        description: "AI-powered sketching tool that facilitates creative collaboration between designers and AI, enhancing the design process by helping overcome creative blocks and supporting iterative thinking.",
        year: "2021",
        image: "/images/CSP.jpg",
        tags: ["AI Design", "Creative Tools", "Human-AI Collaboration"],
        hasDetailPage: true
      },
      {
        id: 5,
        title: "Textflow: Screenless Typing",
        subtitle: "Wearable Technology, Hands-free Interaction",
        description: "Research and design of screen-less navigation system using hand gestures and audio feedback for accessible smart device interaction.",
        year: "2023",
        image: "/images/textflow.jpg",
        tags: ["Accessibility", "Gesture Recognition", "Wearable"],
        hasDetailPage: true
      }
    ]
  };

  const handleCardClick = (project) => {
    if (project.hasDetailPage) {
      onProjectClick(project.id);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleBackClick = () => {
    setActiveCategory(null);
  };

  const activeProjects = activeCategory ? projectsByCategory[activeCategory] : [];
  const activeCategoryData = categories.find(c => c.id === activeCategory);

  return (
    <>
      <style>{`
        /* Large Category Cards */
        .category-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .category-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 2px solid transparent;
        }

        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: var(--card-color);
        }

        .category-card-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .category-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .category-card:hover .category-card-image img {
          transform: scale(1.05);
        }

        .category-card-image::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%);
        }

        .category-card-icon {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1;
        }

        .category-card-content {
          padding: 28px;
        }

        .category-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .category-card-subtitle {
          font-size: 14px;
          font-weight: 600;
          color: var(--card-color);
          margin: 0 0 12px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .category-card-description {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        .category-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .category-card-count {
          font-size: 14px;
          color: #999;
          font-weight: 500;
        }

        .category-card-arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--card-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: transform 0.3s ease;
        }

        .category-card:hover .category-card-arrow {
          transform: translateX(4px);
        }

        /* Projects View */
        .projects-view {
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #f5f5f5;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #555;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 32px;
        }

        .back-button:hover {
          background: #e8e8e8;
          color: #333;
        }

        .projects-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 2px solid #f0f0f0;
        }

        .projects-header-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
        }

        .projects-header-text h3 {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .projects-header-text p {
          font-size: 15px;
          color: #666;
          margin: 0;
        }

        .filtered-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
        }

        /* Fix project card arrow positioning */
        .filtered-projects-grid .project-card .project-content {
          position: relative;
          padding-bottom: 50px;
        }

        .filtered-projects-grid .project-card .project-arrow {
          position: absolute;
          bottom: 20px;
          right: 20px;
        }

        .filtered-projects-grid .project-card .project-tags {
          margin-bottom: 0;
        }

        /* Center project card images properly */
        .filtered-projects-grid .project-card .project-image img {
          object-fit: cover;
          object-position: center center;
          width: 100%;
          height: 100%;
        }

        /* Force contact info styling */
        .portfolio-contact-override {
          background: rgba(224, 247, 255, 0.95) !important;
          padding: 12px 20px !important;
          border-radius: 8px !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
          backdrop-filter: blur(10px) !important;
          margin-bottom: 20px !important;
        }

        .portfolio-contact-override *,
        .portfolio-contact-override span,
        .portfolio-contact-override a {
          color: #1a1a1a !important;
          font-weight: 500 !important;
          text-decoration: none !important;
        }

        .portfolio-contact-override a:hover {
          color: #0066cc !important;
          text-decoration: underline !important;
        }

        .portfolio-contact-override svg {
          color: #1a1a1a !important;
        }

        @media (max-width: 1024px) {
          .category-cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .category-card {
            display: flex;
            flex-direction: row;
          }

          .category-card-image {
            width: 200px;
            height: auto;
            min-height: 180px;
          }

          .category-card-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .category-card {
            flex-direction: column;
          }

          .category-card-image {
            width: 100%;
            height: 160px;
          }

          .filtered-projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          /* Fix pink overlay on mobile */
          .filtered-projects-grid .project-card .project-overlay {
            display: none;
          }

          .filtered-projects-grid .project-card .project-image-container::after {
            display: none;
          }
        }
      `}</style>

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
                <p className="title" style={{ marginBottom: '10px' }}>Senior UX Researcher & Designer</p>
                <div 
                  className="contact-info portfolio-contact-override" 
                  style={{ 
                    display: 'flex', 
                    gap: '20px', 
                    alignItems: 'center',
                    fontSize: '16px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={16} />
                    <span>{contactInfo.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Mail size={16} />
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Linkedin size={16} />
                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
              I am a Human-Computer Interaction researcher and designer with 8+ years of experience, specializing in the convergence of AI systems and user experience. I combine rigorous research methodologies with hands-on design practice to create intuitive, intelligent interfaces that adapt to human needs. My work spans the full product lifecycle—from ethnographic research and behavioral analytics to wireframing, prototyping, and high-fidelity UI design—developing AI-augmented experiences that solve complex challenges while remaining deeply aligned with users' needs.
            </p>
          </div>
        </div>
      </header>

      {/* Work Section */}
      <section className="work-section">
        <div className="container">
          <h2 className="section-title">Selected Work</h2>
          
          {/* Category Selection View */}
          {!activeCategory && (
            <div className="category-cards-grid">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="category-card"
                  style={{ '--card-color': category.color }}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="category-card-image">
                    <img src={category.previewImage} alt={category.title} />
                  </div>
                  <div className="category-card-content">
                    <p className="category-card-subtitle">{category.subtitle}</p>
                    <h3 className="category-card-title">{category.title}</h3>
                    <p className="category-card-description">{category.description}</p>
                    <div className="category-card-footer">
                      <span className="category-card-count">{category.projectCount} projects</span>
                      <div className="category-card-arrow">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects View */}
          {activeCategory && (
            <div className="projects-view">
              <button className="back-button" onClick={handleBackClick}>
                <ArrowLeft size={18} />
                Back to Categories
              </button>

              <div className="projects-header">
                <div 
                  className="projects-header-icon"
                  style={{ background: `linear-gradient(135deg, ${activeCategoryData.color} 0%, ${activeCategoryData.colorDark} 100%)` }}
                >
                  {activeCategoryData.icon}
                </div>
                <div className="projects-header-text">
                  <h3>{activeCategoryData.title}</h3>
                  <p>{activeCategoryData.description}</p>
                </div>
              </div>
          
              <div className="filtered-projects-grid">
                {activeProjects.map((project) => (
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
          )}
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