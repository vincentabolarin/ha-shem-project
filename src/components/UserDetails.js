import userImage from '../assets/jpg/vincent-abolarin.jpg';
import styles from '../styles/UserDetails.module.css';

const UserDetails = () => {
    return (
        <main class="userDetails">
            <img src={userImage} alt="Vincent Abolarin" class={styles.userImage} />
            <a href="https://www.github.com/vincentabolarin" class={styles.userName}>
                <p>
                    Vincent Abolarin
                </p>
            </a>
            <p className={styles.userRole}>
                Frontend Engineer
            </p>
        </main>
    );
}

export default UserDetails;