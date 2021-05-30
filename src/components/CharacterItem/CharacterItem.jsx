import styles from './CharacterItem.module.css'

const CharacterItem = (props) => {
    return (
        <div className={styles.character_card}>
            <div>
                <img className={styles.character_img} src="https://starwars-visualguide.com/assets/img/characters/1.jpg" />
            </div>
            <div className={styles.character_info}>
                <div>
                    <span>{props.name}</span>
                </div>
                <div>
                    <button onClick={ () => {} } >
                        ❤
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;