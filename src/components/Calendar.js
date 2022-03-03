import styles from '../styles/Calendar.module.css';

import previousArrow from '../assets/svg/previous-arrow.svg';
import nextArrow from '../assets/svg/next-arrow.svg';

const Calendar = () => {

    const daysOfWeek = [
        'S', 'M', 'T', 'W', 'T', 'F', 'S'
    ]
    return (
        <div className={styles.content}>
            <div className={styles.months}>
                <span className={styles.previousArrow}>
                    <img src={previousArrow} alt="Previous Arrow" />
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
                <   img src={nextArrow} alt="Previous Arrow" />
                </span>
            </div>

            <div className={styles.dayOfWeek}>
                {
                    daysOfWeek.map((day) =>
                        <div>
                            {day}
                        </div>
                    )
                }
            </div>
        </div>
    );
}
 
export default Calendar;