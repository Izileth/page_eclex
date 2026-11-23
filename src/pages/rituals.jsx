import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(useGSAP);

const RITUAL_ITEMS = [
  {
    id: 'rit-01',
    name: 'Aurum Radiance Elixir',
    subtitle: '24K Pure Gold • Cold-Pressed Marula • Damask Rose',
    description: 'A transformative alchemy of cellular renewal. Suspended micro-gold particles stimulate microcirculation while bio-identical oils restore skin luminescence.',
    volume: '50ml / 1.7 fl oz',
    price: 340,
    tag: 'Signature Formulation',
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/712a67d6-94df-4ab8-afc3-0f67694a5d8a/Leonardo_Kino_XL_Hyperrealistic_3D_digital_sculpture_of_a_myst_2.jpg'
  },
  {
    id: 'rit-02',
    name: 'Nocturne Sculpting Balm',
    subtitle: 'Midnight Peptides • Rare Jasmine • Blue Tansy',
    description: 'Intense nocturnal architecture for the facial contours. Re-densifies epidermal matrix overnight through chronobiological botanical extracts.',
    volume: '60ml / 2.0 fl oz',
    tag: 'Nocturnal Matrix',
    price: 280,
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/d0093578-d817-4a80-8667-570d2d43f4c4/AlbedoBase_XL_Hyperrealistic_3D_digital_sculpture_of_a_mysteri_1.jpg'
  },
  {
    id: 'rit-03',
    name: 'Celestial Hydration Mist',
    subtitle: 'Glacial Spring Infusion • White Truffle • Niacinamide',
    description: 'An ethereal veil delivering micronized molecular moisture. Harmonizes skin pH and guards against modern electromagnetic stress.',
    volume: '100ml / 3.4 fl oz',
    tag: 'Hydra-Ion Shield',
    price: 190,
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/ac941b2e-2cb3-4ac9-bd22-d0695540b4ef/AlbedoBase_XL_Hyperrealistic_3D_digital_sculpture_of_a_mysteri_2.jpg'
  },
  {
    id: 'rit-04',
    name: 'Obsidian Polishing Nectar',
    subtitle: 'Volcanic Basalt • Bamboo Charcoal • Fermented Enzymes',
    description: 'Micronized volcanic glass particles gently refine stratum corneum without micro-tears, uncovering porcelain translucency.',
    volume: '75ml / 2.5 fl oz',
    tag: 'Exfoliation Protocol',
    price: 220,
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/712a67d6-94df-4ab8-afc3-0f67694a5d8a/Leonardo_Kino_XL_Hyperrealistic_3D_digital_sculpture_of_a_myst_2.jpg'
  }
];

export function Rituals() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Hero entrance
    tl.from('.rituals-hero-tag', {
      opacity: 0,
      y: 20,
      duration: 0.8
    })
    .from('.rituals-hero-title', {
      opacity: 0,
      y: 40,
      duration: 1.2
    }, '-=0.4')
    .from('.rituals-hero-desc', {
      opacity: 0,
      y: 30,
      duration: 1
    }, '-=0.6')
    .from('.rituals-hero-banner', {
      opacity: 0,
      scale: 0.95,
      duration: 1.4,
      ease: 'power2.out'
    }, '-=0.8');

    // Cards entrance
    gsap.from('.ritual-card', {
      opacity: 0,
      y: 60,
      duration: 1.1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.4
    });

    // Steps entrance
    gsap.from('.step-box', {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.8
    });
  }, { scope: containerRef });

  const handleAdd = (item) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <div className="eclex-page-wrapper" ref={containerRef}>
      <Navigation />

      {/* Hero Section */}
      <section className="rituals-hero-section">
        <div className="section-container">
          <div className="rituals-hero-header">
            <span className="rituals-hero-tag luxury-eyebrow">The Sacred Regimen</span>
            <h1 className="rituals-hero-title luxury-title">
              Formulated for <span>The Master</span> Version of Self
            </h1>
            <p className="rituals-hero-desc luxury-desc">
              Transcending conventional skincare through sculptural formulation. Every drop harmonizes biocompatible botanicals with cellular bio-availability.
            </p>
          </div>

          <div className="rituals-hero-banner">
            <img
              src="https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/712a67d6-94df-4ab8-afc3-0f67694a5d8a/Leonardo_Kino_XL_Hyperrealistic_3D_digital_sculpture_of_a_myst_2.jpg"
              alt="Ecléx Ritual Essence"
              className="rituals-banner-img"
            />
            <div className="banner-overlay-caption">
              <span>Haute Botanical Extraction • Limited Harvest</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="rituals-collection-section">
        <div className="section-container">
          <div className="collection-header">
            <div className="collection-header-left">
              <span className="luxury-eyebrow">Atelier Formulations</span>
              <h2 className="collection-section-title">
                The Curated <span>Collection</span>
              </h2>
            </div>
            <p className="collection-header-right">
              Crafted in small-batch runs under sterile cleanroom standards in Grasse, France.
            </p>
          </div>

          <div className="rituals-grid">
            {RITUAL_ITEMS.map((item) => (
              <article key={item.id} className="ritual-card luxury-card">
                <div className="ritual-card-visual">
                  <img src={item.image} alt={item.name} className="ritual-card-img" />
                  <span className="ritual-card-badge">{item.tag}</span>
                </div>

                <div className="ritual-card-body">
                  <div className="ritual-card-meta">
                    <span className="ritual-volume">{item.volume}</span>
                    <span className="ritual-price">${item.price} USD</span>
                  </div>

                  <h3 className="ritual-card-name">{item.name}</h3>
                  <p className="ritual-card-sub">{item.subtitle}</p>
                  <p className="ritual-card-desc">{item.description}</p>

                  <div className="ritual-card-footer">
                    <button
                      className={`luxury-add-btn ${addedId === item.id ? 'added' : ''}`}
                      onClick={() => handleAdd(item)}
                    >
                      {addedId === item.id ? (
                        <>
                          <FontAwesomeIcon icon={faCheck} /> Added to Bag
                        </>
                      ) : (
                        <>
                          Acquire Formulation <FontAwesomeIcon icon={faArrowRight} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The 3-Step Sequence */}
      <section className="rituals-protocol-section">
        <div className="section-container">
          <div className="protocol-intro">
            <span className="luxury-eyebrow">The Triad Sequence</span>
            <h2 className="protocol-title">
              How to <span>Honor</span> the Daily Ceremony
            </h2>
          </div>

          <div className="protocol-steps-grid">
            <div className="step-box">
              <span className="step-num">01</span>
              <h4>Purify & Awaken</h4>
              <p>Prepare the epidermal canvas with warm botanical thermal water to dilate cellular pathways.</p>
            </div>
            <div className="step-box">
              <span className="step-num">02</span>
              <h4>Infuse & Sculpt</h4>
              <p>Apply 3 drops of Aurum Elixir with upward contouring strokes across cheekbones and clavicle.</p>
            </div>
            <div className="step-box">
              <span className="step-num">03</span>
              <h4>Seal & Transcend</h4>
              <p>Lock the active peptides with Nocturne Balm to create a breathable, restorative micro-mesh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Call to Action */}
      <section className="editorial-bridge-section">
        <div className="section-container">
          <div className="bridge-card">
            <span className="luxury-eyebrow">Continue the Exploration</span>
            <h2>Discover the Sculptural Lookbook</h2>
            <p>Immerse in the tactile dialogue between haute couture silhouettes and radiant skin texture.</p>
            <button className="luxury-ghost-btn" onClick={() => navigate('/looks')}>
              Explore Lookbook <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Rituals;
