'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo/logo.png';
import logoLight from '@/assets/logo/logo-light.png';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenu();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen]);

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.headerContent}>
                <Link href='/'>
                    <Image className={`${styles.logo} ${styles.logoDark}`} src={logo} alt="Logo de Jesús Müller" priority />
                    <Image className={`${styles.logo} ${styles.logoLight}`} src={logoLight} alt="" aria-hidden="true" priority />
                </Link>
                <Link href='/' className={styles.headerName}>Jesús Müller</Link>
                <nav className={styles.navigation} aria-label="Navegación principal">
                    <Link href="/#experience">Experiencia</Link>
                    <Link href="/#technology">Tecnologías</Link>
                    <Link href="/#contact">Contacto</Link>
                </nav>
                <div className={styles.headerActions}>
                    <ThemeToggle />
                    <button
                        className={styles.menuToggle}
                        onClick={toggleMenu}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className={styles.mobileMenu} id="mobile-menu" aria-label="Navegación principal">
                    <Link href="/#experience" onClick={closeMenu}>Experiencia</Link>
                    <Link href="/#technology" onClick={closeMenu}>Tecnologías</Link>
                    <Link href="/#contact" onClick={closeMenu}>Contacto</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
