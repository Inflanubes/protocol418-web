// components/fundamentos/blocks/GaleriaBlock.tsx
import Image from 'next/image';
import styles from './blocks.module.css';

type Img = { src: string; alt: string; caption?: string };

export function GaleriaBlock({ images }: { images: Img[] }) {
  return (
    <ul className={styles.galeria}>
      {images.map((img) => (
        <li key={img.src + img.alt} className={styles.galeriaItem}>
          <Image src={img.src} alt={img.alt} width={800} height={600} className={styles.galeriaImg} />
          {img.caption ? <span className={styles.caption}>{img.caption}</span> : null}
        </li>
      ))}
    </ul>
  );
}
