'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '../atoms/Icon';
import { NavigationItem } from '../molecules/NavigationItem';

export function HeaderNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Pangasinan Heritage Showcase home">
          <span className="brand-mark">PH</span><span>Pangasinan Heritage</span>
        </Link>
        <button className="btn btn-ghost nav-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          <Icon name="menu" /> <span>{open ? 'Close' : 'Menu'}</span>
        </button>
        <nav id="main-nav" aria-label="Main navigation">
          <ul className={`nav-list${open ? ' open' : ''}`}>
            <li><NavigationItem href="/#heritage" label="Heritage Sites" /></li>
            <li><NavigationItem href="/#about" label="About" /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
