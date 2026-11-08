import React from 'react';
import { SubTitle2, List, List2, List3, List4, LayoutIsland } from '../framer';
import { Shield, Users, BadgePercent, Eye } from 'lucide-react';

export const FeaturesListSection: React.FC = () => {
  return (
    <section id="features" style={{ padding: '60px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <LayoutIsland>
              <SubTitle2 
                variant="Variant 1" 
                zTskitVfw="02 // THE GRADASTR^ DIFFERENCE" 
              />
            </LayoutIsland>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
            Built for Students. <span className="gradient-text-blue">Never for Commissions.</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
            Traditional admission consultancies get paid up to $8,000 per student they push into partner colleges. Gradastra has zero partnerships, zero fees, and zero hidden agendas.
          </p>
        </div>

        {/* 4 Core Pillars using Framer List components */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          
          <LayoutIsland>
            <div className="glass-panel" style={{ padding: '28px', height: '100%', position: 'relative' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(79, 111, 181, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: '#7ea6ff'
              }}>
                <Eye size={22} />
              </div>
              <List 
                variant="Variant 1"
                FowRFWagy="01"
                otA2bGBS4="Independent Intelligence"
                McGeJqpaw="We separate official promotional brochures from student-reported median outcomes, unvarnished dropout stats, and true living expenses."
              />
            </div>
          </LayoutIsland>

          <LayoutIsland>
            <div className="glass-panel" style={{ padding: '28px', height: '100%', position: 'relative' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: '#34d399'
              }}>
                <Users size={22} />
              </div>
              <List2 
                variant="Variant 2"
                FowRFWagy="02"
                otA2bGBS4="Verified Senior Network"
                McGeJqpaw="Connect 1-on-1 with verified 3rd & 4th year university students. Ask anything about grading curves, dorm conditions, professors, and internships."
              />
            </div>
          </LayoutIsland>

          <LayoutIsland>
            <div className="glass-panel" style={{ padding: '28px', height: '100%', position: 'relative' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 106, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: '#fb923c'
              }}>
                <BadgePercent size={22} />
              </div>
              <List3 
                variant="Variant 3"
                FowRFWagy="03"
                otA2bGBS4="Zero Agent Commissions"
                McGeJqpaw="We accept 0 placement fees or referral bounties from universities. Our guidance is solely aligned with what fits your budget, goals, and ambition."
              />
            </div>
          </LayoutIsland>

          <LayoutIsland>
            <div className="glass-panel" style={{ padding: '28px', height: '100%', position: 'relative' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(139, 92, 246, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: '#a78bfa'
              }}>
                <Shield size={22} />
              </div>
              <List4 
                variant="Variant 4"
                FowRFWagy="04"
                otA2bGBS4="Always 100% Free"
                McGeJqpaw="University directory, college comparison tables, and senior consultations are accessible to every student globally with no paywalls or hidden fees."
              />
            </div>
          </LayoutIsland>

        </div>

      </div>
    </section>
  );
};
