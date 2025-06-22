import React, { useState, useEffect } from 'react';

const MobileDesignSolution = () => {
  const [isRecording, setIsRecording] = useState(true);
  const [transcriptText, setTranscriptText] = useState(
    "The main principles of database normalization include eliminating redundancy and ensuring data integrity. First normal form requires that each column contains atomic values..."
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRecording) {
        setTranscriptText(prev => {
          const additions = [
            " Second normal form eliminates partial dependencies.",
            " Third normal form removes transitive dependencies.",
            " These principles ensure efficient database design."
          ];
          const randomAddition = additions[Math.floor(Math.random() * additions.length)];
          if (prev.length < 300) {
            return prev + randomAddition;
          }
          return prev;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isRecording]);

  const StatusBar = () => (
    <div style={{
      background: '#f8f9fa',
      height: isMobile ? '16px' : '40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '0 6px' : '0 16px',
      fontSize: isMobile ? '6px' : '14px',
      fontWeight: '600'
    }}>
      <span>9:41</span>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <div style={{ width: '2px', height: '3px', background: '#333', borderRadius: '1px' }}></div>
          <div style={{ width: '2px', height: '4px', background: '#333', borderRadius: '1px' }}></div>
          <div style={{ width: '2px', height: '5px', background: '#333', borderRadius: '1px' }}></div>
          <div style={{ width: '2px', height: '6px', background: '#333', borderRadius: '1px' }}></div>
        </div>
        <div style={{
          width: isMobile ? '8px' : '16px',
          height: isMobile ? '4px' : '8px',
          border: '1px solid #333',
          borderRadius: '2px',
          position: 'relative',
          marginLeft: '4px'
        }}>
          <div style={{
            width: '80%',
            height: '100%',
            background: '#28a745',
            borderRadius: '1px'
          }} />
        </div>
      </div>
    </div>
  );

  const AppHeader = ({ title }) => (
    <div style={{
      background: '#667eea',
      color: 'white',
      padding: isMobile ? '4px 6px' : '15px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '4px' : '10px'
    }}>
      <div style={{
        width: isMobile ? '12px' : '24px',
        height: isMobile ? '12px' : '24px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: isMobile ? '8px' : '16px',
        cursor: 'pointer'
      }}>
        ←
      </div>
      <div style={{
        fontSize: isMobile ? '8px' : '18px',
        fontWeight: '600'
      }}>
        {title}
      </div>
    </div>
  );

  const containerStyle = {
    width: '100%',
    padding: isMobile ? '6px' : '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: isMobile ? '8px' : '16px',
    margin: isMobile ? '8px 0' : '20px 0',
    maxWidth: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    transform: 'scale(1)',
    transformOrigin: 'top center'
  };

  const interfacesStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '8px' : '24px',
    maxWidth: '100%',
    margin: '0 auto'
  };

  const phoneStyle = {
    background: '#1a1a1a',
    borderRadius: isMobile ? '8px' : '24px',
    padding: isMobile ? '1px' : '6px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    width: isMobile ? '100%' : '280px',
    maxWidth: isMobile ? '140px' : '320px',
    margin: '0 auto'
  };

  const screenStyle = {
    background: 'white',
    borderRadius: isMobile ? '6px' : '18px',
    overflow: 'hidden',
    height: isMobile ? '200px' : '500px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  };

  const contentStyle = {
    padding: isMobile ? '4px' : '16px',
    fontSize: isMobile ? '5px' : '12px',
    flex: 1,
    overflow: 'auto'
  };

  return (
    <div style={containerStyle}>
      <div style={interfacesStyle}>
        {/* Assessment Submission Interface */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            color: 'white',
            fontSize: isMobile ? '8px' : '16px',
            fontWeight: '600',
            marginBottom: isMobile ? '4px' : '15px',
            textAlign: 'center'
          }}>
            Assessment Submission Interface
          </div>
          <div style={phoneStyle}>
            <div style={screenStyle}>
              <StatusBar />
              <AppHeader title="Assessment Center" />
              <div style={contentStyle}>
                <div style={{
                  background: '#d4edda',
                  border: '1px solid #c3e6cb',
                  borderRadius: isMobile ? '2px' : '6px',
                  padding: isMobile ? '2px' : '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '2px' : '6px',
                  marginBottom: isMobile ? '3px' : '20px'
                }}>
                  <div style={{
                    width: isMobile ? '6px' : '12px',
                    height: isMobile ? '6px' : '12px',
                    background: '#28a745',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: isMobile ? '4px' : '8px'
                  }}>
                    ✓
                  </div>
                  <div style={{ fontSize: isMobile ? '4px' : '12px', color: '#155724' }}>
                    Synced with desktop • Auto-save enabled
                  </div>
                </div>
                
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: isMobile ? '2px' : '8px',
                  padding: isMobile ? '2px' : '12px',
                  marginBottom: isMobile ? '2px' : '12px',
                  borderLeft: '3px solid #667eea'
                }}>
                  <div style={{ fontSize: isMobile ? '5px' : '13px', fontWeight: '600', marginBottom: '4px' }}>
                    IT Security Assessment
                  </div>
                  <div style={{ fontSize: isMobile ? '4px' : '11px', color: '#666', marginBottom: '6px' }}>
                    Due: Tomorrow, 11:59 PM
                  </div>
                  <div style={{
                    background: '#e9ecef',
                    height: isMobile ? '1px' : '4px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    marginBottom: '4px'
                  }}>
                    <div style={{
                      background: '#667eea',
                      height: '100%',
                      width: '65%',
                      borderRadius: '2px'
                    }} />
                  </div>
                  <div style={{ fontSize: isMobile ? '3px' : '10px', color: '#666', marginBottom: '6px' }}>
                    65% Complete • 8 of 12 questions
                  </div>
                  <div style={{ display: 'flex', gap: isMobile ? '2px' : '6px' }}>
                    <button style={{
                      background: '#667eea',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: isMobile ? '1px 2px' : '6px 10px',
                      fontSize: isMobile ? '4px' : '10px',
                      cursor: 'pointer',
                      flex: 1
                    }}>
                      Continue
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#667eea',
                      border: '1px solid #667eea',
                      borderRadius: '4px',
                      padding: isMobile ? '1px 2px' : '6px 10px',
                      fontSize: isMobile ? '4px' : '10px',
                      cursor: 'pointer',
                      flex: 1
                    }}>
                      Submit
                    </button>
                  </div>
                </div>
                
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: isMobile ? '2px' : '8px',
                  padding: isMobile ? '2px' : '12px',
                  marginBottom: isMobile ? '2px' : '12px',
                  borderLeft: '3px solid #667eea'
                }}>
                  <div style={{ fontSize: isMobile ? '5px' : '13px', fontWeight: '600', marginBottom: '4px' }}>
                    Database Management Quiz
                  </div>
                  <div style={{ fontSize: isMobile ? '4px' : '11px', color: '#666', marginBottom: '6px' }}>
                    Due: Next Week
                  </div>
                  <div style={{
                    background: '#e9ecef',
                    height: isMobile ? '1px' : '4px',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    marginBottom: '4px'
                  }}>
                    <div style={{
                      background: '#667eea',
                      height: '100%',
                      width: '30%',
                      borderRadius: '2px'
                    }} />
                  </div>
                  <div style={{ fontSize: isMobile ? '3px' : '10px', color: '#666', marginBottom: '6px' }}>
                    30% Complete • 3 of 10 questions
                  </div>
                  <div style={{ display: 'flex', gap: isMobile ? '2px' : '6px' }}>
                    <button style={{
                      background: '#667eea',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: isMobile ? '1px 2px' : '6px 10px',
                      fontSize: isMobile ? '4px' : '10px',
                      cursor: 'pointer',
                      flex: 1
                    }}>
                      Continue
                    </button>
                    <button style={{
                      background: 'white',
                      color: '#667eea',
                      border: '1px solid #667eea',
                      borderRadius: '4px',
                      padding: isMobile ? '1px 2px' : '6px 10px',
                      fontSize: isMobile ? '4px' : '10px',
                      cursor: 'pointer',
                      flex: 1
                    }}>
                      Save Draft
                    </button>
                  </div>
                </div>
                
                <div style={{
                  background: '#fff3cd',
                  border: '1px solid #ffeaa7',
                  borderRadius: isMobile ? '2px' : '6px',
                  padding: isMobile ? '2px' : '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: isMobile ? '3px' : '10px', color: '#856404' }}>
                    📱 All assessments available offline
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Voice Input Interface */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            color: 'white',
            fontSize: isMobile ? '8px' : '16px',
            fontWeight: '600',
            marginBottom: isMobile ? '4px' : '15px',
            textAlign: 'center'
          }}>
            Voice Input & Dictation Features
          </div>
          <div style={phoneStyle}>
            <div style={screenStyle}>
              <StatusBar />
              <AppHeader title="Assignment Editor" />
              <div style={contentStyle}>
                <div style={{
                  background: '#e8f5e8',
                  border: '1px solid #28a745',
                  borderRadius: isMobile ? '2px' : '6px',
                  padding: isMobile ? '2px' : '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '2px' : '6px',
                  marginBottom: isMobile ? '3px' : '20px'
                }}>
                  <div style={{ fontSize: isMobile ? '5px' : '12px' }}>🎤</div>
                  <div style={{ fontSize: isMobile ? '4px' : '12px', color: '#155724' }}>
                    Voice recording active • Transcribing...
                  </div>
                </div>
                
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: isMobile ? '2px' : '8px',
                  padding: isMobile ? '2px' : '12px',
                  marginBottom: isMobile ? '2px' : '12px',
                  borderLeft: '3px solid #667eea'
                }}>
                  <div style={{ fontSize: isMobile ? '5px' : '13px', fontWeight: '600', marginBottom: '6px' }}>
                    Essay Response
                  </div>
                  <div style={{
                    background: 'white',
                    borderRadius: isMobile ? '2px' : '6px',
                    padding: isMobile ? '2px' : '10px',
                    minHeight: isMobile ? '20px' : '80px',
                    border: '2px dashed #e9ecef',
                    marginBottom: '6px'
                  }}>
                    <div style={{
                      fontSize: isMobile ? '4px' : '11px',
                      lineHeight: 1.3,
                      color: '#333',
                      position: 'relative'
                    }}>
                      {transcriptText.substring(0, isMobile ? 40 : 120)}...
                      <span style={{
                        display: 'inline-block',
                        width: '1px',
                        height: isMobile ? '6px' : '12px',
                        background: '#667eea',
                        marginLeft: '2px',
                        animation: 'blink 1s infinite'
                      }} />
                    </div>
                  </div>
                  <div style={{ fontSize: isMobile ? '3px' : '10px', color: '#666' }}>
                    Word count: {transcriptText.split(' ').length} • Voice transcribed
                  </div>
                </div>
                
                <div style={{
                  background: '#e8f5e8',
                  border: '2px dashed #28a745',
                  borderRadius: isMobile ? '2px' : '8px',
                  padding: isMobile ? '2px' : '12px',
                  textAlign: 'center',
                  marginBottom: isMobile ? '2px' : '12px'
                }}>
                  <div style={{
                    width: isMobile ? '12px' : '32px',
                    height: isMobile ? '12px' : '32px',
                    background: '#28a745',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 6px',
                    color: 'white',
                    fontSize: isMobile ? '6px' : '16px',
                    animation: 'pulse 2s infinite'
                  }}>
                    🎤
                  </div>
                  <div style={{ fontSize: isMobile ? '4px' : '11px', color: '#155724', fontWeight: '500' }}>
                    Recording... Tap to stop
                  </div>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: isMobile ? '2px' : '6px',
                  marginBottom: isMobile ? '2px' : '12px'
                }}>
                  <button 
                    onClick={() => setIsRecording(!isRecording)}
                    style={{
                      background: 'white',
                      color: '#667eea',
                      border: '1px solid #667eea',
                      borderRadius: '4px',
                      padding: isMobile ? '1px 2px' : '6px 8px',
                      fontSize: isMobile ? '3px' : '10px',
                      cursor: 'pointer'
                    }}
                  >
                    {isRecording ? '⏸️ Pause' : '▶️ Resume'}
                  </button>
                  <button style={{
                    background: 'white',
                    color: '#667eea',
                    border: '1px solid #667eea',
                    borderRadius: '4px',
                    padding: isMobile ? '1px 2px' : '6px 8px',
                    fontSize: isMobile ? '3px' : '10px',
                    cursor: 'pointer'
                  }}>
                    🔄 Restart
                  </button>
                </div>
                
                <div style={{
                  background: '#e3f2fd',
                  borderRadius: isMobile ? '2px' : '6px',
                  padding: isMobile ? '2px' : '10px'
                }}>
                  <div style={{ fontSize: isMobile ? '4px' : '11px', fontWeight: '600', marginBottom: '4px', color: '#1976d2' }}>
                    💡 Voice Tips
                  </div>
                  <div style={{ fontSize: isMobile ? '3px' : '9px', color: '#1976d2', lineHeight: 1.3 }}>
                    • Speak clearly and pause between sentences<br/>
                    • Automatic punctuation enabled<br/>
                    • Edit text after transcription
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default MobileDesignSolution;