'use client';

import { GraduationCap, ExternalLink, Globe } from 'lucide-react';
import { educationContent } from '@/constants/texts';
import styles from './Education.module.css';

const Education = () => {
    return (
        <section className={styles.education}>
            <div className={styles.educationInner}>
                <div className={styles.title}>
                    <h2>{educationContent.title}</h2>
                </div>

                <div className={styles.universityCard}>
                    <div className={styles.universityIcon}>
                        <GraduationCap size={32} />
                    </div>
                    <div className={styles.universityInfo}>
                        <h3>{educationContent.university.degree}</h3>
                        <p>{educationContent.university.name}</p>
                        <span>{educationContent.university.year}</span>
                    </div>
                </div>

                <div className={styles.certifications}>
                    <h3>{educationContent.certificationTitle}</h3>
                    <div className={styles.certificationsGrid}>
                        {educationContent.certifications.map((cert) => {
                            const CardTag = cert.url ? 'a' : 'div';
                            const cardProps = cert.url
                                ? {
                                      href: cert.url,
                                      target: '_blank',
                                      rel: 'noopener noreferrer',
                                      'aria-label': `Ver certificación ${cert.name}`,
                                  }
                                : {};
                            return (
                                <CardTag
                                    key={cert.id}
                                    className={`${styles.certificationCard} ${cert.url ? styles.certificationCardLink : ''}`}
                                    {...cardProps}
                                >
                                    <div className={styles.certIcon}>
                                        {cert.platform === 'Udemy' ? (
                                            <svg className={styles.udemyLogo} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055-1.428 0-2.947-.991-2.947-3.027v-7.878z" fill="#A435F0" />
                                            </svg>
                                        ) : (
                                            <Globe size={20} />
                                        )}
                                    </div>
                                    <div className={styles.certInfo}>
                                        <span className={styles.certPlatform}>{cert.platform}</span>
                                        <span className={styles.certName}>{cert.name}</span>
                                    </div>
                                    {cert.url && <ExternalLink size={16} className={styles.certLinkIcon} />}
                                </CardTag>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
