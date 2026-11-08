import React from 'react';
import { University } from '../data/mockData';
import { 
  X, 
  Scale, 
  Trash2, 
  Sparkles, 
  Star 
} from 'lucide-react';

interface CollegeCompareModalProps {
  universities: University[];
  onClose: () => void;
  onRemove: (uniId: string) => void;
  onSelectUniversity?: (uni: University) => void;
}

export const CollegeCompareModal: React.FC<CollegeCompareModalProps> = ({
  universities,
  onClose,
  onRemove,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '1100px' }}
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
            <Scale size={20} color="#fb923c" />
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>
              Side-by-Side College Comparison ({universities.length}/4)
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

        {universities.length === 0 ? (
          <div style={{ padding: '60px 24px', textAlign: 'center', color: '#94a3b8' }}>
            <Scale size={40} style={{ margin: '0 auto 16px', opacity: 0.4 }} />
            <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '8px' }}>No colleges in comparison</h4>
            <p style={{ fontSize: '14px', maxWidth: '400px', margin: '0 auto 20px' }}>
              Click the "Compare" scale icon on any university card in the directory to add up to 4 institutions.
            </p>
            <button onClick={onClose} className="btn-primary">
              Browse Directory
            </button>
          </div>
        ) : (
          <div style={{ padding: '24px', overflowX: 'auto' }}>
            
            {/* Objective Trade-Off Notice */}
            <div style={{
              background: 'rgba(79, 111, 181, 0.1)',
              border: '1px solid rgba(79, 111, 181, 0.25)',
              borderRadius: '12px',
              padding: '12px 16px',
              marginBottom: '24px',
              fontSize: '13px',
              color: '#cbd5e1',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Sparkles size={18} color="#7ea6ff" />
              <span>
                <strong>Objective Analysis:</strong> Per Gradastra's independence charter, we do not declare a single "winner". We highlight genuine financial, academic, and lifestyle trade-offs.
              </span>
            </div>

            {/* Comparison Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '14px 16px', width: '220px', color: '#94a3b8', fontSize: '13px' }}>Metric</th>
                  {universities.map(uni => (
                    <th key={uni.id} style={{ padding: '14px 16px', verticalAlign: 'top' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                        <div>
                          <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{uni.name}</div>
                          <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>{uni.flag} {uni.city}, {uni.country}</div>
                        </div>
                        <button 
                          onClick={() => onRemove(uni.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#94a3b8',
                            cursor: 'pointer',
                            padding: '4px'
                          }}
                          title="Remove from comparison"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ fontSize: '13px', color: '#cbd5e1' }}>
                
                {/* Overall Rating */}
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 600 }}>Student Overall Rating</td>
                  {universities.map(u => (
                    <td key={u.id} style={{ padding: '14px 16px' }}>
                      <span style={{ color: '#fbbf24', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Star size={14} fill="#fbbf24" /> {u.overallRating.toFixed(1)} / 5.0
                      </span>
                      <span style={{ color: '#64748b', fontSize: '11px', display: 'block' }}>({u.reviewCount} student reviews)</span>
                    </td>
                  ))}
                </tr>

                {/* Annual Undergrad Tuition */}
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(255, 255, 255, 0.01)' }}>
                  <td style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 600 }}>Annual Tuition (Undergrad)</td>
                  {universities.map(u => (
                    <td key={u.id} style={{ padding: '14px 16px', color: '#38bdf8', fontWeight: 700, fontSize: '14px' }}>
                      ${u.tuitionUndergradAnnual.toLocaleString()} {u.currency}
                    </td>
                  ))}
                </tr>

                {/* Annual Living Cost */}
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 600 }}>Estimated Living Cost (Annual)</td>
                  {universities.map(u => (
                    <td key={u.id} style={{ padding: '14px 16px', color: '#fb923c', fontWeight: 600 }}>
                      ~${u.livingCostAnnual.toLocaleString()} {u.currency}
                    </td>
                  ))}
                </tr>

                {/* Official Avg Salary */}
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(255, 255, 255, 0.01)' }}>
                  <td style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 600 }}>Officially Published Avg Pay</td>
                  {universities.map(u => (
                    <td key={u.id} style={{ padding: '14px 16px' }}>
                      <strong style={{ color: '#fff' }}>${u.placements.officialAvgSalary.toLocaleString()}</strong>
                      <span style={{ display: 'block', fontSize: '11px', color: '#60a5fa' }}>Official disclosure</span>
                    </td>
                  ))}
                </tr>

                {/* Student Reported Median Salary */}
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 600 }}>Student-Reported Median Pay</td>
                  {universities.map(u => (
                    <td key={u.id} style={{ padding: '14px 16px' }}>
                      <strong style={{ color: '#34d399' }}>${u.placements.studentReportedMedianSalary.toLocaleString()}</strong>
                      <span style={{ display: 'block', fontSize: '11px', color: '#c084fc' }}>Senior aggregate</span>
                    </td>
                  ))}
                </tr>

                {/* Acceptance Rate */}
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(255, 255, 255, 0.01)' }}>
                  <td style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 600 }}>Selectivity / Acceptance</td>
                  {universities.map(u => (
                    <td key={u.id} style={{ padding: '14px 16px', color: '#e2e8f0', fontWeight: 600 }}>
                      {u.acceptanceRate}
                    </td>
                  ))}
                </tr>

                {/* Faculty Ratio */}
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 600 }}>Student:Faculty Ratio</td>
                  {universities.map(u => (
                    <td key={u.id} style={{ padding: '14px 16px' }}>
                      {u.academics.facultyRatio}
                    </td>
                  ))}
                </tr>

                {/* Housing Availability */}
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(255, 255, 255, 0.01)' }}>
                  <td style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 600 }}>Hostel / Dorm Policy</td>
                  {universities.map(u => (
                    <td key={u.id} style={{ padding: '14px 16px', color: '#e2e8f0' }}>
                      {u.campus.dormAvailability}
                    </td>
                  ))}
                </tr>

                {/* Key Strengths */}
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 600 }}>Primary Advantage</td>
                  {universities.map(u => (
                    <td key={u.id} style={{ padding: '14px 16px', color: '#34d399', fontSize: '12px' }}>
                      {u.pros[0]}
                    </td>
                  ))}
                </tr>

                {/* Primary Challenge */}
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <td style={{ padding: '14px 16px', color: '#94a3b8', fontWeight: 600 }}>Primary Challenge</td>
                  {universities.map(u => (
                    <td key={u.id} style={{ padding: '14px 16px', color: '#f87171', fontSize: '12px' }}>
                      {u.cons[0]}
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>

          </div>
        )}

      </div>
    </div>
  );
};
