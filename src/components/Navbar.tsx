'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navbarContent}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoGuvi}>GUVI</span>
                    <span className={styles.logoSeparator}>×</span>
                    <span className={styles.logoKec}>KEC</span>
                </Link>

                <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
                    <li><Link href="#courses" onClick={closeMobileMenu}>Courses</Link></li>
                    <li><Link href="#practice" onClick={closeMobileMenu}>Practice</Link></li>
                    <li><Link href="#internships" onClick={closeMobileMenu}>Internships</Link></li>
                    <li><Link href="#achievements" onClick={closeMobileMenu}>Achievements</Link></li>
                    <li>
                        <Link href="#contact" className="btn btn-primary btn-nav" onClick={closeMobileMenu}>
                            Get Started
                        </Link>
                    </li>
                </ul>

                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}
