import styles from './Experience.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
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
                                <div className={styles.logoContainer}>
                                    <Image src={company.img} className={styles.companyImage} alt={company.alt} width={80} height={80} />
                                    <span className={styles.period}>{company.period}</span>
                                </div>
                                <div className={styles.companyInfo}>
                                    <span className={styles.companyName}>{company.alt}</span>
                                    <span className={styles.role}>{company.role}</span>
                                    <span className={styles.summary}>{company.summary}</span>
                                </div>
                            </div>
                            <span className={styles.seeMoore}>{experienceContent.company.seeMoore} <ChevronRight size={16} aria-hidden="true" /></span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
