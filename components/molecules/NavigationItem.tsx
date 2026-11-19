import Link from 'next/link';

export function NavigationItem({ href, label }: { href: string; label: string }) {
  return <Link className="btn btn-ghost btn-small" href={href}>{label}</Link>;
}
