import Image from 'next/image';
import styles from './TrustedBy.module.css';

const logos = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', alt: 'Netflix' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Meta_logo.svg', alt: 'Meta' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', alt: 'Amazon' },
];

export default function TrustedBy() {
    return (
        <section className={styles.trustedSection}>
            <div className="container">
                <p className={styles.trustedLabel}>Trusted by leading institutions and companies</p>
                <div className={styles.trustedLogos}>
                    {logos.map((logo) => (
                        <div key={logo.alt} className={styles.logoItem}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={120}
                                height={28}
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
