import React, { useState } from 'react';
import { University, UNIVERSITIES } from '../data/mockData';
import { 
  X, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

interface ShortlistWizardModalProps {
  onClose: () => void;
  onSelectUniversity: (uni: University) => void;
}

export const ShortlistWizardModal: React.FC<ShortlistWizardModalProps> = ({
  onClose,
  onSelectUniversity
}) => {
  const [degree, setDegree] = useState<'Undergraduate' | 'Master'>('Undergraduate');
  const [field, setField] = useState('Computer Science');
  const [selectedCountries, setSelectedCountries] = useState<string[]>(['United States', 'Germany', 'United Kingdom']);
  const [budget, setBudget] = useState(45000);
  const [priority, setPriority] = useState<'budget' | 'reputation' | 'placement'>('reputation');
  const [generated, setGenerated] = useState(false);

  const toggleCountry = (country: string) => {
    if (selectedCountries.includes(country)) {
      if (selectedCountries.length > 1) {
        setSelectedCountries(selectedCountries.filter(c => c !== country));
      }
    } else {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  const matchedUniversities = UNIVERSITIES.filter(u => {
    const matchesCountry = selectedCountries.includes(u.country);
    const matchesBudget = u.tuitionUndergradAnnual <= budget * 1.2; // allow 20% stretch margin
    return matchesCountry && matchesBudget;
  }).sort((a, b) => {
    if (priority === 'budget') return a.tuitionUndergradAnnual - b.tuitionUndergradAnnual;
    if (priority === 'placement') return b.placements.officialAvgSalary - a.placements.officialAvgSalary;
    return b.overallRating - a.overallRating;
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '820px' }}
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
            <Sparkles size={20} color="#fb923c" />
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>
              Personalized College Shortlist Matcher
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

        <div style={{ padding: '24px' }}>
          
          {!generated ? (
            <div>
              <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '24px' }}>
                Answer 4 quick preferences to calculate an explainable shortlist with true costs and match rationale.
              </p>

              {/* Step 1: Degree & Field */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '8px' }}>
                    Degree Level
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['Undergraduate', 'Master'].map(d => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDegree(d as any)}
                        style={{
                          flex: 1,
                          padding: '10px',
                          borderRadius: '8px',
                          background: degree === d ? '#4f6fb5' : 'rgba(255, 255, 255, 0.04)',
                          border: degree === d ? '1px solid #4f6fb5' : '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '13px',
                          cursor: 'pointer'
                        }}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '8px' }}>
                    Major of Interest
                  </label>
                  <select
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                  >
                    <option value="Computer Science">Computer Science & AI</option>
                    <option value="Business">Business Administration & Finance</option>
                    <option value="Engineering">Mechanical & Electrical Engineering</option>
                    <option value="Robotics">Robotics & Autonomous Systems</option>
                    <option value="Law">Law & Public Policy</option>
                  </select>
                </div>
              </div>

              {/* Step 2: Target Countries */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '8px' }}>
                  Target Study Destinations (Select Multiple)
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['United States', 'United Kingdom', 'Germany', 'Singapore', 'Canada', 'India'].map(c => {
                    const isSelected = selectedCountries.includes(c);
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => toggleCountry(c)}
                        style={{
                          padding: '8px 14px',
                          borderRadius: '8px',
                          background: isSelected ? 'rgba(79, 111, 181, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                          border: isSelected ? '1px solid #4f6fb5' : '1px solid rgba(255, 255, 255, 0.08)',
                          color: isSelected ? '#7ea6ff' : '#94a3b8',
                          fontSize: '13px',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Budget Slider */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                    Target Maximum Annual Tuition
                  </label>
                  <strong style={{ color: '#38bdf8' }}>${budget.toLocaleString()} / year</strong>
                </div>
                <input 
                  type="range"
                  min="5000"
                  max="65000"
                  step="2500"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#4f6fb5', cursor: 'pointer' }}
                />
              </div>

              {/* Step 4: Top Priority */}
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '8px' }}>
                  Your Primary Priority
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { id: 'reputation', label: 'Academic Standing' },
                    { id: 'budget', label: 'Affordability & ROI' },
                    { id: 'placement', label: 'Median Salary' }
                  ].map(p => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPriority(p.id as any)}
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        background: priority === p.id ? 'rgba(255, 106, 0, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                        border: priority === p.id ? '1px solid rgba(255, 106, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: priority === p.id ? '#fb923c' : '#94a3b8',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="button"
                onClick={() => setGenerated(true)}
                className="btn-primary"
                style={{ width: '100%', padding: '12px', justifyContent: 'center', fontSize: '15px' }}
              >
                <Sparkles size={16} />
                <span>Calculate Explainable Shortlist</span>
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                    Your Curated Shortlist ({matchedUniversities.length} Institutions)
                  </h4>
                  <p style={{ fontSize: '13px', color: '#94a3b8' }}>
                    Matched for {degree} in {field} under ${budget.toLocaleString()}/yr.
                  </p>
                </div>

                <button 
                  onClick={() => setGenerated(false)}
                  className="btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '12px' }}
                >
                  Adjust Filters
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '55vh', overflowY: 'auto' }}>
                {matchedUniversities.map((uni, idx) => (
                  <div 
                    key={uni.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '16px' }}>{uni.flag}</span>
                        <strong style={{ fontSize: '16px', color: '#fff' }}>{uni.name}</strong>
                        <span className="badge badge-blue" style={{ fontSize: '10px' }}>
                          Match #{idx + 1}
                        </span>
                      </div>

                      <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>
                        Tuition: <strong style={{ color: '#38bdf8' }}>${uni.tuitionUndergradAnnual.toLocaleString()}</strong>/yr • 
                        Living: <strong style={{ color: '#fb923c' }}>~${uni.livingCostAnnual.toLocaleString()}</strong>/yr • 
                        Avg Placement: <strong style={{ color: '#34d399' }}>${uni.placements.officialAvgSalary.toLocaleString()}</strong>
                      </div>

                      <div style={{ fontSize: '12px', color: '#cbd5e1', marginTop: '6px' }}>
                        <strong style={{ color: '#10b981' }}>Why it fits:</strong> {uni.pros[0]}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onSelectUniversity(uni);
                      }}
                      className="btn-primary"
                      style={{ padding: '8px 14px', fontSize: '12px' }}
                    >
                      <span>Explore</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
