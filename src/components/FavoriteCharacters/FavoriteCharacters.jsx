import styles from './FavoriteCharacters.module.css';

const FavoriteCharacters = () => {
    return (
        <div>
        <h1>Мои любимые персы</h1>
        <div className={styles.character_list}>
            <div className={styles.character_card}>
                <div>
                    <img className={styles.character_img} src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
                </div>
                <div className={styles.character_info}>
                    <div>
                        <span>Luke Skywalker</span>
                    </div>
                    <div>
                        <button>
                            ❤
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FavoriteCharacters;