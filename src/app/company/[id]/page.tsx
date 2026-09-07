import styles from './page.module.css';
import details from '@/constants/details';
import { experienceContent } from '@/constants/texts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { CompanyExperience } from '@/types/portfolio';
import type { Metadata } from 'next';

const experiences = details as CompanyExperience[];

const getCompany = (id: string) => experiences.find((company) => company.id === parseInt(id, 10));

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const company = getCompany(id);

    if (!company) {
        return { title: 'Experiencia no encontrada | Jesús Müller' };
    }

    return {
        title: `${company.name} | Experiencia de Jesús Müller`,
        description: `Experiencia de Jesús Müller como Frontend Developer en ${company.name}, con proyectos, contribuciones y tecnologías utilizadas.`,
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
            <Link href="/#experience" className={styles.backLink}>
                <span aria-hidden="true">←</span> Volver a experiencia
            </Link>
            <div className={styles.companyTitle}>
                <div>
                    <p className={styles.eyebrow}>Trayectoria profesional</p>
                    <h1>{company.name}</h1>
                    <p className={styles.role}>Frontend Developer · Aplicaciones empresariales</p>
                    <span className={styles.workedTime}>
                        {company.workedTime.from} - {company.workedTime.to}
                    </span>
                </div>
                <Image src={company.img} width={120} height={120} alt={`Logo de ${company.name}`} />
            </div>
            <section className={styles.contextSection}>
                <h2>Contexto</h2>
                <p>{company.description}</p>
            </section>
            <section className={styles.myExperience}>
                <h2>Contribuciones</h2>
                {company.myExperience.map((exp, index) => (
                    <p key={index}><span className={styles.experienceMarker}>{String(index + 1).padStart(2, '0')}</span>{exp}</p>
                ))}
            </section>
            {company.projects && (
                <section className={styles.projectsSection}>
                    <h2>{experienceContent.company.projects}</h2>
                    <div className={styles.tagList}>
                        {company.projects.map((project) => <span key={project}>{project}</span>)}
                    </div>
                </section>
            )}
            <section className={styles.technologiesSection}>
                <h2>{experienceContent.company.technologies}</h2>
                <div className={styles.tagList}>
                    {company.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
            </section>
            <section className={styles.linksSection}>
                <h2>{experienceContent.company.links}</h2>
                <div className={styles.linkList}>
                    {company.experienceLinks.map((link) => (
                        <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer">
                            {link.label} <span aria-hidden="true">↗</span>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default CompanyDetail;
