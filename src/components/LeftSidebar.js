import styles from '../styles/LeftSidebar.module.css'

import UserDetails from './UserDetails';

const LeftSidebar = () => {
    return (
        <div className={styles.content}>
            <UserDetails />
        </div>
    );
}
 
export default LeftSidebar;