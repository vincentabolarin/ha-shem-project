import userImage from '../assets/vincent-abolarin.jpg';
import styles from '../styles/UserDetails.module.css'

const UserDetails = () => {
    return (
        <main class="userDetails">
            <img src={userImage} alt="Vincent Abolarin" class={styles.userImage} />
            <p class="userName">
                Vincent Abolarin
            </p>
            <p className="userRole">
                Frontend Engineer
            </p>
        </main>
    );
}

export default UserDetails;