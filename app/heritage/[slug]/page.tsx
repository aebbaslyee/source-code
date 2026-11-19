import { notFound } from 'next/navigation';
import { Button } from '../../../components/atoms/Button';
import { HeritageIllustration } from '../../../components/atoms/Image';
import { getHeritageSite, heritageSites } from '../../../data/heritage';

export function generateStaticParams() {
  return heritageSites.map((site) => ({ slug: site.slug }));
}

export default async function HeritageDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const site = getHeritageSite(slug);
  if (!site) notFound();

  return (
    <main id="main-content" className="detail">
      <div className="container">
        <div className="detail-layout">
          <div className="detail-visual"><HeritageIllustration site={site} /></div>
          <article>
            <span className="tag">{site.category}</span>
            <h1>{site.name}</h1>
            <p className="lead">{site.shortDescription}</p>
            <div className="info-list">
              <div className="info-item"><strong>Location</strong>{site.municipality}, Pangasinan</div>
              <div className="info-item"><strong>Why it matters</strong>{site.history}</div>
              <div className="info-item"><strong>Good for</strong>{site.bestFor}</div>
            </div>
            <Button href="/#heritage" variant="ghost">← Back to heritage sites</Button>
          </article>
        </div>
      </div>
    </main>
  );
}
