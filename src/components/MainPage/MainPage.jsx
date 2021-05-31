// import { addToFavoriteActionCreator, deleteFromFavoriteActionCreator } from '../../redux/character-reducer';
import store from '../../redux/redux-store';
import CharacterItem from '../CharacterItem/CharacterItem';
import styles from './MainPage.module.css';

const MainPage = (props) => {
    let charactersElements = props.characters
        .map(card => <CharacterItem name={card.name} />);

    let addToFavorite = () => {
        props.addToFavorite();
    }

    let deleteFromFavorite = () => {
        props.deleteFromFavorite();
    }
    return (
        <div>
            <h1>Персонажи Звездных Войн</h1>
            <button onClick={() => { addToFavorite() }}>ДОБАВИТЬ ПЕРСА</button>
            <button onClick={() => { deleteFromFavorite() }}>УДАЛИТЬ ПЕРСА</button>
            <div className={styles.character_list}>
                {charactersElements}
            </div>
        </div>
    )
}

export default MainPage;