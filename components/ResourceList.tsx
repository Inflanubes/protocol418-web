// components/ResourceList.tsx
import { RESOURCE_ICONS, type ClassResource } from '@/lib/classes';
import styles from './ResourceList.module.css';

type Props = {
  resources: ClassResource[];
};

export function ResourceList({ resources }: Props) {
  if (resources.length === 0) {
    return <p className={styles.empty}>Recursos en camino.</p>;
  }

  return (
    <ul className={styles.list}>
      {resources.map((resource) => {
        const Icon = RESOURCE_ICONS[resource.type];
        return (
          <li key={resource.label}>
            <a
              className={styles.item}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.icon} aria-hidden>
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className={styles.label}>{resource.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
