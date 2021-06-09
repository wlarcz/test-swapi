import { connect } from 'react-redux';
import { addToFavoriteActionCreator, deleteFromFavoriteActionCreator, setCharactersActionCreator, setCurrentPageActionCreator, setTotalCharactersCountActionCreator, setFilterActionCreator, setFavoriteCharactersActionCreator } from '../../redux/character-reducer';
import MainPageAPIComponent from './MainPageAPIComponent';

let mapStateToProps = (state) => {
    return {
        characters: state.favoriteCharacters.characters,
        favoriteCharacters: state.favoriteCharacters.favoriteCharacters,
        pageSize: state.favoriteCharacters.pageSize,
        totalCharactersCount: state.favoriteCharacters.totalCharactersCount,
        currentPage: state.favoriteCharacters.currentPage,
        isFavorite: state.favoriteCharacters.isFavorite,
        term: state.favoriteCharacters.filter.term
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addToFavorite: (name, imgUrl) => {
            dispatch(addToFavoriteActionCreator(name, imgUrl))
        } ,
        deleteFromFavorite: () => {
            dispatch(deleteFromFavoriteActionCreator())
        },
        setCharacters: (characters) => {
            dispatch(setCharactersActionCreator(characters))
        },
        setFavCharacters: (favoriteCharacters) => {
            dispatch(setFavoriteCharactersActionCreator(favoriteCharacters))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalCharactersCount: (totalCharactersCount) => {
            dispatch(setTotalCharactersCountActionCreator(totalCharactersCount))
        },
        setFilter: (filter) => {
            dispatch(setFilterActionCreator(filter))
        }
    }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps) (MainPageAPIComponent);

export default MainPageContainer;