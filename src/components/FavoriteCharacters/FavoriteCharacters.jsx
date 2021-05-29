import CharacterItem from '../CharacterItem/CharacterItem';
import styles from './FavoriteCharacters.module.css';

const FavoriteCharacters = () => {
    return (
        <div>
        <h1>Мои любимые персы</h1>
        <div className={styles.character_list}>
            <CharacterItem name={'Luke'}/>
        </div>
        </div>
    )
}

export default FavoriteCharacters;