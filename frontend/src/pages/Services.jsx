import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  const coreServices = [
    { 
      id: "business-startup",
      icon: "fas fa-rocket", 
      title: "Business Start-Up Support", 
      desc: "Business registration, permits, licensing, and structuring for new ventures in Kenya." 
    },
    { 
      id: "daily-money-management",
      icon: "fas fa-wallet", 
      title: "Daily Money Management", 
      desc: "Real-time cash flow tracking, expense monitoring, and operational finance oversight." 
    },
    { 
      id: "debt-tracking",
      icon: "fas fa-credit-card", 
      title: "Payments & Debt Tracking", 
      desc: "Automated invoicing, accounts receivable, aging reports, and debt recovery strategies." 
    },
    { 
      id: "payroll",
      icon: "fas fa-users", 
      title: "Payroll Services", 
      desc: "Payroll processing, statutory deductions, payslips, NSSF, NHIF, and leave management." 
    },
    { 
      id: "tax-compliance",
      icon: "fas fa-file-invoice", 
      title: "Tax & KRA Compliance", 
      desc: "VAT, withholding tax, income tax filing, KRA PIN updates, and audit support." 
    },
    { 
      id: "financial-reports",
      icon: "fas fa-chart-pie", 
      title: "Financial Reports", 
      desc: "Profit & loss, balance sheets, management accounts, and insightful dashboards." 
    },
    { 
      id: "business-advisory",
      icon: "fas fa-handshake", 
      title: "Business Advisory", 
      desc: "Growth strategies, pricing guidance, financial forecasting & investment readiness." 
    },
    { 
      id: "kra-compliance-plus",
      icon: "fas fa-shield-alt", 
      title: "KRA Compliance Plus", 
      desc: "ETR, iTax support, tax health checks and representation before KRA." 
    }
  ];

  const advisoryServices = [
    { 
      id: "growth-roadmaps",
      icon: "fas fa-chart-line", 
      title: "Growth Roadmaps", 
      desc: "Data-driven expansion plans, market entry & financial forecasting." 
    },
    { 
      id: "pricing-guidance",
      icon: "fas fa-tags", 
      title: "Pricing Guidance", 
      desc: "Strategic pricing models to maximize margins and competitiveness." 
    },
    { 
      id: "capital-funding",
      icon: "fas fa-hand-holding-usd", 
      title: "Capital & Funding", 
      desc: "Liaison with banks, investors and grant readiness for Kenyan SMEs." 
    }
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <h1>Our <span>Services</span></h1>
          <p>Comprehensive financial solutions tailored for Kenyan businesses from startup to profitability.</p>
        </div>
      </section>

      <section id="core-services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core <span>Services</span></h2>
          </div>
          <div className="services-grid">
            {coreServices.map((service, index) => (
              <div 
                className="service-card clickable" 
                key={index}
                onClick={() => handleServiceClick(service.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleServiceClick(service.id);
                }}
              >
                <div className="service-icon"><i className={service.icon}></i></div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tax-compliance" className="tax-section">
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
              </ul>
              <a href="/contact" className="btn-gold">
                <i className="fas fa-file-signature"></i> Get KRA Support →
              </a>
            </div>
            <div className="tax-image">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&q=80" alt="KRA tax compliance" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section id="advisory" className="advisory-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Business <span>Advisory & Strategy</span></h2>
            <p className="section-subtitle">Navigate financial complexities with expert guidance from registration to profitability.</p>
          </div>
          <div className="advisory-grid">
            {advisoryServices.map((service, index) => (
              <div 
                className="service-card clickable" 
                key={index}
                onClick={() => handleServiceClick(service.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleServiceClick(service.id);
                }}
              >
                <i className={service.icon + " service-icon"}></i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}