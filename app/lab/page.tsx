// app/lab/page.tsx
import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Eyebrow } from '@/components/Eyebrow';
import { LabClient } from '@/components/lab/LabClient';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'El Lab — Protocol 418',
  description:
    'Retos reales contra la API del 418: peticiones de verdad, errores de verdad, puntos de verdad. Cada reto superado enciende un módulo de tu sistema.',
};

export default function LabPage() {
  return (
    <main>
      <Section>
        <div className={styles.intro}>
          <Eyebrow>Peticiones reales. Errores reales.</Eyebrow>
          <h1 className={styles.title}>El Lab.</h1>
          <p className={styles.lead}>
            Aquí no se lee: se hace. Cada reto es una petición HTTP real contra la API del 418.
            Si la construyes bien, la respuesta trae tu código; si la rompes, el error te enseña
            —y también puntúa—. Módulo a módulo, tu sistema se enciende.
          </p>
        </div>
        <LabClient />
      </Section>
    </main>
  );
}
