'use client';

import { useMemo, useState } from 'react';
import type { HeritageSite } from '../../data/heritage';
import { HeritageCard } from '../molecules/HeritageCard';
import { SearchForm } from '../molecules/SearchForm';

export function HeritageGrid({ sites }: { sites: HeritageSite[] }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sites;
    return sites.filter((site) => `${site.name} ${site.municipality} ${site.category}`.toLowerCase().includes(q));
  }, [query, sites]);

  return (
    <div>
      <div className="search-shell"><SearchForm onSearch={setQuery} /></div>
      <div className="heritage-grid" aria-live="polite">
        {filtered.map((site) => <HeritageCard key={site.slug} site={site} />)}
      </div>
      {!filtered.length && <div className="empty" style={{ marginTop: 20 }}>No matching heritage site found. Try “Bolinao”, “island”, or “hot spring”.</div>}
    </div>
  );
}
