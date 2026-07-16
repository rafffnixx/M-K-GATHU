import React, { useState } from 'react';
import SEO from '../components/SEO';
import CONFIG from '../config';
import { submitReview } from '../services/googleSheetsService';

export default function Reviews() {
  const [filter, setFilter] = useState('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    rating: 5,
    service: '',
    review: '',
    agreeToTerms: false
  });

  const [testimonials, setTestimonials] = useState([
    // ... your testimonials data (same as before)
  ]);

  // Get unique services for filter
  const servicesList = ['all', ...new Set(testimonials.map(t => t.service))];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmitReview = async (e) => {
    // ... your submit logic (same as before)
  };

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.service === filter);

  const renderStars = (rating) => {
    return Array(5).fill().map((_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? 'filled' : 'empty'}`}></i>
    ));
  };

  const renderRatingInput = (currentRating) => {
    return (
      <div className="rating-input">
        {[5, 4, 3, 2, 1].map(star => (
          <label key={star} className="rating-star">
            <input 
              type="radio" 
              name="rating" 
              value={star} 
              checked={parseInt(currentRating) === star}
              onChange={handleInputChange}
            />
            <i className={`fas fa-star ${parseInt(currentRating) >= star ? 'filled' : ''}`}></i>
          </label>
        ))}
      </div>
    );
  };

  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);
  const totalReviews = testimonials.length;
  const verifiedCount = testimonials.filter(t => t.verified).length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(star => {
    const count = testimonials.filter(t => t.rating === star).length;
    const percentage = (count / totalReviews) * 100;
    return { star, count, percentage };
  });

  // Division options for the form
  const divisionOptions = [
    'Select a division',
    'Financial Advisory — Personal Finance, Wealth Structuring, Fractional CFO',
    'Business Advisory — Strategy, Market Entry, Feasibility Studies',
    'Accounting & Compliance — Bookkeeping, KRA Compliance, Payroll, Audit',
    'Investment Intelligence — Portfolio Construction, Equity Research, Market Analysis',
    'Digital Economy Advisory — Freelancer Tax, US Tax Preparation, W-8BEN',
    'Corporate Training — Excel, Financial Modeling, Finance for Non-Finance Managers',
    'Other'
  ];

  return (
    <>
      <SEO 
        title="Client Testimonials M.K. Gathu Consultancy"
        description="Read authentic reviews from businesses and professionals we've helped. See how M.K. Gathu Consultancy has transformed finances for 500+ clients across Kenya and worldwide."
        path="/reviews"
      />
      
      <div className="reviews-page">
        <section className="page-header">
          <div className="container">
            <h1>Client <span>Testimonials</span></h1>
            <p>What our clients say about their experience with M.K. Gathu Consultancy</p>
          </div>
        </section>

        {/* Ratings Summary */}
        <section className="ratings-summary">
          <div className="container">
            <div className="summary-card">
              <div className="rating-score">
                <h2>{averageRating}</h2>
                <div className="stars">{renderStars(Math.round(averageRating))}</div>
                <p>Based on {totalReviews} reviews</p>
                <p className="verified-badge">
                  <i className="fas fa-check-circle"></i> {verifiedCount} Verified Reviews
                </p>
              </div>
              <div className="rating-bars">
                {ratingDistribution.map((item) => (
                  <div className="rating-bar-item" key={item.star}>
                    <span>{item.star} Star</span>
                    <div className="bar">
                      <div className="fill" style={{width: `${item.percentage}%`}}></div>
                    </div>
                    <span>{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="reviews-filter">
          <div className="container">
            <div className="filter-buttons">
              {servicesList.map(service => (
                <button 
                  key={service}
                  className={`filter-btn ${filter === service ? 'active' : ''}`}
                  onClick={() => setFilter(service)}
                >
                  {service === 'all' ? 'All Divisions' : service}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Write Review Section - Two Column Layout */}
        <section className="write-review">
          <div className="container">
            <div className="review-layout">
              {/* Left Column - Information */}
              <div className="review-info">
                <h3>
                  <i className="fas fa-pen-alt"></i>
                  Share Your Feedback
                </h3>
                
                <div className="info-item">
                  <i className="fas fa-star"></i>
                  <div>
                    <strong>Why Your Review Matters</strong>
                    <p>Your feedback helps us improve our services and helps other clients make informed decisions.</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <strong>Privacy Guaranteed</strong>
                    <p>Your email will not be published. We only ask for verification purposes.</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <strong>Quick & Easy</strong>
                    <p>Takes less than 2 minutes to share your experience with us.</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Verification Process</strong>
                    <p>Reviews are verified before being published to ensure authenticity.</p>
                  </div>
                </div>

                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Alternative Contact</strong>
                    <p>Prefer to share privately? Email us at <a href={`mailto:${CONFIG.COMPANY_EMAIL}`}>{CONFIG.COMPANY_EMAIL}</a></p>
                  </div>
                </div>

                {/* Review Tips */}
                <div className="review-tips-box">
                  <h4>
                    <i className="fas fa-lightbulb"></i>
                    Review Tips
                  </h4>
                  <ul>
                    <li><span>✓</span> Be specific about the division you worked with</li>
                    <li><span>✓</span> Share how we helped solve your financial challenges</li>
                    <li><span>✓</span> Mention any standout team members (optional)</li>
                    <li><span>✓</span> Honest feedback helps us grow</li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Review Form */}
              <div className="review-form-container">
                <h3>
                  <i className="fas fa-pen-alt"></i>
                  Write Your Review
                </h3>
                <p className="form-intro">Tell us about your experience with our division.</p>
                
                {submitted && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    <p>Thank you for your review! It will be published after verification.</p>
                  </div>
                )}
                
                {submissionError && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    <p>{submissionError}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmitReview}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      placeholder="Your email (will not be published)"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company" 
                      value={formData.company} 
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="position">Your Position</label>
                    <input 
                      type="text" 
                      id="position"
                      name="position" 
                      value={formData.position} 
                      onChange={handleInputChange}
                      placeholder="e.g., CEO, Founder, Manager"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Rating *</label>
                    {renderRatingInput(formData.rating)}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Which division did you work with?</label>
                    <select 
                      id="service"
                      name="service" 
                      value={formData.service} 
                      onChange={handleInputChange} 
                      disabled={isSubmitting}
                    >
                      {divisionOptions.map((option, index) => (
                        <option key={index} value={option === 'Select a division' ? '' : option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="review">Your Review *</label>
                    <textarea 
                      id="review"
                      name="review" 
                      rows="4" 
                      value={formData.review} 
                      onChange={handleInputChange}
                      placeholder="Tell us about your experience with M.K. Gathu Consultancy..."
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group checkbox-group">
                    <input 
                      type="checkbox" 
                      name="agreeToTerms" 
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                    <label>
                      I agree to the <a href="/terms">terms and conditions</a> and confirm this review is based on my genuine experience.
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-gold" 
                    style={{ width: '100%', justifyContent: 'center' }} 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><i className="fas fa-spinner fa-spin"></i> Submitting...</>
                    ) : (
                      <><i className="fas fa-paper-plane"></i> Submit Review</>
                    )}
                  </button>
                </form>
                
                <div className="form-note">
                  <p><i className="fas fa-lock"></i> Your information is secure and will not be shared with third parties.</p>
                  <p><i className="fas fa-clock"></i> Reviews are typically verified within 24-48 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="testimonials-grid-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What Our <span>Clients Say</span></h2>
              <p className="section-subtitle">Real stories from businesses and professionals we've helped across all six divisions</p>
            </div>
            <div className="testimonials-grid">
              {filteredTestimonials.map(testimonial => (
                <div className="testimonial-card" key={testimonial.id}>
                  <div className="testimonial-header">
                    <div className="client-info">
                      <div className="client-image">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div>
                        <h3>{testimonial.name}</h3>
                        <p className="company">{testimonial.company}</p>
                        <p className="position">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <i className="fas fa-quote-left"></i>
                    <p>"{testimonial.content}"</p>
                  </div>
                  <div className="testimonial-footer">
                    <div className="footer-left">
                      <span className="service-tag">{testimonial.service}</span>
                      {testimonial.verified && (
                        <span className="verified-tag">
                          <i className="fas fa-check-circle"></i> Verified
                        </span>
                      )}
                    </div>
                    <span className="date">{new Date(testimonial.date).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Become Our Next Success Story?</h2>
              <p>Join 500+ businesses and professionals who trust M.K. Gathu Consultancy for their financial needs.</p>
              <div className="cta-buttons">
                <a href="/contact" className="btn-gold">
                  <i className="fas fa-calendar-check"></i> Book a Consultation
                </a>
                <a href="/services" className="btn-outline">
                  <i className="fas fa-info-circle"></i> Explore Our Divisions
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}