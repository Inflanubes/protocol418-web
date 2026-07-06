// app/page.tsx
import type { Metadata } from 'next';
import { Brain, Cog, Search, Handshake, Ban } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section } from '@/components/Section';
import { Tagline } from '@/components/Tagline';
import { CTAButton } from '@/components/CTAButton';
import { ModuleHeader } from '@/components/ModuleHeader';
import { SystemAlert } from '@/components/SystemAlert';
import { LogStrip } from '@/components/LogStrip';
import { Outlined418 } from '@/components/Outlined418';
import { Reveal } from '@/components/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Protocol 418 — Esto no es teoría. Esto es protocolo.',
  description: 'Comunidad para construir con IA y automatización sin humo. Brew, Protocol, Core.',
};

type DnaItem = {
  Icon: LucideIcon;
  strong: string;
  body: string;
};

const DNA: DnaItem[] = [
  { Icon: Brain, strong: 'Técnico pero entendible.', body: 'Precisión sin barrera. La complejidad no es un trofeo.' },
  { Icon: Cog, strong: 'Práctico.', body: 'Cero humo. Si no se puede usar, no aporta.' },
  { Icon: Search, strong: 'Curioso.', body: 'Probamos lo nuevo, lo medimos, contamos qué funcionó y qué no.' },
  { Icon: Handshake, strong: 'Cercano.', body: 'Las dudas se responden. Las preguntas no son tontas.' },
  { Icon: Ban, strong: 'Anti-postureo.', body: 'Si suena a influencer, no es protocolo.' },
];

