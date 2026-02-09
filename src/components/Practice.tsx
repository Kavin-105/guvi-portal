import styles from './Practice.module.css';

export default function Practice() {
    return (
        <section className={`section ${styles.practiceSection}`} id="practice">
            <div className="container">
                <div className={styles.practiceContent}>
                    <div className={styles.practiceText}>
                        <span className="section-tag">Hands-on Learning</span>
                        <h2 className="section-title">Code. Practice. <span className="gradient-text">Master.</span></h2>
                        <p className="section-subtitle">
                            Our integrated coding environment provides real-time feedback,
                            competitive programming challenges, and project-based learning experiences.
                        </p>
                        <ul className={styles.featureList}>
                            <li>
                                <div className={styles.featureIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20,6 9,17 4,12" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>5000+ Coding Challenges</strong>
                                    <p>From beginner to advanced levels across multiple languages</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.featureIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20,6 9,17 4,12" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Real-time Code Execution</strong>
                                    <p>Write, run, and debug code directly in your browser</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.featureIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20,6 9,17 4,12" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Weekly Contests</strong>
                                    <p>Compete with peers and climb the leaderboard</p>
                                </div>
                            </li>
                            <li>
                                <div className={styles.featureIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20,6 9,17 4,12" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>AI-Powered Hints</strong>
                                    <p>Get intelligent suggestions to improve your solutions</p>
                                </div>
                            </li>
                        </ul>
                        <a href="#" className="btn btn-primary btn-lg">Start Practicing</a>
                    </div>
                    <div className={styles.practiceVisual}>
                        <div className={styles.codeEditorMockup}>
                            <div className={styles.editorHeader}>
                                <div className={styles.editorDots}>
                                    <span className={`${styles.dot} ${styles.red}`}></span>
                                    <span className={`${styles.dot} ${styles.yellow}`}></span>
                                    <span className={`${styles.dot} ${styles.greenDot}`}></span>
                                </div>
                                <span className={styles.editorTitle}>solution.py</span>
                            </div>
                            <div className={styles.editorContent}>
                                <pre><code>
                                    {`1   def solve(arr, target):
2       seen = {}
3       for i, num in enumerate(arr):
4           complement = target - num
5           if complement in seen:
6               return [seen[complement], i]
7           seen[num] = i
8       return []
9
10  # Test case passed ✓`}
                                </code></pre>
                            </div>
                            <div className={styles.editorOutput}>
                                <span className={styles.outputSuccess}>✓ All test cases passed (15ms)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
