import React, { useState } from 'react';
import { Advisor } from '../data/mockData';
import { 
  X, 
  Calendar, 
  Video, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface ConsultationBookingModalProps {
  advisor: Advisor | null;
  onClose: () => void;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  advisor,
  onClose
}) => {
  if (!advisor) return null;

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [format, setFormat] = useState<'video' | 'voice' | 'message'>('video');
  const [selectedDate, setSelectedDate] = useState('Saturday, Nov 8, 2026');
  const [selectedTime, setSelectedTime] = useState('2:00 PM EST');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [targetYear, setTargetYear] = useState('Fall 2027');
  const [questions, setQuestions] = useState('');

  const dates = [
    'Saturday, Nov 8, 2026',
    'Sunday, Nov 9, 2026',
    'Wednesday, Nov 12, 2026',
    'Saturday, Nov 15, 2026'
  ];

  const times = ['10:00 AM', '2:00 PM', '4:30 PM', '7:00 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentEmail) {
      alert('Please enter your name and email.');
      return;
    }
    setStep('success');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px' }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={18} color="#7ea6ff" />
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
              Schedule Free 1-on-1 Consultation
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

        {step === 'form' ? (
          <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
            
            {/* Advisor Summary Banner */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '14px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '20px'
            }}>
              <img 
                src={advisor.avatar} 
                alt={advisor.name}
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <strong style={{ color: '#fff', fontSize: '15px' }}>{advisor.name}</strong>
                  <ShieldCheck size={16} color="#10b981" />
                </div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                  {advisor.program} @ {advisor.universityName}
                </div>
              </div>
              <span className="badge badge-green" style={{ fontSize: '11px' }}>
                100% Free
              </span>
            </div>

            {/* Select Format */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '8px' }}>
                Select Consultation Format
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setFormat('video')}
                  style={{
                    background: format === 'video' ? 'rgba(79, 111, 181, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                    border: format === 'video' ? '1px solid #4f6fb5' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    padding: '12px 8px',
                    color: format === 'video' ? '#fff' : '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  <Video size={18} color={format === 'video' ? '#7ea6ff' : '#94a3b8'} />
                  <span>Google Meet (30m)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('voice')}
                  style={{
                    background: format === 'voice' ? 'rgba(79, 111, 181, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                    border: format === 'voice' ? '1px solid #4f6fb5' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    padding: '12px 8px',
                    color: format === 'voice' ? '#fff' : '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  <Phone size={18} color={format === 'voice' ? '#7ea6ff' : '#94a3b8'} />
                  <span>Voice Call (20m)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('message')}
                  style={{
                    background: format === 'message' ? 'rgba(79, 111, 181, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                    border: format === 'message' ? '1px solid #4f6fb5' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    padding: '12px 8px',
                    color: format === 'message' ? '#fff' : '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 600
                  }}
                >
                  <MessageSquare size={18} color={format === 'message' ? '#7ea6ff' : '#94a3b8'} />
                  <span>Written Q&A</span>
                </button>
              </div>
            </div>

            {/* Select Date and Slot */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                  Available Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    padding: '10px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                >
                  {dates.map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                  Time Slot
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    padding: '10px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                >
                  {times.map((t, i) => (
                    <option key={i} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Student Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                  Your Full Name *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Maya Lin"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    padding: '10px 12px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                  Your Email Address *
                </label>
                <input 
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    padding: '10px 12px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Target Intake & Questions */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                Target Intake
              </label>
              <select
                value={targetYear}
                onChange={(e) => setTargetYear(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#fff',
                  padding: '10px',
                  fontSize: '13px',
                  outline: 'none'
                }}
              >
                <option value="Fall 2027">Fall 2027 (Undergrad / Master)</option>
                <option value="Spring 2027">Spring 2027</option>
                <option value="Fall 2028">Fall 2028</option>
                <option value="Exploring Options">Just Exploring</option>
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                What specific questions do you want to ask {advisor.name}?
              </label>
              <textarea 
                rows={3}
                placeholder="e.g. How is the workload for the first year? How difficult was it to find an affordable shared flat off-campus?"
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#fff',
                  padding: '10px 12px',
                  fontSize: '13px',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Submit CTA */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '12px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={14} />
                <span>Zero fees charged to students</span>
              </div>

              <button 
                type="submit"
                className="btn-primary"
                style={{ padding: '10px 24px' }}
              >
                <span>Confirm Free Session</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Success Screen */
          <div style={{ padding: '40px 24px', textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              border: '2px solid rgba(16, 185, 129, 0.4)'
            }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
              Consultation Scheduled!
            </h3>
            
            <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              A confirmation and calendar invitation for <strong>{selectedDate} at {selectedTime}</strong> has been prepared for <strong>{studentEmail}</strong>.
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '16px',
              maxWidth: '460px',
              margin: '0 auto 28px',
              textAlign: 'left',
              fontSize: '13px',
              color: '#cbd5e1'
            }}>
              <div><strong>Senior Advisor:</strong> {advisor.name} ({advisor.universityName})</div>
              <div style={{ marginTop: '4px' }}><strong>Format:</strong> {format === 'video' ? 'Google Meet Video Call' : format === 'voice' ? 'Voice Call' : 'Written Q&A'}</div>
              <div style={{ marginTop: '4px' }}><strong>Booking Ref:</strong> GRD-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div style={{ marginTop: '4px', color: '#10b981' }}><strong>Cost:</strong> $0.00 (Gradastra 100% Free Guarantee)</div>
            </div>

            <button
              onClick={onClose}
              className="btn-primary"
              style={{ padding: '10px 28px' }}
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
