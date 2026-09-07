import styles from './Experience.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { companies } from '@/constants/companies';
import { experienceContent } from '@/constants/texts';

const Experience = () => {
    return (
        <section className={styles.experience} id="experience">
            <div className={styles.experienceContainer}>
                <div className={styles.sectionTitle}>
                    <h2>{experienceContent.title}</h2>
                </div>
                <div className={styles.companiesContainer}>
                    {companies.map((company) => (
                        <Link href={`/company/${company.id}`} key={company.id} className={styles.company}>
                            <div className={styles.companyHeader}>
                                <Image src={company.img} className={styles.companyImage} alt={company.alt} width={88} height={88} />
                                <span className={styles.period}>{company.period}</span>
                            </div>
                            <span className={styles.companyName}>{company.alt}</span>
                            <span className={styles.role}>{company.role}</span>
                            <span className={styles.seeMoore}>{experienceContent.company.seeMoore} <span aria-hidden="true">↗</span></span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
