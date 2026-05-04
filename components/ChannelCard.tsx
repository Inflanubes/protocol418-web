// components/ChannelCard.tsx
import Image from 'next/image';
import { CHANNELS, type ChannelKey } from '@/lib/channels';
import styles from './ChannelCard.module.css';

type Props = {
  channel: ChannelKey;
  expanded?: boolean;
};

export function ChannelCard({ channel, expanded = false }: Props) {
  const data = CHANNELS[channel];
  return (
    <article className={`${styles.card} ${expanded ? styles.expanded : ''}`}>
      <div className={styles.header}>
        <div className={styles.badgeWrap}>
          <Image src={data.badge} alt="" width={64} height={64} className={styles.badge} />
        </div>
        <div className={styles.titleBlock}>
          <h3 className={styles.name}>
            <span className={styles.symbol} aria-hidden>
              {data.symbol}
            </span>{' '}
            {data.name}
          </h3>
          <span className={styles.tag}>{data.tag}</span>
        </div>
      </div>

      <p className={styles.verb}>{data.verb}</p>
      <p className={styles.essence}>{data.essence}</p>

      {expanded && (
        <>
          <p className={styles.description}>{data.description}</p>

          {data.rules && (
            <div className={styles.subBlock}>
              <span className={styles.subLabel}>Reglas</span>
              <ul className={styles.rules}>
                {data.rules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          )}

          {data.youCan && (
            <div className={styles.subBlock}>
              <span className={styles.subLabel}>Aquí puedes</span>
              <ul className={styles.youCan}>
                {data.youCan.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </div>
          )}

          {data.routes && (
            <div className={styles.subBlock}>
              <span className={styles.subLabel}>Routes</span>
              <ul className={styles.routes}>
                {data.routes.map((route) => (
                  <li key={route}>{route}</li>
                ))}
              </ul>
            </div>
          )}

          {data.closingQuote && (
            <p className={styles.closingQuote}>{data.closingQuote}</p>
          )}
        </>
      )}
    </article>
  );
}
