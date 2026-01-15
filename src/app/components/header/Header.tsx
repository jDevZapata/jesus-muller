import Link from 'next/link';
import styles from './Header.module.css';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <Link href='/'>
                <span className={styles.logo}>JM</span>
            </Link>
            <div>Jesús Müller</div>
        </header>
    )
};

export default Navbar;