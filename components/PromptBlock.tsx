// components/PromptBlock.tsx
import styles from './PromptBlock.module.css';

type Props = {
  label: string;
  children: React.ReactNode;
};

export function PromptBlock({ label, children }: Props) {
  return (
    <div className={styles.block}>
      <span className={styles.label}>[{label}]</span>
      <pre className={styles.body}>{children}</pre>
    </div>
  );
}
