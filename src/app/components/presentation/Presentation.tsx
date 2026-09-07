import Image from 'next/image';
import Profile from '@/assets/profile.png'
import styles from './Presentation.module.css';
import { presentationContent } from '@/constants/texts';

const Presentation = () => {
    return (
        <section className={styles.presentation}>
            <div className={styles.presentationContainer}>
                <div className={styles.description}>
                    <p className={styles.eyebrow}>Frontend Senior · Buenos Aires, Argentina</p>
                    <h1>Construyo productos digitales claros, robustos y preparados para crecer.</h1>
                    <p className={styles.lead}>{presentationContent.intro}</p>
                    <p>{presentationContent.description}</p>
                    <div className={styles.actions}>
                        <a href="#experience" className={styles.primaryAction}>Ver experiencia</a>
                        <a href="https://www.linkedin.com/in/jesus-humberto-m%C3%BCller-zapata-38a9a72a6/" target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}>LinkedIn ↗</a>
                    </div>
                </div>
                <div className={styles.img}>
                    <Image src={Profile} alt="Jesús Müller, Frontend Senior" className={styles.rounded} height={220} width={220}/>
                </div>
            </div>
        </section>
    );
}

export default Presentation;