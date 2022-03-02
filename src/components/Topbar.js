import styles from '../styles/Topbar.module.css';

import CenterTopbar from './CenterTopbar';
import RightTopbar from './RightTopbar';

const Topbar = () => {
    return (
        <div className={styles.content}>
            <CenterTopbar />
            <RightTopbar />
        </div>
    );
}
 
export default Topbar;