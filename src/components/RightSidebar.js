import styles from '../styles/RightSidebar.module.css';

import TryPro from './TryPro'
import Calendar from './Calendar';

const RightSidebar = () => {
    return (
        <div className={styles.content}>
            <TryPro />
            <Calendar />
        </div>
    );
}
 
export default RightSidebar;