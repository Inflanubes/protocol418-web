// components/fundamentos/blocks/EnlaceBlock.tsx — un enlace con nota (externo si empieza por http).
import { ArrowUpRight } from 'lucide-react';
import styles from './blocks.module.css';

type Props = { href: string; label: string; nota?: string };

export function EnlaceBlock({ href, label, nota }: Props) {
  const externo = /^https?:\/\//.test(href);
  return (
    <div className={styles.enlace}>
      <a
        className={styles.enlaceLink}
        href={href}
        {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span className={styles.enlacePrompt} aria-hidden>
          $ open
        </span>
        {label}
        <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
      </a>
      {nota ? <p className={styles.enlaceNota}>{nota}</p> : null}
    </div>
  );
}
