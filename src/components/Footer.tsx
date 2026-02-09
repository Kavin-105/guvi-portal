import Link from 'next/link';
import styles from './Footer.module.css';

const programs = [
    { name: 'Full Stack Development', href: '#' },
    { name: 'Data Science', href: '#' },
    { name: 'Cloud Computing', href: '#' },
    { name: 'Cyber Security', href: '#' },
    { name: 'UI/UX Design', href: '#' },
];

const resources = [
    { name: 'Practice Problems', href: '#' },
    { name: 'Coding Contests', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Webinars', href: '#' },
    { name: 'Community', href: '#' },
];

const company = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.footerBrand}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoGuvi}>GUVI</span>
                            <span className={styles.logoSeparator}>×</span>
                            <span className={styles.logoKec}>KEC</span>
                        </Link>
                        <p>Empowering the next generation of tech leaders through innovative education and industry partnerships.</p>
                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                                </svg>
                            </a>
                            <a href="#" aria-label="YouTube">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                                    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48 9.75,15.02" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>Programs</h4>
                        <ul>
                            {programs.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>Resources</h4>
                        <ul>
                            {resources.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>Company</h4>
                        <ul>
                            {company.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2025 GUVI × KEC. All rights reserved.</p>
                    <p>Made with ❤️ for future tech leaders</p>
                </div>
            </div>
        </footer>
    );
}
