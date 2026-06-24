// components/fundamentos/blocks/GotchaBlock.tsx
import { Sparkles } from 'lucide-react';
import styles from './blocks.module.css';

export function GotchaBlock({ body }: { body: string }) {
  return (
    <aside className={styles.gotcha}>
      <span className={styles.gotchaEyebrow}>
        <Sparkles size={16} strokeWidth={1.75} aria-hidden />
        Seguro que no te han contado que…
      </span>
      <p className={styles.gotchaBody}>{body}</p>
    </aside>
  );
}
