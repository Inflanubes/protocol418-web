// components/VideoEmbed.tsx
import { MonitorPlay, PlayCircle } from 'lucide-react';
import styles from './VideoEmbed.module.css';

type Props = {
  youtubeId: string;
  title: string;
  placeholder?: string; // texto cuando no hay vídeo (por defecto: "El vídeo está en camino.")
};

export function VideoEmbed({ youtubeId, title, placeholder }: Props) {
  if (!youtubeId) {
    return (
      <div className={styles.placeholder}>
        <PlayCircle size={40} strokeWidth={1.5} aria-hidden />
        <p className={styles.placeholderText}>{placeholder ?? 'El vídeo está en camino.'}</p>
      </div>
    );
  }

  // youtube-nocookie.com = modo privacy-enhanced (no cookies hasta reproducir).
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}`;
  const watchUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <div className={styles.wrap}>
      <div className={styles.frame}>
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframe}
        />
      </div>
      <a className={styles.watch} href={watchUrl} target="_blank" rel="noopener noreferrer">
        <MonitorPlay size={16} strokeWidth={1.75} aria-hidden />
        ver en YouTube
      </a>
    </div>
  );
}
