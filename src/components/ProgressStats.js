import styles from '../styles/ProgressStats.module.css';

const ProgressStats = () => {
    return (
        <div className={styles.content}>
            <div className={styles.progressHeading}>
                <p className={styles.stats}>
                    Progress Stats
                </p>
                <div className={styles.dayWeekMonth}>
                    <p className={styles.day}>
                        day
                    </p>

                    <p className={styles.week}>
                        week
                    </p>

                    <p className={styles.month}>
                        month
                    </p>
                </div>
            </div>

            <div className={styles.graph}>
                <div>
                    <div className={styles.bar}></div>
                    <p>Jan</p>
                </div>
                <div>
                    <div className={styles.bar}></div>
                    <p>Feb</p>
                </div>
                <div>
                    <div className={styles.bar}></div>
                    <p>Mar</p>
                </div>
                <div>
                    <div className={styles.bar}></div>
                    <p>Apr</p>
                </div>
                <div>
                    <div className={styles.bar}></div>
                    <p>May</p>
                </div>
                <div>
                    <div className={styles.bar}></div>
                    <p>Jun</p>
                </div>
                <div>
                    <div className={styles.bar}></div>
                    <p>Jul</p>
                </div>
                <div>
                    <div className={styles.bar}></div>
                    <p>Aug</p>
                </div>
                <div>
                    <div className={`${styles.bar} ${styles.september}`}></div>
                    <p>Sep</p>
                </div>
                <div>
                    <div className={styles.bar}></div>
                    <p>Oct</p>
                </div>
                <div>
                    <div className={styles.bar}></div>
                    <p>Nov</p>
                </div>
                <div>
                    <div className={styles.bar}></div>
                    <p>Dec</p>
                </div>
            </div>
        </div>
    );
}
 
export default ProgressStats;