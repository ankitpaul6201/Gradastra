import React from 'react';
import { 
  ExperienceCard, 
  ExperienceCard2, 
  ExperienceCard3, 
  ExperienceCard4, 
  ExperienceCard5, 
  ExperienceCard6, 
  SubTitle5, 
  LayoutIsland 
} from '../framer';

export const ExperienceShowcaseSection: React.FC = () => {
  return (
    <section id="disciplines" style={{ padding: '80px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        
        {/* Section Header with Framer SubTitle5 */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <LayoutIsland>
              <SubTitle5 
                variant="Variant 1" 
                zTskitVfw="05 // MULTIDISCIPLINARY EXPERIENCES" 
              />
            </LayoutIsland>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Real Campus Insights Across <span className="gradient-text-blue">Global Fields</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
            From intense coding labs in Cambridge to tuition-free engineering workshops in Munich.
          </p>
        </div>

        {/* 6 Experience Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          
          <LayoutIsland>
            <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden' }}>
              <ExperienceCard 
                variant="Variant 1"
                K_iNfOQ60="Computing & Artificial Intelligence"
                uTGCMo0iG="P-set intensity, undergraduate research lab funding, hackathon cultures, and top Silicon Valley recruitment pipelines."
                nEgubn5Eq="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </LayoutIsland>

          <LayoutIsland>
            <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden' }}>
              <ExperienceCard2 
                variant="Variant 2"
                K_iNfOQ60="Global Business & Quantitative Finance"
                uTGCMo0iG="Case study methodologies, Wall Street & London milkrounds, finance clubs, and competitive internship preparation."
                nEgubn5Eq="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </LayoutIsland>

          <LayoutIsland>
            <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden' }}>
              <ExperienceCard3 
                variant="Variant 3"
                K_iNfOQ60="Robotics & Automotive Engineering"
                uTGCMo0iG="Hands-on mechanical workshops, Formula Student race teams, and paid German Werkstudent industrial placements."
                nEgubn5Eq="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </LayoutIsland>

          <LayoutIsland>
            <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden' }}>
              <ExperienceCard4 
                variant="Variant 1"
                K_iNfOQ60="Biomedical Sciences & Health"
                uTGCMo0iG="Clinical rotations, lab sequencing equipment, premed GPA curves, and post-grad residency realities."
                nEgubn5Eq="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </LayoutIsland>

          <LayoutIsland>
            <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden' }}>
              <ExperienceCard5 
                variant="Variant 2"
                K_iNfOQ60="Law, Governance & PPE"
                uTGCMo0iG="Weekly tutorial essay defenses, moot court competitions, civil service exams, and policy debate circles."
                nEgubn5Eq="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </LayoutIsland>

          <LayoutIsland>
            <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden' }}>
              <ExperienceCard6 
                variant="Variant 3"
                K_iNfOQ60="Hardware & Aerospace Systems"
                uTGCMo0iG="Cleanroom fabrication facilities, satellite ground stations, aerodynamics wind tunnels, and defense tech recruitment."
                nEgubn5Eq="https://images.unsplash.com/photo-1517976487502-861f22fa2ff4?auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </LayoutIsland>

        </div>

      </div>
    </section>
  );
};
