import styles from '../styles/Topbar.module.css';

import CenterTopbar from './CenterTopbar';

const Topbar = () => {
    return (
        <div className={styles.content}>
            <CenterTopbar />
        </div>
    );
}
 
export default Topbar;