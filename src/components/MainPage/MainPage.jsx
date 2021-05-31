// import { addToFavoriteActionCreator, deleteFromFavoriteActionCreator } from '../../redux/character-reducer';
import axios from 'axios';
import store from '../../redux/redux-store';
import CharacterItem from '../CharacterItem/CharacterItem';
import styles from './MainPage.module.css';

const MainPage = (props) => {
    let users = [];

    if (props.characters.length === 0) {
        axios.get('https://swapi.dev/api/people/')
            .then(response => {
                debugger
                props.setCharacters(response.data.results);
            })
    }

    let charactersElements = props.characters
        .map(card => <CharacterItem name={card.name} />);

    let addToFavorite = () => {
        props.addToFavorite();
    }

    let deleteFromFavorite = () => {
        props.deleteFromFavorite();
    }

    let setCharacters = () => {
        props.setCharacters(users);
    }
    return (
        <div>
            <h1>Персонажи Звездных Войн</h1>
            <button onClick={() => { addToFavorite() }}>ДОБАВИТЬ ПЕРСА</button>
            <button onClick={() => { deleteFromFavorite() }}>УДАЛИТЬ ПЕРСА</button>
            <button onClick={() => { setCharacters() }}>ДОБАВИТЬ</button>
            <div className={styles.character_list}>
                {charactersElements}
            </div>
        </div>
    )
}

export default MainPage;