import React, { useState } from 'react';
import SEO from '../components/SEO';
import CONFIG from '../config';
import { submitContact } from '../services/googleSheetsService';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: ''
  });
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ message: '', type: '' });

    const { fullname, email, message } = formData;
    
    // Validation
    if (!fullname || !email || !message) {
      setFeedback({ 
        message: '❌ Please provide your name, email address, and message.', 
        type: 'error' 
      });
      setIsSubmitting(false);
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setFeedback({ 
        message: '❌ Please enter a valid email address (e.g., name@example.com).', 
        type: 'error' 
      });
      setIsSubmitting(false);
      return;
    }
    
    // Submit using the centralized service
    const result = await submitContact(formData);
    
    if (result.success) {
      console.log('✅ Contact form submitted successfully!');
      console.log('📧 Email notification sent to admin');
      console.log('📊 Data saved to Google Sheet');
      
      setFeedback({ 
        message: `✅ Thank you ${fullname}! Your message has been sent successfully. We'll reply within 24 hours.`, 
        type: 'success' 
      });
      
      // Reset form
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        serviceInterest: '',
        message: ''
      });
      
    } else {
      console.error('❌ Submission error:', result.error);
      setFeedback({ 
        message: `❌ There was an error sending your message. Please call us directly at ${CONFIG.COMPANY_PHONE} or email ${CONFIG.COMPANY_EMAIL}`, 
        type: 'error' 
      });
    }
    
    setIsSubmitting(false);
    
    // Clear feedback after 6 seconds
    setTimeout(() => setFeedback({ message: '', type: '' }), 6000);
  };

  const serviceOptions = [
    'Select a service',
    'Financial Advisory — Personal Finance, Wealth Structuring, Fractional CFO',
    'Business Advisory — Strategy, Market Entry, Feasibility Studies',
    'Accounting & Compliance — Bookkeeping, KRA Compliance, Payroll, Audit',
    'Investment Intelligence — Portfolio Construction, Equity Research, Market Analysis',
    'Digital Economy Advisory — Freelancer Tax, US Tax Preparation, W-8BEN',
    'Corporate Training — Excel, Financial Modeling, Finance for Non-Finance Managers',
    'Other / General Inquiry'
  ];

  return (
    <>
      <SEO 
        title="Contact M.K. Gathu Consultancy — Book a Consultation"
        description="Contact M.K. Gathu Consultancy for financial advisory, business strategy, accounting & compliance, investment intelligence, digital economy advisory, and corporate training. Based in Westlands, Nairobi. Email gathukamau23@gmail.com or call +254 762 610 912."
        path="/contact"
      />
      
      <div className="contact-page">
        <section className="page-header">
          <div className="container">
            <h1>Let's find the right <span>division</span> for what you're facing.</h1>
            <p>Tell us what you're working on — a filing deadline, an expansion decision, or a portfolio question — and we'll route it to the right people.</p>
          </div>
        </section>

        <section className="contact-main">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Information Column */}
              <div className="contact-info">
                <h3><i className="fas fa-building"></i> M.K. Gathu Consultancy</h3>
                <p className="info-subtitle">Business Intelligence · Financial Advisory · Strategic Consulting</p>
                
                <div className="contact-detail">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Location</strong><br />
                    Westlands, Nairobi, Kenya
                  </div>
                </div>
                
                <div className="contact-detail">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email</strong><br />
                    <a href={`mailto:${CONFIG.COMPANY_EMAIL}`}>{CONFIG.COMPANY_EMAIL}</a>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <i className="fas fa-phone"></i>
                  <div>
                    <strong>Phone</strong><br />
                    <a href={`tel:${CONFIG.COMPANY_PHONE.replace(/\s/g, '')}`}>{CONFIG.COMPANY_PHONE}</a>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <i className="fab fa-whatsapp"></i>
                  <div>
                    <strong>WhatsApp</strong><br />
                    <a href={`https://wa.me/${CONFIG.COMPANY_PHONE.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer">
                      {CONFIG.COMPANY_PHONE}
                    </a>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <i className="fas fa-clock"></i>
                  <div>
                    <strong>Business Hours</strong><br />
                    Monday - Friday: 8:00AM – 5:00PM (EAT)<br />
                    Saturday: 9:00AM – 1:00PM<br />
                    Sunday: Closed
                  </div>
                </div>

                <div className="contact-divisions">
                  <h4>Our Six Divisions</h4>
                  <div className="division-tags">
                    <span>Financial Advisory</span>
                    <span>Business Advisory</span>
                    <span>Accounting & Compliance</span>
                    <span>Investment Intelligence</span>
                    <span>Digital Economy Advisory</span>
                    <span>Corporate Training</span>
                  </div>
                </div>

                <div className="office-hours-note">
                  <i className="fas fa-info-circle"></i>
                  <p>Remote and international engagements welcome. After-hours appointments available upon request.</p>
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="contact-form">
                <h3><i className="fas fa-paper-plane"></i> Send a Message</h3>
                <p className="form-intro">Tell us what you're working on, and we'll route it to the right division.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullname" 
                      placeholder="Enter your full name" 
                      value={formData.fullname} 
                      onChange={handleChange} 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="your@email.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="+254 XXX XXX XXX" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="serviceInterest">Which division can we help with?</label>
                    <select 
                      id="serviceInterest" 
                      value={formData.serviceInterest} 
                      onChange={handleChange} 
                      disabled={isSubmitting}
                    >
                      {serviceOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">What are you working on? *</label>
                    <textarea 
                      rows="5" 
                      id="message" 
                      placeholder="Tell us about your filing deadline, expansion decision, portfolio question, or any other challenge you're facing..." 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-gold" 
                    style={{ width: '100%', justifyContent: 'center' }} 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                    ) : (
                      <><i className="fas fa-paper-plane"></i> Send Message</>
                    )}
                  </button>
                  
                  {feedback.message && (
                    <div className={`form-feedback ${feedback.type}`}>
                      {feedback.message}
                    </div>
                  )}
                </form>
                
                <div className="form-note">
                  <p><i className="fas fa-lock"></i> Your information is secure and will not be shared with third parties.</p>
                  <p><i className="fas fa-clock"></i> We typically respond within 2-4 hours during business hours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Contact Options */}
        <section className="direct-contact">
          <div className="container">
            <div className="direct-contact-grid">
              <div className="direct-card">
                <i className="fas fa-envelope"></i>
                <h3>Email Us</h3>
                <p>For detailed inquiries or to share documents</p>
                <a href={`mailto:${CONFIG.COMPANY_EMAIL}`} className="btn-outline">
                  <i className="fas fa-envelope"></i> {CONFIG.COMPANY_EMAIL}
                </a>
              </div>
              <div className="direct-card">
                <i className="fab fa-whatsapp"></i>
                <h3>Chat on WhatsApp</h3>
                <p>Quick questions and immediate responses</p>
                <a href={`https://wa.me/${CONFIG.COMPANY_PHONE.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <i className="fab fa-whatsapp"></i> Chat Now
                </a>
              </div>
              <div className="direct-card">
                <i className="fas fa-phone"></i>
                <h3>Call Us</h3>
                <p>Speak directly with a consultant</p>
                <a href={`tel:${CONFIG.COMPANY_PHONE.replace(/\s/g, '')}`} className="btn-outline">
                  <i className="fas fa-phone"></i> {CONFIG.COMPANY_PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Visit <span>Our Office</span></h2>
              <p className="section-subtitle">Westlands, Nairobi — by appointment only</p>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.846281750498!2d36.804750!3d-1.264644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1791a3266197%3A0x1b8b9b9b9b9b9b9b!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske" 
                width="100%" 
                height="350" 
                style={{ border: 0, borderRadius: '4px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="M.K. Gathu Consultancy Location Map - Westlands, Nairobi"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contact-faq">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Frequently <span>Asked Questions</span></h2>
            </div>
            <div className="faqs-grid">
              <div className="faq-item">
                <h3><i className="fas fa-question-circle"></i> How quickly will you respond?</h3>
                <p>We typically respond within 2-4 hours during business hours (Mon-Fri, 8AM-5PM EAT). For urgent matters, please call us directly.</p>
              </div>
              <div className="faq-item">
                <h3><i className="fas fa-dollar-sign"></i> Is the consultation free?</h3>
                <p>Yes, your initial consultation is completely free. We'll discuss your needs and provide a quote for any ongoing services.</p>
              </div>
              <div className="faq-item">
                <h3><i className="fas fa-globe"></i> Do you serve international clients?</h3>
                <p>Yes. We serve Kenyan businesses and international remote clients, including freelancers and remote workers requiring US tax preparation.</p>
              </div>
              <div className="faq-item">
                <h3><i className="fas fa-sitemap"></i> Which division should I contact?</h3>
                <p>Just tell us what you're working on — a filing deadline, an expansion decision, or a portfolio question — and we'll route it to the right division.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}