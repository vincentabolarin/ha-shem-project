import styles from '../styles/MainContent.module.css';

import ProjectProgress from './ProjectProgress';

const MainContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.projectsHeading}>
                <p class={styles.projectSelection}>
                    Ongoing Projects
                </p>

                <div className={styles.projectStatusContainer}>
                    <p className={styles.projectStatus}>
                        Remaining
                    </p>
                    <p className={styles.projectStatus}>
                        Ongoing
                    </p>
                    <p className={styles.projectStatus}>
                        Completed
                    </p>
                </div>
            </div>
            <ProjectProgress />
        </div>
    );
}
 
export default MainContent;