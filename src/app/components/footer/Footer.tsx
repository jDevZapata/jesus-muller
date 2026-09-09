import styles from './Footer.module.css';
import { footerContent } from '@/constants/texts';
import { MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerInner}>
                <div className={styles.footerInfo}>
                    <span>&copy; {currentYear} {footerContent.mark}</span>
                    <span className={styles.address}>
                        <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
                        {footerContent.address}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
