import { Button } from '../components/atoms/Button';
import { Eyebrow } from '../components/atoms/Typography';
import { HeritageIllustration } from '../components/atoms/Image';
import { HeritageGrid } from '../components/organisms/HeritageGrid';
import { heritageSites } from '../data/heritage';

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <Eyebrow>Digital cultural awareness initiative</Eyebrow>
            <h1>Discover Pangasinan, one story at a time.</h1>
            <p>Explore selected natural and built heritage sites through a lightweight, mobile-first showcase designed for users on 3G/4G connections.</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 26 }}>
              <Button href="#heritage">Explore heritage <span aria-hidden="true">↓</span></Button>
              <Button href="#about" variant="ghost">Project approach</Button>
            </div>
          </div>
          <div className="hero-art"><HeritageIllustration site={heritageSites[0]} /></div>
        </div>
      </section>

      <section className="section" id="heritage">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>Featured places</Eyebrow><h2>Heritage sites</h2></div>
            <p>Search by landmark, municipality, or heritage category. Cards remain readable and touch-friendly on small screens.</p>
          </div>
          <HeritageGrid sites={heritageSites} />
        </div>
      </section>

      <section className="section alt" id="about">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>Design goals</Eyebrow><h2>Built for resilient access</h2></div>
          </div>
          <div className="heritage-grid">
            <article className="card"><div className="card-body"><span className="tag">Lightning fast</span><h3>Lean by default</h3><p>Static-first pages, local assets, minimal client-side JavaScript, and no heavy UI framework.</p></div></article>
            <article className="card"><div className="card-body"><span className="tag">Accessible</span><h3>WCAG-minded</h3><p>Semantic landmarks, visible focus states, skip navigation, descriptive labels, and reduced-motion support.</p></div></article>
            <article className="card"><div className="card-body"><span className="tag">Maintainable</span><h3>Atomic structure</h3><p>Atoms, molecules, and organisms keep visual rules reusable across future tourism pages.</p></div></article>
          </div>
        </div>
      </section>
    </main>
  );
}
