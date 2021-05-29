import CharacterItem from '../CharacterItem/CharacterItem';
import styles from './MainPage.module.css';

const MainPage = (props) => {

    let charactersElements = props.characters
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