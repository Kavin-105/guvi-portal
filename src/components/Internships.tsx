import styles from './Internships.module.css';

const internshipCards = [
    {
        title: 'Industry Internships',
        description: '6-month paid internships at leading tech companies with mentorship and real project experience.',
        perks: ['Paid stipend', 'Mentorship program', 'Certificate on completion'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
            </svg>
        ),
    },
    {
        title: 'Placement Training',
        description: 'Comprehensive preparation for technical interviews, aptitude tests, and soft skills development.',
        perks: ['Mock interviews', 'Resume building', 'Aptitude training'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22,4 12,14.01 9,11.01" />
            </svg>
        ),
    },
    {
        title: 'Global Opportunities',
        description: 'Connect with international tech hubs and explore remote work opportunities worldwide.',
        perks: ['Remote positions', 'Global network', 'Visa sponsorship support'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
        ),
    },
];

const hiringPartners = ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture', 'Capgemini', 'HCL', 'Tech Mahindra'];

export default function Internships() {
    return (
        <section className={`section ${styles.internshipsSection}`} id="internships">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Career Opportunities</span>
                    <h2 className="section-title">Internships & <span className="gradient-text">Placements</span></h2>
                    <p className="section-subtitle">
                        Get exclusive access to internship opportunities and placement training
                        with top tech companies through our industry partnerships.
                    </p>
                </div>
                <div className={styles.internshipFeatures}>
                    {internshipCards.map((card, index) => (
                        <div key={index} className={styles.internshipCard}>
                            <div className={styles.internshipIcon}>{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <ul className={styles.internshipPerks}>
                                {card.perks.map((perk, i) => (
                                    <li key={i}>
                                        <span className={styles.check}>✓</span> {perk}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={styles.hiringPartners}>
                    <h4>Our Hiring Partners</h4>
                    <div className={styles.partnersScroll}>
                        {hiringPartners.map((partner, index) => (
                            <div key={index} className={styles.partnerLogo}>{partner}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
