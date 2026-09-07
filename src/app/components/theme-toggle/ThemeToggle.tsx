'use client';

import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState<boolean | null>(null);

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => {
            const savedTheme = localStorage.getItem('theme');
            const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            const theme = savedTheme ?? (prefersLight ? 'light' : 'dark');

            document.documentElement.setAttribute('data-theme', theme);
            setIsDark(theme === 'dark');
        });

        return () => window.cancelAnimationFrame(frame);
    }, []);

    const toggleTheme = () => {
        if (isDark === null) {
            return;
        }

        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label={isDark === null || isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
        >
            {isDark === null ? null : isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/>
                    <path d="M12 20v2"/>
                    <path d="m4.93 4.93 1.41 1.41"/>
                    <path d="m17.66 17.66 1.41 1.41"/>
                    <path d="M2 12h2"/>
                    <path d="M20 12h2"/>
                    <path d="m6.34 17.66-1.41 1.41"/>
                    <path d="m19.07 4.93-1.41 1.41"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
