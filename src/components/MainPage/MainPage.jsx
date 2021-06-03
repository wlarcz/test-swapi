import styles from './MainPage.module.css';
import CharacterItem from '../CharacterItem/CharacterItem';
import CharactersSearchForm from './CharactersSearchForm';

const MainPage = (props) => {

    let pagesCount = Math.ceil(props.totalCharactersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>

        <h1>Персонажи Звездных Войн</h1>
        <CharactersSearchForm onFilterChanged={props.onFilterChanged} />
        <div className={styles.pagination}>
            {pages.map(p => {
                return <a className={props.currentPage === p && styles.active}
                    onClick={() => { props.onPageChanged(p) }}>{p}</a>
            })}
        </div>

        <div className={styles.character_list}>
            {/* {this.charactersElements} */}
            {   props.characters.map(card => <CharacterItem name={card.name} imgUrl={card.imgUrl} addToFavorite={props.addToFavorite}
            isFavorite={props.isFavorite}/>)}
        </div>

    </div>
}

export default MainPage;