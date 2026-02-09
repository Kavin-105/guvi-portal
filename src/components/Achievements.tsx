'use client';

import { useEffect, useRef } from 'react';
import styles from './Achievements.module.css';

const stats = [
    { value: 5000, suffix: '+', title: 'Students Trained', desc: 'Since partnership began', icon: 'users' },
    { value: 95, suffix: '%', title: 'Placement Rate', desc: 'Industry placements', icon: 'briefcase' },
    { value: 12, prefix: '₹', suffix: 'L', title: 'Highest Package', desc: 'Annual CTC offered', icon: 'award' },
    { value: 50, suffix: '+', title: 'Hiring Partners', desc: 'Top tech companies', icon: 'check' },
];

const testimonials = [
    {
        content: "The GUVI × KEC program transformed my career. The hands-on projects and industry mentorship helped me land my dream job at a product company.",
        author: 'Rahul Sharma',
        role: 'Software Engineer at Google',
        initials: 'RS',
    },
    {
        content: "From zero coding knowledge to becoming a full-stack developer in 6 months. The structured curriculum and peer learning made all the difference.",
        author: 'Priya Kumar',
        role: 'Frontend Developer at Microsoft',
        initials: 'PK',
    },
    {
        content: "The mock interviews and placement training were incredibly valuable. I felt completely prepared when facing real interviews.",
        author: 'Arun Venkat',
        role: 'Data Scientist at Amazon',
        initials: 'AV',
    },
];

const getIcon = (type: string) => {
    switch (type) {
        case 'users':
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
            );
        case 'briefcase':
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
            );
        case 'award':
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
            );
    }
};

export default function Achievements() {
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateCounters = () => {
            const counters = statsRef.current?.querySelectorAll('[data-count]');
            if (!counters) return;

            counters.forEach((counter) => {
                const target = parseInt(counter.getAttribute('data-count') || '0');
                const duration = 2000;
                const startTime = performance.now();

                const updateCounter = (currentTime: number) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(target * easeOut);
                    counter.textContent = current.toString();

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toString();
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
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`section ${styles.achievementsSection}`} id="achievements">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Success Stories</span>
                    <h2 className="section-title">Student <span className="gradient-text">Achievements</span></h2>
                    <p className="section-subtitle">
                        Our students have secured positions at top tech companies and
                        are making their mark in the industry.
                    </p>
                </div>
                <div className={styles.statsGrid} ref={statsRef}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.statIcon}>{getIcon(stat.icon)}</div>
                            <div className={styles.statValue}>
                                {stat.prefix}<span data-count={stat.value}>0</span>{stat.suffix}
                            </div>
                            <div className={styles.statTitle}>{stat.title}</div>
                            <div className={styles.statDesc}>{stat.desc}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.testimonials}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            <div className={styles.testimonialContent}>
                                <p>&ldquo;{testimonial.content}&rdquo;</p>
                            </div>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorAvatar}>{testimonial.initials}</div>
                                <div className={styles.authorInfo}>
                                    <strong>{testimonial.author}</strong>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
