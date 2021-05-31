// import { addToFavoriteActionCreator, deleteFromFavoriteActionCreator } from '../../redux/character-reducer';
import axios from 'axios';
import React from 'react';
import CharacterItem from '../CharacterItem/CharacterItem';
import styles from './MainPage.module.css';

class MainPage extends React.Component {

    componentDidMount() {
        if (this.props.characters.length === 0) {
            axios.get('https://swapi.dev/api/people/')
                .then(response => {
                    this.props.setCharacters(response.data.results);
                })
        }  
    }

    addToFavorite = () => {
        this.props.addToFavorite();
    }

    deleteFromFavorite = () => {
        this.props.deleteFromFavorite();
    }
    render () {
        return (
            <div>
                <h1>Персонажи Звездных Войн</h1>
                <button onClick={() => { this.addToFavorite() }}>ДОБАВИТЬ ПЕРСА</button>
                <button onClick={() => { this.deleteFromFavorite() }}>УДАЛИТЬ ПЕРСА</button>
                <button onClick={() => { this.getCharacters() }}>ДОБАВИТЬ</button>
                <div className={styles.character_list}>
                    {/* {this.charactersElements} */}
                    {this.props.characters
        .map(card => <CharacterItem name={card.name} />)}
                </div>
            </div>
        )
    }
}

export default MainPage;