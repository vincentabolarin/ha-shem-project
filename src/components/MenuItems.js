import styles from '../styles/MenuItems.module.css';

import dashboardIcon from '../assets/svg/dashboard-icon.svg';
import buttonIcon from '../assets/svg/button-icon.svg';
import menu1 from '../assets/svg/menu-1.svg';
import menu2 from '../assets/svg/menu-2.svg';
import menu3 from '../assets/svg/menu-3.svg';
import menu5 from '../assets/svg/menu-5.svg';
import menu6 from '../assets/svg/menu-6.svg';




const MenuItems = () => {
    return (
        <div className={styles.content}>
            <button className={styles.proButton}>
                <img src={buttonIcon} alt="Button Icon" className={styles.proIcon}/>

                <p className={styles.proText}>
                    Become a Pro
                </p>
            </button>

            <div className={styles.dashboardContainer}>
                <div class={styles.menuItem}>
                    <img src={dashboardIcon} alt="Dashboard Icon" className={styles.menuIcon} />
                    <p class={styles.menuText}>
                        Dashboard
                    </p>
                </div>

                <div class={styles.menuItem}>
                    <img src={menu1} alt="Menu 1" className={styles.menuIcon}/>
                    <p class={styles.menuText}>
                        Menu 1
                    </p>
                </div>

                <div class={styles.menuItem}>
                    <img src={menu2} alt="Menu 2" className={styles.menuIcon}/>

                    <p class={styles.menuText}>
                        Menu 2
                    </p>
                </div>

                <div class={styles.menuItem}>
                    <img src={menu3} alt="Menu 3" className={styles.menuIcon}/>
                    
                    <p class={styles.menuText}>
                        Menu 3
                    </p>
                </div>

                <div class={styles.menuItem}>
                    <img src={dashboardIcon} alt="Menu 4" className={styles.menuIcon}/>

                    <p class={styles.menuText}>
                        Menu 4
                    </p>
                </div>

                <div class={styles.menuItem}>
                    <img src={menu5} alt="Menu 5" className={styles.menuIcon}/>

                    <p class={styles.menuText}>
                        Menu 5
                    </p>
                </div>

                <div class={styles.menuItem}>
                    <img src={menu6} alt="Menu 6" className={styles.menuIcon}/>

                    <p class={styles.menuText}>
                        Menu 6
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default MenuItems;