import styles from '../styles/CenterTopbar.module.css';

import searchIcon from '../assets/svg/search-icon.svg';

const CenterTopbar = () => {
    return (
        <div className={styles.content}>
            <p className={styles.dashboard}>
                Dashboard
            </p>
            <div className={styles.searchPlus}>
                    <div className={styles.search}>
                        <img src={searchIcon} alt="Search Icon" />
                        
                        <input type="text" className={styles.searchInput} placeholder="Search here..."/>
                    </div>
                
                <p className={styles.plus}>
                    +
                </p>
            </div>
        </div>
    );
}
 
export default CenterTopbar;