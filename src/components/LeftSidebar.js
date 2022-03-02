import styles from '../styles/LeftSidebar.module.css';

import UserDetails from './UserDetails';
import MenuItems from './MenuItems';

const LeftSidebar = () => {
    return (
        <div className={styles.content}>
            <UserDetails />
            <MenuItems />
        </div>
    );
}
 
export default LeftSidebar;