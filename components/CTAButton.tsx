// components/CTAButton.tsx
import Link from 'next/link';
import { WHATSAPP_INVITE_URL } from '@/lib/constants';
import styles from './CTAButton.module.css';

type Props = {
  variant?: 'primary' | 'outline';
  href?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
};

export function CTAButton({
  variant = 'primary',
  href = WHATSAPP_INVITE_URL,
  children,
  ariaLabel,
  className,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${styles.cta} ${styles[variant]} ${className ?? ''}`}
    >
      {children}
    </Link>
  );
}
