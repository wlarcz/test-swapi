import CharacterItem from '../CharacterItem/CharacterItem';
import styles from './MainPage.module.css';

const MainPage = () => {

    let charactersData = [
        { 'name': 'luke' },
        { 'name': 'Darth Vader' },
        { 'name': 'Leya' },
        { 'name': 'ObiVan' },
        { 'name': 'Khan Solo' },
    ]

    let charactersElements = charactersData
        .map(card => <CharacterItem name={card.name} />);

    return (
        <div>
            <h1>Персонажи Звездных Войн</h1>
            <div className={styles.character_list}>
                {charactersElements}
            </div>
        </div>
    )
}

export default MainPage;