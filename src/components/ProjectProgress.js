import styles from '../styles/ProjectProgress.module.css';


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

            </div>
        </div>
    );
}
 
export default ProjectProgress;