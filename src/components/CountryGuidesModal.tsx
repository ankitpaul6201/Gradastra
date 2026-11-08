import React, { useState } from 'react';
import { COUNTRY_GUIDES, CountryGuide } from '../data/mockData';
import { 
  X, 
  Globe, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

interface CountryGuidesModalProps {
  onClose: () => void;
}

export const CountryGuidesModal: React.FC<CountryGuidesModalProps> = ({ onClose }) => {
  const [selectedGuide, setSelectedGuide] = useState<CountryGuide>(COUNTRY_GUIDES[0]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '860px' }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#0d1117'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Globe size={20} color="#7ea6ff" />
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>
              International Student Country Education Guides
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Country Selector Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          padding: '16px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          overflowX: 'auto',
          background: 'rgba(255,255,255,0.02)'
        }}>
          {COUNTRY_GUIDES.map(g => (
            <button
              key={g.id}
              onClick={() => setSelectedGuide(g)}
              style={{
                background: selectedGuide.id === g.id ? '#4f6fb5' : 'rgba(255, 255, 255, 0.04)',
                border: '1px solid',
                borderColor: selectedGuide.id === g.id ? '#4f6fb5' : 'rgba(255, 255, 255, 0.08)',
                color: selectedGuide.id === g.id ? '#fff' : '#94a3b8',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{g.flag} {g.country}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: '24px', maxHeight: '65vh', overflowY: 'auto' }}>
          
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Studying in {selectedGuide.country}
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6 }}>
              {selectedGuide.overview}
            </p>
          </div>

          {/* Key Facts Tiles */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            marginBottom: '24px'
          }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Public University Tuition</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#38bdf8', marginTop: '4px' }}>{selectedGuide.avgTuitionPublic}</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Average Living Costs</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fb923c', marginTop: '4px' }}>{selectedGuide.avgLivingCostMonth}</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Post-Study Work Visa</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#34d399', marginTop: '4px' }}>{selectedGuide.postStudyWorkVisa}</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>Working During Term</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginTop: '4px' }}>{selectedGuide.workDuringStudy}</div>
            </div>
          </div>

          {/* Pros & Cons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '16px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399', fontWeight: 700, fontSize: '13px', marginBottom: '10px' }}>
                <CheckCircle2 size={16} />
                <span>Primary Advantages</span>
              </div>
              <ul style={{ paddingLeft: '18px', fontSize: '13px', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {selectedGuide.advantages.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '16px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f87171', fontWeight: 700, fontSize: '13px', marginBottom: '10px' }}>
                <AlertTriangle size={16} />
                <span>Key Challenges to Plan For</span>
              </div>
              <ul style={{ paddingLeft: '18px', fontSize: '13px', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {selectedGuide.challenges.map((ch, i) => (
                  <li key={i}>{ch}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Official Link Disclaimer per PRD 6.6 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>
              <strong>Official Immigration Reference:</strong> Visa regulations change frequently. Always consult official government gazettes.
            </div>
            <a 
              href={selectedGuide.officialImmigrationUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#7ea6ff',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>Visit Official Government Site</span>
              <ExternalLink size={13} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
