import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const divisionsData = {
    'financial-advisory': {
      title: 'Financial Advisory',
      icon: 'fas fa-chart-pie',
      tagline: 'Clarity for your money, structure for your future.',
      description: 'We help individuals and business owners understand, structure, and grow their finances from personal wealth planning to full CFO-level oversight.',
      fullDescription: `Financial Advisory at M.K. Gathu Consultancy is about giving you clarity over your money and structure for your future. We work with individuals and business owners to understand, organize, and grow their finances from personal wealth planning to full CFO-level oversight for companies that need financial leadership without the full-time cost.

Our approach combines deep local expertise with international best practices. Whether you're an individual looking to structure your personal wealth, a business owner seeking fractional CFO services, or a company needing cash flow management and financial modeling, we deliver practical, actionable advice that makes a real difference.`,
      features: [
        'Personal Finance Advisory — tailored wealth planning',
        'Wealth Structuring — optimize your financial position',
        'Investment Advisory — informed capital allocation',
        'Virtual & Fractional CFO Services — leadership without full-time cost',
        'Cash Flow Management — real-time visibility and control',
        'Debt Tracking & Recovery — systematic receivables management',
        'Financial Modeling — data-driven projections and scenarios',
        'AI & Automation in Finance — modern tools for efficiency'
      ],
      benefits: [
        'Clear financial picture and direction',
        'Reduced financial stress and uncertainty',
        'Optimized wealth and investment strategy',
        'Professional financial leadership',
        'Data-driven financial decisions'
      ],
      process: [
        'Initial consultation to understand your financial situation',
        'Comprehensive financial assessment',
        'Strategic plan development',
        'Implementation and execution',
        'Regular review and adjustment',
        'Ongoing advisory support'
      ],
      faqs: [
        { q: 'Do you offer fractional CFO services for small businesses?', a: 'Yes, we provide virtual and fractional CFO services for businesses that need financial leadership without the cost of a full-time hire.' },
        { q: 'What does personal finance advisory cover?', a: 'We help with wealth structuring, investment advisory, retirement planning, and overall financial strategy.' }
      ]
    },
    'business-advisory': {
      title: 'Business Advisory',
      icon: 'fas fa-handshake',
      tagline: 'Strategy that turns growth into results.',
      description: 'For SMEs and scaling businesses, we provide the strategic thinking usually reserved for large corporates.',
      fullDescription: `Business Advisory at M.K. Gathu Consultancy delivers the strategic thinking usually reserved for large corporates now accessible to SMEs and scaling businesses. We help you grow with a plan, not by guesswork.

Our advisory services cover market entry planning, pricing strategy, operational optimization, and expansion planning. We work alongside your team to identify opportunities, overcome challenges, and build a roadmap for sustainable growth.`,
      features: [
        'Business Strategy Consulting — growth-focused planning',
        'Process Optimization — operational efficiency',
        'Market Entry Advisory — East African expansion',
        'Feasibility Studies — data-driven decisions',
        'Pricing Strategy — maximize margins',
        'Expansion Planning — scale with confidence'
      ],
      benefits: [
        'Strategic clarity and direction',
        'Accelerated business growth',
        'Improved operational efficiency',
        'Competitive advantage',
        'Data-driven decision making'
      ],
      process: [
        'Strategic discovery session',
        'Business health assessment',
        'Strategy development and roadmap',
        'Implementation support',
        'Performance monitoring',
        'Strategy refinement'
      ],
      faqs: [
        { q: 'Do you work with businesses outside Kenya?', a: 'Yes, we work with businesses across East Africa and internationally on market entry and expansion strategies.' }
      ]
    },
    'accounting-compliance': {
      title: 'Accounting & Compliance',
      icon: 'fas fa-file-invoice',
      tagline: 'The foundation every business is built on.',
      description: 'Accurate books, timely filings, and audit-ready records delivered by a credentialed team.',
      fullDescription: `Accounting & Compliance at M.K. Gathu Consultancy is the foundation every business is built on. We deliver accurate books, timely filings, and audit-ready records all delivered by a credentialed team aligned with ICPAK standards.

From business registration and KRA compliance to bookkeeping, payroll, and tax filing, we handle the financial infrastructure so you can focus on running your business. Our team ensures you stay compliant with Kenyan regulations while maintaining clean, organized financial records.`,
      features: [
        'Business Registration — company incorporation',
        'KRA PIN & VAT Setup — compliance from day one',
        'Business Bank Account Setup — financial infrastructure',
        'Bookkeeping & M-Pesa Reconciliation — accurate records',
        'ERP Systems Implementation — Zoho Books & integrations',
        'Payroll — PAYE, NSSF, NHIF management',
        'VAT, Income, Rental & Withholding Tax Filing',
        'Excise, Turnover & Capital Gains Tax',
        'Audit Preparation — ready when you need it',
        'Internal Controls — protect your business',
        'Profit & Loss / Performance Reporting'
      ],
      benefits: [
        '100% KRA compliance',
        'Audit-ready financial records',
        'Peace of mind with professional oversight',
        'Timely filings and no penalties',
        'Clear financial visibility'
      ],
      process: [
        'Initial financial assessment',
        'Accounting system setup',
        'Monthly bookkeeping and reconciliation',
        'Timely tax filing and remittance',
        'Regular financial reporting',
        'Year-end audit preparation'
      ],
      faqs: [
        { q: 'What is included in bookkeeping services?', a: 'We handle daily transaction recording, bank reconciliation, M-Pesa reconciliation, expense tracking, and monthly financial reports.' },
        { q: 'Do you handle KRA audits?', a: 'Yes, we provide full support during KRA audits, including document preparation and representation.' }
      ]
    },
    'investment-intelligence': {
      title: 'Investment Intelligence',
      icon: 'fas fa-chart-line',
      tagline: 'Informed capital. Deliberate decisions.',
      description: 'Institutional-grade research and analysis for individual and business investors.',
      fullDescription: `Investment Intelligence at M.K. Gathu Consultancy brings institutional-grade research and analysis to individual and business investors. We provide portfolio construction, equity research, and real estate investment analysis grounded in Kenyan and global market realities.

Our research is informed by Nairobi Securities Exchange (NSE) and Capital Markets Authority (CMA) Kenya market frameworks, ensuring you have the insights you need to make informed capital allocation decisions.`,
      features: [
        'Portfolio Construction — diversified investment strategy',
        'Equity Research — NSE and global markets',
        'Market Analysis — trends and opportunities',
        'Treasury Advisory — optimize cash and investments',
        'Real Estate Investment Analysis — property evaluation',
        'Capital Allocation Strategy — deploy capital effectively'
      ],
      benefits: [
        'Informed investment decisions',
        'Diversified portfolio strategy',
        'Professional research and analysis',
        'Market insights and trends',
        'Optimized capital allocation'
      ],
      process: [
        'Investment goals and risk assessment',
        'Market research and analysis',
        'Portfolio strategy development',
        'Implementation and execution',
        'Regular portfolio review',
        'Performance optimization'
      ],
      faqs: [
        { q: 'Do you provide investment advice for beginners?', a: 'Yes, we work with investors at all levels, from beginners to experienced investors looking for sophisticated analysis.' },
        { q: 'What markets do you cover?', a: 'We cover Kenyan markets (NSE, real estate) and provide research on global markets as well.' }
      ]
    },
    'digital-economy': {
      title: 'Digital Economy Advisory',
      icon: 'fas fa-globe',
      tagline: 'Built for the new way people earn.',
      description: 'Freelancers, remote workers, creators, and traders built specifically for the modern earner.',
      fullDescription: `Digital Economy Advisory at M.K. Gathu Consultancy is built for the new way people earn. Freelancers, remote workers, creators, and traders operate outside traditional financial systems we built this division specifically for them.

We cover cross-border tax, digital asset research, and income structuring for the modern earner. Our services include US tax preparation (Form 1040, W-2, 1099-NEC), W-8BEN setup, ITIN application assistance, and international income structuring for freelancers and remote professionals.`,
      features: [
        'Freelancer Advisory — tailored financial guidance',
        'Remote Worker Tax Strategy — cross-border planning',
        'US Tax Preparation — Form 1040, W-2 & 1099-NEC Filing',
        'W-8BEN Setup for US Client Payments',
        'ITIN Application Assistance',
        'Foreign Earned Income Exclusion (Form 2555)',
        'Self-Employment Tax & Schedule C Filing',
        'International Payroll & Worker Classification (W-2 vs 1099)',
        'Creator Economy Advisory — content creators',
        'FX Trader Risk Management',
        'Crypto / Digital Asset Research',
        'International Income Structuring'
      ],
      benefits: [
        'Expert tax guidance for remote professionals',
        'US tax compliance and filing',
        'Cross-border income optimization',
        'Professional representation for tax matters',
        'Peace of mind with international earnings'
      ],
      process: [
        'Initial consultation on income sources',
        'Tax and income assessment',
        'Strategy development for optimization',
        'Tax preparation and filing',
        'Ongoing advisory and planning',
        'Year-end tax strategy review'
      ],
      faqs: [
        { q: 'Do you file US taxes for Kenyan residents?', a: 'Yes, we provide US tax preparation services for Kenyan residents with US-sourced income, including freelance and remote work.' },
        { q: 'What is a W-8BEN and do I need one?', a: 'A W-8BEN is a US tax form for foreign individuals to claim tax treaty benefits and avoid US withholding tax on payments.' }
      ]
    },
    'corporate-training': {
      title: 'Corporate Training',
      icon: 'fas fa-graduation-cap',
      tagline: 'Building financial fluency, one team at a time.',
      description: 'Practical financial skills that drive better decisions from Excel to financial modeling.',
      fullDescription: `Corporate Training at M.K. Gathu Consultancy builds financial fluency, one team at a time. We train teams and individuals in the practical financial skills that drive better decisions Excel, financial modeling, tax literacy, and finance fundamentals for managers who aren't finance professionals.

Our M.K. Gathu Academy delivers hands-on training that transforms how teams understand and work with financial data. From basic Excel skills to advanced financial modeling, we equip your team with the tools they need to make better business decisions.`,
      features: [
        'Excel Training — from basics to advanced',
        'Financial Modeling — build and analyze models',
        'Tax Education — understand tax obligations',
        'Corporate Finance Training — financial decision-making',
        'Business Analytics Training — data-driven insights',
        'Finance for Non-Finance Managers — practical fundamentals'
      ],
      benefits: [
        'Improved financial literacy across teams',
        'Better data-driven decision making',
        'Reduced dependence on external finance teams',
        'Practical, hands-on skills',
        'Immediate application to business challenges'
      ],
      process: [
        'Training needs assessment',
        'Custom curriculum development',
        'Interactive training delivery',
        'Practical exercises and case studies',
        'Post-training support and resources',
        'Follow-up and skill reinforcement'
      ],
      faqs: [
        { q: 'Do you offer custom training programs?', a: 'Yes, we tailor all training programs to your organization\'s specific needs and industry context.' },
        { q: 'How long are the training sessions?', a: 'Sessions typically range from half-day workshops to multi-day intensive programs, depending on your needs.' }
      ]
    }
  };

  const division = divisionsData[id];

  if (!division) {
    return (
      <>
        <SEO 
          title="Division Not Found"
          description="The division you're looking for does not exist. Please check our divisions page for available services."
          path={`/service/${id}`}
          noIndex={true}
        />
        <div className="service-not-found">
          <div className="container">
            <h1>Division Not Found</h1>
            <p>Sorry, the division you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/services')} className="btn-gold">
              Back to Divisions
            </button>
          </div>
        </div>
      </>
    );
  }

  // Divisions with icons for related section (excluding current)
  const relatedDivisions = Object.keys(divisionsData)
    .filter(key => key !== id)
    .slice(0, 3)
    .map(key => ({
      ...divisionsData[key],
      id: key
    }));

  return (
    <>
      <SEO 
        title={`${division.title} — M.K. Gathu Consultancy`}
        description={division.description}
        path={`/service/${id}`}
      />
      
      <div className="service-detail-page">
        <section className="service-hero">
          <div className="container">
            <div className="service-hero-content">
              <div className="hero-icon-wrapper">
                <i className={division.icon}></i>
              </div>
              <span className="service-tagline">{division.tagline}</span>
              <h1>{division.title}</h1>
              <p>{division.description}</p>
              <div className="service-hero-buttons">
                <Link to="/contact" className="btn-gold">
                  <i className="fas fa-calendar-check"></i> Book a Consultation
                </Link>
                <button onClick={() => navigate('/services')} className="btn-outline">
                  <i className="fas fa-arrow-left"></i> All Divisions
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="service-full-description">
          <div className="container">
            <div className="description-content">
              <h2>Division Overview</h2>
              <p>{division.fullDescription}</p>
              <div className="division-credentials">
                <span><i className="fas fa-check-circle"></i> ICPAK Aligned</span>
                <span><i className="fas fa-check-circle"></i> US Tax Preparer Credentialed</span>
                <span><i className="fas fa-check-circle"></i> Serving Kenya & Worldwide</span>
              </div>
            </div>
          </div>
        </section>

        <section className="service-features">
          <div className="container">
            <div className="features-grid">
              <div className="features-list">
                <h2><i className="fas fa-check-circle"></i> What We Offer</h2>
                <ul>
                  {division.features.map((feature, index) => (
                    <li key={index}><i className="fas fa-check"></i> {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="benefits-list">
                <h2><i className="fas fa-gem"></i> Key Benefits</h2>
                <ul>
                  {division.benefits.map((benefit, index) => (
                    <li key={index}><i className="fas fa-star"></i> {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-process">
          <div className="container">
            <h2>Our Process</h2>
            <div className="process-steps">
              {division.process.map((step, index) => (
                <div className="process-step" key={index}>
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {division.faqs && (
          <section className="service-faqs">
            <div className="container">
              <h2>Frequently Asked Questions</h2>
              <div className="faqs-grid">
                {division.faqs.map((faq, index) => (
                  <div className="faq-item" key={index}>
                    <h3><i className="fas fa-question-circle"></i> {faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Divisions Section with Icons */}
        <section className="related-services">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Related <span>Divisions</span></h2>
              <p className="section-subtitle">You might also be interested in these divisions</p>
            </div>
            <div className="related-services-grid">
              {relatedDivisions.map(div => (
                <div 
                  className="related-card" 
                  key={div.id} 
                  onClick={() => navigate(`/service/${div.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') navigate(`/service/${div.id}`);
                  }}
                >
                  <div className="related-icon-wrapper">
                    <i className={div.icon}></i>
                  </div>
                  <h4>{div.title}</h4>
                  <p>{div.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="container">
            <div className="cta-box">
              <h2>Ready to Get Started with {division.title}?</h2>
              <p>Tell us what you're working on a filing deadline, an expansion decision, or a portfolio question and we'll route it to the right people.</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-gold">
                  <i className="fas fa-calendar-check"></i> Book a Consultation
                </Link>
                <a href={`mailto:gathukamau23@gmail.com?subject=Inquiry about ${division.title}`} className="btn-outline">
                  <i className="fas fa-envelope"></i> Email Us
                </a>
                <a href="https://wa.me/254762610912" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}