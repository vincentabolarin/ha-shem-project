import styles from '../styles/TryPro.module.css';

import tryProImage from '../assets/svg/try-pro-image.svg';

const TryPro = () => {
    return (
        <div className={styles.content}>
            <img src={tryProImage} alt="Try Pro Version" className={styles.tryProImage} />
            <div className={styles.tryProText}>
                <p className={styles.tryProHeading}>
                    Try PRO version
                </p>

                <p className={styles.tryProDescription}>
                    Unlock the full power of Calendar for 2 weeks for free!
                </p>
            </div>
        </div>
    );
}
 
export default TryPro;