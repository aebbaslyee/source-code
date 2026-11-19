'use client';

import { FormEvent, useState } from 'react';
import { Icon } from '../atoms/Icon';

type SearchFormProps = { onSearch: (query: string) => void };

export function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(query);
  }
  return (
    <form className="search-form" role="search" onSubmit={submit}>
      <label className="sr-only" htmlFor="site-search">Search heritage sites</label>
      <input id="site-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a heritage site or municipality" />
      <button className="btn btn-primary" type="submit"><Icon name="search" /> Search</button>
    </form>
  );
}
