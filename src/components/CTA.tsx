import styles from './CTA.module.css';

export default function CTA() {
    return (
        <section className={styles.ctaSection} id="contact">
            <div className="container">
                <div className={styles.ctaContent}>
                    <h2>Ready to Start Your <span className="gradient-text">Tech Journey</span>?</h2>
                    <p>Join thousands of students who have transformed their careers through the GUVI × KEC partnership.</p>
                    <div className={styles.ctaButtons}>
                        <a href="#" className="btn btn-white btn-lg">
                            Get Started Free
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#" className="btn btn-ghost btn-lg">Contact Us</a>
                    </div>
                    <div className={styles.ctaFeatures}>
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20,6 9,17 4,12" />
                            </svg>
                            No credit card required
                        </span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20,6 9,17 4,12" />
                            </svg>
                            Free courses to start
                        </span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20,6 9,17 4,12" />
                            </svg>
                            Cancel anytime
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
