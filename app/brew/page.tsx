// app/brew/page.tsx
import type { Metadata } from 'next';
import { Coffee, Flame, Cog, Bomb } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section } from '@/components/Section';
import { Eyebrow } from '@/components/Eyebrow';
import { CTAButton } from '@/components/CTAButton';
import { ClassCard } from '@/components/ClassCard';
import { CLASSES_BY_DATE } from '@/lib/classes';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Brew — Las clases — Protocol 418',
  description:
    'Las clases de Protocol 418. Cada té es una clase: el vídeo y todos sus recursos en un solo sitio.',
};

type PostType = {
  Icon: LucideIcon;
  name: string;
  description: string;
};

const POST_TYPES: PostType[] = [
  {
    Icon: Coffee,
    name: 'Brew Logs',
    description:
      'Lo que se está montando. Posts en proceso, con sus warts. Se comparte mientras se construye, no después.',
  },
  {
    Icon: Flame,
    name: 'Hotfix',
    description:
      'Soluciones rápidas a problemas concretos. No siempre limpias, pero funcionan y desbloquean.',
  },
  {
    Icon: Cog,
    name: 'Protocol',
    description:
      'Mejores prácticas. Probadas en la realidad, no especuladas. La forma correcta de hacer algo.',
  },
  {
    Icon: Bomb,
    name: '418 Moments',
    description:
      'Cuando algo se rompe porque nunca tuvo sentido desde el principio. Se comparte para entenderlo y no repetirlo.',
  },
];

export default function BrewPage() {
  return (
    <main>
      <Section>
        <div className={styles.intro}>
          <Eyebrow>Las clases</Eyebrow>
          <h1 className={styles.title}>Brew.</h1>
          <p className={styles.lead}>
            Cada clase es un <em>té</em>. El vídeo y todos sus recursos, en un solo sitio.
          </p>
        </div>
      </Section>

      <Section variant="surface">
        {CLASSES_BY_DATE.length > 0 ? (
          <ul className={styles.grid}>
            {CLASSES_BY_DATE.map((entry) => (
              <li key={entry.slug}>
                <ClassCard entry={entry} />
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyText}>
              Estamos <em>cocinando</em> la primera clase.
            </p>
          </div>
        )}
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <Eyebrow>Categorías</Eyebrow>
          <h2 className={styles.h2}>Tipos de post.</h2>
          <p className={styles.lead}>
            Cuando empecemos a publicar, cada post pertenece a una de estas 4 categorías. Los
            nombres también se usan dentro de la comunidad para etiquetar mensajes.
          </p>
          <ul className={styles.postTypes}>
            {POST_TYPES.map(({ Icon, name, description }) => (
              <li key={name}>
                <span className={styles.postTypeIcon} aria-hidden>
                  <Icon size={32} strokeWidth={1.75} />
                </span>
                <div className={styles.postTypeBody}>
                  <span className={styles.postTypeName}>{name}</span>
                  <p className={styles.postTypeDesc}>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="surface">
        <div className={styles.cta}>
          <CTAButton variant="primary" ariaLabel="Solicitar acceso a la comunidad de WhatsApp">
            Entrar a la comunidad →
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
