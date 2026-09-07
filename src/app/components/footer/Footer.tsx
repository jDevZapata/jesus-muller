import styles from './Footer.module.css';
import { footerContent } from '@/constants/texts';
import Linkedin from '@/assets/footer/linkedin.png';
import Github from '@/assets/icons/techs/github.png';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerContainer} id="contact">
            <div className={styles.footerInner}>
                <h4>{footerContent.title}</h4>
                <div className={styles.contactContainer}>
                    <a className={styles.info} href={`mailto:${footerContent.email}`}>
                        <Mail size={20} strokeWidth={1.8} aria-hidden="true" />
                        {footerContent.email}
                    </a>
                    <a className={styles.info} href={`tel:${footerContent.phone.replaceAll(' ', '')}`}>
                        <Phone size={20} strokeWidth={1.8} aria-hidden="true" />
                        {footerContent.phone}
                    </a>
                    <span className={styles.info}>
                        <MapPin size={20} strokeWidth={1.8} aria-hidden="true" />
                        {footerContent.address}
                    </span>
                </div>
                <div className={styles.footerBottom}>
                    <a
                        href="https://www.linkedin.com/in/jesus-humberto-m%C3%BCller-zapata-38a9a72a6/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Image
                            src={Linkedin}
                            alt="linkedin"
                            width={24}
                            height={24}
                        />
                    </a>
                    <a
                        href="https://github.com/jDevZapata/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <Image
                            src={Github}
                            alt="github"
                            width={24}
                            height={24}
                        />
                    </a>
                </div>
                <div>&copy; {currentYear} {footerContent.mark}</div>
            </div>
        </footer>
    );
};

export default Footer;
