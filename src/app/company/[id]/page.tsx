import styles from './page.module.css';
import details from '@/constants/details';
import { experienceContent } from '@/constants/texts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import type { CompanyExperience } from '@/types/portfolio';
import type { Metadata } from 'next';

const experiences = details as CompanyExperience[];

const getCompany = (id: string) => experiences.find((company) => company.id === parseInt(id, 10));

export function generateStaticParams() {
    return experiences.map((company) => ({ id: String(company.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const company = getCompany(id);

    if (!company) {
        return { title: 'Experiencia no encontrada | Jesús Müller' };
    }

    return {
        title: `${company.name} | Experiencia de Jesús Müller`,
        description: `Experiencia de Jesús Müller en ${company.name}, con proyectos, contribuciones y tecnologías utilizadas.`,
        openGraph: {
            title: `${company.name} | Experiencia de Jesús Müller`,
            description: company.summary,
            type: 'website',
            siteName: 'Jesús Müller — Portfolio',
        },
    };
}

const CompanyDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const company = getCompany(id);

    if (!company) {
        notFound();
    }

    return (
        <div className={styles.companyContainer}>
            <Link href="/#experience" className={styles.backLink} aria-label="Volver a experiencia">
                <ChevronLeft size={16} />
                Volver
            </Link>
            <div className={styles.companyTitle}>
                <div>
                    <h1>{company.name}</h1>
                    <span className={styles.workedTime}>
                        {company.workedTime.from} - {company.workedTime.to}
                    </span>
                </div>
                <Image src={company.img} className={styles.companyLogo} width={120} height={120} alt={`Logo de ${company.name}`} />
            </div>
            <section className={`${styles.myExperience} ${styles.fadeIn}`}>
                {company.myExperience.map((exp, index) => (
                    <div key={index} className={styles.experienceEntry}>
                        <h3 className={styles.experienceTitle}>{exp.subtitle}</h3>
                        <p>{exp.description}</p>
                        {exp.highlights && exp.highlights.length > 0 && (
                            <ul className={styles.highlights}>
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>
            <section className={`${styles.technologiesSection} ${styles.fadeIn}`}>
                <h2>{experienceContent.company.technologies}</h2>
                <div className={styles.tagList}>
                    {company.technologies.map((technology) => <span key={technology} className={styles.tagTech}>{technology}</span>)}
                </div>
            </section>
            {company.projects && (
                <section className={`${styles.projectsSection} ${styles.fadeIn}`}>
                    <h2>{experienceContent.company.projects}</h2>
                    <ul className={styles.projectsList}>
                        {company.projects.map((project) => <li key={project}>{project}</li>)}
                    </ul>
                </section>
            )}
        </div>
    );
}

export default CompanyDetail;
