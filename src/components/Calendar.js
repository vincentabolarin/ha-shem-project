import styles from '../styles/Calendar.module.css';

const Calendar = () => {
    return (
        <div className={styles.content}>
            <div className={styles.months}>
                <span className={styles.previousArrow}>
                    &lt;
                </span>
                <span className={styles.previousMonth}>
                    February
                </span>
                <span className={styles.currentMonth}>
                    March
                </span>
                <span className={styles.nextMonth}>
                    April
                </span>
                <span className={styles.nextArrow}>
                    &gt;
                </span>
            </div>
        </div>
    );
}
 
export default Calendar;