import type { Metadata } from 'next';
import './globals.css';
import { HeaderNavigation } from '../components/organisms/HeaderNavigation';

export const metadata: Metadata = {
  title: 'Pangasinan Heritage Digital Showcase',
  description: 'A lightweight, accessible digital showcase of Pangasinan heritage sites.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <HeaderNavigation />
        {children}
        <footer className="site-footer">
          <div className="container footer-inner">
            <p><strong>Pangasinan Heritage Digital Showcase</strong></p>
            <p>Starter academic project • Designed for low-bandwidth access</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
