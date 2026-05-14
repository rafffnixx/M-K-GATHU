import React from 'react';

export default function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About <span>M.K GATHU</span></h1>
          <p>Kenya's trusted financial partner with a gold standard of service.</p>
        </div>
      </section>

      <section className="about-main">
        <div className="container">
          <div className="about-flex">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>We are a premier financial consulting firm based in Nairobi, Kenya, dedicated to empowering businesses with clarity, control, and growth. With deep expertise in local regulations and global best practices, we offer end-to-end financial management — from business registration and KRA compliance to daily finance operations and profitability advisory.</p>
              
              <h2>Our Mission</h2>
              <p>To provide gold-standard financial consulting that transforms Kenyan businesses from registration to profitability through expert guidance, compliance assurance, and strategic advisory.</p>
              
              <h2>Our Vision</h2>
              <p>To be Kenya's most trusted financial partner, recognized for driving business success through innovative financial solutions and unwavering commitment to client prosperity.</p>
              
              <div className="about-contact">
                <p><i className="fas fa-map-marker-alt"></i> Nairobi, Kenya | Serving clients countrywide</p>
                <p><i className="fas fa-envelope"></i> gathukamau23@gmail.com</p>
                <p><i className="fas fa-phone"></i> +254 762 610 912</p>
              </div>
            </div>
            <div className="about-img">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80" alt="Professional financial consultant team in Kenya" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" alt="Financial consulting" loading="lazy" style={{marginTop: '24px'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span>Core Values</span></h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-gem"></i>
              <h3>Integrity</h3>
              <p>We operate with complete transparency and ethical standards in all client dealings.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-chart-line"></i>
              <h3>Excellence</h3>
              <p>We deliver gold-standard financial services that exceed client expectations.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-handshake"></i>
              <h3>Partnership</h3>
              <p>We work alongside our clients as dedicated partners in their growth journey.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>We leverage modern financial tools and strategies for optimal results.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}