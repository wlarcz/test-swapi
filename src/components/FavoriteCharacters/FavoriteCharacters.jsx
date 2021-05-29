import CharacterItem from '../CharacterItem/CharacterItem';
import styles from './FavoriteCharacters.module.css';

const FavoriteCharacters = (props) => {

    let favoriteCharactersElements = props.favoriteCharacters
        .map(card => <CharacterItem name={card.name} />);

    return (
        <div>
        <h1>Мои любимые персы</h1>
        <div className={styles.character_list}>
            {favoriteCharactersElements}
        </div>
        </div>
    )
}

export default FavoriteCharacters;