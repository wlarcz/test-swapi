import styles from './CharacterItem.module.css';

const CharacterItem = (props) => {
    
    return (
        <div className={styles.character_card}>
            <div>
                <img className={styles.character_img} src={props.imgUrl} alt='character'/>
            </div>
            <div className={styles.character_info}>
                <div>
                    <span>{props.name}</span>
                </div>
                <div className={styles.favButton}>
                    {props.isFavorite ?
                    //     <button onClick={() => { props.deleteFromFavorite() }}>
                    //         Х
                    // </button> 
                    <div></div>:
                    <button type='submit'onClick={() => {props.addToFavorite(props.name, props.imgUrl, props.isFavorite)}}>
                            ❤
                    </button>

                    }
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;