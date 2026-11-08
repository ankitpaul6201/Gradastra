import React from 'react';
import { ReviewTab, ReviewTab2, ReviewTab3, SubTitle6, LayoutIsland } from '../framer';
import { Plus } from 'lucide-react';

interface StudentReviewsSectionProps {
  onOpenReviewModal: () => void;
}

export const StudentReviewsSection: React.FC<StudentReviewsSectionProps> = ({
  onOpenReviewModal
}) => {
  return (
    <section id="reviews" style={{ padding: '80px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="container">
        
        {/* Section Header with Framer SubTitle6 */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <LayoutIsland>
              <SubTitle6 
                variant="Variant 1" 
                zTskitVfw="06 // UNFILTERED STUDENT VOICES" 
              />
            </LayoutIsland>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Real Student Perspectives, <span className="gradient-text-blue">Zero Marketing Spin</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
            Genuine accounts submitted by enrolled students with private verification badges.
          </p>
        </div>

        {/* 3 Review Cards using Framer ReviewTab components */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          
          <LayoutIsland>
            <div className="glass-panel" style={{ padding: '24px', borderRadius: '18px' }}>
              <ReviewTab 
                variant="Variant 1"
                juTHC5C9G="Alex Chen"
                uhx1HYVTC="Senior @ MIT (Computer Science & AI)"
                AqjOOsgJc="“Gradastra’s senior advisor told me the absolute truth about MIT’s p-set volume. That reality check made me prepare completely differently, saving my first semester.”"
                LjAYTzKjw="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              />
            </div>
          </LayoutIsland>

          <LayoutIsland>
            <div className="glass-panel" style={{ padding: '24px', borderRadius: '18px' }}>
              <ReviewTab2 
                variant="Variant 2"
                juTHC5C9G="Sophie Miller"
                uhx1HYVTC="Finalist @ Oxford (Jurisprudence / Law)"
                AqjOOsgJc="“Every agency I spoke with tried to push me toward partner colleges. Gradastra helped me compare Oxford collegiate endowments and accommodation guarantees with zero sales pitch.”"
                LjAYTzKjw="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80"
              />
            </div>
          </LayoutIsland>

          <LayoutIsland>
            <div className="glass-panel" style={{ padding: '24px', borderRadius: '18px' }}>
              <ReviewTab3 
                variant="Variant 3"
                juTHC5C9G="Vikram Sethi"
                uhx1HYVTC="Master @ TU Munich (Informatics)"
                AqjOOsgJc="“The warning about Munich’s housing crisis on Gradastra was 100% accurate. Thanks to a senior’s tip, I applied for student housing 5 months early and avoided paying €1,400 hotel fees.”"
                LjAYTzKjw="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
              />
            </div>
          </LayoutIsland>

        </div>

        {/* CTA to submit own review */}
        <div style={{
          textAlign: 'center',
          background: 'rgba(79, 111, 181, 0.08)',
          border: '1px solid rgba(79, 111, 181, 0.2)',
          borderRadius: '16px',
          padding: '24px',
          maxWidth: '680px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
              Are you a current university student?
            </h4>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>
              Help prospective applicants by submitting an authentic, anonymous or verified review.
            </p>
          </div>

          <button 
            onClick={onOpenReviewModal}
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: '13px' }}
          >
            <Plus size={16} />
            <span>Write a Student Review</span>
          </button>
        </div>

      </div>
    </section>
  );
};
