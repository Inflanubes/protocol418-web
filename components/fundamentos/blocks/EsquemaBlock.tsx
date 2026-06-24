// components/fundamentos/blocks/EsquemaBlock.tsx
import Image from 'next/image';
import styles from './blocks.module.css';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export function EsquemaBlock({ src, alt, width, height, caption }: Props) {
  return (
    <figure className={styles.esquema}>
      {src ? (
        <Image src={src} alt={alt} width={width} height={height} className={styles.esquemaImg} />
      ) : (
        <div className={styles.esquemaPlaceholder} role="img" aria-label={alt}>
          esquema en camino
        </div>
      )}
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
