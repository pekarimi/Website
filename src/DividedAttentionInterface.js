import React, { useState } from 'react';
import { Play, Pause, Clock, CheckCircle, Bookmark, ArrowRight } from 'lucide-react';

const SingleLearningInterface = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(42);

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      padding: '32px',
      color: 'white',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
    }}>
      
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <div>
          <h1 style={{
            margin: '0 0 4px 0',
            fontSize: '24px',
            fontWeight: '600'
          }}>
            Database Design Fundamentals
          </h1>
          <p style={{
            margin: 0,
            opacity: 0.8,
            fontSize: '14px'
          }}>
            Chapter 4: Entity Relationships • Last accessed 2 hours ago
          </p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          65% Complete
        </div>
      </div>

      {/* Quick Resume Banner */}
      <div style={{
        background: 'rgba(255,255,255,0.15)',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '24px',
        border: '1px solid rgba(255,255,255,0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '4px'
            }}>
              👋 Welcome back! Resume where you left off
            </div>
            <div style={{
              fontSize: '12px',
              opacity: 0.8
            }}>
              You were reading about "Entity-relationship diagrams" on page 23
            </div>
          </div>
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
            color: 'white',
            padding: '8px 16px',
            fontSize: '13px',
            cursor: 'pointer',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Play size={14} />
            Continue Reading
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        marginBottom: '24px'
      }}>
        
        {/* Learning Modules */}
        <div>
          <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            Quick Learning Sessions (5-10 min)
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '10px',
              padding: '12px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  ER Diagram Basics
                </span>
                <span style={{ fontSize: '12px', opacity: 0.8 }}>7 min</span>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                height: '3px',
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
                <CheckCircle size={12} style={{ color: '#4ade80' }} />
                <span style={{ fontSize: '11px' }}>Completed</span>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '10px',
              padding: '12px',
              border: '2px solid rgba(255,255,255,0.4)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Relationship Types
                </span>
                <span style={{ fontSize: '12px', opacity: 0.8 }}>6 min</span>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                height: '3px',
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
              <div style={{ fontSize: '11px', marginTop: '4px' }}>
                65% complete • Currently viewing
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
              padding: '12px',
              border: '1px solid rgba(255,255,255,0.15)',
              opacity: 0.7
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>
                  Normalization Rules
                </span>
                <span style={{ fontSize: '12px', opacity: 0.8 }}>8 min</span>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                height: '3px',
                borderRadius: '2px'
              }} />
              <div style={{ fontSize: '11px', marginTop: '4px' }}>
                Up next
              </div>
            </div>
          </div>
        </div>

        {/* Audio Learning */}
        <div>
          <h3 style={{
            margin: '0 0 16px 0',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            Audio Learning (Perfect for multitasking)
          </h3>
          
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '12px',
            padding: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px'
            }}>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  background: '#3b82f6',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white'
                }}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <div style={{ flex: 1 }}>
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  height: '4px',
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
                  fontSize: '11px',
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
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Database Relationships Explained
            </h4>
            <p style={{
              margin: '0 0 8px 0',
              fontSize: '12px',
              opacity: 0.8
            }}>
              Listen while commuting or doing chores
            </p>
            
            {/* Bookmarked moment */}
            <div style={{
              background: 'rgba(255,193,7,0.2)',
              borderRadius: '6px',
              padding: '8px',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Bookmark size={12} style={{ color: '#ffc107' }} />
              <span>"Primary keys are crucial for..." - Bookmarked at 3:45</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '16px',
        border: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
            color: 'white',
            padding: '8px 12px',
            fontSize: '12px',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            Download for Offline
          </button>
          <button style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '8px',
            color: 'white',
            padding: '8px 12px',
            fontSize: '12px',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            Set Reminder
          </button>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Clock size={14} />
          <span style={{ fontSize: '12px' }}>
            Study time today: 23 min
          </span>
        </div>
        
        <button style={{
          background: 'rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '8px',
          color: 'white',
          padding: '8px 16px',
          fontSize: '12px',
          cursor: 'pointer',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          Next Chapter
          <ArrowRight size={12} />
        </button>
      </div>

      {/* Study Tip */}
      <div style={{
        marginTop: '16px',
        padding: '12px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.15)'
      }}>
        <div style={{
          fontSize: '12px',
          fontWeight: '500',
          marginBottom: '4px',
          opacity: 0.9
        }}>
          💡 Perfect for fragmented learning
        </div>
        <div style={{
          fontSize: '11px',
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