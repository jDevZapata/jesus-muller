import Link from 'next/link';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <Link href='/'>
                    <span className={styles.logo}>JM</span>
                </Link>
                <Link href='/' className={styles.headerName}>Jesús Müller</Link>
                <nav className={styles.navigation} aria-label="Navegación principal">
                    <a href="#experience">Experiencia</a>
                    <a href="#technology">Tecnologías</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </div>
            <ThemeToggle />
        </header>
    );
};

export default Header;
