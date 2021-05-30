import CharacterItem from '../CharacterItem/CharacterItem';
import styles from './FavoriteCharacters.module.css';
import { addToFavoriteActionCreator, deleteFromFavoriteActionCreator } from '../../redux/character-reducer';

const FavoriteCharacters = (props) => {

    let favoriteCharactersElements = props.favoriteCharacters.favoriteCharacters
        .map(card => <CharacterItem name={card.name} />);

        let addToFavorite = () => {
            props.dispatch(addToFavoriteActionCreator());
        }

        let deleteFromFavorite = () => {
            props.dispatch(deleteFromFavoriteActionCreator());
        }
    return (
        <div>
        <h1>Мои любимые персы</h1>
        <button onClick={ () => {addToFavorite()} }>ДОБАВИТЬ ПЕРСА</button>
        <button onClick={ () => {deleteFromFavorite()} }>УДАЛИТЬ ПЕРСА</button>
        <div className={styles.character_list}>
            {favoriteCharactersElements}
        </div>
        </div>
    )
}

export default FavoriteCharacters;