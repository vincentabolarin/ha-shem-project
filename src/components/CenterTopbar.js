import styles from '../styles/CenterTopbar.module.css';

const CenterTopbar = () => {
    return (
        <div className={styles.content}>
            <p className={styles.dashboard}>
                Dashboard
            </p>
            <div className={styles.searchPlus}>
                <div className={styles.search}>

                </div>
                <div className={styles.plus}>

                </div>
            </div>
        </div>
    );
}
 
export default CenterTopbar;