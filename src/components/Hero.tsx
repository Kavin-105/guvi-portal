'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateCounters = () => {
            const counters = statsRef.current?.querySelectorAll('[data-count]');
            if (!counters) return;

            counters.forEach((counter) => {
                const target = parseInt(counter.getAttribute('data-count') || '0');
                const duration = 2000;
                const start = 0;
                const startTime = performance.now();

                const updateCounter = (currentTime: number) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(start + (target - start) * easeOut);

                    const suffix = counter.textContent?.replace(/[0-9]/g, '') || '';
                    counter.textContent = current + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                };

                requestAnimationFrame(updateCounter);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.heroBgGradient}></div>
            <div className={`container ${styles.heroContent}`}>
                <div className={`${styles.heroBadge} animate-fade-in`}>
                    <span className={styles.badgeDot}></span>
                    Strategic Partnership 2025
                </div>
                <h1 className={`${styles.heroTitle} animate-fade-in-up`}>
                    Empowering <span className="gradient-text">Future Tech Leaders</span>
                </h1>
                <p className={`${styles.heroSubtitle} animate-fade-in-up delay-1`}>
                    A transformative collaboration between GUVI and Kongu Engineering College,
                    bridging the gap between academia and industry through world-class tech education.
                </p>
                <div className={`${styles.heroCta} animate-fade-in-up delay-2`}>
                    <a href="#courses" className="btn btn-primary btn-lg">
                        Explore Courses
                        <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#about" className="btn btn-secondary btn-lg">
                        Learn More
                    </a>
                </div>
                <div className={`${styles.heroStats} animate-fade-in-up delay-3`} ref={statsRef}>
                    <div className={styles.heroStat}>
                        <span className={styles.statNumber} data-count="5000">0</span>
                        <span className={styles.statLabel}>Students Enrolled</span>
                    </div>
                    <div className={styles.heroStat}>
                        <span className={styles.statNumber} data-count="50">0</span>
                        <span className={styles.statLabel}>Courses Available</span>
                    </div>
                    <div className={styles.heroStat}>
                        <span className={styles.statNumber} data-count="95">0</span>
                        <span className={styles.statLabel}>% Placement Rate</span>
                    </div>
                </div>
            </div>
            <div className={styles.heroVisual}>
                <div className={`${styles.floatingCard} ${styles.card1}`}>
                    <div className={`${styles.cardIcon} ${styles.green}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>
                    <span>Industry Certification</span>
                </div>
                <div className={`${styles.floatingCard} ${styles.card2}`}>
                    <div className={`${styles.cardIcon} ${styles.blue}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <span>Hands-on Coding</span>
                </div>
                <div className={`${styles.floatingCard} ${styles.card3}`}>
                    <div className={`${styles.cardIcon} ${styles.purple}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span>Career Ready</span>
                </div>
            </div>
        </section>
    );
}
