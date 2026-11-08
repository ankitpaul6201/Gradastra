import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { blurTextVariants, blurAssetVariants } from '../utils/motionVariants';

interface LegalPageProps {
  initialDoc?: 'privacy' | 'terms';
  onNavigateHome: () => void;
  onChangeDoc?: (doc: 'privacy' | 'terms') => void;
}

interface LegalSection {
  number: string;
  title: string;
  category: string;
  content: React.ReactNode;
}

export const LegalPage: React.FC<LegalPageProps> = ({ 
  initialDoc = 'privacy', 
  onNavigateHome,
  onChangeDoc
}) => {
  const [activeDoc, setActiveDoc] = useState<'privacy' | 'terms'>(initialDoc);

  useEffect(() => {
    setActiveDoc(initialDoc);
  }, [initialDoc]);

  const handleDocSwitch = (doc: 'privacy' | 'terms') => {
    if (doc === activeDoc) return;
    setActiveDoc(doc);
    if (onChangeDoc) {
      onChangeDoc(doc);
    }
  };

  const PRIVACY_SECTIONS: LegalSection[] = [
    {
      number: '01',
      title: 'Introduction',
      category: 'Overview & Principles',
      content: (
        <>
          <p>
            At Gradastra, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you interact with our independent student advisory platform, college comparison tools, or senior mentorship sessions. By using our services, you agree to the practices described here.
          </p>
          <p>
            Our commitment to safeguarding your data is rooted in our founding principle: 100% independent, student-backed intelligence with zero commercial bias. We never monetize, sell, or exploit student admissions data.
          </p>
        </>
      ),
    },
    {
      number: '02',
      title: 'Data Collection',
      category: 'Collection Scope',
      content: (
        <div className="legal-editorial-subpoints">
          <div className="legal-editorial-subpoint">
            <h4>1. Information You Provide Directly</h4>
            <p>
              When you register an account, fill out your academic profile, or book a 1-on-1 session with a verified campus senior, we collect information you voluntarily provide:
            </p>
            <ul>
              <li><strong>Contact Details:</strong> Name, verified email address, phone number, and location.</li>
              <li><strong>Academic Profile:</strong> Target degrees, intended majors, standardized test scores, GPA range, and target university lists.</li>
              <li><strong>Messages & Inquiries:</strong> Specific questions regarding campus life, workload, fees, or placements submitted to mentors.</li>
            </ul>
          </div>

          <div className="legal-editorial-subpoint">
            <h4>2. Automatically Collected Information</h4>
            <p>
              To keep our platform secure, fast, and responsive across devices, we collect basic technical data:
            </p>
            <ul>
              <li><strong>Cookies:</strong> Essential session cookies to keep you signed in and preserve your comparison filters.</li>
              <li><strong>Log Files:</strong> Browser type, operating system, IP address, and anonymous timestamps of page visits.</li>
              <li><strong>Performance Telemetry:</strong> Aggregated diagnostics used solely to optimize loading speed and prevent system downtime.</li>
            </ul>
          </div>

          <div className="legal-editorial-subpoint">
            <h4>3. Third-Party Academic Verification</h4>
            <p>
              We verify senior student credentials strictly through authorized institutional methods (such as official university .edu email verification). We do not purchase external marketing records or commercial student databases.
            </p>
          </div>

          <div className="legal-editorial-subpoint">
            <h4>4. Minors and Children's Privacy</h4>
            <p>
              Our services are intended for high school applicants, college students, and university seekers aged 13 and older. We do not knowingly collect personal data from children under 13 without verifiable parental consent.
            </p>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'Types of Data',
      category: 'Data Categories',
      content: (
        <div className="legal-editorial-subpoints">
          <div className="legal-editorial-subpoint">
            <h4>1. Personally Identifiable Information (PII)</h4>
            <p>
              Data that directly identifies you as an individual. PII is encrypted at rest and in transit and is only shared with an assigned student mentor after you explicitly confirm a 1-on-1 advisory session.
            </p>
          </div>
          <div className="legal-editorial-subpoint">
            <h4>2. College & Career Preferences</h4>
            <p>
              Your shortlisted institutions, budget constraints, and curriculum priorities used strictly to calibrate your comparison charts and suggest relevant senior students.
            </p>
          </div>
          <div className="legal-editorial-subpoint">
            <h4>3. Anonymized Advisory Feedback</h4>
            <p>
              Ratings and qualitative review notes collected following mentorship calls to ensure senior accuracy, prevent sales bias, and uphold quality standards.
            </p>
          </div>
        </div>
      ),
    },
    {
      number: '04',
      title: 'Use of Data',
      category: 'Processing Purposes',
      content: (
        <>
          <p>Gradastra processes your personal data strictly for transparent, legitimate purposes:</p>
          <ul>
            <li>To match you 1-on-1 with verified senior students attending your specific target universities.</li>
            <li>To provide personalized comparison metrics across real median placement statistics, actual hostel costs, and academic workloads.</li>
            <li>To verify senior identities and keep commercial agency sales agents off the platform.</li>
            <li>To deliver customer support, account alerts, and essential booking updates.</li>
          </ul>
        </>
      ),
    },
    {
      number: '05',
      title: 'Third-Party Services',
      category: 'Zero Commercial Sharing',
      content: (
        <>
          <div className="legal-editorial-callout">
            <strong>Zero Commercial Sharing Policy:</strong> Traditional educational agencies sell student contact details to partner universities and private loan brokers for lucrative commissions. Gradastra accepts zero university kickbacks and will NEVER sell, rent, or lease your personal contact details to any third-party institution, advertiser, or lead broker.
          </div>
          <p>
            We integrate only with vetted technical service providers (such as cloud hosting, transactional email delivery, and secure payment processing for premium sessions) bound by strict non-disclosure obligations.
          </p>
        </>
      ),
    },
    {
      number: '06',
      title: 'User Rights',
      category: 'Your Data Control',
      content: (
        <>
          <p>Under global data protection frameworks (including GDPR, CCPA, and Indian DPDP Act), you retain total authority over your information:</p>
          <ul>
            <li><strong>Right to Access:</strong> Request a complete export of all personal data held in your profile.</li>
            <li><strong>Right to Rectification:</strong> Edit or correct any inaccurate personal details at any time.</li>
            <li><strong>Right to Erasure (Right to Be Forgotten):</strong> Request the permanent deletion of your account and all associated interaction logs.</li>
            <li><strong>Right to Opt-Out:</strong> Instantly unsubscribe from newsletters or advisory updates with a single click.</li>
          </ul>
        </>
      ),
    },
    {
      number: '07',
      title: 'Security Measures',
      category: 'Technical Safeguards',
      content: (
        <>
          <p>
            We implement comprehensive technical and organizational safeguards to protect your personal information against unauthorized access, loss, or alteration:
          </p>
          <ul>
            <li>All network communications are strictly encrypted using TLS 1.3 protocol.</li>
            <li>Sensitive databases and profile assets are secured using enterprise-grade AES-256 encryption.</li>
            <li>Internal access is restricted to verified personnel under least-privilege role policies and audited periodically.</li>
          </ul>
        </>
      ),
    },
    {
      number: '08',
      title: 'Contact Information',
      category: 'Privacy Desk',
      content: (
        <>
          <p>
            If you have questions, feedback, or data requests regarding this Privacy Policy, our team is available to help directly:
          </p>
          <div className="legal-editorial-contact">
            <p><strong>Gradastra Privacy & Data Protection Office</strong></p>
            <p>Email: <a href="mailto:hello@gradastra.com">hello@gradastra.com</a></p>
            <p>Turnaround: All requests processed within 24 to 48 business hours.</p>
          </div>
        </>
      ),
    },
  ];

  const TERMS_SECTIONS: LegalSection[] = [
    {
      number: '01',
      title: 'Acceptance of Terms',
      category: 'User Agreement',
      content: (
        <>
          <p>
            Welcome to Gradastra. By accessing our platform, reviewing campus intelligence data, or scheduling 1-on-1 advisory sessions with verified senior students, you acknowledge that you have read, understood, and agreed to these Terms of Service.
          </p>
          <p>
            If you do not agree with these terms, you should immediately cease using the platform and its services.
          </p>
        </>
      ),
    },
    {
      number: '02',
      title: 'Advisory Scope & Purpose',
      category: 'Peer-to-Peer Guidance',
      content: (
        <>
          <p>
            Gradastra is an independent student-to-student intelligence platform. Our purpose is to connect prospective students and parents directly with verified seniors currently enrolled at global colleges to provide genuine, unfiltered campus perspectives.
          </p>
          <div className="legal-editorial-callout">
            <strong>Advisory Disclaimer:</strong> Gradastra does not guarantee admission, scholarship awards, visa approvals, or post-graduation job offers. Admissions decisions remain solely under the authority of university admissions committees.
          </div>
        </>
      ),
    },
    {
      number: '03',
      title: 'Zero Commission Charter',
      category: 'Commercial Neutrality',
      content: (
        <>
          <p>
            Gradastra operates with 100% commercial independence. We accept zero recruitment commissions, zero university kickbacks, and zero referral fees from educational institutions.
          </p>
          <p>
            Our verified seniors share their actual experiences—workloads, hostel conditions, professor accessibility, and real placement realities—without any sales quotas or institutional influence.
          </p>
        </>
      ),
    },
    {
      number: '04',
      title: 'User Eligibility & Accounts',
      category: 'Registration Standards',
      content: (
        <>
          <p>
            You must be at least 13 years old to create an account. When registering, you agree to provide truthful, accurate, and current information. You are solely responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.
          </p>
        </>
      ),
    },
    {
      number: '05',
      title: 'Student Code of Conduct',
      category: 'Community Guidelines',
      content: (
        <>
          <p>All students, prospective applicants, and senior mentors must maintain a respectful, constructive community environment:</p>
          <ul>
            <li>Treat all peers and mentors with courtesy and respect during 1-on-1 advisory calls.</li>
            <li>Harassment, abusive language, discrimination, or hate speech results in immediate account termination.</li>
            <li>Academic dishonesty—including essay ghostwriting, exam cheating, or fraudulent credential submissions—is strictly prohibited.</li>
            <li>No unsolicited commercial advertising or harvesting of other members' contact information.</li>
          </ul>
        </>
      ),
    },
    {
      number: '06',
      title: 'Intellectual Property',
      category: 'Platform Rights',
      content: (
        <>
          <p>
            All content on Gradastra—including proprietary comparison algorithms, university benchmark data, graphic layouts, and editorial analyses—is the intellectual property of Gradastra and protected under international copyright and trademark laws.
          </p>
        </>
      ),
    },
    {
      number: '07',
      title: 'Limitation of Liability',
      category: 'Legal Boundaries',
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, Gradastra, its directors, and student mentors shall not be held liable for any indirect, incidental, or consequential damages resulting from your college application decisions, visa outcomes, or reliance on opinions shared during mentorship sessions.
          </p>
        </>
      ),
    },
    {
      number: '08',
      title: 'Governing Law & Legal Contact',
      category: 'Governance & Notices',
      content: (
        <>
          <p>
            These Terms of Service are governed by and construed under applicable legal frameworks without regard to conflict of law principles.
          </p>
          <div className="legal-editorial-contact">
            <p><strong>Gradastra Legal & Compliance Team</strong></p>
            <p>Email: <a href="mailto:hello@gradastra.com">hello@gradastra.com</a></p>
            <p>Platform: <a href="https://gradastra.com">gradastra.com</a></p>
          </div>
        </>
      ),
    },
  ];

  const currentSections = activeDoc === 'privacy' ? PRIVACY_SECTIONS : TERMS_SECTIONS;

  // Staggered Container Motion Variants for smooth, sequential one-by-one blur reveal
  const editorialContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      filter: 'blur(10px)',
      transition: {
        duration: 0.22,
        ease: 'easeOut',
      },
    },
  };

  // Individual Row Motion Variants: Blur in smoothly one by one
  const editorialRowVariants = {
    hidden: {
      opacity: 0,
      filter: 'blur(14px)',
      y: 22,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="legal-page-wrapper">
      <div className="legal-page-container">
        
        {/* Top Breadcrumb Link */}
        <motion.div 
          className="legal-breadcrumb-row"
          variants={blurTextVariants}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.05, duration: 0.35 }}
        >
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }} 
            className="legal-back-btn"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
        </motion.div>

        {/* Hero Banner with Dark Atmospheric Image & Website Signature Secondary Blue Gradient */}
        <motion.div 
          className="legal-hero-banner adviest-blur-stabilized"
          variants={blurAssetVariants}
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.1, duration: 0.6 }}
        >
          {/* Document Switcher Glass Pills with Bouncy Spring Layout Motion identical to ExperienceSection */}
          <div className="legal-doc-switcher" role="tablist" aria-label="Policy Switcher">
            <button 
              type="button"
              role="tab"
              aria-selected={activeDoc === 'privacy'}
              className={`legal-switch-pill ${activeDoc === 'privacy' ? 'active' : ''}`}
              onClick={() => handleDocSwitch('privacy')}
            >
              {activeDoc === 'privacy' && (
                <motion.div 
                  layoutId="activeLegalPill" 
                  className="legal-switch-pill-bg"
                  transition={{ 
                    type: "spring", 
                    stiffness: 420, 
                    damping: 26, 
                    mass: 0.7 
                  }}
                />
              )}
              <span className="legal-switch-pill-label">Privacy Policy</span>
            </button>

            <button 
              type="button"
              role="tab"
              aria-selected={activeDoc === 'terms'}
              className={`legal-switch-pill ${activeDoc === 'terms' ? 'active' : ''}`}
              onClick={() => handleDocSwitch('terms')}
            >
              {activeDoc === 'terms' && (
                <motion.div 
                  layoutId="activeLegalPill" 
                  className="legal-switch-pill-bg"
                  transition={{ 
                    type: "spring", 
                    stiffness: 420, 
                    damping: 26, 
                    mass: 0.7 
                  }}
                />
              )}
              <span className="legal-switch-pill-label">Terms of Service</span>
            </button>
          </div>

          {/* Centered Page Titles with Smooth Blurred Transition on Switch */}
          <motion.div 
            key={activeDoc}
            className="legal-hero-content"
            initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="legal-hero-title">
              {activeDoc === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h1>
            <p className="legal-hero-subtitle">
              {activeDoc === 'privacy' 
                ? 'How We Collect, Use, and Protect Your Information' 
                : 'Understanding Your Rights, Obligations, and Platform Rules'}
            </p>
          </motion.div>
        </motion.div>

        {/* Editorial Section Rows - Appears smoothly with staggered blurred entrance */}
        <motion.div 
          key={activeDoc}
          className="legal-editorial-flow"
          variants={editorialContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentSections.map((sec) => (
            <motion.div 
              key={sec.number}
              id={`section-${sec.number}`}
              className="legal-editorial-row adviest-blur-stabilized"
              variants={editorialRowVariants}
            >
              {/* Left Column: Number + Table of Contents Title & Category */}
              <div className="legal-editorial-left">
                <div className="legal-editorial-number">{sec.number}</div>
                <div className="legal-editorial-meta">
                  <h2 className="legal-editorial-title">{sec.title}</h2>
                  <span className="legal-editorial-category">{sec.category}</span>
                </div>
              </div>

              {/* Right Column: Detailed Specific Content for this Table of Contents Section */}
              <div className="legal-editorial-right">
                <div className="legal-editorial-body">
                  {sec.content}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default LegalPage;
