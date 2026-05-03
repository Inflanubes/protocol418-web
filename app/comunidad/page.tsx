// app/comunidad/page.tsx
import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Eyebrow } from '@/components/Eyebrow';
import { ChannelCard } from '@/components/ChannelCard';
import { PromptBlock } from '@/components/PromptBlock';
import { CTAButton } from '@/components/CTAButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Comunidad — Los 3 canales — Protocol 418',
  description: 'System, Brew, Core. Tres canales WhatsApp con un protocolo común.',
};

const BREW_TEMPLATE = `Qué estás montando:
Stack:
Problema:
Qué has probado:`;

const FAIL_TEMPLATE = `Qué intentabas hacer:
Qué pasó:
Por qué fue un 418:
Qué harías diferente:`;

export default function ComunidadPage() {
  return (
    <main>
      <Section>
        <div className={styles.intro}>
          <Eyebrow>El community</Eyebrow>
          <h1 className={styles.title}>
            Tres canales.
            <br />
            Un protocolo.
          </h1>
        </div>
      </Section>

      <Section variant="surface">
        <ChannelCard channel="system" expanded />
      </Section>

      <Section>
        <div className={styles.brewWrap}>
          <ChannelCard channel="brew" expanded />
          <div className={styles.prompts}>
            <h3 className={styles.promptsTitle}>Prompts del canal</h3>
            <PromptBlock label="Brew">{BREW_TEMPLATE}</PromptBlock>
            <PromptBlock label="418">{FAIL_TEMPLATE}</PromptBlock>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <ChannelCard channel="core" expanded />
      </Section>

      <Section>
        <div className={styles.howIn}>
          <Eyebrow>Cómo entrar</Eyebrow>
          <h2 className={styles.h2}>Solicitas. Apruebo. Entras.</h2>
          <p className={styles.lead}>
            El community es por aprobación. Cuando solicitas el acceso desde el botón, lo reviso
            manualmente. Si te conozco, entras.
          </p>
          <CTAButton variant="primary" ariaLabel="Solicitar acceso al community de WhatsApp">
            Entrar al community →
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
