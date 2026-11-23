import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`global-nav-wrapper ${!isHome ? 'internal-nav' : ''}`}>
      <nav className="global-nav">
        {/* Logo */}
        <div className="nav-col nav-brand-col">
          <Link to="/" className="brand-logo" onClick={closeMobile}>
            Ecléx <span className="brand-serif">Life</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="nav-col nav-links-col">
          <NavLink
            to="/rituals"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Rituals
          </NavLink>
          <NavLink
            to="/roots"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Our Roots
          </NavLink>
          <NavLink
            to="/looks"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Lookbook
          </NavLink>
          <NavLink
            to="/stories"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            Stories
          </NavLink>
        </div>

        {/* Right Actions: Cart & Mobile Toggle */}
        <div className="nav-col nav-actions-col">
          <NavLink
            to="/cart"
            className={({ isActive }) => `cart-pill-btn ${isActive ? 'active' : ''}`}
            aria-label="Shopping Cart"
            onClick={closeMobile}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {totalItems > 0 && <span className="cart-counter">{totalItems}</span>}
          </NavLink>

          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          <div className="mobile-menu-links">
            <NavLink to="/" onClick={closeMobile} className="mobile-link">
              Home <span>01</span>
            </NavLink>
            <NavLink to="/rituals" onClick={closeMobile} className="mobile-link">
              Rituals <span>02</span>
            </NavLink>
            <NavLink to="/roots" onClick={closeMobile} className="mobile-link">
              Our Roots <span>03</span>
            </NavLink>
            <NavLink to="/looks" onClick={closeMobile} className="mobile-link">
              Lookbook <span>04</span>
            </NavLink>
            <NavLink to="/stories" onClick={closeMobile} className="mobile-link">
              Stories <span>05</span>
            </NavLink>
            <NavLink to="/cart" onClick={closeMobile} className="mobile-link">
              Bag ({totalItems}) <span>06</span>
            </NavLink>
          </div>

          <div className="mobile-menu-footer">
            <p className="mobile-manifesto">
              Sculptural Beauty & Botanical Transcendence
            </p>
            <span className="mobile-copyright">© 2026 Ecléx Atelier</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
