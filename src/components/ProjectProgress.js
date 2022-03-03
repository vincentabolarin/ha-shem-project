import styles from '../styles/ProjectProgress.module.css';

import userIcon from '../assets/jpg/vincent-abolarin.jpg';

const ProjectProgress = () => {
    return (
        <div className={styles.content}>
            <div className={styles.projectList}>
                <div className={styles.project1}>
                    <p className={styles.projectName}>
                        App Design
                    </p>

                    <p className={styles.projectDate}>
                        03 March, 2022
                    </p>
                </div>

                <div className={styles.project2}>
                    <p className={styles.projectName}>
                        App Design
                    </p>

                    <p className={styles.projectDate}>
                        03 March, 2022
                    </p>
                </div>

                <div className={styles.project3}>
                    <p className={styles.projectName}>
                        App Design
                    </p>

                    <p className={styles.projectDate}>
                        03 March, 2022
                    </p>
                </div>
            </div>

            <div className={styles.usersProgress}>
                <div className={styles.users}>
                    <img src={userIcon} alt="User Icon" className={styles.userIcon} />
                    <img src={userIcon} alt="User Icon" className={styles.userIcon} />
                    <img src={userIcon} alt="User Icon" className={styles.userIcon} />
                </div>

                <div className={styles.progress}>
                    <div className={styles.progressBar}>

                    </div>
                    <p className={styles.progressText}>
                        80%
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default ProjectProgress;