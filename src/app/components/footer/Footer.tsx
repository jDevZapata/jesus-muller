import styles from './Footer.module.css';
import { footerContent } from '@/constants/texts';
import Linkedin from '@/assets/footer/linkedin.png';
import Github from '@/assets/icons/techs/github.png';
import Email from '@/assets/footer/email.png';
import Phone from '@/assets/footer/phone.png';
import Address from '@/assets/footer/address.png';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerContainer} id="contact">
            <div className={styles.footerInner}>
                <h4>{footerContent.title}</h4>
                <div className={styles.contactContainer}>
                    <a className={styles.info} href={`mailto:${footerContent.email}`}>
                        <Image src={Email} alt="email" width={20} height={20} />
                        {footerContent.email}
                    </a>
                    <a className={styles.info} href={`tel:${footerContent.phone.replaceAll(' ', '')}`}>
                        <Image src={Phone} alt="phone" width={20} height={20} />
                        {footerContent.phone}
                    </a>
                    <span className={styles.info}>
                        <Image src={Address} alt="address" width={20} height={20} />
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
