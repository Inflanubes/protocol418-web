// components/Eyebrow.tsx
import styles from './Eyebrow.module.css';

type Props = {
  children: React.ReactNode;
  muted?: boolean;
  className?: string;
};

export function Eyebrow({ children, muted = false, className }: Props) {
  return (
    <span className={`${styles.eyebrow} ${muted ? styles.muted : ''} ${className ?? ''}`}>
      {children}
    </span>
  );
}
