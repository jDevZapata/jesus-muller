import styles from './Technologies.module.css';
import { technologiesContent } from '@/constants/texts';
import technologies from '@/constants/technologies';
import Image from 'next/image';

const Technologies = () => {
    return (
        <section className={styles.technologiesSection}>
            <h2>{technologiesContent.title}</h2>
            <div className={styles.description}>
                {technologiesContent.description}
            </div>
            <div className={styles.technologiesContainer}>
                {technologies.map((tech) => (
                    <div key={tech.id} className={styles.technologyItem}>
                        <Image src={tech.icon} alt={tech.name} className={styles.technologyImage} height={40} width={40} />
                        <span className={styles.technologyName}>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;