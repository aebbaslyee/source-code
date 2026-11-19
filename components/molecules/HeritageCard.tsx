import type { HeritageSite } from '../../data/heritage';
import { Button } from '../atoms/Button';
import { HeritageIllustration } from '../atoms/Image';

export function HeritageCard({ site }: { site: HeritageSite }) {
  return (
    <article className="card">
      <div className="card-media"><HeritageIllustration site={site} compact /></div>
      <div className="card-body">
        <span className="tag">{site.category}</span>
        <h3>{site.name}</h3>
        <p>{site.shortDescription}</p>
        <div className="card-meta">
          <small>{site.municipality}</small>
          <Button href={`/heritage/${site.slug}`} size="small">Explore <span aria-hidden="true">→</span></Button>
        </div>
      </div>
    </article>
  );
}
