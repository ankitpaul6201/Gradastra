import React from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

interface TrustAndIndependenceModalProps {
  onClose: () => void;
}

export const TrustAndIndependenceModal: React.FC<TrustAndIndependenceModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '780px' }}
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
            <ShieldCheck size={22} color="#10b981" />
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>
              Gradastra Independence & Transparency Charter
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

        <div style={{ padding: '24px', maxHeight: '70vh', overflowY: 'auto' }}>
          
          {/* PRD Independence Declaration */}
          <div style={{
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: '14px',
            padding: '20px',
            marginBottom: '24px',
            lineHeight: 1.6
          }}>
            <h4 style={{ color: '#34d399', fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>
              Official Independence Declaration (PRD Section 11)
            </h4>
            <p style={{ color: '#e2e8f0', fontSize: '14px', fontStyle: 'italic' }}>
              "Gradastra is an independent, student-focused education advisory platform. We do not have commercial partnerships, admission agreements or referral arrangements with universities or colleges. We do not receive commissions for student admissions. University information is gathered from publicly available sources, verified records and student-reported experiences. Our objective is to help students make informed decisions through transparent and independent guidance."
            </p>
          </div>

          <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
            Foundational Business Rules (Irrevocable)
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
            {[
              {
                title: 'No Admission Placement Fees or Commissions',
                desc: 'Traditional agencies take $2,000–$8,000 when you enroll in partner colleges. Gradastra collects $0 from colleges and guarantees zero commission incentive.'
              },
              {
                title: 'No Sponsored or Paid University Rankings',
                desc: 'Universities cannot pay to appear higher in search, receive featured badges, or manipulate sort algorithms.'
              },
              {
                title: 'No Sale of Student Contact Leads',
                desc: 'We never sell your email, phone number, or academic record to university recruiters or third-party marketing companies.'
              },
              {
                title: 'Consultations are Always 100% Free',
                desc: 'No student is ever charged a fee to search colleges, compare statistics, or consult with verified senior student advisors.'
              },
              {
                title: 'No Suppression of Legitimate Student Criticism',
                desc: 'Universities cannot request the deletion of negative reviews. Legitimate criticism regarding workloads, facilities, or profs remains public.'
              },
              {
                title: 'Mandatory Information Source Tagging',
                desc: 'Every claim is explicitly categorized: Officially published, Independently verified, or Student-reported.'
              }
            ].map((rule, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '10px',
                  padding: '14px 16px',
                  display: 'flex',
                  gap: '12px'
                }}
              >
                <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#fff', fontSize: '14px' }}>{rule.title}</strong>
                  <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '2px' }}>{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '16px',
            borderRadius: '10px',
            fontSize: '12px',
            color: '#64748b',
            lineHeight: 1.5
          }}>
            Gradastra Version 1.0 Baseline • Operating under strict student advocacy charter.
          </div>

        </div>

      </div>
    </div>
  );
};
