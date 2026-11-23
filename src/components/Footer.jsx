import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="eclex-footer">
      <div className="footer-inner">
        {/* Top Section */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <h2 className="footer-brand-title">
              Ecléx <span className="brand-italic">Life</span>
            </h2>
            <p className="footer-tagline">
              Transcendent botanical skincare and sculptural aesthetics. Hand-crafted formulations free from compromise, created for the master version of self.
            </p>
            <div className="footer-badge">
              <span>Haute Formulation • Paris & Milan</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-col links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li><Link to="/rituals">The Rituals</Link></li>
              <li><Link to="/roots">Our Roots & Heritage</Link></li>
              <li><Link to="/looks">Lookbook Editions</Link></li>
              <li><Link to="/stories">Stories & Journal</Link></li>
              <li><Link to="/cart">Private Bag</Link></li>
            </ul>
          </div>

          {/* Manifesto / Sanctuary */}
          <div className="footer-col ethics-col">
            <h4 className="footer-heading">Standards</h4>
            <ul className="footer-nav-list">
              <li><span>100% Bio-Compatible Bases</span></li>
              <li><span>Ethically Sourced Gold Flakes</span></li>
              <li><span>Zero Questionable Additives</span></li>
              <li><span>Cruelty-Free Laboratory</span></li>
              <li><span>Carbon-Neutral Packaging</span></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">The Inner Circle</h4>
            <p className="newsletter-desc">
              Receive private invitations to seasonal editions and private formulations.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="newsletter-btn">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider-line"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Ecléx Life Atelier. All Rights Reserved.
          </p>
          <div className="footer-legal">
            <Link to="/roots">Transparency Manifesto</Link>
            <span className="dot-sep">•</span>
            <Link to="/rituals">Artisan Protocol</Link>
            <span className="dot-sep">•</span>
            <span className="curated-by">Curated with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
