import React, { useState } from 'react';
import { Advisor } from '../data/mockData';
import { SubTitle3, LayoutIsland } from '../framer';
import { 
  ShieldCheck, 
  Star, 
  Calendar 
} from 'lucide-react';

interface SeniorAdvisorySectionProps {
  advisors: Advisor[];
  onBookAdvisor: (advisor: Advisor) => void;
}

export const SeniorAdvisorySection: React.FC<SeniorAdvisorySectionProps> = ({
  advisors,
  onBookAdvisor
}) => {
  const [selectedTopic, setSelectedTopic] = useState('All');

  const topics = [
    'All',
    'Coursework Load & P-sets',
    'Off-Campus Tech Internships',
    'Living in Oxford on a Budget',
    'Munich Accommodation Hunting',
    'Werkstudent Part-time Jobs',
    'Singapore Tuition Grant Bond',
    'PEY Co-op Placement Success'
  ];

  const filteredAdvisors = advisors.filter(adv => {
    if (selectedTopic === 'All') return true;
    return adv.topics.some(t => t.toLowerCase().includes(selectedTopic.toLowerCase()));
  });

  return (
    <section id="advisors" style={{ padding: '80px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        
        {/* Header with Framer SubTitle3 */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <LayoutIsland>
              <SubTitle3 
                variant="Variant 1" 
                zTskitVfw="03 // TALK TO A SENIOR (100% FREE)" 
              />
            </LayoutIsland>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Ask a Senior Who <span className="gradient-text-blue">Actually Studies There</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '680px', margin: '0 auto' }}>
            Get honest, unfiltered answers about professors, workloads, dorm food, and campus realities from verified 3rd & 4th year university students.
          </p>
        </div>

        {/* Verification Guarantee Pill */}
        <div style={{
          maxWidth: '680px',
          margin: '0 auto 36px',
          background: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          borderRadius: '12px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          textAlign: 'center'
        }}>
          <ShieldCheck size={18} color="#10b981" />
          <span style={{ fontSize: '13px', color: '#e2e8f0' }}>
            <strong>Manual Verification:</strong> Every advisor’s student ID & enrollment record has been checked before joining the network.
          </span>
        </div>

        {/* Topic Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '32px' }}>
          {topics.map(t => (
            <button
              key={t}
              onClick={() => setSelectedTopic(t)}
              style={{
                background: selectedTopic === t ? '#4f6fb5' : 'rgba(255, 255, 255, 0.05)',
                color: selectedTopic === t ? '#fff' : '#94a3b8',
                border: selectedTopic === t ? '1px solid #4f6fb5' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Advisors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {filteredAdvisors.map(adv => (
            <div 
              key={adv.id}
              className="glass-panel"
              style={{
                borderRadius: '18px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative'
              }}
            >
              <div>
                {/* Advisor Header */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <img 
                    src={adv.avatar} 
                    alt={adv.name}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid rgba(79, 111, 181, 0.5)'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>{adv.name}</h3>
                      <span title={adv.verificationBadge} style={{ display: 'flex', alignItems: 'center' }}>
                        <ShieldCheck size={18} color="#10b981" />
                      </span>
                    </div>

                    <div style={{ fontSize: '13px', color: '#7ea6ff', fontWeight: 600, marginTop: '2px' }}>
                      {adv.universityName}
                    </div>

                    <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                      {adv.program} • {adv.year}
                    </div>
                  </div>
                </div>

                {/* Rating & Sessions conducted */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  marginBottom: '16px',
                  fontSize: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', fontWeight: 600 }}>
                    <Star size={14} fill="#fbbf24" />
                    <span>{adv.rating.toFixed(2)}</span>
                    <span style={{ color: '#94a3b8', fontWeight: 400 }}>({adv.sessionsConducted} sessions)</span>
                  </div>

                  <div style={{ color: '#cbd5e1' }}>
                    Origin: <strong>{adv.countryOfOrigin}</strong>
                  </div>
                </div>

                {/* Bio */}
                <p style={{ color: '#cbd5e1', fontSize: '13px', lineHeight: 1.5, marginBottom: '14px' }}>
                  "{adv.bio}"
                </p>

                {/* Topics they can discuss */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase' }}>
                    Topics you can ask about:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {adv.topics.map((t, idx) => (
                      <span 
                        key={idx}
                        style={{
                          background: 'rgba(79, 111, 181, 0.12)',
                          color: '#93c5fd',
                          border: '1px solid rgba(79, 111, 181, 0.25)',
                          padding: '3px 9px',
                          borderRadius: '6px',
                          fontSize: '11px'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Advice Quote */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderLeft: '3px solid #4f6fb5',
                  padding: '10px 12px',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '20px',
                  fontSize: '12px',
                  color: '#94a3b8',
                  fontStyle: 'italic'
                }}>
                  <strong style={{ color: '#fff', fontStyle: 'normal' }}>Key Advice:</strong> {adv.adviceForApplicants}
                </div>
              </div>

              {/* Action Button */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '11px', color: '#34d399', fontWeight: 600 }}>
                  ● Available this week
                </div>

                <button
                  onClick={() => onBookAdvisor(adv)}
                  className="btn-primary"
                  style={{
                    padding: '8px 16px',
                    fontSize: '13px',
                    borderRadius: '10px'
                  }}
                >
                  <Calendar size={14} />
                  <span>Book Free Session</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
