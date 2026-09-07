import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <p className={styles.eyebrow}>404 · Página no encontrada</p>
      <h1>Esta experiencia no está disponible.</h1>
      <p>
        El enlace puede haber cambiado o la experiencia que buscas no existe en este portfolio.
      </p>
      <Link href="/" className={styles.backLink}>
        Volver al portfolio <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
