// app/page.tsx
import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Logo } from '@/components/Logo';
import { Tagline } from '@/components/Tagline';
import { Eyebrow } from '@/components/Eyebrow';
import { CTAButton } from '@/components/CTAButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Protocol 418 — Esto no es teoría. Esto es protocolo.',
  description: 'Comunidad para construir con IA y automatización sin humo. Brew, Protocol, Core.',
};

const DNA = [
  { emoji: '🧠', strong: 'Técnico pero entendible.', body: 'Precisión sin barrera. La complejidad no es un trofeo.' },
  { emoji: '⚙️', strong: 'Práctico.', body: 'Cero humo. Si no se puede usar, no aporta.' },
  { emoji: '🔍', strong: 'Curioso.', body: 'Probamos lo nuevo, lo medimos, contamos qué funcionó y qué no.' },
  { emoji: '🤝', strong: 'Cercano.', body: 'Las dudas se responden. Las preguntas no son tontas.' },
  { emoji: '🚫', strong: 'Anti-postureo.', body: 'Si suena a influencer, no es protocolo.' },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <Section>
        <div className={styles.hero}>
          <Logo size="lg" className={styles.heroLogo} />
          <Tagline className={styles.heroTagline} variant="muted" />
          <h1 className={styles.heroHook}>
            Esto no es teoría.
            <br />
            Esto es protocolo.
          </h1>
          <p className={styles.heroLead}>
            Protocol FourEighteen ha nacido de una necesidad. Como sabéis, la tecnología crece
            exponencialmente y se va adaptando a nuestro entorno —laboral y personal. Pero ahora
            siento que el mercado está saturado de <em>IA</em>. Se quiere vender hasta en la sopa,
            y no lo soluciona todo.
          </p>
        </div>
      </Section>

      {/* BIENVENIDA */}
      <Section variant="surface">
        <div className={styles.welcomeWrap}>
          <p className={styles.welcomeMain}>Bienvenido a Protocol FourEighteen.</p>
          <p className={styles.welcomeTagline}>
            Compartir es ayudar.
            <br />
            <span className={styles.welcomeAccent}>Be open source, my friend.</span>
          </p>
        </div>
      </Section>

      {/* QUÉ ES ESTO — NO ES / ES */}
      <Section>
        <div className={styles.contentBlock}>
          <Eyebrow>Qué es esto</Eyebrow>
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
      </Section>

      {/* ¿QUÉ ES PROTOCOL 418? — el ruido + vibe vs spec */}
      <Section variant="surface">
        <div className={styles.contentBlock}>
          <Eyebrow>¿Qué es Protocol 418?</Eyebrow>
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
      </Section>

      {/* EL ORIGEN — TEAPOT STORY */}
      <Section>
        <div className={styles.contentBlock}>
          <Eyebrow>El origen</Eyebrow>
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
      </Section>

      {/* ESO ES UN 418 */}
      <Section variant="surface">
        <div className={styles.contentBlock}>
          <Eyebrow>Eso es un 418</Eyebrow>
          <h2 className={styles.h2}>Ahora mismo.</h2>
          <ul className={styles.list}>
            <li>Te venden herramientas que no necesitas.</li>
            <li>Te prometen soluciones que no encajan con tu problema.</li>
            <li>Te dicen que todo es IA cuando muchas veces no lo es.</li>
          </ul>
          <p className={styles.bigStatement}>Eso es un 418.</p>
        </div>
      </Section>

      {/* PARA ESTO NACE */}
      <Section>
        <div className={styles.contentBlock}>
          <Eyebrow>Para esto nace</Eyebrow>
          <h2 className={styles.h2}>Protocol 418 nace para esto.</h2>
          <ul className={styles.list}>
            <li>Para detectar cuándo algo no tiene sentido desde la base.</li>
            <li>Para separar lo que funciona de lo que solo suena bien.</li>
            <li>Para construir sistemas reales, no demos bonitas.</li>
            <li>Para pensar antes de automatizar.</li>
          </ul>
        </div>
      </Section>

      {/* POSTURA */}
      <Section variant="surface">
        <div className={styles.contentBlock}>
          <Eyebrow>La postura</Eyebrow>
          <p className={styles.statement}>No necesitas más IA. Necesitas mejor estructura.</p>
          <p className={styles.statement}>Menos herramientas, más sistema.</p>
          <p className={styles.statement}>Si no lo has probado, es opinión.</p>
          <p className={styles.statement}>
            Aquí no se habla de lo que debería funcionar, sino de lo que funciona.
          </p>
        </div>
      </Section>

      {/* EL ADN */}
      <Section>
        <div className={styles.contentBlock}>
          <Eyebrow>El ADN</Eyebrow>
          <h2 className={styles.h2}>Cómo se construye aquí.</h2>
          <ul className={styles.dnaList}>
            {DNA.map((item) => (
              <li key={item.strong}>
                <span className={styles.dnaEmoji} aria-hidden>
                  {item.emoji}
                </span>
                <span>
                  <strong>{item.strong}</strong> {item.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* QUIÉN HAY DETRÁS */}
      <Section variant="surface">
        <div className={styles.contentBlock}>
          <Eyebrow>Quién hay detrás</Eyebrow>
          <p className={styles.statementSmall}>
            No formador clásico. No influencer de IA. Operador.
          </p>
          <p className={styles.body}>
            Detrás de 418 hay un builder que llevaba años enseñando y ahora prefiere construir y
            compartir directamente. Lo que probamos, lo que sale, lo que no funciona. En tiempo
            real. Sin intermediarios. Sin humo.
          </p>
        </div>
      </Section>

      {/* CIERRE */}
      <Section>
        <div className={styles.closingWrap}>
          <p className={styles.closing}>
            Aquí hay gente que construye cosas reales, con criterio, sin ruido.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="surface">
        <div className={styles.cta}>
          <Eyebrow>Compartir es ayudar. Be open source, my friend.</Eyebrow>
          <CTAButton variant="primary" ariaLabel="Solicitar acceso al community de WhatsApp">
            Entrar al community →
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
