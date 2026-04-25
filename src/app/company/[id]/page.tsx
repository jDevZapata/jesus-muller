import styles from './page.module.css';
import details from '@/constants/details';
import { experienceContent } from '@/constants/texts';
import Image from 'next/image';
import Link from 'next/link';

const CompanyDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const company = details.find(c => c.id === parseInt(id));

    if (!company) {
        return null;
    }

    return (
        <div className={styles.companyContainer}>
            <Link href="/" className={styles.backLink}>
                ← Volver
            </Link>
            <div className={styles.companyTitle}>
                <div>
                    <h2>{company.name}</h2>
                    <span className={styles.workedTime}>
                        <b>({company.workedTime.from} - {company.workedTime.to})</b>
                    </span>
                </div>
                <Image src={company.img} width={120} height={120} alt={company.name} />
            </div>
            <p>{company.description}</p>
            <div className={styles.myExperience}>
                {company.myExperience.map((exp, index) => (
                    <p key={index}>{exp}</p>
                ))}
            </div>
            <div className={styles.linksSection}>
                <strong>{experienceContent.company.links}</strong>
                {company.experienceLinks.map((link) => (
                    <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer">
                        {link.label}
                    </a>
                ))}
            </div>
            <div className={styles.technologiesSection}>
                <strong>{experienceContent.company.technologies}</strong> <b>{company.technologies.join(', ')}.</b>
            </div>
            {company.projects && (
                <div className={styles.projectsSection}>
                    <strong>{experienceContent.company.projects}</strong> <b>{company.projects.join(', ')}.</b>
                </div>
            )}
        </div>
    );
}

export default CompanyDetail;
