import React, { useState } from 'react';
import { UNIVERSITIES, Review } from '../data/mockData';
import { X, Star, MessageSquarePlus } from 'lucide-react';

interface SubmitReviewModalProps {
  onClose: () => void;
  onSubmitReview: (review: Review) => void;
}

export const SubmitReviewModal: React.FC<SubmitReviewModalProps> = ({
  onClose,
  onSubmitReview
}) => {
  const [selectedUniId, setSelectedUniId] = useState(UNIVERSITIES[0].id);
  const [authorName, setAuthorName] = useState('');
  const [program, setProgram] = useState('');
  const [year, setYear] = useState('Current Junior / 3rd Year');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [advice, setAdvice] = useState('');
  
  const [academics, setAcademics] = useState(5);
  const [faculty, setFaculty] = useState(4);
  const [infrastructure, setInfrastructure] = useState(5);
  const [placements, setPlacements] = useState(4);
  const [campusLife, setCampusLife] = useState(4);

  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) {
      alert('Please check the enrollment confirmation declaration.');
      return;
    }

    const targetUni = UNIVERSITIES.find(u => u.id === selectedUniId) || UNIVERSITIES[0];
    const avgRating = Number(((academics + faculty + infrastructure + placements + campusLife) / 5).toFixed(1));

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      universityId: targetUni.id,
      universityName: targetUni.name,
      authorName: authorName || 'Anonymous Senior',
      authorProgram: program || 'Undergraduate',
      authorYear: year,
      date: 'Just now',
      verified: true,
      overallRating: avgRating,
      ratings: {
        academics,
        faculty,
        infrastructure,
        placements,
        campusLife
      },
      title: title || 'Comprehensive Student Reflection',
      content: content || 'Great overall learning environment with heavy coursework demands.',
      pros: pros || 'Motivated peers and solid lab infrastructure.',
      cons: cons || 'High workload during midterms.',
      advice: advice || 'Connect with professors during office hours from week one.',
      sourceType: 'Student-reported'
    };

    onSubmitReview(newReview);
    alert('Thank you! Your verified student review has been published.');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '720px' }}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageSquarePlus size={20} color="#7ea6ff" />
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>
              Submit a Verified Student Review
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

        <form onSubmit={handleSubmit} style={{ padding: '24px', maxHeight: '70vh', overflowY: 'auto' }}>
          
          {/* Target University Selection */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
              Select University *
            </label>
            <select
              value={selectedUniId}
              onChange={(e) => setSelectedUniId(e.target.value)}
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
              {UNIVERSITIES.map(u => (
                <option key={u.id} value={u.id}>{u.name} ({u.country})</option>
              ))}
            </select>
          </div>

          {/* Author Name, Program & Year */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                Your Name / Pseudonym
              </label>
              <input 
                type="text"
                placeholder="e.g. Maya L. (or Anon)"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
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
                Major / Program *
              </label>
              <input 
                type="text"
                required
                placeholder="e.g. B.S. CS"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
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
                Year / Status
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
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
              >
                <option value="Current Freshman">Current Freshman</option>
                <option value="Current Sophomore">Current Sophomore</option>
                <option value="Current Junior / 3rd Year">Current Junior / 3rd Year</option>
                <option value="Current Senior / 4th Year">Current Senior / 4th Year</option>
                <option value="Master's / Ph.D.">Master's / Ph.D.</option>
                <option value="Recent Alumnus">Recent Alumnus</option>
              </select>
            </div>
          </div>

          {/* 5-Dimension Ratings Slider */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '16px',
            borderRadius: '12px',
            marginBottom: '20px'
          }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
              Structured Ratings (1 to 5 Stars)
            </h4>

            {[
              { label: 'Academics & Curriculum', val: academics, set: setAcademics },
              { label: 'Faculty Accessibility', val: faculty, set: setFaculty },
              { label: 'Labs & Infrastructure', val: infrastructure, set: setInfrastructure },
              { label: 'Placement & Career Support', val: placements, set: setPlacements },
              { label: 'Campus Life & Housing', val: campusLife, set: setCampusLife },
            ].map((dim, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '13px', color: '#cbd5e1' }}>{dim.label}</span>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => dim.set(star)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
                    >
                      <Star 
                        size={18} 
                        fill={star <= dim.val ? '#fbbf24' : 'none'} 
                        color={star <= dim.val ? '#fbbf24' : '#64748b'} 
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Title & Review Text */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
              Headline Summary *
            </label>
            <input 
              type="text"
              required
              placeholder="e.g. Intense curriculum, world-class labs, but high living costs"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
              Your Unfiltered Experience *
            </label>
            <textarea 
              rows={4}
              required
              placeholder="What was studying here really like? How are examinations and professors? How accessible is financial aid or research?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
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

          {/* Pros & Cons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#34d399', fontWeight: 600, marginBottom: '6px' }}>
                Main Pros
              </label>
              <textarea 
                rows={2}
                placeholder="e.g. Collaborative peer group, UROP research grants"
                value={pros}
                onChange={(e) => setPros(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  padding: '10px',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#f87171', fontWeight: 600, marginBottom: '6px' }}>
                Main Cons / Challenges
              </label>
              <textarea 
                rows={2}
                placeholder="e.g. Extreme midterm stress, cold winters"
                value={cons}
                onChange={(e) => setCons(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  padding: '10px',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Advice for Future Applicants */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
              One Piece of Advice for Applicants
            </label>
            <input 
              type="text"
              placeholder="e.g. Start essay brainstorming early and reach out to lab professors directly"
              value={advice}
              onChange={(e) => setAdvice(e.target.value)}
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

          {/* Enrolment Declaration Checkbox per PRD 6.3 */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '14px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            marginBottom: '24px'
          }}>
            <input 
              type="checkbox"
              id="confirm-student"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              style={{ marginTop: '3px', cursor: 'pointer', accentColor: '#4f6fb5' }}
            />
            <label htmlFor="confirm-student" style={{ fontSize: '12px', color: '#cbd5e1', cursor: 'pointer', lineHeight: 1.5 }}>
              I confirm that I am or was an enrolled student at this institution. I am sharing my authentic first-hand experience in compliance with Gradastra’s community standards.
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary" style={{ padding: '10px 24px' }}>
              Publish Review
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
