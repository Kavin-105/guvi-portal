import styles from './TrustedBy.module.css';

export default function TrustedBy() {
    return (
        <section className={styles.trustedSection}>
            <div className="container">
                <p className={styles.trustedLabel}>Trusted by leading institutions and companies</p>
                <div className={styles.trustedLogos}>
                    <div className={styles.logoItem}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
                    </div>
                    <div className={styles.logoItem}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
                    </div>
                    <div className={styles.logoItem}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
                    </div>
                    <div className={styles.logoItem}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Meta_logo.svg" alt="Meta" />
                    </div>
                    <div className={styles.logoItem}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
                    </div>
                </div>
            </div>
        </section>
    );
}
