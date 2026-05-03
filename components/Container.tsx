// components/Container.tsx
import styles from './Container.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return <div className={`${styles.container} ${className ?? ''}`}>{children}</div>;
}
