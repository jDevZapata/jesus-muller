import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo/logo.png';
import logoLight from '@/assets/logo/logo-light.png';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <Link href='/'>
                    <Image className={`${styles.logo} ${styles.logoDark}`} src={logo} alt="Logo de Jesús Müller" priority />
                    <Image className={`${styles.logo} ${styles.logoLight}`} src={logoLight} alt="" aria-hidden="true" priority />
                </Link>
                <Link href='/' className={styles.headerName}>Jesús Müller</Link>
                <nav className={styles.navigation} aria-label="Navegación principal">
                    <a href="/#experience">Experiencia</a>
                    <a href="/#technology">Tecnologías</a>
                    <a href="/#contact">Contacto</a>
                </nav>
            </div>
            <div className={styles.themeControl}>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
