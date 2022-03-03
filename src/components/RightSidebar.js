import styles from '../styles/RightSidebar.module.css';

import TryPro from './TryPro'

const RightSidebar = () => {
    return (
        <div className={styles.content}>
            <TryPro />
        </div>
    );
}
 
export default RightSidebar;