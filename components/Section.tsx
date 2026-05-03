// components/Section.tsx
import { Container } from './Container';
import styles from './Section.module.css';

type Props = {
  children: React.ReactNode;
  variant?: 'default' | 'surface';
  className?: string;
  as?: 'section' | 'header' | 'footer';
};

export function Section({ children, variant = 'default', className, as: Tag = 'section' }: Props) {
  return (
    <Tag className={`${styles.section} ${styles[variant]} ${className ?? ''}`}>
      <Container>{children}</Container>
    </Tag>
  );
}
