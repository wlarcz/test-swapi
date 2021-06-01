import styles from './CharacterItem.module.css'

const CharacterItem = (props) => {
    debugger
    return (
        <div className={styles.character_card}>
            <div>
                {/* <img className={styles.character_img} src="https://starwars-visualguide.com/assets/img/characters/1.jpg" /> */}
                {/* <img className={styles.character_img} src={`https://starwars-visualguide.com/assets/img/characters/${3}.jpg`} /> */}
                <img className={styles.character_img} src={props.imgUrl} />
            </div>
            <div className={styles.character_info}>
                <div>
                    <span>{props.name}</span>
                </div>
                <div>
                    {<button onClick={ () => {
                        debugger
                        props.addToFavorite(props.name, props.imgUrl)} } >
                        ❤
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;