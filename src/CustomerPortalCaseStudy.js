import React, { useEffect } from 'react';
import { ArrowLeft, Layout, ShoppingCart, BookOpen, Headphones, CheckCircle, Zap, Users } from 'lucide-react';
import './CustomerPortalCaseStudy.css';

const CustomerPortalCaseStudy = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page customer-portal-case-study">
      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={20} />
        <span>Back to Portfolio</span>
      </button>

      {/* Hero Image */}
      <section className="hero-image-section portal-hero">
        <img 
          src="/images/isono/customerportal1.png" 
          alt="iSono Health Customer Portal Dashboard"
          className="hero-full-image"
        />
      </section>

      {/* Title Section */}
      <section className="title-section">
        <div className="container">
          <div className="title-content">
            <h1>iSono Health Customer Portal</h1>
            <p className="subtitle">End-to-end SaaS platform for medical device customers</p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="project-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-item">
              <h3>Role</h3>
              <p>UX Designer & Developer</p>
            </div>
            <div className="overview-item">
              <h3>Timeline</h3>
              <p>2025</p>
            </div>
            <div className="overview-item">
              <h3>Tools</h3>
              <p>Lovable, Figma, React</p>
            </div>
            <div className="overview-item">
              <h3>Platform</h3>
              <p>Web Application</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <h2>The Challenge</h2>
          <p className="challenge-text">
            iSono Health needed a comprehensive customer portal to support their medical device customers 
            post-purchase. Customers required a centralized platform to manage orders, access training 
            materials, track certifications, and get support—all while maintaining compliance with 
            healthcare industry standards.
          </p>
          
          <div className="goals-grid">
            <div className="goal-card">
              <ShoppingCart className="goal-icon" />
              <h4>Order Management</h4>
              <p>Streamline reordering of consumables and track order history</p>
            </div>
            <div className="goal-card">
              <BookOpen className="goal-icon" />
              <h4>Training & Certification</h4>
              <p>Provide accessible training modules with progress tracking</p>
            </div>
            <div className="goal-card">
              <Headphones className="goal-icon" />
              <h4>Support Integration</h4>
              <p>Enable easy access to support tickets and documentation</p>
            </div>
            <div className="goal-card">
              <Layout className="goal-icon" />
              <h4>Unified Dashboard</h4>
              <p>Give customers a single view of all their activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Feature */}
      <section className="feature-section">
        <div className="container">
          <div className="feature-header">
            <Layout className="feature-header-icon" />
            <div>
              <h2>Dashboard</h2>
              <p className="feature-subtitle">Centralized overview of customer activities</p>
            </div>
          </div>

          <div className="feature-content">
            <div className="feature-image">
              <img src="/images/isono/customerportal1.png" alt="Customer Portal Dashboard" />
            </div>
            <div className="feature-details">
              <h3>Key Metrics at a Glance</h3>
              <p>
                The dashboard provides customers with immediate visibility into their account status, 
                including monthly study volumes, pending reports, open support tickets, and training progress.
              </p>
              <ul className="feature-list">
                <li><CheckCircle size={18} /> Real-time metrics with trend indicators</li>
                <li><CheckCircle size={18} /> Recent orders with status tracking</li>
                <li><CheckCircle size={18} /> Quick actions for common tasks</li>
                <li><CheckCircle size={18} /> FDA clearance badge for compliance visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Orders Feature */}
      <section className="feature-section alt-bg">
        <div className="container">
          <div className="feature-header">
            <ShoppingCart className="feature-header-icon" />
            <div>
              <h2>Order Disposables</h2>
              <p className="feature-subtitle">Streamlined reordering for consumable supplies</p>
            </div>
          </div>

          <div className="feature-content reverse">
            <div className="feature-image">
              <img src="/images/isono/customerportal3.png" alt="Order Disposables Interface" />
            </div>
            <div className="feature-details">
              <h3>E-commerce Experience for Medical Supplies</h3>
              <p>
                Customers can easily browse and reorder consumable supplies like ultrasound gel, 
                transducer covers, and cleaning wipes with real-time inventory visibility.
              </p>
              <ul className="feature-list">
                <li><CheckCircle size={18} /> Category filtering and search</li>
                <li><CheckCircle size={18} /> Real-time stock availability</li>
                <li><CheckCircle size={18} /> Quick reorder functionality</li>
                <li><CheckCircle size={18} /> SKU-based product identification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Feature */}
      <section className="feature-section">
        <div className="container">
          <div className="feature-header">
            <BookOpen className="feature-header-icon" />
            <div>
              <h2>Training & Documentation</h2>
              <p className="feature-subtitle">Comprehensive learning management system</p>
            </div>
          </div>

          <div className="feature-content">
            <div className="feature-image">
              <img src="/images/isono/customerportal.png" alt="Training Modules Interface" />
            </div>
            <div className="feature-details">
              <h3>Progress-Tracked Training Modules</h3>
              <p>
                Healthcare providers can complete required training, track their progress, 
                and maintain certifications—all within the portal.
              </p>
              <ul className="feature-list">
                <li><CheckCircle size={18} /> Multiple content types: video, interactive, documents</li>
                <li><CheckCircle size={18} /> Visual progress tracking with completion status</li>
                <li><CheckCircle size={18} /> Certification management</li>
                <li><CheckCircle size={18} /> Category-based organization (Equipment, Safety, Technical)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Feature */}
      <section className="feature-section alt-bg">
        <div className="container">
          <div className="feature-header">
            <Headphones className="feature-header-icon" />
            <div>
              <h2>Support Center</h2>
              <p className="feature-subtitle">Integrated ticketing and help system</p>
            </div>
          </div>

          <div className="feature-content reverse">
            <div className="feature-image">
              <img src="/images/isono/customerportal2.png" alt="Support Center Interface" />
            </div>
            <div className="feature-details">
              <h3>Streamlined Support Requests</h3>
              <p>
                Customers can submit and track support tickets directly within the portal, 
                with category-based routing and priority levels for efficient issue resolution.
              </p>
              <ul className="feature-list">
                <li><CheckCircle size={18} /> Create tickets with category and priority selection</li>
                <li><CheckCircle size={18} /> Track ticket status and history</li>
                <li><CheckCircle size={18} /> View all support requests in one place</li>
                <li><CheckCircle size={18} /> Detailed descriptions with system-specific fields</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="approach-section">
        <div className="container">
          <h2>Design Approach</h2>
          <p className="section-intro">
            Built using Lovable for rapid prototyping and development, the portal prioritizes 
            clarity and efficiency for busy healthcare professionals.
          </p>

          <div className="approach-grid">
            <div className="approach-card">
              <Zap className="approach-icon" />
              <h4>Rapid Development</h4>
              <p>Used Lovable to quickly iterate on designs and generate production-ready code</p>
            </div>
            <div className="approach-card">
              <Users className="approach-icon" />
              <h4>User-Centered</h4>
              <p>Designed around common customer workflows and pain points</p>
            </div>
            <div className="approach-card">
              <CheckCircle className="approach-icon" />
              <h4>Healthcare Compliant</h4>
              <p>Visual indicators for FDA clearance and compliance requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Design */}
      <section className="visual-design-section">
        <div className="container">
          <h2>Visual Design System</h2>
          <p className="section-intro">
            The portal uses iSono Health's brand colors with a clean, professional aesthetic 
            appropriate for healthcare environments.
          </p>

          <div className="color-palette">
            <div className="color-swatch" style={{ background: '#00D4AA' }}>
              <span className="color-name">Primary Teal</span>
              <span className="color-value">#00D4AA</span>
            </div>
            <div className="color-swatch" style={{ background: '#7C3AED' }}>
              <span className="color-name">Accent Purple</span>
              <span className="color-value">#7C3AED</span>
            </div>
            <div className="color-swatch" style={{ background: '#F97316' }}>
              <span className="color-name">Warning Orange</span>
              <span className="color-value">#F97316</span>
            </div>
            <div className="color-swatch" style={{ background: '#1E293B' }}>
              <span className="color-name">Text Dark</span>
              <span className="color-value">#1E293B</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2>Outcome</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <span className="impact-number">4</span>
              <span className="impact-label">Core Modules</span>
            </div>
            <div className="impact-card">
              <span className="impact-number">4</span>
              <span className="impact-label">Key Screens Designed</span>
            </div>
            <div className="impact-card">
              <span className="impact-number">100%</span>
              <span className="impact-label">Self-Service Capable</span>
            </div>
          </div>
          
          <p className="impact-summary">
            The customer portal provides iSono Health customers with a comprehensive self-service 
            platform, reducing support overhead while improving customer satisfaction through 
            easy access to orders, training, and support.
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="reflection-section">
        <div className="container">
          <h2>Reflection</h2>
          <p>
            This project demonstrated the power of AI-assisted development tools like Lovable 
            for rapidly creating functional prototypes. By combining UX design principles with 
            efficient development workflows, I was able to deliver a complete portal solution 
            that addresses real customer needs while maintaining healthcare industry standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CustomerPortalCaseStudy;
