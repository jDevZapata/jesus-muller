import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <Link href='/'>
                    <span className={styles.logo}>JM</span>
                </Link>
                <span className={styles.headerName}>Jesús Müller</span>
            </div>
        </header>
    );
};

export default Header;
