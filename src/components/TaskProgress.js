import styles from '../styles/TaskProgress.module.css';

import tasksIcon1 from '../assets/svg/task-progress-1.svg';
import tasksIcon2 from '../assets/svg/task-progress-2.svg';
import tasksIcon3 from '../assets/svg/task-progress-3.svg';


const TaskProgress = () => {
    return (
        <div className={styles.content}>
            <div className={styles.tasksIconText}>
                <img src={tasksIcon1} alt="Tasks Icon 1" className={styles.tasksIcon} />
                
                <div className={styles.tasksText}>
                    <p className={styles.taskStatus}>
                        Tasks Remaining
                    </p>

                    <p className={styles.taskNumber}>
                        12/15
                    </p>
                </div>
            </div>

            <div className={styles.tasksIconText}>
                <img src={tasksIcon2} alt="Tasks Icon 2" className={styles.tasksIcon} />
                
                <div className={styles.tasksText}>
                    <p className={styles.taskStatus}>
                        Tasks Remaining
                    </p>

                    <p className={styles.taskNumber}>
                        12/15
                    </p>
                </div>
            </div>

            <div className={styles.tasksIconText}>
                <img src={tasksIcon3} alt="Tasks Icon 3" className={styles.tasksIcon} />
                
                <div className={styles.tasksText}>
                    <p className={styles.taskStatus}>
                        Tasks Remaining
                    </p>

                    <p className={styles.taskNumber}>
                        12/15
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default TaskProgress;