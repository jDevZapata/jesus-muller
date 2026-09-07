import styles from './Technologies.module.css';
import { technologiesContent } from '@/constants/texts';
import technologies from '@/constants/technologies';
import Image from 'next/image';

const Technologies = () => {
    return (
        <section className={styles.technologiesSection} id="technology">
            <div className={styles.technologiesInner}>
                <p className={styles.eyebrow}>Stack actual</p>
                <h2>{technologiesContent.title}</h2>
                <div className={styles.description}>
                    {technologiesContent.description}
                </div>
                <div className={styles.technologiesContainer}>
                    {technologies.map((tech) => (
                        <div key={tech.id} className={styles.technologyItem}>
                            <Image src={tech.icon} alt={tech.name} className={styles.technologyImage} height={48} width={48} />
                            <span className={styles.technologyName}>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
