import styles from './CharacterItem.module.css'

const CharacterItem = (props) => {
    debugger
    return (
        <div className={styles.character_card}>
            <div>
                <img className={styles.character_img} src={props.imgUrl} />
            </div>
            <div className={styles.character_info}>
                <div>
                    <span>{props.name}</span>
                </div>
                <div>
                    {props.isFavorite ?
                        <button onClick={() => { props.deleteFromFavorite() }}>
                            Х
                    </button> :
                    <button onClick={() => { props.addToFavorite(props.name, props.imgUrl, props.isFavorite) }}>
                            ❤
                    </button>

                    }
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;