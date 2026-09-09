import styles from './Contact.module.css';
import ContactForm from './ContactForm';
import { contactContent } from '@/constants/texts';
import Linkedin from '@/assets/footer/linkedin.png';
import Github from '@/assets/icons/techs/github.png';
import Whatsapp from '@/assets/footer/whatsapp.png';
import Image from 'next/image';

const Contact = () => {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.contactContainer}>
                <h2>{contactContent.title}</h2>
                <p className={styles.description}>{contactContent.description}</p>
                <ContactForm />
                <div className={styles.socialLinks}>
                    <a
                        href="https://www.linkedin.com/in/jesus-humberto-m%C3%BCller-zapata-38a9a72a6/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
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
                        aria-label="GitHub"
                    >
                        <Image
                            src={Github}
                            alt="github"
                            width={40}
                            height={40}
                        />
                    </a>
                    <a
                        href="https://wa.me/5491123046911"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                    >
                        <Image
                            src={Whatsapp}
                            alt="WhatsApp"
                            width={40}
                            height={40}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
