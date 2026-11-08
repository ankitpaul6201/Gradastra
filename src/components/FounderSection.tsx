import React from 'react';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="adviest-founder-section-wrapper">
      <div className="adviest-container">
        {/* Blue Banner Card Matching Uploaded Design */}
        <div className="adviest-founder-banner">
          {/* Left: Founder Portrait Photo with Soft Rounded Corners */}
          <div className="adviest-founder-photo-box">
            <img 
              src="https://framerusercontent.com/images/uRKXHBxeoPwtybT5XgJa7vvt2Q.jpg?width=1144&height=1200" 
              alt="Founder of Gradastra" 
              className="adviest-founder-photo"
              loading="lazy"
            />
          </div>

          {/* Right: Clean White Card with Large Quote */}
          <div className="adviest-founder-quote-card">
            {/* Quotation Mark Icon */}
            <svg 
              width="36" 
              height="26" 
              viewBox="0 0 36 26" 
              fill="none" 
              className="adviest-founder-quote-icon"
            >
              <path 
                d="M0 15.6C0 6.98 5.6 0 14.36 0v5.2c-5.06 0-7.83 3.26-7.83 7.84H14.36V26H0V15.6zm21.64 0C21.64 6.98 27.24 0 36 0v5.2c-5.06 0-7.83 3.26-7.83 7.84H36V26H21.64V15.6z" 
                fill="#111111" 
              />
            </svg>

            {/* Middle: Founder Statement */}
            <blockquote className="adviest-founder-statement">
              “Our mission is simple: replace commission-driven agency sales with 100% free, authentic college intelligence directly from verified seniors on campus.”
            </blockquote>

            {/* Bottom: Founder Avatar + Name + Title */}
            <div className="adviest-founder-meta">
              <img 
                src="https://framerusercontent.com/images/uRKXHBxeoPwtybT5XgJa7vvt2Q.jpg?width=1144&height=1200" 
                alt="Founder" 
                className="adviest-founder-meta-avatar" 
              />
              <div className="adviest-founder-meta-text">
                <div className="adviest-founder-name">Ankit</div>
                <div className="adviest-founder-role">Founder @ Gradastra</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

