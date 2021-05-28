import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li><a href="#" className={styles.menuLink}>Главная</a></li>
                <li><a href="#" className={styles.menuLink}>Любимые герои</a></li>
            </ul>
        </div>
    )
}

export default Header;