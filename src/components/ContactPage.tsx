import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AdviestButton } from './AdviestButton';
import { BlurText } from './BlurText';
import { blurTextVariants, blurAssetVariants } from '../utils/motionVariants';
import { EnvelopeFeedbackCard } from './EnvelopeFeedbackCard';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all required fields (Name, Last name, Email, Phone number, and Message).");
      return;
    }
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        setErrorMessage("Web3Forms access key is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY in your environment.");
        setSubmissionStatus('error');
        setIsSubmitting(false);
        return;
      }

      const payload = new FormData();
      payload.append("access_key", accessKey);
      payload.append("name", `${formData.firstName} ${formData.lastName}`.trim() || formData.firstName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone || "Not provided");
      payload.append("message", formData.message);
      payload.append("subject", `New Student Advisory Inquiry from ${formData.firstName}`);
      payload.append("from_name", "Gradastra Advisory Platform");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload
      });

      const data = await response.json();
      if (data.success) {
        setSubmissionStatus('success');
      } else {
        setErrorMessage(data.message || "Failed to deliver message. Please try again or email hello@gradastra.com.");
        setSubmissionStatus('error');
      }
    } catch {
      setErrorMessage("Network error connecting to email service. Please check your internet connection.");
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionStatus('idle');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    setErrorMessage('');
  };

  return (
    <div className="contact-page-wrapper">
      <div className="adviest-container">
        <div className="contact-grid">
          {/* Left Column: Form / Feedback */}
          <div className="contact-form-column">
            <BlurText 
              as="h1"
              text="Contact us"
              mode="letter"
              className="contact-title"
              delay={0.1}
              stagger={0.02}
            />

            <BlurText 
              as="p"
              text="Our student advisory team would love to hear from you. Have questions about colleges, cutoffs, or campus truth? Reach out directly."
              mode="word"
              className="contact-subtitle"
              delay={0.2}
              stagger={0.03}
            />

            {submissionStatus === 'idle' ? (
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Row 1: Name and Last name */}
                <motion.div 
                  className="contact-row-2col"
                  variants={blurTextVariants}
                  initial="hidden"
                  animate="visible"
                  custom={{ delay: 0.26 }}
                >
                  <div className="contact-field-group">
                    <label htmlFor="contact-firstname" className="contact-label">Name*</label>
                    <input
                      id="contact-firstname"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field-group">
                    <label htmlFor="contact-lastname" className="contact-label">Last name*</label>
                    <input
                      id="contact-lastname"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                </motion.div>

                {/* Row 2: Email */}
                <motion.div 
                  className="contact-field-group"
                  variants={blurTextVariants}
                  initial="hidden"
                  animate="visible"
                  custom={{ delay: 0.34 }}
                >
                  <label htmlFor="contact-email" className="contact-label">Email*</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="contact-input"
                  />
                </motion.div>

                {/* Row 3: Phone number */}
                <motion.div 
                  className="contact-field-group"
                  variants={blurTextVariants}
                  initial="hidden"
                  animate="visible"
                  custom={{ delay: 0.42 }}
                >
                  <label htmlFor="contact-phone" className="contact-label">Phone number*</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="contact-input"
                  />
                </motion.div>

                {/* Row 4: Message */}
                <motion.div 
                  className="contact-field-group"
                  variants={blurTextVariants}
                  initial="hidden"
                  animate="visible"
                  custom={{ delay: 0.50 }}
                >
                  <label htmlFor="contact-message" className="contact-label">Message*</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Type your inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="contact-textarea"
                  />
                </motion.div>

                {/* Row 5: Submit Button matching reference */}
                <motion.div
                  variants={blurTextVariants}
                  initial="hidden"
                  animate="visible"
                  custom={{ delay: 0.58 }}
                >
                  <AdviestButton
                    type="submit"
                    title={isSubmitting ? "Sending message..." : "Send Message"}
                    variant="primary"
                    disabled={isSubmitting}
                    className="contact-submit-adviest-btn"
                  />
                </motion.div>
              </form>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
                <EnvelopeFeedbackCard
                  status={submissionStatus}
                  errorMessage={errorMessage}
                  onReset={handleReset}
                  onNavigateHome={onNavigateHome}
                />
              </div>
            )}
          </div>

          {/* Right Column: Advisor Photo Card */}
          <motion.div 
            className="contact-photo-column adviest-blur-stabilized"
            variants={blurAssetVariants}
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.28, duration: 0.75 }}
          >
            <div className="contact-photo-card adviest-blur-stabilized">
              <img 
                src="/contact-advisor.jpg" 
                alt="Gradastra Verified Senior Student Advisor" 
                className="contact-advisor-img"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
