import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faShieldAlt, faLeaf, faEye, faGem } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(useGSAP);

const PILLARS = [
  {
    icon: faEye,
    title: 'Absolute Transparency',
    desc: 'No black boxes, no undisclosed "proprietary complexes". We publish the exact botanical origin and clinical percentage of every active element.'
  },
  {
    icon: faLeaf,
    title: 'Bio-Compatible Matrix',
    desc: 'Formulations engineered with cellular lipid replicas. Your stratum corneum absorbs nutrients deep into the tissue rather than leaving oily occlusive films.'
  },
  {
    icon: faShieldAlt,
    title: 'The Exclusion Protocol',
    desc: 'Free from over 1,800 suspect chemicals: zero synthetic polymers, zero parabens, zero phthalates, and zero animal testing across all supply tiers.'
  },
  {
    icon: faGem,
    title: 'Artisan Precision',
    desc: 'Produced in ultra-limited batches in Grasse and Milan, respecting natural harvest cycles and maintaining bio-energetic enzyme potency.'
  }
];

export function OurRoots() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.roots-hero-tag', {
      opacity: 0,
      y: 20,
      duration: 0.8
    })
    .from('.roots-hero-title', {
      opacity: 0,
      y: 40,
      duration: 1.2
    }, '-=0.4')
    .from('.roots-hero-desc', {
      opacity: 0,
      y: 30,
      duration: 1
    }, '-=0.6');

    gsap.from('.pillar-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.3
    });

    gsap.from('.roots-manifesto-box', {
      opacity: 0,
      scale: 0.96,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.6
    });
  }, { scope: containerRef });

  return (
    <div className="eclex-page-wrapper" ref={containerRef}>
      <Navigation />

      {/* Hero Section */}
      <section className="roots-hero-section">
        <div className="section-container">
          <div className="roots-hero-header">
            <span className="roots-hero-tag luxury-eyebrow">The Ecléx Heritage</span>
            <h1 className="roots-hero-title luxury-title">
              Radical <span>Transparency</span> & Pure Alchemy
            </h1>
            <p className="roots-hero-desc luxury-desc">
              Born from a refusal to compromise between clinical performance and clean formulation. We believe knowing what touches your skin is the highest form of self-respect.
            </p>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="roots-pillars-section">
        <div className="section-container">
          <div className="collection-header">
            <div className="collection-header-left">
              <span className="luxury-eyebrow">Foundational Principles</span>
              <h2 className="collection-section-title">
                The Four <span>Pillars</span>
              </h2>
            </div>
            <p className="collection-header-right">
              Every formula that bears the Ecléx signature answers to our uncompromising laboratory charter.
            </p>
          </div>

          <div className="pillars-grid">
            {PILLARS.map((pillar, i) => (
              <div key={i} className="pillar-card luxury-card">
                <div className="pillar-icon-box">
                  <FontAwesomeIcon icon={pillar.icon} />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Manifesto Block */}
      <section className="roots-manifesto-section">
        <div className="section-container">
          <div className="roots-manifesto-box">
            <div className="manifesto-grid">
              <div className="manifesto-text-col">
                <span className="luxury-eyebrow">The Formulator's Pledge</span>
                <h2 className="manifesto-title">
                  "We believe <span>honesty is the most</span> precious ingredient."
                </h2>
                <p className="manifesto-body">
                  When we established Ecléx, the skincare industry was crowded with synthetic fillers and exaggerated marketing claims disguised behind frosted jars.
                </p>
                <p className="manifesto-body">
                  We chose the austere, disciplined path: biocompatible lipids, authentic botanical extracts, 24k gold leaf and cold-pressed infusions formulated without secrecy. Every batch is certified, tested by dermatologists, and created in limited seasonal runs.
                </p>
                <div className="manifesto-signature">
                  <span className="sign-name">Kawã Correia & Juan Santos</span>
                  <span className="sign-role">Founders & Creative Alchemists</span>
                </div>
              </div>

              <div className="manifesto-image-col">
                <img
                  src="https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/d0093578-d817-4a80-8667-570d2d43f4c4/AlbedoBase_XL_Hyperrealistic_3D_digital_sculpture_of_a_mysteri_1.jpg"
                  alt="Ecléx Sculpture"
                  className="manifesto-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge to Stories */}
      <section className="editorial-bridge-section">
        <div className="section-container">
          <div className="bridge-card">
            <span className="luxury-eyebrow">The Atelier Journal</span>
            <h2>Chronicles of Botanical Exploration</h2>
            <p>Read detailed narratives about our ingredient harvests, artisan interviews, and seasonal reflections.</p>
            <button className="luxury-ghost-btn" onClick={() => navigate('/stories')}>
              Read Stories <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OurRoots;
