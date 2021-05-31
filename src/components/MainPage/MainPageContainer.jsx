import { connect } from 'react-redux';
import { addToFavoriteActionCreator, deleteFromFavoriteActionCreator, setCharactersActionCreator } from '../../redux/character-reducer';
import CharacterItem from '../CharacterItem/CharacterItem';
import MainPage from './MainPage';

let mapStateToProps = (state) => {
    return {
        characters: state.favoriteCharacters.characters
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
        }
        
    }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps) (MainPage);

export default MainPageContainer;