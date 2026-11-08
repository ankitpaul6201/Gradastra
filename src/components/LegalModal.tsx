import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const isTerms = type === 'terms';

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px'
    }}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '720px',
          width: '100%',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0F172A',
          color: '#F8FAFC',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#0B1120'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {isTerms ? <FileText size={22} color="#3B82F6" /> : <ShieldCheck size={22} color="#10B981" />}
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
              {isTerms ? 'Terms & Conditions' : 'Privacy Policy'}
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{
          padding: '24px',
          overflowY: 'auto',
          fontSize: '14px',
          lineHeight: '1.7',
          color: '#CBD5E1'
        }}>
          {isTerms ? (
            <div>
              <p style={{ marginTop: 0 }}>
                Welcome to Gradastra. By using our independent college intelligence platform, directory, or advisory services, you agree to the following terms and conditions:
              </p>
              
              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginTop: '20px', marginBottom: '8px' }}>1. Independent Advisory</h4>
              <p>
                Gradastra operates as an un-sponsored, student-to-student educational intelligence network. We do not accept commissions, placement finder fees, or financial incentives from universities. All reviews and advisory discussions reflect independent opinions and verified public data.
              </p>

              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginTop: '20px', marginBottom: '8px' }}>2. Informational Purpose Only</h4>
              <p>
                Insights, fee analyses, cutoff predictions, and student opinions are provided for general educational decision guidance. Admissions eligibility and official university requirements are determined exclusively by official institutional bodies and university counseling boards.
              </p>

              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginTop: '20px', marginBottom: '8px' }}>3. Free for Students</h4>
              <p>
                Core advisory research, student review archives, and comparison features on Gradastra are provided free of charge for prospective students and their families.
              </p>

              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginTop: '20px', marginBottom: '8px' }}>4. Community Standards</h4>
              <p>
                Users agree not to submit false, misleading, defamatory, or promotional content masquerading as student reviews. We reserve the right to remove unverified reviews.
              </p>
            </div>
          ) : (
            <div>
              <p style={{ marginTop: 0 }}>
                Gradastra takes your privacy seriously. This Privacy Policy details how we protect your personal information when you use our website and services:
              </p>

              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginTop: '20px', marginBottom: '8px' }}>1. Zero Data Selling</h4>
              <p>
                We never sell, rent, or monetize student contact details, emails, or personal test scores to third-party commercial marketing agencies, lead brokers, or universities.
              </p>

              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginTop: '20px', marginBottom: '8px' }}>2. Information We Collect</h4>
              <p>
                When you submit an advisory inquiry through our Contact page, we collect only the details you voluntarily provide (name, email, phone number, and message) solely to respond to your inquiry and connect you with senior student advisors.
              </p>

              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginTop: '20px', marginBottom: '8px' }}>3. Analytics & Cookies</h4>
              <p>
                We use privacy-focused minimal session cookies and telemetry only to maintain website performance, prevent denial-of-service spam, and improve user navigation.
              </p>

              <h4 style={{ color: '#FFFFFF', fontSize: '16px', marginTop: '20px', marginBottom: '8px' }}>4. Data Security</h4>
              <p>
                All communications and inquiries submitted to Gradastra are encrypted in transit using industry-standard TLS protocols. You may request data deletion at any time by emailing us at hello@gradastra.com.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'flex-end',
          background: '#0B1120'
        }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 20px',
              backgroundColor: '#3B82F6',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;

