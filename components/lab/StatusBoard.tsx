// components/lab/StatusBoard.tsx — cabecera de estado del sistema: puntos, módulos, badges.
import { BADGES, COLECCIONABLES, NIVELES } from '@/lib/lab';
import styles from './lab.module.css';

type Props = { clave: string; completados: Record<string, number> };

export function StatusBoard({ clave, completados }: Props) {
  const puntos = Object.values(completados).reduce((a, b) => a + b, 0);
  const jugables = NIVELES.filter((n) => n.estado === 'jugable');
  const encendidos = jugables.filter((n) => n.retos.every((r) => completados[r.id] !== undefined)).length;
  const coleccion = COLECCIONABLES.filter((c) => completados[c.id] !== undefined).length;
  const badges = BADGES.filter((b) => b.retos.every((id) => completados[id] !== undefined));

  return (
    <div className={styles.board}>
      <p className={styles.boardLine}>
        <span className={styles.boardKey}>clave</span> {clave} · <span className={styles.boardKey}>puntos</span>{' '}
        {puntos} · <span className={styles.boardKey}>módulos</span> {encendidos}/{NIVELES.length} ·{' '}
        <span className={styles.boardKey}>colección</span> {coleccion}/{COLECCIONABLES.length}
      </p>
      {badges.length > 0 ? (
        <ul className={styles.badges}>
          {badges.map((b) => (
            <li key={b.id} className={styles.badge} title={b.descripcion}>
              {b.nombre}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
