import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowRight, faShieldAlt, faGift, faCheck } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(useGSAP);

export function Cart() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.cart-header-title', {
      opacity: 0,
      y: 30,
      duration: 1
    })
    .from('.cart-items-col', {
      opacity: 0,
      y: 40,
      duration: 1
    }, '-=0.5')
    .from('.cart-summary-col', {
      opacity: 0,
      y: 40,
      duration: 1
    }, '-=0.7');
  }, { scope: containerRef });

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ECLEX20') {
      setDiscount(0.2);
    } else {
      alert('Code not recognized. Try "ECLEX20" for 20% privilege deduction.');
    }
  };

  const finalTotal = Math.max(0, subtotal * (1 - discount));

  const handleCheckout = () => {
    setCheckoutComplete(true);
    clearCart();
  };

  return (
    <div className="eclex-page-wrapper" ref={containerRef}>
      <Navigation />

      <section className="cart-page-section">
        <div className="section-container">
          <div className="cart-header">
            <span className="luxury-eyebrow">Personal Sanctuary</span>
            <h1 className="cart-header-title luxury-title">
              Your <span>Private Bag</span>
            </h1>
            <p className="cart-header-sub luxury-desc">
              Carefully curated formulations prepared for white-glove dispatch from our atelier.
            </p>
          </div>

          {checkoutComplete ? (
            <div className="checkout-success-card">
              <div className="success-icon-wrap">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <h2>Acquisition Confirmed</h2>
              <p>
                Your order has been received by our laboratory artisans. A private courier dispatch notification will be transmitted to your email shortly.
              </p>
              <button className="luxury-ghost-btn" onClick={() => navigate('/rituals')}>
                Return to Collections <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-state-symbol">✦</div>
              <h2>Your Bag is Currently Silent</h2>
              <p>
                You have not yet invited any sculptural formulations into your daily ceremony.
              </p>
              <button className="luxury-ghost-btn" onClick={() => navigate('/rituals')}>
                Explore Sacred Rituals <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          ) : (
            <div className="cart-layout-grid">
              {/* Items Column */}
              <div className="cart-items-col">
                <div className="cart-items-list">
                  {cart.map((item) => (
                    <article key={item.id} className="cart-item-row luxury-card">
                      <div className="cart-item-thumb">
                        <img src={item.image} alt={item.name} />
                      </div>

                      <div className="cart-item-info">
                        <div className="cart-item-header">
                          <h3 className="cart-item-name">{item.name}</h3>
                          <span className="cart-item-price">
                            ${item.price * item.quantity} USD
                          </span>
                        </div>
                        <p className="cart-item-sub">{item.subtitle}</p>

                        <div className="cart-item-actions">
                          <div className="quantity-pill">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="qty-val">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <button
                            className="remove-item-btn"
                            onClick={() => removeFromCart(item.id)}
                            title="Remove from bag"
                          >
                            <FontAwesomeIcon icon={faTrash} /> Remove
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="cart-assurances">
                  <div className="assurance-item">
                    <FontAwesomeIcon icon={faGift} />
                    <div>
                      <strong>Complimentary Silk Presentation</strong>
                      <p>Every bottle is nested in Italian recycled cardstock with sealed silk ribbon.</p>
                    </div>
                  </div>
                  <div className="assurance-item">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <div>
                      <strong>Cellular Potency Guarantee</strong>
                      <p>Small-batch formulation guarantees maximum enzyme and lipid freshness.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary Column */}
              <div className="cart-summary-col">
                <div className="cart-summary-card luxury-card">
                  <h3 className="summary-title">Acquisition Summary</h3>

                  <div className="summary-lines">
                    <div className="summary-line">
                      <span>Formulation Subtotal</span>
                      <span>${subtotal.toFixed(2)} USD</span>
                    </div>

                    {discount > 0 && (
                      <div className="summary-line discount-line">
                        <span>Privilege Deduction (20%)</span>
                        <span>−${(subtotal * discount).toFixed(2)} USD</span>
                      </div>
                    )}

                    <div className="summary-line">
                      <span>Artisan Packaging</span>
                      <span className="tag-free">Complimentary</span>
                    </div>

                    <div className="summary-line">
                      <span>White-Glove Insured Delivery</span>
                      <span className="tag-free">Complimentary</span>
                    </div>

                    <div className="summary-divider"></div>

                    <div className="summary-line total-line">
                      <span>Total Acquisition</span>
                      <span className="total-val">${finalTotal.toFixed(2)} USD</span>
                    </div>
                  </div>

                  {/* Promo Form */}
                  <form className="promo-form" onSubmit={applyPromo}>
                    <input
                      type="text"
                      placeholder="Privilege Code (try ECLEX20)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="promo-input"
                    />
                    <button type="submit" className="promo-btn">
                      Apply
                    </button>
                  </form>

                  <button className="luxury-checkout-btn" onClick={handleCheckout}>
                    Complete Acquisition <FontAwesomeIcon icon={faArrowRight} />
                  </button>

                  <p className="checkout-note">
                    Encrypted 256-Bit SSL Atelier Transaction. Discreet carbon-neutral courier dispatch.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Cart;
