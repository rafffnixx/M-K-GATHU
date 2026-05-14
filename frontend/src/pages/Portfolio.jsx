import React from 'react';

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
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
    },
    {
      id: 2,
      title: "Retail Chain Profitability Growth",
      client: "SmartMart Retail",
      industry: "Retail",
      challenge: "Poor inventory management and tax filing delays",
      solution: "Automated payroll, tax compliance, and financial reporting systems",
      result: "Reduced tax penalties by 100%, 25% profit increase",
      image: "https://images.unsplash.com/photo-1556741533-6e6a3bd8e0d6?w=600&q=80"
    },
    {
      id: 3,
      title: "SME Business Registration & Setup",
      client: "GreenAgro Farms",
      industry: "Agriculture",
      challenge: "New business needing full registration and financial structure",
      solution: "Complete business registration, KRA PIN, payroll setup, and accounting",
      result: "Fully compliant from day one, ready for investment",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&q=80"
    },
    {
      id: 4,
      title: "KRA Compliance Recovery",
      client: "Nairobi Hospitality Group",
      industry: "Hospitality",
      challenge: "Accumulated KRA penalties and compliance issues",
      solution: "Audit, penalty negotiation, and automated filing system",
      result: "Cleared all penalties, 100% compliance restored",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=80"
    }
  ];

  return (
    <div className="portfolio-page">
      <section className="page-header">
        <div className="container">
          <h1>Success <span>Stories</span></h1>
          <p>Real results from businesses we've transformed across Kenya</p>
        </div>
      </section>

      <section className="portfolio-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <i className="fas fa-chart-line"></i>
              <h3>500+</h3>
              <p>Businesses Served</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-percent"></i>
              <h3>98%</h3>
              <p>KRA Compliance Rate</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-trophy"></i>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-calendar"></i>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="container">
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
                      <strong>Challenge:</strong>
                      <p>{study.challenge}</p>
                    </div>
                    <div className="detail-item">
                      <strong>Solution:</strong>
                      <p>{study.solution}</p>
                    </div>
                    <div className="detail-item result">
                      <strong>Result:</strong>
                      <p>{study.result}</p>
                    </div>
                  </div>
                  <a href="/contact" className="btn-outline small">Get Similar Results →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Join hundreds of Kenyan businesses that have transformed their finances with M.K GATHU</p>
            <a href="/contact" className="btn-gold">Start Your Journey Today</a>
          </div>
        </div>
      </section>
    </div>
  );
}