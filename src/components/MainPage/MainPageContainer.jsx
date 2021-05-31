import { connect } from 'react-redux';
import { addToFavoriteActionCreator, deleteFromFavoriteActionCreator, setCharactersActionCreator, setCurrentPageActionCreator, setTotalCharactersCountActionCreator } from '../../redux/character-reducer';
import CharacterItem from '../CharacterItem/CharacterItem';
import MainPage from './MainPage';

let mapStateToProps = (state) => {
    return {
        characters: state.favoriteCharacters.characters,
        pageSize: state.favoriteCharacters.pageSize,
        totalUsersCount: state.favoriteCharacters.totalUsersCount,
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

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps) (MainPage);

export default MainPageContainer;