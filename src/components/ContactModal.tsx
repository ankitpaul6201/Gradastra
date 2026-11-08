import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Mail, Building2, User, Phone, Send } from 'lucide-react';
import { AdviestButton } from './AdviestButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Banking Advisory',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="adviest-modal-backdrop" onClick={onClose}>
      <div className="adviest-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="adviest-modal-close" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="adviest-modal-success">
            <CheckCircle2 size={54} color="#5372B0" />
            <h3>Consultation Request Sent</h3>
            <p>We are matching your request with a verified senior student advisor from your target institution. You will receive a confirmation within 24 hours. Always 100% free.</p>
          </div>
        ) : (
          <div>
            <div className="adviest-modal-header">
              <span className="adviest-modal-tag">Free Peer Guidance</span>
              <h2>Ask a Verified Senior</h2>
              <p>Schedule a 100% free, confidential 1-on-1 consultation with a current senior student from your target university.</p>
            </div>

            <form onSubmit={handleSubmit} className="adviest-modal-form">
              <div className="adviest-form-row">
                <div className="adviest-form-group">
                  <label><User size={14} /> Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Alex Rivera" 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="adviest-form-group">
                  <label><Mail size={14} /> Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="e.g. alex.rivera@gmail.com" 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="adviest-form-row">
                <div className="adviest-form-group">
                  <label><Building2 size={14} /> Target University / College</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. University of Waterloo, TU Munich" 
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <div className="adviest-form-group">
                  <label><Phone size={14} /> Phone / WhatsApp (Optional)</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="adviest-form-group">
                <label>Study Level / Target Field</label>
                <select 
                  value={form.service} 
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="Undergraduate Applicant">Undergraduate Applicant</option>
                  <option value="Master's / Postgraduate">Master's / Postgraduate</option>
                  <option value="Doctoral / PhD Research">Doctoral / PhD Research</option>
                  <option value="International Student Transfer">International Student Transfer</option>
                  <option value="Campus & Living Advice">Campus & Living Cost Advice</option>
                </select>
              </div>

              <div className="adviest-form-group">
                <label>What specific questions do you have for the senior?</label>
                <textarea 
                  rows={3} 
                  placeholder="Ask about professor accessibility, true course workload, campus dorms, actual placement statistics, or student life..." 
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <div className="adviest-modal-security-note">
                <ShieldCheck size={16} color="#5372B0" />
                <span>100% Free for students. No admission agents or referral commissions. Your request connects directly to verified current students.</span>
              </div>

              <div className="adviest-modal-submit-wrap">
                <AdviestButton 
                  type="submit" 
                  title="Request Free Peer Consultation"
                  icon={<Send size={18} strokeWidth={2} />}
                  className="adviest-modal-submit-btn"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
