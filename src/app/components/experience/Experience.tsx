import styles from './Experience.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { companies, companyImages } from '@/constants/companies'; 

const Experience = () => {
    return (
        <section className={styles.experience}>
            <div className={styles.experienceContainer}>
                <div className={styles.sectionTitle}>
                    <h2>Experiencia Laboral</h2>
                </div>
                <div className={styles.companiesContainer}>
                    {companies.map((company) => (
                        <Link href={`/company/${company.id}`} key={company.id} className={styles.company}>
                            <Image src={companyImages[company.name as keyof typeof companyImages]} className={styles.companyImage} alt={company.name} width={120} height={120} />
                            <span className={styles.seeMoore}>Ver más</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;