export default function HomePage() {
  return (
    <main>
      {/* SCENE 1 — ARRANQUE (pinned under motion-on + @supports; plain flow otherwise) */}
      <div className="scene scenePin200">
        <div className="sceneSticky">
          <Section className={styles.heroSection}>
            <div className={styles.hero}>
              <Outlined418 className={styles.hero418} />
              <p className={`${styles.heroComment} ${styles.heroLine1}`}>{'// HTTP 418 — I’m a teapot'}</p>
              <h1 className={styles.heroHook}>
                <span className={styles.heroLine2}>Esto no es teoría.</span>
                <br />
                <span className={styles.heroLine3}>
                  Esto es protocolo<span className={styles.heroCursor}>_</span>
                </span>
              </h1>
              <p className={`${styles.heroSlogan} ${styles.heroLine4}`}>Be open source, my friend.</p>
              <Tagline className={`${styles.heroTagline} ${styles.heroLine5}`} variant="muted" />
            </div>
          </Section>
        </div>
      </div>

      {/* QUÉ ES ESTO — NO ES / ES */}
      <Section variant="surface">
        <Reveal>
          <div className={styles.contentBlock}>
            <ModuleHeader index={1}>Qué es esto</ModuleHeader>
            <h2 className={styles.h2}>No es lo que crees.</h2>
            <div className={styles.notIsGrid}>
              <div className={styles.notIsCol}>
                <span className={styles.notIsLabel}>No es</span>
                <ul className={styles.notIsList}>
                  <li>una academia</li>
                  <li>un gurú</li>
                  <li>contenido genérico</li>
                </ul>
              </div>
              <div className={styles.notIsCol}>
                <span className={styles.notIsLabelAccent}>Es</span>
                <p className={styles.notIsBody}>
                  Un protocolo no oficial para construir, automatizar y entender sistemas en el mundo
                  real.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ¿QUÉ ES PROTOCOL 418? — el ruido + vibe vs spec */}
      <Section>
        <Reveal>
          <div className={styles.contentBlock}>
            <ModuleHeader index={2}>¿Qué es Protocol 418?</ModuleHeader>
            <h2 className={styles.h2}>Más ruido que nunca.</h2>
            <p className={styles.body}>
              He empezado esto porque desde que existe la IA, hay más ruido que nunca.{' '}
              <strong>Más gente vendiéndola que entendiéndola.</strong>
            </p>
            <p className={styles.body}>
              Todo el mundo quiere meter IA en todo. Como si fuera la solución universal. IA para
              esto. IA para lo otro. <strong>IA hasta en los cereales.</strong>
            </p>
            <p className={styles.body}>Pero la realidad es otra:</p>
            <ul className={styles.list}>
              <li>No todo se soluciona con IA.</li>
              <li>Y la IA no soluciona todo.</li>
            </ul>
            <p className={styles.body}>
              Estamos en un punto donde se venden soluciones genéricas a problemas que ni siquiera
              están bien definidos.
            </p>
            <p className={styles.statement}>Mucho vibe coding y poco spec coding.</p>
            <p className={styles.bridge}>Y aquí es donde entra el 418.</p>
          </div>
        </Reveal>
      </Section>

      {/* EL ORIGEN — TEAPOT STORY */}
      <Section variant="surface">
        <Reveal>
          <div className={styles.contentBlock}>
            <ModuleHeader index={3}>El origen</ModuleHeader>
            <p className={styles.eyebrowAside}>&lt; &gt; Hyper Text Coffee Pot Control Protocol</p>
            <h2 className={styles.h2}>Una broma de 1998 que hoy es real.</h2>
            <p className={styles.body}>
              En 1998, unos ingenieros publicaron una broma en internet: un protocolo para controlar
              cafeteras por HTTP. Dentro de esa broma apareció un código:
            </p>
            <p className={styles.quote}>418 — I&apos;m a teapot.</p>
            <p className={styles.body}>
              Significa literalmente:{' '}
              <em>&ldquo;me estás pidiendo café… pero soy una tetera.&rdquo;</em>
            </p>
            <p className={styles.body}>No puedo darte lo que quieres porque no soy lo que crees.</p>
            <p className={styles.bridge}>Era humor técnico. Pero hoy es más real que nunca.</p>
          </div>
        </Reveal>
      </Section>

      {/* ESO ES UN 418 */}
      <Section>
        <Reveal>
          <div className={styles.contentBlock}>
            <ModuleHeader index={4}>Eso es un 418</ModuleHeader>
            <h2 className={styles.h2}>Ahora mismo.</h2>
            <ul className={styles.list}>
              <li>Te venden herramientas que no necesitas.</li>
              <li>Te prometen soluciones que no encajan con tu problema.</li>
              <li>Te dicen que todo es IA cuando muchas veces no lo es.</li>
            </ul>
            <p className={styles.bigStatement}>Eso es un 418.</p>
          </div>
        </Reveal>
      </Section>

      <SystemAlert
        label="SYSTEM ALERT — PROTOCOL BREACH"
        title={
          <>
            LA NUBE
            <br />
            NO EXISTE.
          </>
        }
        href="/breach"
        linkText="ver las 7 brechas"
      />

      <LogStrip
        items={[
          { label: 'breach_007 desplegado', href: '/breach' },
          { label: '19/19 fundamentos online', href: '/fundamentos' },
          { label: 'nueva clase en /brew', href: '/brew' },
          { label: 'comunidad activa', href: '/comunidad' },
        ]}
      />

      {/* PARA ESTO NACE */}
      <Section variant="surface">
        <Reveal>
          <div className={styles.contentBlock}>
            <ModuleHeader index={5}>Para esto nace</ModuleHeader>
            <h2 className={styles.h2}>Protocol 418 nace para esto.</h2>
            <ul className={styles.list}>
              <li>Para detectar cuándo algo no tiene sentido desde la base.</li>
              <li>Para separar lo que funciona de lo que solo suena bien.</li>
              <li>Para construir sistemas reales, no demos bonitas.</li>
              <li>Para pensar antes de automatizar.</li>
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* POSTURA */}
      <Section>
        <Reveal>
          <div className={styles.contentBlock}>
            <ModuleHeader index={6}>La postura</ModuleHeader>
            <p className={styles.statement}>No necesitas más IA. Necesitas mejor estructura.</p>
            <p className={styles.statement}>Menos herramientas, más sistema.</p>
            <p className={styles.statement}>Si no lo has probado, es opinión.</p>
            <p className={styles.statement}>
              Aquí no se habla de lo que debería funcionar, sino de lo que funciona.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* EL ADN */}
      <Section variant="surface">
        <Reveal>
          <div className={styles.contentBlock}>
            <ModuleHeader index={7}>El ADN</ModuleHeader>
            <h2 className={styles.h2}>Cómo se construye aquí.</h2>
            <ul className={styles.dnaList}>
              {DNA.map(({ Icon, strong, body }) => (
                <li key={strong}>
                  <span className={styles.dnaIcon} aria-hidden>
                    <Icon size={28} strokeWidth={1.75} />
                  </span>
                  <span>
                    <strong>{strong}</strong> {body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* QUIÉN HAY DETRÁS */}
      <Section>
        <Reveal>
          <div className={styles.contentBlock}>
            <ModuleHeader index={8}>Quién hay detrás</ModuleHeader>
            <p className={styles.statementSmall}>
              No formador clásico. No influencer de IA. Operador.
            </p>
            <p className={styles.body}>
              Detrás de 418 hay un builder que llevaba años enseñando y ahora prefiere construir y
              compartir directamente. Lo que probamos, lo que sale, lo que no funciona. En tiempo
              real. Sin intermediarios. Sin humo.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CIERRE */}
      <Section variant="surface">
        <Reveal>
          <div className={styles.closingWrap}>
            <p className={styles.closing}>
              Aquí hay gente que construye cosas reales, con criterio, sin ruido.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className={styles.cta}>
            <ModuleHeader index={9}>Compartir es ayudar. Be open source, my friend.</ModuleHeader>
            <CTAButton variant="primary" ariaLabel="Solicitar acceso a la comunidad de WhatsApp">
              Entrar a la comunidad →
            </CTAButton>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
