import CharacterItem from '../CharacterItem/CharacterItem';
import styles from './FavoriteCharacters.module.css';
import React from 'react';

class FavoriteCharacters extends React.Component {
    componentDidMount() {
        let localStorageFef = localStorage.getItem('favorite character');
        let localStorageFefOBJ = JSON.parse(localStorageFef);
        if (localStorageFefOBJ) {
            const newState = { ...this.props, favoriteCharacters: localStorageFefOBJ };
            newState.setFavCharacters(localStorageFefOBJ);
        }
    }

    render() {

        let favoriteCharactersElements = this.props.favoriteCharacters
        .map(card => <CharacterItem key = { card.name } name={card.name} imgUrl={card.imgUrl} isFavorite={card.isFavorite} deleteFromFavorite={this.props.deleteFromFavorite} />);

        return (
            <div>
            <h1>Мои любимые персы</h1>
            <div className={styles.buttonContainer}>
                <button onClick={() => {
                    this.props.deleteFromFavorite();
                    localStorage.clear();
                    debugger }}>
                    Удалить всех
                </button>
            </div>

            <div className={styles.character_list}>
                {favoriteCharactersElements}
            </div>
        </div>
        )
    }
}
export default FavoriteCharacters;