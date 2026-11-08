import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { blurAssetVariants } from '../utils/motionVariants';

interface ComparisonRow {
  dimension: string;
  traditionalAgents: string;
  gradastra: string;
  isPositive: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: 'University Referral Commission',
    traditionalAgents: '10% – 25% commission per enrolled student from partner colleges',
    gradastra: '0% Commission & No commercial university partnerships',
    isPositive: true,
  },
  {
    dimension: 'Advisory Source',
    traditionalAgents: 'Sales counselors trained on marketing brochures',
    gradastra: 'Verified 3rd & 4th-year seniors currently enrolled on campus',
    isPositive: true,
  },
  {
    dimension: 'College Shortlist Motivation',
    traditionalAgents: 'Steered toward partner universities paying the highest recruiter fees',
    gradastra: '100% student-aligned based strictly on academic and career goals',
    isPositive: true,
  },
  {
    dimension: 'Campus Realities & Workload',
    traditionalAgents: 'Omitted to avoid discouraging student enrollment',
    gradastra: 'Transparent reporting on faculty, P-sets, dorms, and hidden expenses',
    isPositive: true,
  },
  {
    dimension: 'Placement Statistics',
    traditionalAgents: 'Marketing brochures highlighting top 1% outlier salaries',
    gradastra: 'Realistic median packages, company visits, and genuine visa outcomes',
    isPositive: true,
  },
  {
    dimension: 'Cost to Prospective Student',
    traditionalAgents: 'Expensive packaging fees or kickbacks concealed in tuition',
    gradastra: '100% Free peer consultations and exploratory intelligence',
    isPositive: true,
  },
];

export const ComparisonSection: React.FC = () => {
  return (
    <section 
      id="comparison" 
      className="adviest-section adviest-comparison-section" 
      style={{ 
        backgroundColor: 'var(--adviest-bg)', 
        border: 'none', 
        paddingTop: '20px',
        paddingBottom: '80px' 
      }}
    >
      <div className="adviest-container">
        {/* Heading directly above table */}
        <div style={{ marginBottom: '24px' }}>
          <h2 
            style={{ 
              fontSize: 'clamp(24px, 3.2vw, 36px)', 
              fontWeight: 800, 
              letterSpacing: '-0.02em', 
              color: '#0D0D0D',
              lineHeight: 1.2
            }}
          >
            The Main Difference...
          </h2>
        </div>

        {/* Desktop View: Full 3-Column Table (Hidden on Mobile) */}
        <motion.div
          className="comparison-desktop-table"
          variants={blurAssetVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={{ delay: 0.1, duration: 0.5 }}
          style={{
            overflowX: 'auto',
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            borderRadius: 0,
            padding: 0
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '680px', background: 'transparent' }}>
            <thead>
              <tr style={{ background: 'transparent', borderBottom: '2px solid rgba(0, 0, 0, 0.08)' }}>
                <th style={{ padding: '16px 16px 16px 0', fontSize: '13px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em', width: '28%' }}>
                  Evaluation Criteria
                </th>
                <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.04em', width: '36%' }}>
                  Traditional Education Agencies
                </th>
                <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.04em', width: '36%' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#10B981' }}>Gradastra Independent Advisory</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row) => (
                <tr 
                  key={row.dimension}
                  style={{ 
                    borderBottom: '1px solid rgba(0, 0, 0, 0.07)',
                    background: 'transparent'
                  }}
                >
                  <td style={{ padding: '18px 16px 18px 0', fontSize: '14px', fontWeight: 600, color: '#1E293B' }}>
                    {row.dimension}
                  </td>
                  <td style={{ padding: '18px 20px', fontSize: '14px', color: '#64748B', lineHeight: 1.5 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <X size={16} color="#EF4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{row.traditionalAgents}</span>
                    </div>
                  </td>
                  <td style={{ padding: '18px 20px', fontSize: '14px', color: '#0F172A', fontWeight: 500, lineHeight: 1.5 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <Check size={16} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{row.gradastra}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile View: 100% Width Responsive Stack (No Horizontal Scroll Needed) */}
        <motion.div
          className="comparison-mobile-stack"
          variants={blurAssetVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={{ delay: 0.1, duration: 0.5 }}
        >
          {COMPARISON_DATA.map((row) => (
            <div 
              key={row.dimension}
              style={{
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                paddingBottom: '18px'
              }}
            >
              {/* Criteria Title */}
              <div style={{ 
                fontSize: '15px', 
                fontWeight: 700, 
                color: '#0F172A', 
                marginBottom: '10px' 
              }}>
                {row.dimension}
              </div>

              {/* Traditional Agency Row */}
              <div style={{ 
                background: 'rgba(239, 68, 68, 0.04)', 
                borderRadius: '8px', 
                padding: '10px 12px', 
                marginBottom: '8px' 
              }}>
                <div style={{ 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  color: '#DC2626', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.04em',
                  marginBottom: '4px' 
                }}>
                  Traditional Agencies
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#64748B', fontSize: '13px', lineHeight: 1.45 }}>
                  <X size={15} color="#EF4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{row.traditionalAgents}</span>
                </div>
              </div>

              {/* Gradastra Row */}
              <div style={{ 
                background: 'rgba(16, 185, 129, 0.06)', 
                borderRadius: '8px', 
                padding: '10px 12px' 
              }}>
                <div style={{ 
                  fontSize: '11px', 
                  fontWeight: 700, 
                  color: '#10B981', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.04em',
                  marginBottom: '4px' 
                }}>
                  Gradastra Advisory
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#0F172A', fontSize: '13px', fontWeight: 500, lineHeight: 1.45 }}>
                  <Check size={15} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{row.gradastra}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
