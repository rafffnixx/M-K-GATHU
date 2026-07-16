import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Portfolio() {
  const caseStudies = [
    {
      id: 1,
      title: "Tech Startup Financial Turnaround",
      client: "InnovateTech Solutions",
      industry: "Technology",
      challenge: "Disorganized finances, KRA penalties, and cash flow issues",
      solution: "Implemented proper accounting systems, KRA compliance, and debt tracking",
      result: "98% KRA compliance, 40% improved cash flow, secured bank loan",
      image: "/images/portfolio/tech-startup.jpg"
    },
    {
      id: 2,
      title: "Retail Chain Profitability Growth",
      client: "SmartMart Retail",
      industry: "Retail",
      challenge: "Poor inventory management and tax filing delays",
      solution: "Automated payroll, tax compliance, and financial reporting systems",
      result: "Reduced tax penalties by 100%, 25% profit increase",
      image: "/images/portfolio/retail-chain.jpg"
    },
    {
      id: 3,
      title: "SME Business Registration & Setup",
      client: "GreenAgro Farms",
      industry: "Agriculture",
      challenge: "New business needing full registration and financial structure",
      solution: "Complete business registration, KRA PIN, payroll setup, and accounting",
      result: "Fully compliant from day one, ready for investment",
      image: "/images/portfolio/sme-registration.jpg"
    },
    {
      id: 4,
      title: "KRA Compliance Recovery",
      client: "Nairobi Hospitality Group",
      industry: "Hospitality",
      challenge: "Accumulated KRA penalties and compliance issues",
      solution: "Audit, penalty negotiation, and automated filing system",
      result: "Cleared all penalties, 100% compliance restored",
      image: "/images/portfolio/kra-compliance.jpg"
    },
    {
      id: 5,
      title: "Manufacturing Cost Optimization",
      client: "Kenya Steel Ltd",
      industry: "Manufacturing",
      challenge: "Rising operational costs and inefficient tax planning",
      solution: "Cost restructuring, tax optimization, and financial forecasting",
      result: "30% reduction in operational costs, 45% tax savings",
      image: "/images/portfolio/manufacturing.jpg"
    },
    {
      id: 6,
      title: "E-Commerce Financial Integration",
      client: "ShopKenya Online",
      industry: "E-Commerce",
      challenge: "Multiple payment gateways and accounting chaos",
      solution: "Unified accounting system, automated reconciliation, tax compliance",
      result: "Real-time financial visibility, 50% less accounting time",
      image: "/images/portfolio/ecommerce.jpg"
    }
  ];

  // Divisions with icons instead of letters
  const divisions = [
    { 
      icon: "fas fa-chart-pie", 
      title: "Financial Advisory", 
      tagline: "Clarity for your money, structure for your future" 
    },
    { 
      icon: "fas fa-handshake", 
      title: "Business Advisory", 
      tagline: "Strategy that turns growth into results" 
    },
    { 
      icon: "fas fa-file-invoice", 
      title: "Accounting & Compliance", 
      tagline: "The foundation every business is built on" 
    },
    { 
      icon: "fas fa-chart-line", 
      title: "Investment Intelligence", 
      tagline: "Informed capital. Deliberate decisions" 
    },
    { 
      icon: "fas fa-globe", 
      title: "Digital Economy Advisory", 
      tagline: "Built for the new way people earn" 
    },
    { 
      icon: "fas fa-graduation-cap", 
      title: "Corporate Training", 
      tagline: "Building financial fluency, one team at a time" 
    }
  ];

  return (
    <>
      <SEO 
        title="Success Stories M.K. Gathu Consultancy Case Studies"
        description="Real results from businesses and professionals we've helped financial advisory, KRA compliance, investment intelligence, and digital economy advisory. Trusted by 500+ clients across Kenya and worldwide."
        path="/portfolio"
      />
      
      <div className="portfolio-page">
        <section className="page-header">
          <div className="container">
            <h1>Success <span>Stories</span></h1>
            <p>Real results from businesses and professionals we've helped across Kenya and worldwide</p>
          </div>
        </section>

        <section className="portfolio-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <i className="fas fa-building"></i>
                <h3>500+</h3>
                <p>Businesses & Professionals Served</p>
              </div>
              <div className="stat-card">
                <i className="fas fa-certificate"></i>
                <h3>ICPAK</h3>
                <p>Aligned Practice</p>
              </div>
              <div className="stat-card">
                <i className="fas fa-globe"></i>
                <h3>Worldwide</h3>
                <p>International Clients Served</p>
              </div>
              <div className="stat-card">
                <i className="fas fa-university"></i>
                <h3>NSE & CMA</h3>
                <p>Research Informed</p>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-grid-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Client <span>Case Studies</span></h2>
              <p className="section-subtitle">From compliance to strategy to investment intelligence real results across every division</p>
            </div>
            <div className="portfolio-grid">
              {caseStudies.map(study => (
                <div className="portfolio-card" key={study.id}>
                  <div className="portfolio-image">
                    <img src={study.image} alt={study.title} loading="lazy" />
                    <div className="portfolio-category">{study.industry}</div>
                  </div>
                  <div className="portfolio-content">
                    <h3>{study.title}</h3>
                    <p className="client-name"><i className="fas fa-user"></i> {study.client}</p>
                    <div className="portfolio-details">
                      <div className="detail-item">
                        <strong>📋 Challenge:</strong>
                        <p>{study.challenge}</p>
                      </div>
                      <div className="detail-item">
                        <strong>💡 Solution:</strong>
                        <p>{study.solution}</p>
                      </div>
                      <div className="detail-item result">
                        <strong>🏆 Result:</strong>
                        <p>{study.result}</p>
                      </div>
                    </div>
                    <Link to="/contact" className="btn-outline small">
                      Discuss Your Case <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Highlight */}
        <section className="testimonial-highlight">
          <div className="container">
            <div className="highlight-card">
              <i className="fas fa-quote-right"></i>
              <p>"M.K. Gathu Consultancy didn't just fix our financial problems; they transformed how we think about money management. Their team is professional, responsive, and truly cares about our success."</p>
              <div className="highlight-author">
                <img src="/images/portfolio/testimonial-client.jpg" alt="Client" />
                <div>
                  <strong>John Mwangi</strong>
                  <span>CEO, TechVision Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Coverage */}
        <section className="industries-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Industries We <span>Serve</span></h2>
              <p className="section-subtitle">We've helped businesses across various sectors achieve financial excellence</p>
            </div>
            <div className="industries-grid">
              <div className="industry-card">
                <i className="fas fa-laptop-code"></i>
                <h4>Technology</h4>
              </div>
              <div className="industry-card">
                <i className="fas fa-store"></i>
                <h4>Retail</h4>
              </div>
              <div className="industry-card">
                <i className="fas fa-tractor"></i>
                <h4>Agriculture</h4>
              </div>
              <div className="industry-card">
                <i className="fas fa-utensils"></i>
                <h4>Hospitality</h4>
              </div>
              <div className="industry-card">
                <i className="fas fa-industry"></i>
                <h4>Manufacturing</h4>
              </div>
              <div className="industry-card">
                <i className="fas fa-shopping-cart"></i>
                <h4>E-Commerce</h4>
              </div>
              <div className="industry-card">
                <i className="fas fa-heartbeat"></i>
                <h4>Healthcare</h4>
              </div>
              <div className="industry-card">
                <i className="fas fa-building"></i>
                <h4>Real Estate</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Divisions Showcase with Icons */}
        <section className="divisions-showcase">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our <span>Divisions</span></h2>
              <p className="section-subtitle">Six integrated divisions working together for your success</p>
            </div>
            <div className="showcase-grid">
              {divisions.map((division, index) => (
                <div className="showcase-item" key={index}>
                  <div className="showcase-icon">
                    <i className={division.icon}></i>
                  </div>
                  <h4>{division.title}</h4>
                  <p>{division.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Write Your Success Story?</h2>
              <p>Join 500+ businesses and professionals that have transformed their finances with M.K. Gathu Consultancy</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-gold">
                  <i className="fas fa-calendar-check"></i> Book a Consultation
                </Link>
                <Link to="/services" className="btn-outline">
                  <i className="fas fa-info-circle"></i> Explore Our Divisions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}