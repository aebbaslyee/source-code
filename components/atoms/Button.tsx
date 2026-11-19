import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'ghost';
  size?: 'default' | 'small';
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({ children, href, type = 'button', variant = 'primary', size = 'default', onClick, ariaLabel }: ButtonProps) {
  const className = `btn btn-${variant}${size === 'small' ? ' btn-small' : ''}`;
  if (href) return <Link className={className} href={href} aria-label={ariaLabel}>{children}</Link>;
  return <button className={className} type={type} onClick={onClick} aria-label={ariaLabel}>{children}</button>;
}
