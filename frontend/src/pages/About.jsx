import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function About() {
  // Values with icons instead of numbers
  const values = [
    { icon: 'fas fa-shield-alt', label: 'Integrity' },
    { icon: 'fas fa-trophy', label: 'Excellence' },
    { icon: 'fas fa-lightbulb', label: 'Practical Solutions' },
    { icon: 'fas fa-graduation-cap', label: 'Continuous Learning' },
    { icon: 'fas fa-star', label: 'Client Success' },
    { icon: 'fas fa-handshake', label: 'Professionalism' },
    { icon: 'fas fa-rocket', label: 'Innovation' },
    { icon: 'fas fa-clipboard-check', label: 'Accountability' }
  ];

  const whyItems = [
    { icon: 'fas fa-sitemap', title: 'One firm, six disciplines', desc: 'Compliance, strategy, investment research, and training under a single point of contact no handing your file between firms.' },
    { icon: 'fas fa-certificate', title: 'Credentialed, not just capable', desc: 'ICPAK-aligned practice and a US Tax Preparer credential mean the advice holds up to Kenyan and international scrutiny alike.' },
    { icon: 'fas fa-rocket', title: 'Built for where money is moving', desc: 'A dedicated division for freelancers, remote workers, and digital asset holders the parts of the economy most firms still ignore.' }
  ];

  // Divisions with icons for preview
  const divisions = [
    { icon: 'fas fa-chart-pie', title: 'Financial Advisory', tagline: 'Clarity for your money, structure for your future.' },
    { icon: 'fas fa-handshake', title: 'Business Advisory', tagline: 'Strategy that turns growth into results.' },
    { icon: 'fas fa-file-invoice', title: 'Accounting & Compliance', tagline: 'The foundation every business is built on.' },
    { icon: 'fas fa-chart-line', title: 'Investment Intelligence', tagline: 'Informed capital. Deliberate decisions.' },
    { icon: 'fas fa-globe', title: 'Digital Economy Advisory', tagline: 'Built for the new way people earn.' },
    { icon: 'fas fa-graduation-cap', title: 'Corporate Training', tagline: 'Building financial fluency, one team at a time.' }
  ];

  return (
    <>
      <SEO 
        title="About M.K. Gathu Consultancy Business Intelligence · Financial Advisory · Strategic Consulting"
        description="Nairobi-based financial and business advisory firm trusted by 500+ businesses financial advisory, business strategy, accounting & compliance, investment intelligence, digital economy advisory, and corporate training. ICPAK-aligned with US Tax Preparer credential."
        path="/about"
      />
      
      <div className="about-page">
        <section className="page-header">
          <div className="container">
            <h1>About <span>M.K. Gathu Consultancy</span></h1>
            <p>Business Intelligence · Financial Advisory · Strategic Consulting</p>
          </div>
        </section>

        <section className="about-main">
          <div className="container">
            <div className="about-flex">
              <div className="about-text">
                <h2>Who We Are</h2>
                <p>M.K. Gathu Consultancy is a Nairobi-based financial and business advisory firm trusted by 500+ businesses and professionals. We combine deep local expertise KRA, ICPAK, NSE with specialist international support, including US tax filing for freelancers and remote workers.</p>
                <p>We are structured as a multi-disciplinary firm with six integrated divisions, ensuring that a bookkeeping client can access investment research, and a business advisory client can call on tax strategy, without ever leaving M.K. Gathu Consultancy.</p>
                
                <h2>Our Mission</h2>
                <p>To help organizations improve financial performance through practical consulting, financial analysis, professional training, and data-driven decision-making.</p>
                
                <h2>Our Vision</h2>
                <p>To build M.K. Gathu Consultancy into one of East Africa's most respected advisory firms delivering finance, strategy, business transformation, and corporate training to SMEs, corporates, NGOs, and public institutions.</p>
                
                {/* Stats - Horizontal Single Row */}
                <div className="about-stats-horizontal">
                  <div className="stat-horizontal">
                    <span className="stat-number-horizontal">500+</span>
                    <span className="stat-label-horizontal">Businesses & Professionals Served</span>
                  </div>
                  <div className="stat-horizontal">
                    <span className="stat-number-horizontal">ICPAK</span>
                    <span className="stat-label-horizontal">Aligned Practice</span>
                  </div>
                  <div className="stat-horizontal">
                    <span className="stat-number-horizontal">US</span>
                    <span className="stat-label-horizontal">Tax Preparer Credentialed</span>
                  </div>
                  <div className="stat-horizontal">
                    <span className="stat-number-horizontal">NSE & CMA</span>
                    <span className="stat-label-horizontal">Research Informed</span>
                  </div>
                </div>
                
                {/* Contact - Horizontal Single Row */}
                <div className="about-contact-horizontal">
                  <span className="contact-horizontal">
                    <i className="fas fa-map-marker-alt"></i>
                    Westlands, Nairobi, Kenya
                  </span>
                  <span className="contact-horizontal">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:gathukamau23@gmail.com">gathukamau23@gmail.com</a>
                  </span>
                  <span className="contact-horizontal">
                    <i className="fas fa-phone"></i>
                    <a href="tel:+254762610912">+254 762 610 912</a>
                  </span>
                  <span className="contact-horizontal">
                    <i className="fab fa-whatsapp"></i>
                    <a href="https://wa.me/254762610912" target="_blank" rel="noopener noreferrer">+254 762 610 912</a>
                  </span>
                </div>
                
                <div className="about-cta">
                  <Link to="/contact" className="btn-gold">
                    <i className="fas fa-calendar-check"></i> Book a Consultation
                  </Link>
                </div>
              </div>
              
              <div className="about-img">
                <img 
                  src="/images/about/about-team.jpg" 
                  alt="Professional financial consultant team in Nairobi, Kenya" 
                  loading="lazy" 
                />
                <img 
                  src="/images/about/about-office.jpg"
                  alt="Financial advisory and strategic consulting services in Kenya" 
                  loading="lazy" 
                  style={{marginTop: '24px'}} 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="about-values-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our <span>Core Values</span></h2>
              <p className="section-subtitle">The principles that guide our service delivery</p>
            </div>
            <div className="about-values-grid">
              {values.map((value, index) => (
                <div key={index} className="about-value-card">
                  <div className="value-icon-wrapper">
                    <i className={value.icon}></i>
                  </div>
                  <h3>{value.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why <span>M.K. Gathu</span></h2>
              <p className="section-subtitle">Trusted with the complex decisions.</p>
            </div>
            <div className="why-grid">
              {whyItems.map((item, index) => (
                <div key={index} className="why-card">
                  <div className="why-icon"><i className={item.icon}></i></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="divisions-preview">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our <span>Six Divisions</span></h2>
              <p className="section-subtitle">One firm. Six divisions. Each built around a specific kind of client.</p>
            </div>
            <div className="divisions-grid">
              {divisions.map((division, index) => (
                <div key={index} className="division-item">
                  <div className="division-icon-wrapper">
                    <i className={division.icon}></i>
                  </div>
                  <h3>{division.title}</h3>
                  <p className="division-tagline">{division.tagline}</p>
                </div>
              ))}
            </div>
            <div className="divisions-cta">
              <Link to="/services" className="btn-outline">
                Explore All Divisions <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}