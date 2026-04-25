import { educationContent } from '@/constants/texts';
import styles from './Education.module.css';

const Education = () => {
    return (
        <section className={styles.education}>
            <div className={styles.educationInner}>
                <div className={styles.title}>
                    <h2>{educationContent.title}</h2>
                </div>
                <div className={styles.educationDescription}>
                    {educationContent.degree.map((degree, index) => (
                        <p key={`edu-${index}`}>{degree}</p>
                    ))}
                </div>
                <div className={styles.certifications}>
                    <h3>{educationContent.certificationTitle}</h3>
                    <div className={styles.certificationsGrid}>
                        <div className={styles.certificationCard}>
                            <strong>Udemy</strong>
                            {educationContent.certifications.map((cert, index) => (
                                <a 
                                    key={`udemy-${index}`} 
                                    href={cert.url} 
                                    target="_blank" 
                                    style={{ marginRight: '5px', marginBottom: '10px' }}
                                    rel="noopener noreferrer"
                                >
                                    {cert.name}
                                </a>
                            ))}
                        </div>
                        <div className={styles.certificationCard}>
                            <strong>English Services</strong>
                            <span>B1 (Intermediate)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
