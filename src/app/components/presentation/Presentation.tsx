import Image from 'next/image';
import Profile from '@/assets/profile.png'
import styles from './Presentation.module.css';
import { presentationContent } from '@/constants/texts';

const Presentation = () => {
    return (
        <section className={styles.presentation}>
            <h1 className={styles.centered}>{presentationContent.title}</h1>
            <div className={styles.presentationContainer}>
                <div className={styles.description}>
                    <p>{presentationContent.intro}</p>
                    <p>{presentationContent.description}</p>
                    <p className={styles.phrase}>{presentationContent.phrase}</p>
                </div>
                <div className={styles.img}>
                    <Image src={Profile} alt="profile" className={styles.rounded} height={170} width={180}/>
                </div>
            </div>
        </section>
    );
}

export default Presentation;