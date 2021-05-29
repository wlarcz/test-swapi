import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.menu}>
                {/* <li><a href="/main" className={styles.menuLink}>Главная</a></li> */}
                <li><NavLink exact to="/" className={styles.menuLink} activeClassName={styles.activeLink}>Главная</NavLink></li>
                <li><NavLink to="/favorites" className={styles.menuLink} activeClassName={styles.activeLink}>Любимые герои</NavLink></li> 
            </ul>
        </header>
    )
}

export default Header;