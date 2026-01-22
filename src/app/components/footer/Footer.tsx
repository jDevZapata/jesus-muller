import styles from './Footer.module.css';
import Linkedin from '@/assets/footer/linkedin.png';
import Github from '@/assets/icons/techs/github.png';
import Email from '@/assets/footer/email.png';
import Phone from '@/assets/footer/phone.png';
import Address from '@/assets/footer/address.png';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerContainer}>
            <h4>Información de contacto</h4>
            <div className={styles.contactContainer}>
                <span className={styles.info}>
                    <Image src={Email} alt="github" width={20} height={20} />
                    jhzapata.dev@gmail.com
                </span>
                <span className={styles.info}>
                    <Image src={Phone} alt="phone" width={20} height={20} />
                    +54 9 11 2304 6911
                </span>
                <span className={styles.info}>
                    <Image src={Address} alt="address" width={20} height={20} />
                    Villa Santa Rita, CABA, Argentina
                </span>
            </div>
            <div className={styles.footerBottom}>
                <a
                    href="https://www.linkedin.com/in/jesus-m%C3%BCller-38a9a72a6/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        src={Linkedin}
                        alt="linkedin"
                        width={40}
                        height={40}
                    />
                </a>
                <a
                    href="https://github.com/jDevZapata/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        src={Github}
                        alt="github"
                        width={40}
                        height={40}
                    />
                </a>
            </div>
            <div>&copy; {currentYear} Jesús Müller - Frontend Developer</div>
        </footer>
    );
};

export default Footer;