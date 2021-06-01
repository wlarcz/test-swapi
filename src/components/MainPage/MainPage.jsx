import styles from './MainPage.module.css';
import CharacterItem from '../CharacterItem/CharacterItem';

const MainPage = (props) => {

    let addToFavorite = () => {
        props.addToFavorite();
    }

    let deleteFromFavorite = () => {
        props.deleteFromFavorite();
    }

    let pagesCount = Math.ceil(props.totalCharactersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>

        <h1>Персонажи Звездных Войн</h1>

        <div className={styles.pagination}>
            {pages.map(p => {
                return <a className={props.currentPage === p && styles.active}
                    onClick={() => { props.onPageChanged(p) }}>{p}</a>
            })}
        </div>

        <div>
            <button onClick={() => { addToFavorite() }}>ДОБАВИТЬ ПЕРСА</button>
            <button onClick={() => { deleteFromFavorite() }}>УДАЛИТЬ ПЕРСА</button>
            {/* <button onClick={() => { getCharacters() }}>ДОБАВИТЬ</button> */}
        </div>

        <div className={styles.character_list}>
            {/* {this.charactersElements} */}
            {   props.characters.map(card => <CharacterItem name={card.name} imgUrl={card.imgUrl} addToFavorite={props.addToFavorite}/>)}
        </div>

    </div>
}

export default MainPage;