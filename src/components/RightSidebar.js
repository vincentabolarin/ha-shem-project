import styles from '../styles/RightSidebar.module.css';

import TryPro from './TryPro'
import Calendar from './Calendar';
import ClientMeeting from './ClientMeeting';

const RightSidebar = () => {
    return (
        <div className={styles.content}>
            <TryPro />
            <Calendar />
            <ClientMeeting />
        </div>
    );
}
 
export default RightSidebar;