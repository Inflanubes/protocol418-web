// components/Tagline.tsx
import styles from './Tagline.module.css';

type Props = {
  variant?: 'default' | 'muted';
  className?: string;
};

export function Tagline({ variant = 'default', className }: Props) {
  return (
    <span className={`${styles.tagline} ${styles[variant]} ${className ?? ''}`}>
      CONSTRUIR · AUTOMATIZAR · COMPARTIR
    </span>
  );
}
