import styles from './Experience.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { companies, companyImages } from '@/constants/companies';
import { experienceContent } from '@/constants/texts';

const Experience = () => {
    return (
        <section className={styles.experience}>
            <div className={styles.experienceContainer}>
                <div className={styles.sectionTitle}>
                    <h2>{experienceContent.title}</h2>
                </div>
                <div className={styles.companiesContainer}>
                    {companies.map((company) => (
                        <Link href={`/company/${company.id}`} key={company.id} className={styles.company}>
                            <Image src={companyImages[company.name as keyof typeof companyImages]} className={styles.companyImage} alt={company.name} width={120} height={120} />
                            <span className={styles.seeMoore}>{experienceContent.company.seeMoore}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;