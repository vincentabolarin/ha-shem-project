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
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={`${styles.bar} ${styles.september}`}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            <div className={styles.months}>
                <div>
                    Jan
                </div>
                <div>
                    Feb
                </div>
                <div>
                    Mar
                </div>
                <div>
                    Apr
                </div>
                <div>
                    May
                </div>
                <div>
                    Jun
                </div>
                <div>
                    Jul
                </div>
                <div>
                    Aug
                </div>
                <div>
                    Sep
                </div>
                <div>
                    Oct
                </div>
                <div>
                    Nov
                </div>
                <div>
                    Dec
                </div>
            </div>
        </div>
    );
}
 
export default ProgressStats;