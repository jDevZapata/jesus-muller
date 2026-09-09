'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './Technologies.module.css';
import { technologiesContent } from '@/constants/texts';
import technologies from '@/constants/technologies';
import Image from 'next/image';

import 'swiper/css';

const Technologies = () => {
    return (
        <section className={styles.technologiesSection} id="technology">
            <div className={styles.technologiesInner}>
                <p className={styles.eyebrow}>Stack actual</p>
                <h2>{technologiesContent.title}</h2>
                <div className={styles.description}>
                    {technologiesContent.description}
                </div>
                <Swiper
modules={[Autoplay]}
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={32}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className={styles.swiper}
                >
                    {technologies.map((tech) => (
                        <SwiperSlide key={tech.id}>
                            <div className={styles.technologyItem}>
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    height={48}
                                    width={48}
                                    loading="lazy"
                                />
                                <span className={styles.technologyName}>{tech.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Technologies;
