import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
    window.scrollTo(0, 0);
  };

  const divisions = [
    { id: 'financial-advisory', icon: 'fas fa-chart-pie', title: 'Financial Advisory', desc: 'Clarity for your money, structure for your future. Personal finance, wealth structuring, and fractional CFO services.' },
    { id: 'business-advisory', icon: 'fas fa-handshake', title: 'Business Advisory', desc: 'Strategy that turns growth into results. Market entry, pricing strategy, and operational optimization for SMEs.' },
    { id: 'accounting-compliance', icon: 'fas fa-file-invoice', title: 'Accounting & Compliance', desc: 'The foundation every business is built on. Bookkeeping, KRA compliance, payroll, and audit preparation.' },
    { id: 'investment-intelligence', icon: 'fas fa-chart-line', title: 'Investment Intelligence', desc: 'Informed capital. Deliberate decisions. Portfolio construction, equity research, and market analysis.' },
    { id: 'digital-economy', icon: 'fas fa-globe', title: 'Digital Economy Advisory', desc: 'Built for the new way people earn. Freelancer advisory, US tax preparation, and cross-border income structuring.' },
    { id: 'corporate-training', icon: 'fas fa-graduation-cap', title: 'Corporate Training', desc: 'Building financial fluency, one team at a time. Excel, financial modeling, and finance for non-finance managers.' }
  ];

  const whoWeServe = [
    { tag: 'Kenya Focus', title: 'Local Businesses & SMEs', desc: 'Bookkeeping, KRA compliance, VAT, payroll, audits, and fractional CFO services for companies operating in Kenya.', link: '#accounting-compliance' },
    { tag: 'Individuals · Remote', title: 'Freelancers & Remote Professionals', desc: 'US tax returns (Form 1040, 2555), W-8BEN, ITIN support, multi-currency income structuring, and cross-border tax optimization.', link: '#digital-economy' },
    { tag: 'Entities · Global', title: 'Global Businesses & Investors', desc: 'Market-entry strategy, cross-border investment analysis, and international financial advisory for global businesses expanding into East Africa.', link: '#business-advisory' }
  ];

  const insights = [
    { tag: 'Tax & Compliance', title: "What Kenya's eTIMS rollout means for import-heavy retailers", desc: 'A practical breakdown of device registration, VAT treatment, and where the documentation still lags the interface.', link: 'mailto:gathukamau23@gmail.com?subject=eTIMS%20for%20import-heavy%20retailers' },
    { tag: 'Digital Economy', title: 'Structuring income when you\'re paid in three currencies', desc: 'How remote workers and freelancers can think about tax residency, timing, and structuring before year-end.', link: 'mailto:gathukamau23@gmail.com?subject=Structuring%20multi-currency%20income' },
    { tag: 'Investment Intelligence', title: 'Reading the NSE: what the last two quarters actually show', desc: 'A grounded look at sector rotation and where capital allocation discipline still beats timing the market.', link: 'mailto:gathukamau23@gmail.com?subject=NSE%20market%20outlook' }
  ];

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

  return (
    <>
      <SEO 
        title="M.K. Gathu Consultancy — Business Intelligence · Financial Advisory · Strategic Consulting"
        description="Nairobi-based financial and business advisory firm trusted by 500+ businesses — financial advisory, business strategy, accounting & compliance, investment intelligence, digital economy advisory, and corporate training."
        path="/"
      />
      
      <h1 className="sr-only">M.K. Gathu Consultancy - Business Intelligence· Financial Advisory · Strategic Consulting</h1>
      
      <div className="home-page">
        {/* Hero Section with Image */}
        <section id="home" className="hero-section">
          <div className="hero-container">
            <div className="hero-content-wrapper">
              {/* Left - Text Content */}
              <div className="hero-text">
                <div className="hero-tagline">
                  <i className="fas fa-map-pin"></i> Nairobi, Kenya · Serving Clients Worldwide
                </div>
                <h1>Business Intelligence, Financial Advisory & <span>Strategic Consulting.</span></h1>
                <p className="hero-desc">Trusted by 500+ Kenyan businesses, plus freelancers and remote professionals worldwide. We combine deep local expertise — KRA, ICPAK, NSE — with specialist international support, including US tax filing for freelancers and remote workers.</p>
                <div className="hero-buttons">
                  <Link to="/contact" className="btn-gold">
                    <i className="fas fa-calendar-check"></i> Book a Consultation
                  </Link>
                  <Link to="/services" className="btn-outline">
                    Explore Our Divisions →
                  </Link>
                </div>
                <div className="hero-stats">
                  <div><i className="fas fa-building"></i> 500+ businesses & professionals served</div>
                  <div><i className="fas fa-check-circle"></i> ICPAK aligned · US Tax Preparer credentialed</div>
                  <div><i className="fas fa-chart-bar"></i> Research informed by NSE & CMA Kenya</div>
                </div>
              </div>
              
              {/* Right - Image */}
              <div className="hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80" 
                  alt="M.K. Gathu Consultancy - Financial Advisory Team" 
                  loading="lazy"
                />
                <div className="hero-image-badge">
                  <i className="fas fa-star"></i>
                  <span>Trusted Since 2016</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="container">
            <div className="badges-grid">
              <div className="badge-item">
                <i className="fas fa-users"></i>
                <span>500+ Businesses & Professionals Served</span>
              </div>
              <div className="badge-item">
                <i className="fas fa-globe-africa"></i>
                <span>Kenya-Based · Remote & International Engagements</span>
              </div>
              <div className="badge-item">
                <i className="fas fa-certificate"></i>
                <span>ICPAK Aligned · US Tax Preparer Credentialed</span>
              </div>
              <div className="badge-item">
                <i className="fas fa-university"></i>
                <span>Research Informed by NSE & CMA Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Serve Section */}
        <section className="who-we-serve">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Who We <span>Serve</span></h2>
              <p className="section-subtitle">Three clients. One firm built to handle all three. Find yourself below, then jump straight to the division built for you.</p>
            </div>
            <div className="who-grid">
              {whoWeServe.map((item, index) => (
                <div key={index} className="who-card">
                  <span className="who-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href={item.link} className="who-link">Learn More <i className="fas fa-arrow-right"></i></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions / Divisions Section */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our <span>Divisions</span></h2>
              <p className="section-subtitle">One firm. Six divisions. Each built around a specific kind of client — from individuals structuring personal wealth to businesses navigating audits, market entry, or their first fractional CFO.</p>
            </div>
            <div className="services-grid">
              {divisions.map((division) => (
                <div 
                  key={division.id}
                  className="service-card clickable" 
                  onClick={() => handleServiceClick(division.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleServiceClick(division.id);
                  }}
                >
                  <div className="service-icon"><i className={division.icon}></i></div>
                  <h3>{division.title}</h3>
                  <p>{division.desc}</p>
                  <div className="service-link">Learn More <i className="fas fa-arrow-right"></i></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="why-choose-us">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why <span>M.K. Gathu</span></h2>
              <p className="section-subtitle">Trusted with the complex decisions.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon"><i className="fas fa-sitemap"></i></div>
                <h3>One firm, six disciplines</h3>
                <p>Compliance, strategy, investment research, and training under a single point of contact — no handing your file between firms.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><i className="fas fa-certificate"></i></div>
                <h3>Credentialed, not just capable</h3>
                <p>ICPAK-aligned practice and a US Tax Preparer credential mean the advice holds up to Kenyan and international scrutiny alike.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon"><i className="fas fa-rocket"></i></div>
                <h3>Built for where money is moving</h3>
                <p>A dedicated division for freelancers, remote workers, and digital asset holders — the parts of the economy most firms still ignore.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision Section */}
        <section className="mission-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our <span>Purpose</span></h2>
              <p className="section-subtitle">Why the firm exists — and where it's headed.</p>
            </div>
            <div className="mission-grid">
              <div className="mission-card">
                <span className="mission-tag">Mission</span>
                <h3>Practical consulting. Real financial performance.</h3>
                <p>To help organizations improve financial performance through practical consulting, financial analysis, professional training, and data-driven decision-making.</p>
              </div>
              <div className="mission-card">
                <span className="mission-tag">Vision</span>
                <h3>One of East Africa's most respected advisory firms.</h3>
                <p>To build M.K. Gathu Consultancy into one of East Africa's most respected advisory firms — delivering finance, strategy, business transformation, and corporate training to SMEs, corporates, NGOs, and public institutions.</p>
              </div>
            </div>
            <div className="values-section">
              <h4>Our Values</h4>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-chip">
                    <i className={value.icon}></i>
                    {value.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="insights-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Recent <span>Insights</span></h2>
              <p className="section-subtitle">Notes on tax, markets, and business strategy — written for the decisions our clients are actually facing.</p>
            </div>
            <div className="insights-grid">
              {insights.map((item, index) => (
                <div key={index} className="insight-card">
                  <span className="insight-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href={item.link} className="insight-link">Ask us about this <i className="fas fa-arrow-right"></i></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section" id="contact">
          <div className="container">
            <div className="cta-content">
              <h2>Let's find the right division for what you're facing.</h2>
              <p>Tell us what you're working on — a filing deadline, an expansion decision, or a portfolio question — and we'll route it to the right people.</p>
              <div className="cta-buttons">
                <a href="mailto:gathukamau23@gmail.com" className="btn-gold">
                  <i className="fas fa-envelope"></i> Email Us
                </a>
                <a href="https://wa.me/254762610912" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
                <Link to="/contact" className="btn-outline">
                  <i className="fas fa-paper-plane"></i> Send a Message
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}