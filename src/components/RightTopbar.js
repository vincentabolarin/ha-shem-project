import styles from '../styles/RightTopbar.module.css';

import notificationIcon from '../assets/svg/notification-icon.svg';
import settingIcon from '../assets/svg/setting-icon.svg';

const RightTopbar = () => {
    return (
        <div className={styles.content}>
            <div className={styles.notificationContainer}>
                <img src={notificationIcon} alt="Notification Icon" className={styles.notificationIcon} />
            </div>
                
            <div className={styles.settingContainer}>
                <img src={settingIcon} alt="Setting Icon" className={styles.settingIcon} />
            </div>
        </div>
    );
}
 
export default RightTopbar;