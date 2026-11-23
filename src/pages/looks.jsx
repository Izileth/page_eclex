import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(useGSAP);

const LOOKS_DATA = [
  {
    id: 'look-01',
    edition: 'Edition 01 • Haute Silhouette',
    title: 'The Golden Duality',
    subtitle: 'Liquid Gold & Anatomical Serenity',
    description: 'An exploration of fluid metallurgy wrapping the human posture. Radiant skin illuminated by Aurum Radiance Elixir interacts with reflective metallic drape.',
    photographer: 'Atelier Ecléx Paris',
    season: 'Autumn / Winter Couture',
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/ac941b2e-2cb3-4ac9-bd22-d0695540b4ef/AlbedoBase_XL_Hyperrealistic_3D_digital_sculpture_of_a_mysteri_2.jpg'
  },
  {
    id: 'look-02',
    edition: 'Edition 02 • Sculptural Form',
    title: 'Draped Obsidian',
    subtitle: 'Architectural Shadows & Porcelain Radiance',
    description: 'Minimalist monolithic lines cut from mineral-black velvet. The skin remains clean, untouched by heavy pigments, glowing purely from deep cellular hydration.',
    photographer: 'Studio Milano',
    season: 'Permanent Collection',
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/d0093578-d817-4a80-8667-570d2d43f4c4/AlbedoBase_XL_Hyperrealistic_3D_digital_sculpture_of_a_mysteri_1.jpg'
  },
  {
    id: 'look-03',
    edition: 'Edition 03 • Sacred Glow',
    title: 'The Ethereal Armor',
    subtitle: 'Sculptured Gilded Collar & Bare Decolletage',
    description: 'Jewelry as architecture. 24k polished brass collar framing bare, glass-like skin treated with Celestial Hydration Mist and cold-pressed botanical oils.',
    photographer: 'Vogue Archive Collaboration',
    season: 'Spring / Equinox Edition',
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/712a67d6-94df-4ab8-afc3-0f67694a5d8a/Leonardo_Kino_XL_Hyperrealistic_3D_digital_sculpture_of_a_myst_2.jpg'
  }
];

export function LookBooks() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.looks-hero-eyebrow', {
      opacity: 0,
      y: 20,
      duration: 0.8
    })
    .from('.looks-hero-title', {
      opacity: 0,
      y: 40,
      duration: 1.2
    }, '-=0.4')
    .from('.looks-hero-desc', {
      opacity: 0,
      y: 30,
      duration: 1
    }, '-=0.6');

    gsap.from('.look-editorial-row', {
      opacity: 0,
      y: 80,
      duration: 1.2,
      stagger: 0.25,
      ease: 'power3.out',
      delay: 0.3
    });
  }, { scope: containerRef });

  return (
    <div className="eclex-page-wrapper" ref={containerRef}>
      <Navigation />

      {/* Hero Section */}
      <section className="looks-hero-section">
        <div className="section-container">
          <div className="looks-hero-header">
            <span className="looks-hero-eyebrow luxury-eyebrow">The Atelier Lookbook</span>
            <h1 className="looks-hero-title luxury-title">
              Sculptural Form <span>Meets Radiant</span> Canvas
            </h1>
            <p className="looks-hero-desc luxury-desc">
              A curated photographic dialogue between haute couture drapery and pure botanical skin radiance. Where luxury becomes an architectural extension of the wearer.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Looks List */}
      <section className="looks-gallery-section">
        <div className="section-container">
          <div className="looks-editorial-list">
            {LOOKS_DATA.map((look, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={look.id}
                  className={`look-editorial-row ${isEven ? 'row-reversed' : ''}`}
                >
                  <div className="look-visual-col">
                    <div className="look-image-frame">
                      <img src={look.image} alt={look.title} className="look-main-img" />
                      <div className="look-badge-corner">
                        <span>{look.edition}</span>
                      </div>
                    </div>
                  </div>

                  <div className="look-content-col">
                    <span className="look-season-tag">{look.season}</span>
                    <h2 className="look-title">
                      {look.title.split(' ')[0]}{' '}
                      <span>{look.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <h4 className="look-subtitle">{look.subtitle}</h4>
                    <p className="look-desc">{look.description}</p>

                    <div className="look-meta-grid">
                      <div className="meta-item">
                        <span className="meta-label">Curation</span>
                        <span className="meta-val">{look.photographer}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Key Preparation</span>
                        <span className="meta-val">Aurum Elixir Infusion</span>
                      </div>
                    </div>

                    <button
                      className="luxury-link-btn"
                      onClick={() => navigate('/rituals')}
                    >
                      View Complementary Ritual <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manifesto Quote */}
      <section className="looks-quote-section">
        <div className="section-container">
          <div className="looks-quote-box">
            <p className="quote-text">
              "True luxury is not an ornament; it is the absolute harmony between the form you wear and the skin you inhabit."
            </p>
            <span className="quote-author">— Ecléx Creative Direction, Paris</span>
          </div>
        </div>
      </section>

      {/* Bridge to Roots */}
      <section className="editorial-bridge-section">
        <div className="section-container">
          <div className="bridge-card">
            <span className="luxury-eyebrow">The Philosophy</span>
            <h2>Radical Transparency in Every Origin</h2>
            <p>Understand the strict laboratory purity and ethical sourcing behind our formulations.</p>
            <button className="luxury-ghost-btn" onClick={() => navigate('/roots')}>
              Explore Our Roots <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LookBooks;
