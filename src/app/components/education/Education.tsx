import { educationContent } from '@/constants/texts';
import styles from './Education.module.css';

const Education = () => {
    return (
        <section className={styles.education}>
            <div className={styles.title}>
                <h2>{educationContent.title}</h2>
            </div>
            <div className={styles.educationDescription}>
                {educationContent.degree.map((degree, index) => (
                    <p key={`edu-${index}`}>{degree}</p>
                ))}
            </div>
            <div className={styles.title}>
                <h2>{educationContent.certificationTitle}</h2>
            </div>
            <div className={styles.certifications}>
                <div>
                    Udemy: {educationContent.certifications.map((cert, index) => (
                        <a key={`udemy-${index}`} href={cert.url} target="_blank" rel="noopener noreferrer">{cert.name}</a>
                    ))}
                </div>
                <div>
                    English Services: B1 (Intermediate)
                </div>
            </div>
        </section>
    );
}

export default Education;