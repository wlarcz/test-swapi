import CharacterItem from '../CharacterItem/CharacterItem';
import { addToFavoriteActionCreator, deleteFromFavoriteActionCreator } from '../../redux/character-reducer';
import { connect } from 'react-redux';
import FavoriteCharacters from './FavoriteCharacters';

let mapStateToProps = (state) => {
    return {
        favoriteCharacters: state.favoriteCharacters.favoriteCharacters
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addToFavorite: () => {
            dispatch(addToFavoriteActionCreator())
        } ,
        deleteFromFavorite: () => {
            dispatch(deleteFromFavoriteActionCreator())
        }
    }
}

const FavoriteCharactersContainer = connect(mapStateToProps, mapDispatchToProps) (FavoriteCharacters);

export default FavoriteCharactersContainer;