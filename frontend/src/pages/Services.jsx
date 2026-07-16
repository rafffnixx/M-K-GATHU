import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Services() {
  const navigate = useNavigate();

  const divisions = [
    { 
      id: "financial-advisory",
      icon: "fas fa-chart-pie", 
      title: "Financial Advisory", 
      tagline: "Clarity for your money, structure for your future.",
      desc: "We help individuals and business owners understand, structure, and grow their finances from personal wealth planning to full CFO-level oversight for companies that need financial leadership without the full-time cost.",
      pills: ["Personal Finance Advisory", "Wealth Structuring", "Investment Advisory", "Virtual & Fractional CFO Services", "Cash Flow Management", "Debt Tracking & Recovery", "Financial Modeling", "AI & Automation in Finance"]
    },
    { 
      id: "business-advisory",
      icon: "fas fa-handshake", 
      title: "Business Advisory", 
      tagline: "Strategy that turns growth into results.",
      desc: "For SMEs and scaling businesses, we provide the strategic thinking usually reserved for large corporates market entry planning, pricing strategy, and operational optimization so you grow with a plan, not by guesswork.",
      pills: ["Business Strategy Consulting", "Process Optimization", "Market Entry Advisory", "Feasibility Studies", "Pricing Strategy", "Expansion Planning"]
    },
    { 
      id: "accounting-compliance",
      icon: "fas fa-file-invoice", 
      title: "Accounting & Compliance", 
      tagline: "The foundation every business is built on.",
      desc: "Accurate books, timely filings, and audit-ready records delivered by a credentialed team so you stay compliant while you focus on running your business.",
      pills: ["Business Registration", "KRA PIN & VAT Setup", "Business Bank Account Setup", "Bookkeeping & M-Pesa Reconciliation", "ERP Systems Implementation", "Payroll /PAYE, NSSF, NHIF", "VAT, Income, Rental & Withholding Tax Filing", "Excise, Turnover & Capital Gains Tax", "Audit Preparation", "Internal Controls", "Profit & Loss / Performance Reporting"]
    },
    { 
      id: "investment-intelligence",
      icon: "fas fa-chart-line", 
      title: "Investment Intelligence", 
      tagline: "Informed capital. Deliberate decisions.",
      desc: "We bring institutional-grade research and analysis to individual and business investors portfolio construction, equity research, and real estate investment analysis grounded in Kenyan and global market realities.",
      pills: ["Portfolio Construction", "Equity Research", "Market Analysis", "Treasury Advisory", "Real Estate Investment Analysis", "Capital Allocation Strategy"]
    },
    { 
      id: "digital-economy",
      icon: "fas fa-globe", 
      title: "Digital Economy Advisory", 
      tagline: "Built for the new way people earn.",
      desc: "Freelancers, remote workers, creators, and traders operate outside traditional financial systems we built this division specifically for them, covering cross-border tax, digital asset research, and income structuring for the modern earner.",
      pills: ["Freelancer Advisory", "Remote Worker Tax Strategy", "US Tax Preparation Form 1040", "W-8BEN Setup for US Client Payments", "ITIN Application Assistance", "Foreign Earned Income Exclusion", "Self-Employment Tax & Schedule C", "International Payroll & Worker Classification", "Creator Economy Advisory", "FX Trader Risk Management", "Crypto / Digital Asset Research", "International Income Structuring"]
    },
    { 
      id: "corporate-training",
      icon: "fas fa-graduation-cap", 
      title: "Corporate Training", 
      tagline: "Building financial fluency, one team at a time.",
      desc: "We train teams and individuals in the practical financial skills that drive better decisions Excel, financial modeling, tax literacy, and finance fundamentals for managers who aren't finance professionals.",
      pills: ["Excel Training", "Financial Modeling", "Tax Education", "Corporate Finance Training", "Business Analytics Training", "Finance for Non-Finance Managers"]
    }
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SEO 
        title="Our Divisions M.K. Gathu Consultancy"
        description="Six integrated divisions: Financial Advisory, Business Advisory, Accounting & Compliance, Investment Intelligence, Digital Economy Advisory, and Corporate Training. ICPAK-aligned with US Tax Preparer credential."
        path="/services"
      />
      
      <div className="services-page">
        {/* Hero Section with Background Image - Inline Style */}
        <section 
          className="services-hero"
          style={{
            backgroundImage: "url('/images/services/services-hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="services-hero-overlay"></div>
          <div className="container services-hero-content">
            <h1>Our <span>Divisions</span></h1>
            <p>Six divisions, one point of contact. Each built around a specific kind of client from individuals structuring personal wealth to businesses navigating audits, market entry, or their first fractional CFO.</p>
          </div>
        </section>

        {/* Service Highlight Banner */}
        <div className="service-highlight">
          <div className="container">
            <div className="highlight-banner">
              <div className="highlight-text">
                <i className="fas fa-gem"></i>
                <div>
                  <h3>One Firm. Six Divisions.</h3>
                  <p>Trusted by 500+ businesses & professionals · ICPAK aligned · US Tax Preparer credentialed</p>
                </div>
              </div>
              <Link to="/contact" className="btn-outline">
                Book a Consultation <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Divisions Section - Grid Layout */}
        <section id="divisions" className="divisions-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Six Divisions, <span>One Point of Contact</span></h2>
              <p className="section-subtitle">Every division is built around a specific kind of client from individuals structuring personal wealth to businesses navigating audits, market entry, or their first fractional CFO.</p>
            </div>
            
            <div className="divisions-grid-layout">
              {divisions.map((division, index) => (
                <div 
                  className="division-card-grid" 
                  key={index}
                  onClick={() => handleServiceClick(division.id)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleServiceClick(division.id);
                  }}
                >
                  <div className="division-header-grid">
                    <div className="division-icon-wrapper">
                      <i className={division.icon}></i>
                    </div>
                    <div className="division-title-grid">
                      <h3>{division.title}</h3>
                      <span className="division-tagline">{division.tagline}</span>
                    </div>
                  </div>
                  
                  <p className="division-desc-grid">{division.desc}</p>
                  
                  <div className="division-pills-grid">
                    {division.pills.slice(0, 4).map((pill, idx) => (
                      <span key={idx} className="pill">{pill}</span>
                    ))}
                    {division.pills.length > 4 && (
                      <span className="pill pill-more">+{division.pills.length - 4} more</span>
                    )}
                  </div>
                  
                  <div className="division-link-grid">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tax & Compliance Section */}
        <section className="tax-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">KRA & Tax <span>Compliance Simplified</span></h2>
              <p className="section-subtitle">We take the stress out of Kenya Revenue Authority filings. Stay compliant and avoid penalties.</p>
            </div>
            <div className="tax-showcase">
              <div className="tax-content">
                <ul className="list-check">
                  <li><i className="fas fa-check-circle"></i> VAT & Excise Returns Filing</li>
                  <li><i className="fas fa-check-circle"></i> iTax troubleshooting & KRA PIN registration</li>
                  <li><i className="fas fa-check-circle"></i> Tax Health Certificates & Compliance checks</li>
                  <li><i className="fas fa-check-circle"></i> Monthly & annual filings with precision</li>
                  <li><i className="fas fa-check-circle"></i> ETR machine installation and support</li>
                  <li><i className="fas fa-check-circle"></i> KRA audit representation</li>
                  <li><i className="fas fa-check-circle"></i> ICPAK-aligned practice standards</li>
                </ul>
                <div className="tax-note">
                  <p><i className="fas fa-info-circle"></i> "From registration to profitability we handle your finances."</p>
                </div>
                <Link to="/contact" className="btn-gold">
                  <i className="fas fa-file-signature"></i> Get KRA Support →
                </Link>
              </div>
              <div className="tax-image">
                <img src="/images/services/tax-compliance.jpg" alt="KRA tax compliance" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services Section */}
        <section className="why-our-services">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Choose <span>M.K. Gathu</span></h2>
              <p className="section-subtitle">Trusted with the complex decisions.</p>
            </div>
            <div className="why-grid">
              <div className="why-card">
                <i className="fas fa-sitemap"></i>
                <h4>One firm, six disciplines</h4>
                <p>Compliance, strategy, investment research, and training under a single point of contact no handing your file between firms.</p>
              </div>
              <div className="why-card">
                <i className="fas fa-certificate"></i>
                <h4>Credentialed, not just capable</h4>
                <p>ICPAK-aligned practice and a US Tax Preparer credential mean the advice holds up to Kenyan and international scrutiny alike.</p>
              </div>
              <div className="why-card">
                <i className="fas fa-rocket"></i>
                <h4>Built for where money is moving</h4>
                <p>A dedicated division for freelancers, remote workers, and digital asset holders the parts of the economy most firms still ignore.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}