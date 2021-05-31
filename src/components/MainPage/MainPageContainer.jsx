import { connect } from 'react-redux';
import { addToFavoriteActionCreator, deleteFromFavoriteActionCreator, setCharactersActionCreator, setCurrentPageActionCreator, setTotalCharactersCountActionCreator } from '../../redux/character-reducer';
import MainPageAPIComponent from './MainPageAPIComponent';

let mapStateToProps = (state) => {

    return {
        characters: state.favoriteCharacters.characters,
        pageSize: state.favoriteCharacters.pageSize,
        totalCharactersCount: state.favoriteCharacters.totalCharactersCount,
        currentPage: state.favoriteCharacters.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addToFavorite: () => {
            dispatch(addToFavoriteActionCreator())
        } ,
        deleteFromFavorite: () => {
            dispatch(deleteFromFavoriteActionCreator())
        },
        setCharacters: (characters) => {
            dispatch(setCharactersActionCreator(characters))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalCharactersCount: (totalCharactersCount) => {
            dispatch(setTotalCharactersCountActionCreator(totalCharactersCount))
        }
    }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps) (MainPageAPIComponent);

export default MainPageContainer;