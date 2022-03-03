import styles from '../styles/ClientMeeting.module.css';

import callIcon from '../assets/svg/call-icon.svg';

const ClientMeeting = () => {
    return (
        <div className={styles.content}>
            <div className={styles.managerMeetingNew}>
                <div className={styles.managerMeeting}>
                    <p className={styles.manager}>
                        Project Manager
                    </p>

                    <p className={styles.meeting}>
                        Client Meeting
                    </p>
                </div>

                <p className={styles.new}>
                    <span className={styles.plus}>+</span> NEW
                </p>
            </div>
            <div className={styles.call}>
                <img src={callIcon} className={styles.callIcon}alt="Call Icon" />
                <span className={styles.callText}>
                    Swipe To Call
                </span>
            </div>
        </div>
    );
}
 
export default ClientMeeting;