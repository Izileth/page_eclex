import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock, faBookOpen, faTimes } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(useGSAP);

const STORIES_ARTICLES = [
  {
    id: 'story-01',
    category: 'Philosophy & Lifestyle',
    readTime: '6 min read',
    date: 'Autumn Equinox Edition',
    title: 'The Art of Slow Luxury in an Accelerated World',
    excerpt: 'Why true refinement requires patient fermentation, uncompromising ingredient sourcing, and the deliberate celebration of ritual silence.',
    content: `In an era defined by instant gratification and algorithmic speed, true luxury has become synonymous with the one resource that cannot be accelerated: time.

At Ecléx, our botanical elixirs spend forty-five days infusing at controlled subterranean temperatures. This allows delicate bio-active flavonoids to bond naturally with organic squalane molecules without heat degradation.

When you apply these formulations, you are not merely engaging in a cosmetic step; you are reconnecting with an unbroken chain of natural cycles, human craftsmanship, and meditative poise.`,
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/ac941b2e-2cb3-4ac9-bd22-d0695540b4ef/AlbedoBase_XL_Hyperrealistic_3D_digital_sculpture_of_a_mysteri_2.jpg'
  },
  {
    id: 'story-02',
    category: 'Botanical Alchemy',
    readTime: '4 min read',
    date: 'Harvest Chronicles',
    title: 'Highland Flora: The Resilient Botanicals of Grasse',
    excerpt: 'How wild plants subjected to extreme alpine diurnal temperature shifts develop extraordinary antioxidant self-defense mechanisms.',
    content: `High altitude botanicals possess an innate cellular fortitude. Exposed to harsh winds and intense ultraviolet radiation during daylight, followed by sub-zero nocturnal frosts, these specimens generate high concentrations of polyphenol defenses.

Our botanists harvest at dawn when dew points preserve maximum terpene volatility. The extracted nectar yields an unprecedented protective shield against oxidative pollution.`,
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/712a67d6-94df-4ab8-afc3-0f67694a5d8a/Leonardo_Kino_XL_Hyperrealistic_3D_digital_sculpture_of_a_myst_2.jpg'
  },
  {
    id: 'story-03',
    category: 'Architecture & Design',
    readTime: '5 min read',
    date: 'Aesthetic Dialogue',
    title: 'Designing Silence: Sculptural Flacons as Living Objects',
    excerpt: 'Every vessel we cast is weighted, balanced, and finished to provide tactile grounding upon your dressing table.',
    content: `The objects we touch every morning shape our subconscious architecture. Our flacons are cast from heavy black glass that shields light-sensitive nutrients, contoured to fit the natural curve of the palm.

By elevating utilitarian skincare packaging into monolithic sculpture, we transform daily habits into intentional ceremonies of calm.`,
    image: 'https://cdn.leonardo.ai/users/c60a0145-a4a8-4ee5-91cf-76495889e8b2/generations/d0093578-d817-4a80-8667-570d2d43f4c4/AlbedoBase_XL_Hyperrealistic_3D_digital_sculpture_of_a_mysteri_1.jpg'
  }
];

export function Stories() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [activeStory, setActiveStory] = useState(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.stories-hero-tag', {
      opacity: 0,
      y: 20,
      duration: 0.8
    })
    .from('.stories-hero-title', {
      opacity: 0,
      y: 40,
      duration: 1.2
    }, '-=0.4')
    .from('.stories-hero-desc', {
      opacity: 0,
      y: 30,
      duration: 1
    }, '-=0.6');

    gsap.from('.story-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.3
    });
  }, { scope: containerRef });

  return (
    <div className="eclex-page-wrapper" ref={containerRef}>
      <Navigation />

      {/* Hero Section */}
      <section className="stories-hero-section">
        <div className="section-container">
          <div className="stories-hero-header">
            <span className="stories-hero-tag luxury-eyebrow">The Ecléx Gazette</span>
            <h1 className="stories-hero-title luxury-title">
              Stories of <span>Alchemy</span>, Art & Living Well
            </h1>
            <p className="stories-hero-desc luxury-desc">
              Reflections from our laboratories, botanical expeditions, and design studios. An intimate window into the philosophy of mindful elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="stories-feed-section">
        <div className="section-container">
          <div className="stories-grid">
            {STORIES_ARTICLES.map((article) => (
              <article key={article.id} className="story-card luxury-card">
                <div className="story-image-wrap">
                  <img src={article.image} alt={article.title} className="story-thumb-img" />
                  <span className="story-cat-badge">{article.category}</span>
                </div>

                <div className="story-content-wrap">
                  <div className="story-meta-line">
                    <span>{article.date}</span>
                    <span className="dot">•</span>
                    <span><FontAwesomeIcon icon={faClock} /> {article.readTime}</span>
                  </div>

                  <h3 className="story-title">{article.title}</h3>
                  <p className="story-excerpt">{article.excerpt}</p>

                  <button
                    className="story-read-btn"
                    onClick={() => setActiveStory(article)}
                  >
                    Read Essay <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Reader */}
      {activeStory && (
        <div className="story-modal-backdrop" onClick={() => setActiveStory(null)}>
          <div className="story-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveStory(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <span className="luxury-eyebrow">{activeStory.category}</span>
            <h2 className="modal-story-title">{activeStory.title}</h2>
            <div className="modal-story-meta">
              <span>{activeStory.date}</span> • <span>{activeStory.readTime}</span>
            </div>

            <div className="modal-story-img-frame">
              <img src={activeStory.image} alt={activeStory.title} />
            </div>

            <div className="modal-story-body">
              {activeStory.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="modal-story-footer">
              <button
                className="luxury-ghost-btn"
                onClick={() => {
                  setActiveStory(null);
                  navigate('/rituals');
                }}
              >
                Experience the Formulations <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bridge to Rituals */}
      <section className="editorial-bridge-section">
        <div className="section-container">
          <div className="bridge-card">
            <span className="luxury-eyebrow">Ready to Experience</span>
            <h2>Transform Philosophy Into Daily Regimen</h2>
            <p>Acquire the sacred formulations described in our journal chronicles.</p>
            <button className="luxury-ghost-btn" onClick={() => navigate('/rituals')}>
              Explore Sacred Rituals <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Stories;
