'use client';

import styles from './Courses.module.css';

interface Course {
    title: string;
    description: string;
    duration: string;
    enrolled: string;
    icon: React.ReactNode;
    featured?: boolean;
}

const courses: Course[] = [
    {
        title: 'Full Stack Development',
        description: 'Master MERN stack with React, Node.js, Express, and MongoDB. Build production-ready applications.',
        duration: '6 Months',
        enrolled: '2.5K+',
        featured: true,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
    },
    {
        title: 'Data Science & AI',
        description: 'Learn Python, Machine Learning, Deep Learning, and deploy AI models at scale.',
        duration: '8 Months',
        enrolled: '1.8K+',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        title: 'Cloud Computing',
        description: 'AWS, Azure, and GCP certifications with hands-on DevOps practices and microservices.',
        duration: '4 Months',
        enrolled: '1.2K+',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        title: 'Cyber Security',
        description: 'Ethical hacking, penetration testing, and security certifications for enterprise systems.',
        duration: '5 Months',
        enrolled: '900+',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
];

export default function Courses() {
    return (
        <section className={`section ${styles.coursesSection}`} id="courses">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Courses & Certifications</span>
                    <h2 className="section-title">Industry-Ready <span className="gradient-text">Curriculum</span></h2>
                    <p className="section-subtitle">
                        Master in-demand technologies with our comprehensive courses designed
                        by industry experts and aligned with market requirements.
                    </p>
                </div>
                <div className={styles.coursesGrid}>
                    {courses.map((course, index) => (
                        <div key={index} className={`${styles.courseCard} ${course.featured ? styles.featured : ''}`}>
                            {course.featured && <div className={styles.courseBadge}>Most Popular</div>}
                            <div className={styles.courseIcon}>{course.icon}</div>
                            <h3 className={styles.courseTitle}>{course.title}</h3>
                            <p className={styles.courseDesc}>{course.description}</p>
                            <div className={styles.courseMeta}>
                                <span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12,6 12,12 16,14" />
                                    </svg>
                                    {course.duration}
                                </span>
                                <span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                                    </svg>
                                    {course.enrolled} Enrolled
                                </span>
                            </div>
                            <a href="#" className={`btn ${course.featured ? 'btn-primary' : 'btn-outline'} btn-full`}>
                                {course.featured ? 'Enroll Now' : 'Learn More'}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
