import React, { useState, useEffect } from 'react';
import { Play, Calendar, Book, Award, Clock, CheckCircle, AlertCircle, ArrowRight, User, Bell, Settings } from 'lucide-react';

const LearningPortalInterface = () => {
  const [selectedCourse, setSelectedCourse] = useState('database');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const courses = {
    database: {
      title: 'Database Design Fundamentals',
      progress: 65,
      status: 'In Progress',
      nextDeadline: 'Dec 15',
      chapters: [
        { id: 1, title: 'Introduction to Databases', completed: true, duration: '45 min' },
        { id: 2, title: 'Entity Relationship Models', completed: true, duration: '60 min' },
        { id: 3, title: 'Normalization Techniques', completed: true, duration: '55 min' },
        { id: 4, title: 'Advanced Queries', completed: false, current: true, duration: '50 min' },
        { id: 5, title: 'Database Optimization', completed: false, duration: '40 min' }
      ]
    },
    algorithms: {
      title: 'Advanced Algorithms',
      progress: 45,
      status: 'Behind Schedule',
      nextDeadline: 'Dec 20',
      chapters: [
        { id: 1, title: 'Algorithm Fundamentals', completed: true, duration: '40 min' },
        { id: 2, title: 'Sorting & Searching', completed: true, duration: '65 min' },
        { id: 3, title: 'Dynamic Programming', completed: false, current: true, duration: '70 min' },
        { id: 4, title: 'Graph Algorithms', completed: false, duration: '60 min' },
        { id: 5, title: 'Algorithm Analysis', completed: false, duration: '45 min' }
      ]
    }
  };

  const currentCourse = courses[selectedCourse];

  const containerStyle = {
    maxWidth: isMobile ? '100%' : '1200px',
    margin: '0 auto',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    background: '#f8fafc',
    minHeight: '500px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 25px rgba(0,0,0,0.08)',
    width: isMobile ? 'calc(100vw - 32px)' : 'auto',
    boxSizing: 'border-box'
  };

  const mainContentStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
    gap: '24px',
    padding: isMobile ? '16px' : '24px'
  };

  const welcomeBannerStyle = {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    margin: isMobile ? '16px 16px 0 16px' : '24px 24px 0 24px',
    borderRadius: '12px',
    padding: isMobile ? '16px' : '20px',
    color: 'white',
    display: 'block',
    textAlign: isMobile ? 'center' : 'left'
  };

  return (
    <div style={containerStyle}>
      
      {/* Header Navigation */}
      <div style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        padding: isMobile ? '12px 16px' : '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '12px' : '0'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px',
          width: isMobile ? '100%' : 'auto',
          justifyContent: isMobile ? 'center' : 'flex-start'
        }}>
          <div style={{
            background: '#3b82f6',
            borderRadius: '8px',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Book size={isMobile ? 16 : 20} style={{ color: 'white' }} />
          </div>
          <h1 style={{
            margin: 0,
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: '600',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            {currentCourse.title}
          </h1>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          justifyContent: isMobile ? 'center' : 'flex-end'
        }}>
          <Bell size={isMobile ? 16 : 18} style={{ opacity: 0.8, cursor: 'pointer' }} />
          <Settings size={isMobile ? 16 : 18} style={{ opacity: 0.8, cursor: 'pointer' }} />
          <div style={{
            background: '#475569',
            borderRadius: '50%',
            width: isMobile ? '28px' : '32px',
            height: isMobile ? '28px' : '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <User size={isMobile ? 14 : 16} />
          </div>
        </div>
      </div>

      {/* Welcome Back Banner */}
      <div style={welcomeBannerStyle}>
        <div>
          <h2 style={{
            margin: '0 0 4px 0',
            fontSize: isMobile ? '18px' : '22px',
            fontWeight: '600'
          }}>
            Welcome back, Lian! 🎯
          </h2>
          <p style={{
            margin: '0 0 8px 0',
            fontSize: isMobile ? '12px' : '14px',
            opacity: 0.9
          }}>
            You've been away for 2 weeks. We've prepared a personalized catch-up plan.
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'flex-start',
            gap: '12px',
            fontSize: isMobile ? '10px' : '12px',
            flexWrap: 'wrap',
            marginBottom: isMobile ? '12px' : '0'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '4px 8px',
              borderRadius: '12px'
            }}>
              📅 Deadlines extended by 1 week
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '4px 8px',
              borderRadius: '12px'
            }}>
              ⏱️ 3 assignments pending
            </div>
          </div>
          {isMobile && (
            <button style={{
              background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '8px',
              color: 'white',
              padding: '10px 16px',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              width: '100%',
              justifyContent: 'center',
              marginTop: '12px'
            }}>
              Start Catch-up Plan
              <ArrowRight size={12} />
            </button>
          )}
        </div>
        {!isMobile && (
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
            color: 'white',
            padding: '10px 16px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            Start Catch-up Plan
            <ArrowRight size={14} />
          </button>
        )}
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        
        {/* Course List */}
        <div style={{ marginBottom: isMobile ? '24px' : '0' }}>
          <h3 style={{
            margin: '0 0 16px 0',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            color: '#1e293b'
          }}>
            Your Courses
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries(courses).map(([key, course]) => (
              <div
                key={key}
                onClick={() => setSelectedCourse(key)}
                style={{
                  background: selectedCourse === key ? '#f1f5f9' : 'white',
                  border: selectedCourse === key ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: isMobile ? '12px' : '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '8px'
                }}>
                  <h4 style={{
                    margin: 0,
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: '600',
                    color: '#1e293b'
                  }}>
                    {course.title}
                  </h4>
                  <span style={{
                    background: course.status === 'Behind Schedule' ? '#fef3c7' : '#dcfce7',
                    color: course.status === 'Behind Schedule' ? '#92400e' : '#166534',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: isMobile ? '8px' : '10px',
                    fontWeight: '500'
                  }}>
                    {course.status}
                  </span>
                </div>
                
                <div style={{
                  background: '#f1f5f9',
                  height: '6px',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    background: course.progress >= 60 ? '#10b981' : '#f59e0b',
                    height: '100%',
                    width: `${course.progress}%`,
                    borderRadius: '3px',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Calendar size={isMobile ? 12 : 14} style={{ color: '#3b82f6' }} />
                Schedule study sessions
              </button>
              <button style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: isMobile ? '10px' : '12px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Award size={isMobile ? 12 : 14} style={{ color: '#10b981' }} />
                View achievements
              </button>
            </div>
          </div>
        </div>

        {/* Course Detail */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '8px' : '0'
          }}>
            <h3 style={{
              margin: 0,
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: '600',
              color: '#1e293b'
            }}>
              {currentCourse.title}
            </h3>
            <div style={{
              background: '#3b82f6',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: isMobile ? '10px' : '12px',
              fontWeight: '500'
            }}>
              {currentCourse.progress}% Complete
            </div>
          </div>

          {/* Chapter List */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden'
          }}>
            {currentCourse.chapters.map((chapter, index) => (
              <div
                key={chapter.id}
                style={{
                  padding: isMobile ? '12px 16px' : '16px 20px',
                  borderBottom: index < currentCourse.chapters.length - 1 ? '1px solid #f1f5f9' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '12px' : '16px',
                  background: chapter.current ? '#fef3c7' : 'transparent'
                }}
              >
                <div style={{
                  width: isMobile ? '28px' : '32px',
                  height: isMobile ? '28px' : '32px',
                  borderRadius: '50%',
                  background: chapter.completed ? '#dcfce7' : chapter.current ? '#fed7aa' : '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {chapter.completed ? (
                    <CheckCircle size={isMobile ? 14 : 16} style={{ color: '#16a34a' }} />
                  ) : chapter.current ? (
                    <Play size={isMobile ? 12 : 14} style={{ color: '#ea580c' }} />
                  ) : (
                    <span style={{ 
                      fontSize: isMobile ? '10px' : '12px', 
                      fontWeight: '600', 
                      color: '#64748b' 
                    }}>
                      {chapter.id}
                    </span>
                  )}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    margin: '0 0 4px 0',
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: '600',
                    color: '#1e293b'
                  }}>
                    {chapter.title}
                  </h4>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: isMobile ? '10px' : '12px',
                    color: '#64748b',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    gap: isMobile ? '4px' : '12px'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={isMobile ? 10 : 12} />
                      {chapter.duration}
                    </span>
                    {chapter.completed && (
                      <span style={{ color: '#16a34a', fontWeight: '500' }}>✓ Completed</span>
                    )}
                    {chapter.current && (
                      <span style={{ color: '#ea580c', fontWeight: '500' }}>🔥 Continue here</span>
                    )}
                  </div>
                </div>

                {(chapter.current || !chapter.completed) && (
                  <button style={{
                    background: chapter.current ? '#ea580c' : '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    padding: isMobile ? '6px 12px' : '8px 16px',
                    fontSize: isMobile ? '10px' : '12px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    {chapter.current ? 'Continue' : 'Start'}
                    <ArrowRight size={isMobile ? 10 : 12} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Study Tips */}
          <div style={{
            marginTop: '16px',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '12px',
            padding: isMobile ? '12px' : '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px'
            }}>
              <span style={{ fontSize: isMobile ? '14px' : '16px' }}>💡</span>
              <h4 style={{
                margin: 0,
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '600',
                color: '#1e40af'
              }}>
                Personalized Study Tip
              </h4>
            </div>
            <p style={{
              margin: 0,
              fontSize: isMobile ? '10px' : '12px',
              color: '#1e40af',
              lineHeight: 1.4
            }}>
              Since you've been away, start with Chapter 4 review materials. Break your study into 20-minute focused sessions with 5-minute breaks to rebuild your learning momentum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPortalInterface;
                  color: '#64748b'
                }}>
                  <span>{course.progress}% complete</span>
                  <span>Due: {course.nextDeadline}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div style={{
            marginTop: '20px',
            background: 'white',
            borderRadius: '12px',
            padding: isMobile ? '12px' : '16px',
            border: '1px solid #e2e8f0'
          }}>
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '600',
              color: '#1e293b'
            }}>
              Quick Actions
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '8px 12px',
                fontSize: isMobile ? '10px' : '12px',