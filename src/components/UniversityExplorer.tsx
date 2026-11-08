import React, { useState, useMemo } from 'react';
import { University } from '../data/mockData';
import { 
  Search, 
  MapPin, 
  Users, 
  Star, 
  Scale, 
  Bookmark, 
  ArrowUpRight, 
  GraduationCap
} from 'lucide-react';

interface UniversityExplorerProps {
  universities: University[];
  onSelectUniversity: (uni: University) => void;
  onBookAdvisorForUniversity: (uni: University) => void;
  compareList: University[];
  onToggleCompare: (uni: University) => void;
  savedList: string[];
  onToggleSave: (uniId: string) => void;
  initialSearchQuery?: string;
}

export const UniversityExplorer: React.FC<UniversityExplorerProps> = ({
  universities,
  onSelectUniversity,
  onBookAdvisorForUniversity,
  compareList,
  onToggleCompare,
  savedList,
  onToggleSave,
  initialSearchQuery = ''
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchQuery);
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [maxBudget, setMaxBudget] = useState(70000);
  const [sortBy, setSortBy] = useState<'rating' | 'tuition-low' | 'salary-high'>('rating');

  const countries = ['All', 'United States', 'United Kingdom', 'Germany', 'Singapore', 'Canada', 'India'];

  const filteredUniversities = useMemo(() => {
    return universities.filter(uni => {
      const matchesSearch = 
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.popularPrograms.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCountry = selectedCountry === 'All' || uni.country === selectedCountry;
      const matchesType = selectedType === 'All' || uni.type === selectedType;
      const matchesBudget = uni.tuitionUndergradAnnual <= maxBudget;

      return matchesSearch && matchesCountry && matchesType && matchesBudget;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.overallRating - a.overallRating;
      if (sortBy === 'tuition-low') return a.tuitionUndergradAnnual - b.tuitionUndergradAnnual;
      if (sortBy === 'salary-high') return b.placements.officialAvgSalary - a.placements.officialAvgSalary;
      return 0;
    });
  }, [universities, searchTerm, selectedCountry, selectedType, maxBudget, sortBy]);

  return (
    <section id="explorer" style={{ padding: '70px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
          <div>
            <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
              <GraduationCap size={14} />
              Global College Directory
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '8px' }}>
              Explore <span className="gradient-text-blue">Verified Universities</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '15px' }}>
              Transparent admissions data, real tuition costs, and verified student-reported insights.
            </p>
          </div>

          <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>
            Showing <strong>{filteredUniversities.length}</strong> of {universities.length} institutions
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="glass-panel" style={{ padding: '20px', marginBottom: '32px' }}>
          
          {/* Top row: search + sort */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '18px' }}>
            <div style={{ 
              flex: '1 1 300px', 
              display: 'flex', 
              alignItems: 'center', 
              background: 'rgba(255, 255, 255, 0.04)', 
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '0 14px'
            }}>
              <Search size={18} color="#94a3b8" />
              <input 
                type="text"
                placeholder="Search college, program, or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  padding: '12px 10px',
                  width: '100%',
                  fontSize: '14px'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '13px', color: '#94a3b8', whiteSpace: 'nowrap' }}>Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '13px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="rating">Top Rated by Students</option>
                <option value="tuition-low">Lowest Tuition First</option>
                <option value="salary-high">Highest Average Placement</option>
              </select>
            </div>
          </div>

          {/* Bottom row: Country Pills + Budget slider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            
            {/* Country Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {countries.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedCountry(c)}
                  style={{
                    background: selectedCountry === c ? '#4f6fb5' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedCountry === c ? '#fff' : '#94a3b8',
                    border: '1px solid',
                    borderColor: selectedCountry === c ? '#4f6fb5' : 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '6px 14px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Right side controls: Type filter & Budget Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                {['All', 'Public', 'Private'].map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    style={{
                      background: selectedType === t ? 'rgba(79, 111, 181, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                      color: selectedType === t ? '#93c5fd' : '#94a3b8',
                      border: '1px solid',
                      borderColor: selectedType === t ? 'rgba(79, 111, 181, 0.5)' : 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '5px 10px',
                      fontSize: '11px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {t === 'All' ? 'All Types' : t}
                  </button>
                ))}
              </div>

              {/* Budget Slider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                  Max Tuition: <strong style={{ color: '#fff' }}>${maxBudget.toLocaleString()}/yr</strong>
                </span>
                <input 
                  type="range"
                  min="3000"
                  max="65000"
                  step="2000"
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(Number(e.target.value))}
                  style={{ cursor: 'pointer', accentColor: '#4f6fb5', width: '130px' }}
                />
              </div>
            </div>

          </div>

        </div>

        {/* University Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '24px'
        }}>
          {filteredUniversities.map(uni => {
            const isCompared = compareList.some(c => c.id === uni.id);
            const isSaved = savedList.includes(uni.id);

            return (
              <div 
                key={uni.id}
                className="glass-panel"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  border: isCompared ? '1px solid rgba(255, 106, 0, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Card Banner */}
                <div style={{ position: 'relative', height: '180px', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={uni.bannerImage} 
                    alt={uni.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(18, 22, 31, 0.95) 0%, rgba(18, 22, 31, 0.2) 60%, rgba(0,0,0,0.5) 100%)'
                  }} />

                  {/* Country Flag & Badge */}
                  <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '8px' }}>
                    <span style={{ 
                      background: 'rgba(0, 0, 0, 0.65)', 
                      backdropFilter: 'blur(8px)',
                      padding: '4px 10px', 
                      borderRadius: '8px', 
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#fff'
                    }}>
                      {uni.flag} {uni.country}
                    </span>
                    <span style={{ 
                      background: 'rgba(79, 111, 181, 0.75)', 
                      backdropFilter: 'blur(8px)',
                      padding: '4px 10px', 
                      borderRadius: '8px', 
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#fff'
                    }}>
                      {uni.type}
                    </span>
                  </div>

                  {/* Save Bookmark button */}
                  <button
                    onClick={() => onToggleSave(uni.id)}
                    title={isSaved ? 'Remove from saved' : 'Save university'}
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: isSaved ? '#4f6fb5' : 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Bookmark size={16} fill={isSaved ? '#fff' : 'none'} />
                  </button>

                  {/* University Name on banner bottom */}
                  <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                      {uni.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#cbd5e1', marginTop: '4px' }}>
                      <MapPin size={12} />
                      <span>{uni.city}</span>
                      <span>•</span>
                      <span>Acceptance: {uni.acceptanceRate}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  
                  {/* Rating & Advisor count */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', fontWeight: 600 }}>
                      <Star size={15} fill="#fbbf24" />
                      <span>{uni.overallRating.toFixed(1)}</span>
                      <span style={{ color: '#94a3b8', fontWeight: 400 }}>({uni.reviewCount} student reviews)</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399', fontSize: '12px', fontWeight: 600 }}>
                      <Users size={14} />
                      <span>{uni.advisorCount} Verified Seniors</span>
                    </div>
                  </div>

                  {/* Financial & Placement Snapshot */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '10px', 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Annual Tuition</div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginTop: '2px' }}>
                        ${uni.tuitionUndergradAnnual.toLocaleString()}
                        <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 400 }}>/yr</span>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Avg Placement</div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: '#34d399', marginTop: '2px' }}>
                        ${uni.placements.officialAvgSalary.toLocaleString()}
                        <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 400 }}>/yr</span>
                      </div>
                    </div>
                  </div>

                  {/* Popular Majors Tags */}
                  <div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '6px', fontWeight: 600 }}>POPULAR PROGRAMS:</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                      {uni.popularPrograms.slice(0, 3).map((prog, i) => (
                        <span key={i} style={{ 
                          fontSize: '11px', 
                          background: 'rgba(255, 255, 255, 0.06)', 
                          padding: '3px 8px', 
                          borderRadius: '6px',
                          color: '#e2e8f0'
                        }}>
                          {prog}
                        </span>
                      ))}
                      {uni.popularPrograms.length > 3 && (
                        <span style={{ fontSize: '11px', color: '#94a3b8', padding: '3px' }}>
                          +{uni.popularPrograms.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ marginTop: 'auto', paddingTop: '10px', display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => onSelectUniversity(uni)}
                      className="btn-primary"
                      style={{ flex: 1, padding: '9px 12px', fontSize: '13px', justifyContent: 'center' }}
                    >
                      <span>View Intelligence</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <button
                      onClick={() => onBookAdvisorForUniversity(uni)}
                      style={{
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        borderRadius: '12px',
                        padding: '9px 12px',
                        color: '#34d399',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      title="Talk to senior student"
                    >
                      <Users size={14} />
                      <span>Senior</span>
                    </button>

                    <button
                      onClick={() => onToggleCompare(uni)}
                      style={{
                        background: isCompared ? 'rgba(255, 106, 0, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        border: isCompared ? '1px solid rgba(255, 106, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '9px 12px',
                        color: isCompared ? '#fb923c' : '#94a3b8',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      title={isCompared ? 'Remove from compare' : 'Add to compare'}
                    >
                      <Scale size={15} />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {filteredUniversities.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8' }}>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>No universities matched your filters</p>
            <p style={{ fontSize: '14px', marginBottom: '18px' }}>Try relaxing your budget slider or searching for a different country.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCountry('All'); setMaxBudget(70000); }}
              className="btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
