// app/brew/page.tsx
import type { Metadata } from 'next';
import { Coffee, Flame, Cog, Bomb } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section } from '@/components/Section';
import { Eyebrow } from '@/components/Eyebrow';
import { CTAButton } from '@/components/CTAButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Brew — Lo que estamos cocinando — Protocol 418',
  description:
    'El feed de Protocol 418. Brew Logs, Hotfix, Protocol y 418 Moments. Lo que se está construyendo, en tiempo real.',
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
          <Eyebrow>El feed</Eyebrow>
          <h1 className={styles.title}>Brew.</h1>
          <p className={styles.lead}>
            Aquí os contaremos lo que estamos <em>cocinando</em>.
          </p>
        </div>
      </Section>

      <Section variant="surface">
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

      <Section>
        <div className={styles.empty}>
          <p className={styles.emptyText}>
            Estamos <em>cocinando</em> nuevas ideas.
          </p>
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
