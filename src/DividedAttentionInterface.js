import React, { useState, useEffect } from 'react';
import { Play, Pause, Clock, CheckCircle, Bookmark, ArrowRight } from 'lucide-react';

const SingleLearningInterface = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(42);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerStyle = {
    maxWidth: isMobile ? '100%' : '900px',
    margin: '0 auto',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: isMobile ? '12px' : '20px',
    padding: isMobile ? '12px' : '32px',
    color: 'white',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    width: isMobile ? 'calc(100vw - 32px)' : 'auto',
    boxSizing: 'border-box',
    transform: isMobile ? 'scale(0.85)' : 'scale(1)',
    transformOrigin: 'top center',
    marginBottom: isMobile ? '-20px' : '0'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'center',
    marginBottom: isMobile ? '12px' : '24px',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '8px' : '0'
  };

  const mainContentStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '12px' : '24px',
    marginBottom: isMobile ? '12px' : '24px'
  };

  const actionBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: isMobile ? '8px' : '12px',
    padding: isMobile ? '8px' : '16px',
    border: '1px solid rgba(255,255,255,0.15)',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '8px' : '0'
  };

  return (
    <div style={containerStyle}>
      
      {/* Header */}
      <div style={headerStyle}>
        <div style={{ width: '100%' }}>
          <h1 style={{
            margin: '0 0 4px 0',
            fontSize: isMobile ? '14px' : '24px',
            fontWeight: '600'
          }}>
            Database Design Fundamentals
          </h1>
          <p style={{
            margin: 0,
            opacity: 0.8,
            fontSize: isMobile ? '9px' : '14px'
          }}>
            Chapter 4: Entity Relationships • Last accessed 2 hours ago
          </p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          padding: isMobile ? '4px 8px' : '8px 16px',
          borderRadius: isMobile ? '12px' : '20px',
          fontSize: isMobile ? '9px' : '14px',
          fontWeight: '500',
          alignSelf: isMobile ? 'flex-start' : 'auto'
        }}>
          65% Complete
        </div>
      </div>

      {/* Quick Resume Banner */}
      <div style={{
        background: 'rgba(255,255,255,0.15)',
        borderRadius: isMobile ? '8px' : '12px',
        padding: isMobile ? '8px' : '16px',
        marginBottom: isMobile ? '12px' : '24px',
        border: '1px solid rgba(255,255,255,0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '8px' : '0'
        }}>
          <div style={{ width: '100%' }}>
            <div style={{
              fontSize: isMobile ? '9px' : '14px',
              fontWeight: '500',
              marginBottom: '4px'
            }}>
              👋 Welcome back! Resume where you left off
            </div>
            <div style={{
              fontSize: isMobile ? '8px' : '12px',
              opacity: 0.8
            }}>
              You were reading about "Entity-relationship diagrams" on page 23
            </div>
          </div>
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: isMobile ? '6px' : '8px',
            color: 'white',
            padding: isMobile ? '4px 8px' : '8px 16px',
            fontSize: isMobile ? '8px' : '13px',
            cursor: 'pointer',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '3px' : '6px',
            width: isMobile ? '100%' : 'auto',
            justifyContent: 'center'
          }}>
            <Play size={isMobile ? 10 : 14} />
            Continue Reading
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={mainContentStyle}>
        
        {/* Learning Modules */}
        <div style={{ marginBottom: isMobile ? '12px' : '0' }}>
          <h3 style={{
            margin: '0 0 16px 0',
            fontSize: isMobile ? '11px' : '16px',
            fontWeight: '500'
          }}>
            Quick Learning Sessions (5-10 min)
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '4px' : '8px' }}>
            <div style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: isMobile ? '6px' : '10px',
              padding: isMobile ? '6px' : '12px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <span style={{ fontSize: isMobile ? '9px' : '14px', fontWeight: '500' }}>
                  ER Diagram Basics
                </span>
                <span style={{ fontSize: isMobile ? '7px' : '12px', opacity: 0.8 }}>7 min</span>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                height: isMobile ? '2px' : '3px',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: '#4ade80',
                  height: '100%',
                  width: '100%',
                  borderRadius: '2px'
                }} />
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '4px'
              }}>
                <CheckCircle size={isMobile ? 7 : 10} style={{ color: '#4ade80' }} />
                <span style={{ fontSize: isMobile ? '7px' : '11px' }}>Completed</span>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: isMobile ? '6px' : '10px',
              padding: isMobile ? '6px' : '12px',
              border: '2px solid rgba(255,255,255,0.4)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <span style={{ fontSize: isMobile ? '9px' : '14px', fontWeight: '500' }}>
                  Relationship Types
                </span>
                <span style={{ fontSize: isMobile ? '7px' : '12px', opacity: 0.8 }}>6 min</span>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                height: isMobile ? '2px' : '3px',
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: '#60a5fa',
                  height: '100%',
                  width: '65%',
                  borderRadius: '2px'
                }} />
              </div>
              <div style={{ fontSize: isMobile ? '7px' : '11px', marginTop: '4px' }}>
                65% complete • Currently viewing
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: isMobile ? '6px' : '10px',
              padding: isMobile ? '6px' : '12px',
              border: '1px solid rgba(255,255,255,0.15)',
              opacity: 0.7
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <span style={{ fontSize: isMobile ? '9px' : '14px', fontWeight: '500' }}>
                  Normalization Rules
                </span>
                <span style={{ fontSize: isMobile ? '7px' : '12px', opacity: 0.8 }}>8 min</span>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                height: isMobile ? '2px' : '3px',
                borderRadius: '2px'
              }} />
              <div style={{ fontSize: isMobile ? '7px' : '11px', marginTop: '4px' }}>
                Up next
              </div>
            </div>
          </div>
        </div>

        {/* Audio Learning */}
        <div>
          <h3 style={{
            margin: '0 0 16px 0',
            fontSize: isMobile ? '11px' : '16px',
            fontWeight: '500'
          }}>
            Audio Learning (Perfect for multitasking)
          </h3>
          
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: isMobile ? '8px' : '12px',
            padding: isMobile ? '8px' : '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '6px' : '12px',
              marginBottom: isMobile ? '6px' : '12px'
            }}>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  background: '#3b82f6',
                  border: 'none',
                  borderRadius: '50%',
                  width: isMobile ? '24px' : '40px',
                  height: isMobile ? '24px' : '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white'
                }}
              >
                {isPlaying ? <Pause size={isMobile ? 10 : 16} /> : <Play size={isMobile ? 10 : 16} />}
              </button>
              <div style={{ flex: 1 }}>
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  height: isMobile ? '2px' : '4px',
                  borderRadius: '2px',
                  marginBottom: '6px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    background: '#60a5fa',
                    height: '100%',
                    width: `${progress}%`,
                    borderRadius: '2px'
                  }} />
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: isMobile ? '7px' : '11px',
                  opacity: 0.8
                }}>
                  <span>4:12</span>
                  <span>1.5x speed</span>
                  <span>10:00</span>
                </div>
              </div>
            </div>
            
            <h4 style={{
              margin: '0 0 4px 0',
              fontSize: isMobile ? '9px' : '14px',
              fontWeight: '500'
            }}>
              Database Relationships Explained
            </h4>
            <p style={{
              margin: '0 0 8px 0',
              fontSize: isMobile ? '8px' : '12px',
              opacity: 0.8
            }}>
              Listen while commuting or doing chores
            </p>
            
            {/* Bookmarked moment */}
            <div style={{
              background: 'rgba(255,193,7,0.2)',
              borderRadius: isMobile ? '4px' : '6px',
              padding: isMobile ? '4px' : '8px',
              fontSize: isMobile ? '7px' : '11px',
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '3px' : '6px'
            }}>
              <Bookmark size={isMobile ? 7 : 10} style={{ color: '#ffc107' }} />
              <span>"Primary keys are crucial for..." - Bookmarked at 3:45</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div style={actionBarStyle}>
        <div style={{ 
          display: 'flex', 
          gap: isMobile ? '6px' : '12px',
          width: isMobile ? '100%' : 'auto',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: isMobile ? '6px' : '8px',
            color: 'white',
            padding: isMobile ? '4px 6px' : '8px 12px',
            fontSize: isMobile ? '8px' : '12px',
            cursor: 'pointer',
            fontWeight: '500',
            flex: isMobile ? '1' : 'none'
          }}>
            Download for Offline
          </button>
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: isMobile ? '6px' : '8px',
            color: 'white',
            padding: isMobile ? '4px 6px' : '8px 12px',
            fontSize: isMobile ? '8px' : '12px',
            cursor: 'pointer',
            fontWeight: '500',
            flex: isMobile ? '1' : 'none'
          }}>
            Set Reminder
          </button>
        </div>
        
        <button style={{
          background: 'rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: isMobile ? '6px' : '8px',
          color: 'white',
          padding: isMobile ? '4px 8px' : '8px 16px',
          fontSize: isMobile ? '8px' : '12px',
          cursor: 'pointer',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '3px' : '6px',
          width: isMobile ? '100%' : 'auto',
          justifyContent: 'center'
        }}>
          Next Chapter
          <ArrowRight size={isMobile ? 7 : 10} />
        </button>
      </div>

      {/* Study Tip */}
      <div style={{
        marginTop: isMobile ? '8px' : '16px',
        padding: isMobile ? '6px' : '12px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: isMobile ? '6px' : '8px',
        border: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{
          fontSize: isMobile ? '8px' : '12px',
          fontWeight: '500',
          marginBottom: '4px',
          opacity: 0.9
        }}>
          💡 Perfect for fragmented learning
        </div>
        <div style={{
          fontSize: isMobile ? '7px' : '11px',
          opacity: 0.8,
          lineHeight: 1.3
        }}>
          This module is designed for 5-10 minute study sessions. Use audio mode during commutes or household tasks.
        </div>
      </div>
    </div>
  );
};

export default SingleLearningInterface;