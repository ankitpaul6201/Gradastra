import React, { useState } from 'react';
import { University, ADVISORS, REVIEWS } from '../data/mockData';
import { 
  X, 
  ExternalLink, 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  Star, 
  MessageSquare,
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface UniversityDetailModalProps {
  university: University | null;
  onClose: () => void;
  onBookAdvisor: (advisorId?: string) => void;
  onAddReview: () => void;
}

export const UniversityDetailModal: React.FC<UniversityDetailModalProps> = ({
  university,
  onClose,
  onBookAdvisor,
  onAddReview
}) => {
  if (!university) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'academics' | 'costs' | 'placements' | 'campus' | 'advisors' | 'reviews'>('overview');

  const relatedAdvisors = ADVISORS.filter(adv => adv.universityId === university.id);
  const relatedReviews = REVIEWS.filter(rev => rev.universityId === university.id);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '960px' }}
      >
        {/* Modal Banner */}
        <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
          <img 
            src={university.bannerImage} 
            alt={university.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(17, 21, 31, 1) 0%, rgba(17, 21, 31, 0.4) 70%, rgba(0,0,0,0.6) 100%)'
          }} />

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          {/* Badges and Name */}
          <div style={{ position: 'absolute', bottom: '16px', left: '24px', right: '24px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span className="badge badge-blue">{university.badge}</span>
              <span style={{ 
                background: 'rgba(0,0,0,0.6)', 
                padding: '4px 10px', 
                borderRadius: '8px', 
                fontSize: '12px', 
                fontWeight: 600,
                color: '#fff' 
              }}>
                {university.flag} {university.country}
              </span>
              <span style={{ 
                background: 'rgba(255,255,255,0.1)', 
                padding: '4px 10px', 
                borderRadius: '8px', 
                fontSize: '12px',
                color: '#cbd5e1' 
              }}>
                Est. {university.established} • {university.type}
              </span>
            </div>
            
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
              {university.name}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13px', color: '#94a3b8', marginTop: '6px' }}>
              <span>{university.city}</span>
              <span>•</span>
              <a 
                href={university.website} 
                target="_blank" 
                rel="noreferrer"
                style={{ color: '#7ea6ff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Official Site <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: '#0d1117',
          padding: '0 24px'
        }}>
          {[
            { id: 'overview', label: 'Overview & Facts' },
            { id: 'academics', label: 'Academics & Faculty' },
            { id: 'costs', label: 'Real Costs & Living' },
            { id: 'placements', label: 'Placement Reality' },
            { id: 'campus', label: 'Campus & Hostels' },
            { id: 'advisors', label: `Verified Seniors (${relatedAdvisors.length})` },
            { id: 'reviews', label: `Student Reviews (${relatedReviews.length})` },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                background: 'none',
                border: 'none',
                padding: '14px 18px',
                color: activeTab === tab.id ? '#7ea6ff' : '#94a3b8',
                borderBottom: activeTab === tab.id ? '2px solid #4f6fb5' : '2px solid transparent',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Tab Content */}
        <div style={{ padding: '24px' }}>
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: 1.6 }}>
                {university.description}
              </p>

              {/* Quick Stat Tiles */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '14px'
              }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Acceptance Rate</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginTop: '4px' }}>{university.acceptanceRate}</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Verified admission stats</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Total Enrolment</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginTop: '4px' }}>{university.studentCount}</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>{university.intlStudentRatio} international</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Undergrad Tuition</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#38bdf8', marginTop: '4px' }}>${university.tuitionUndergradAnnual.toLocaleString()}</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>per academic year</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Student Rating</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#fbbf24', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Star size={18} fill="#fbbf24" />
                    <span>{university.overallRating.toFixed(1)}</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Based on {university.reviewCount} verified reviews</div>
                </div>
              </div>

              {/* Pros & Cons Section */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginTop: '10px' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '18px', borderRadius: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 700, marginBottom: '12px', fontSize: '14px' }}>
                    <CheckCircle2 size={16} />
                    <span>Key Strengths & Advantages</span>
                  </div>
                  <ul style={{ paddingLeft: '20px', color: '#cbd5e1', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {university.pros.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '18px', borderRadius: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f87171', fontWeight: 700, marginBottom: '12px', fontSize: '14px' }}>
                    <AlertTriangle size={16} />
                    <span>Known Drawbacks & Challenges</span>
                  </div>
                  <ul style={{ paddingLeft: '20px', color: '#cbd5e1', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {university.cons.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ACADEMICS & FACULTY */}
          {activeTab === 'academics' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Academic Reality</h4>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6 }}>
                  {university.academics.summary}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Student to Faculty Ratio</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginTop: '4px' }}>{university.academics.facultyRatio}</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Teaching Quality Rating</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#38bdf8', marginTop: '4px' }}>{university.academics.teachingQualityRating} / 5.0</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Faculty Accessibility</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#34d399', marginTop: '4px' }}>{university.academics.facultyAccessibilityRating} / 5.0</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Workload Intensity</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#fb923c', marginTop: '4px' }}>{university.academics.workloadRating} / 5.0</div>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>High-Impact Academic Programs</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {university.popularPrograms.map((prog, i) => (
                    <span key={i} style={{
                      background: 'rgba(79, 111, 181, 0.15)',
                      color: '#93c5fd',
                      border: '1px solid rgba(79, 111, 181, 0.3)',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 600
                    }}>
                      {prog}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: COSTS & LIVING */}
          {activeTab === 'costs' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                padding: '20px', 
                borderRadius: '14px', 
                border: '1px solid rgba(255, 255, 255, 0.06)' 
              }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Annual Financial Commitment</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: '#cbd5e1' }}>Undergraduate Annual Tuition</span>
                    <strong style={{ color: '#fff' }}>${university.tuitionUndergradAnnual.toLocaleString()} {university.currency}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: '#cbd5e1' }}>Postgraduate / Master Tuition</span>
                    <strong style={{ color: '#fff' }}>${university.tuitionGradAnnual.toLocaleString()} {university.currency}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: '#cbd5e1' }}>Estimated Living & Housing (Annual)</span>
                    <strong style={{ color: '#fb923c' }}>~${university.livingCostAnnual.toLocaleString()} {university.currency}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '6px' }}>
                    <span style={{ color: '#fff', fontWeight: 700 }}>Total Estimated Out-of-Pocket / Year</span>
                    <strong style={{ color: '#38bdf8', fontSize: '18px' }}>
                      ${(university.tuitionUndergradAnnual + university.livingCostAnnual).toLocaleString()}
                    </strong>
                  </div>
                </div>
              </div>

              <div style={{
                background: 'rgba(255, 106, 0, 0.08)',
                border: '1px solid rgba(255, 106, 0, 0.25)',
                padding: '16px',
                borderRadius: '12px',
                fontSize: '13px',
                color: '#fed7aa',
                lineHeight: 1.5
              }}>
                <strong>Independent Fee Transparency Note:</strong> Tuition rates are subject to annual 3-5% inflation adjustments. Always check official institution registrar pages for differential fees, laboratory surcharge, and mandatory university health insurance.
              </div>
            </div>
          )}

          {/* TAB 4: PLACEMENT REALITY */}
          {activeTab === 'placements' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Comparison box: Official vs Student-Reported */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '20px',
                borderRadius: '14px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div>
                  <div className="badge badge-source-official" style={{ marginBottom: '8px' }}>Officially Published</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>Institutional Average Salary</div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#fff', marginTop: '6px' }}>
                    ${university.placements.officialAvgSalary.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Published university outcome report</div>
                </div>

                <div>
                  <div className="badge badge-source-student" style={{ marginBottom: '8px' }}>Student-Reported Median</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>Aggregated Median Starting Pay</div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#34d399', marginTop: '6px' }}>
                    ${university.placements.studentReportedMedianSalary.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Unvarnished senior report aggregation</div>
                </div>
              </div>

              {/* Student Reality Notes */}
              <div style={{ background: 'rgba(139, 92, 246, 0.08)', border: '1px solid rgba(139, 92, 246, 0.25)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#c084fc', fontWeight: 700, marginBottom: '6px', fontSize: '14px' }}>
                  <Users size={16} />
                  <span>Student Placement Intelligence & Realities</span>
                </div>
                <p style={{ color: '#e2e8f0', fontSize: '13px', lineHeight: 1.6 }}>
                  {university.placements.studentNotes}
                </p>
              </div>

              {/* Top Recruiters */}
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Frequent On-Campus Recruiters</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {university.placements.topRecruiters.map((rec, i) => (
                    <span key={i} style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: '#cbd5e1'
                    }}>
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CAMPUS & HOSTELS */}
          {activeTab === 'campus' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '18px', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Campus Vibe & Housing Reality</h4>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6 }}>
                  {university.campus.summary}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Dormitory Availability</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginTop: '4px' }}>{university.campus.dormAvailability}</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Off-Campus Monthly Rent</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#fb923c', marginTop: '4px' }}>~${university.campus.monthlyRentEstimate}/mo</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Campus Safety Score</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#34d399', marginTop: '4px' }}>{university.campus.safetyRating} / 5.0</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Food & Dining Rating</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#38bdf8', marginTop: '4px' }}>{university.campus.foodRating} / 5.0</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: VERIFIED SENIORS */}
          {activeTab === 'advisors' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Verified Senior Advisors at {university.shortName}</h4>
                <span className="badge badge-green">100% Free Consultation</span>
              </div>

              {relatedAdvisors.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {relatedAdvisors.map(adv => (
                    <div 
                      key={adv.id}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '14px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        flexWrap: 'wrap'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <img 
                          src={adv.avatar} 
                          alt={adv.name}
                          style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <strong style={{ color: '#fff', fontSize: '15px' }}>{adv.name}</strong>
                            <ShieldCheck size={16} color="#10b981" />
                          </div>
                          <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>
                            {adv.program} • {adv.year}
                          </div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>
                            Languages: {adv.languages.join(', ')}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onBookAdvisor(adv.id);
                        }}
                        className="btn-primary"
                        style={{ padding: '8px 16px', fontSize: '13px' }}
                      >
                        <Calendar size={14} />
                        <span>Schedule Free Call</span>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                  <p>No dedicated advisors listed for this university currently.</p>
                  <button 
                    onClick={() => { onClose(); onBookAdvisor(); }}
                    className="btn-secondary"
                    style={{ marginTop: '12px' }}
                  >
                    Request an Advisor from our Network
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 7: REVIEWS */}
          {activeTab === 'reviews' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Unfiltered Student Reviews</h4>
                <button
                  onClick={() => {
                    onClose();
                    onAddReview();
                  }}
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '13px' }}
                >
                  <MessageSquare size={14} />
                  <span>Write a Review</span>
                </button>
              </div>

              {relatedReviews.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {relatedReviews.map(rev => (
                    <div 
                      key={rev.id}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '14px',
                        padding: '18px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <div>
                          <div style={{ fontWeight: 700, color: '#fff', fontSize: '15px' }}>{rev.title}</div>
                          <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                            By {rev.authorName} ({rev.authorProgram}) • {rev.date}
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', fontWeight: 700 }}>
                          <Star size={16} fill="#fbbf24" />
                          <span>{rev.overallRating}</span>
                        </div>
                      </div>

                      <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, marginBottom: '12px' }}>
                        {rev.content}
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12px', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '8px' }}>
                        <div><strong style={{ color: '#34d399' }}>Pros:</strong> {rev.pros}</div>
                        <div><strong style={{ color: '#f87171' }}>Cons:</strong> {rev.cons}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                  <p>Be the first verified student to write a review for {university.name}.</p>
                  <button 
                    onClick={() => { onClose(); onAddReview(); }}
                    className="btn-primary"
                    style={{ marginTop: '12px' }}
                  >
                    Submit Student Review
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div style={{
          padding: '18px 24px',
          background: '#0d1117',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ fontSize: '13px', color: '#94a3b8' }}>
            <span style={{ color: '#10b981', fontWeight: 600 }}>✦ 100% Free Guidance:</span> Connect with a current {university.shortName} senior with zero fees.
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={onClose} className="btn-secondary" style={{ padding: '8px 16px' }}>
              Close
            </button>
            <button 
              onClick={() => {
                onClose();
                onBookAdvisor();
              }}
              className="btn-primary" 
              style={{ padding: '8px 20px' }}
            >
              <Users size={15} />
              <span>Talk to a Senior</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
