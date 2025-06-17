import React, { useState, useEffect } from 'react';
import './MobileDesignSolution.css';

const MobileDesignSolution = () => {
  const [isRecording, setIsRecording] = useState(true);
  const [transcriptText, setTranscriptText] = useState(
    "The main principles of database normalization include eliminating redundancy and ensuring data integrity. First normal form requires that each column contains atomic values..."
  );

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
    <div className="mobile-status-bar">
      <span>9:41</span>
      <div className="mobile-network-indicators">
        <div className="mobile-signal-bar mobile-signal-1"></div>
        <div className="mobile-signal-bar mobile-signal-2"></div>
        <div className="mobile-signal-bar mobile-signal-3"></div>
        <div className="mobile-signal-bar mobile-signal-4"></div>
        <div className="mobile-battery">
          <div className="mobile-battery-fill"></div>
        </div>
      </div>
    </div>
  );

  const AppHeader = ({ title }) => (
    <div className="mobile-app-header">
      <div className="mobile-back-btn">←</div>
      <div className="mobile-app-title">{title}</div>
    </div>
  );

  return (
    <div style={{
      width: '100%',
      padding: '20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '16px',
      margin: '20px 0'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Assessment Submission Interface */}
        <div className="mobile-phone-section">
          <div className="mobile-phone-label">Assessment Submission Interface</div>
          <div style={{
            background: '#1a1a1a',
            borderRadius: '24px',
            padding: '6px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            width: '280px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '18px',
              overflow: 'hidden',
              height: '500px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <StatusBar />
              <AppHeader title="Assessment Center" />
              <div className="mobile-content" style={{ padding: '16px', fontSize: '12px' }}>
                <div className="mobile-sync-indicator">
                  <div className="mobile-sync-icon">✓</div>
                  <div className="mobile-sync-text">Synced with desktop • Auto-save enabled</div>
                </div>
                
                <div className="mobile-assessment-card" style={{ padding: '12px', marginBottom: '12px' }}>
                  <div className="mobile-card-title" style={{ fontSize: '13px' }}>IT Security Assessment</div>
                  <div className="mobile-card-subtitle" style={{ fontSize: '11px' }}>Due: Tomorrow, 11:59 PM</div>
                  <div className="mobile-progress-bar">
                    <div className="mobile-progress-fill" style={{width: '65%'}}></div>
                  </div>
                  <div className="mobile-progress-text" style={{ fontSize: '10px' }}>65% Complete • 8 of 12 questions</div>
                  <div className="mobile-action-buttons">
                    <button className="mobile-btn mobile-btn-primary" style={{ padding: '8px 12px', fontSize: '11px' }}>Continue</button>
                    <button className="mobile-btn mobile-btn-secondary" style={{ padding: '8px 12px', fontSize: '11px' }}>Submit</button>
                  </div>
                </div>
                
                <div className="mobile-assessment-card" style={{ padding: '12px', marginBottom: '12px' }}>
                  <div className="mobile-card-title" style={{ fontSize: '13px' }}>Database Management Quiz</div>
                  <div className="mobile-card-subtitle" style={{ fontSize: '11px' }}>Due: Next Week</div>
                  <div className="mobile-progress-bar">
                    <div className="mobile-progress-fill" style={{width: '30%'}}></div>
                  </div>
                  <div className="mobile-progress-text" style={{ fontSize: '10px' }}>30% Complete • 3 of 10 questions</div>
                  <div className="mobile-action-buttons">
                    <button className="mobile-btn mobile-btn-primary" style={{ padding: '8px 12px', fontSize: '11px' }}>Continue</button>
                    <button className="mobile-btn mobile-btn-secondary" style={{ padding: '8px 12px', fontSize: '11px' }}>Save Draft</button>
                  </div>
                </div>
                
                <div className="mobile-offline-mode">
                  <div className="mobile-offline-text" style={{ fontSize: '10px' }}>📱 All assessments available offline</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Voice Input Interface */}
        <div className="mobile-phone-section">
          <div className="mobile-phone-label">Voice Input & Dictation Features</div>
          <div style={{
            background: '#1a1a1a',
            borderRadius: '24px',
            padding: '6px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            width: '280px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '18px',
              overflow: 'hidden',
              height: '500px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <StatusBar />
              <AppHeader title="Assignment Editor" />
              <div className="mobile-content" style={{ padding: '16px', fontSize: '12px' }}>
                <div className="mobile-sync-indicator mobile-recording">
                  <div className="mobile-sync-icon">🎤</div>
                  <div className="mobile-sync-text">Voice recording active • Transcribing...</div>
                </div>
                
                <div className="mobile-essay-container" style={{ padding: '12px', marginBottom: '12px' }}>
                  <div className="mobile-essay-title" style={{ fontSize: '13px' }}>Essay Response</div>
                  <div className="mobile-essay-text" style={{ padding: '10px', minHeight: '80px' }}>
                    <div className="mobile-transcript" style={{ fontSize: '11px' }}>
                      {transcriptText.substring(0, 120)}...
                      <div className="mobile-cursor"></div>
                    </div>
                  </div>
                  <div className="mobile-word-count" style={{ fontSize: '10px' }}>Word count: {transcriptText.split(' ').length} • Voice transcribed</div>
                </div>
                
                <div className="mobile-voice-input mobile-active" style={{ padding: '12px', marginBottom: '12px' }}>
                  <div className="mobile-mic-icon mobile-recording-pulse" style={{ width: '32px', height: '32px', fontSize: '16px' }}>🎤</div>
                  <div className="mobile-voice-text" style={{ fontSize: '11px' }}>Recording... Tap to stop</div>
                </div>
                
                <div className="mobile-voice-controls">
                  <button 
                    className="mobile-btn mobile-btn-secondary mobile-small"
                    onClick={() => setIsRecording(!isRecording)}
                    style={{ padding: '6px 8px', fontSize: '10px' }}
                  >
                    {isRecording ? '⏸️ Pause' : '▶️ Resume'}
                  </button>
                  <button className="mobile-btn mobile-btn-secondary mobile-small" style={{ padding: '6px 8px', fontSize: '10px' }}>🔄 Restart</button>
                </div>
                
                <div className="mobile-voice-tips" style={{ padding: '10px' }}>
                  <div className="mobile-tips-title" style={{ fontSize: '11px' }}>💡 Voice Tips</div>
                  <div className="mobile-tips-text" style={{ fontSize: '9px' }}>
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
    </div>
  );
};

export default MobileDesignSolution;