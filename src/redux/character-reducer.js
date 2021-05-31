const ADD_TO_FAVORITE = 'ADD-TO-FAVORITE';
const DELETE_FROM_FAVORITE = 'DELETE-FROM-FAVORITE';
const SET_CHARACTERS = 'SET-CHARACTERS';
const SET_CURRNET_PAGE = 'SET-CURRNET-PAGE';
const SET_TOTAL_CHARACTERS_COUNT = 'SET_TOTAL_CHARACTERS_COUNT';

let initialState = {
    characters: [],
    favoriteCharacters: [
        { 'name': 'luke', favorite: true },
    ],
    pageSize: 10,
    totalCharactersCount: 0,
    currentPage: 1
}

const characterReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVORITE: {
                let newFavoriteCharacter = {
                'name': 'Luke'
            }
            let stateCopy = {...state};
            stateCopy.favoriteCharacters = [...state.favoriteCharacters];
            stateCopy.favoriteCharacters.push(newFavoriteCharacter);
            // state.favoriteCharacters.push(newFavoriteCharacter);
            return stateCopy;
        }
        case DELETE_FROM_FAVORITE:{
            let stateCopy = {...state};
            stateCopy.favoriteCharacters = [...state.favoriteCharacters]
            stateCopy.favoriteCharacters.pop();
            // state.favoriteCharacters.pop();
            return stateCopy;
        }
        case SET_CHARACTERS:
            return {...state, characters: action.characters}
        case SET_CURRNET_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_CHARACTERS_COUNT:
            return {...state, totalCharactersCount: action.totalCharactersCount}
        default:
            return state;
    }
}

export const addToFavoriteActionCreator = () => ({ type: ADD_TO_FAVORITE });
export const deleteFromFavoriteActionCreator = () => ({ type: DELETE_FROM_FAVORITE });
export const setCharactersActionCreator = (characters) => ({ type: SET_CHARACTERS, characters });
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRNET_PAGE, currentPage });
export const setTotalCharactersCountActionCreator = (totalCharactersCount) => ({ type: SET_TOTAL_CHARACTERS_COUNT, totalCharactersCount });


export default characterReducer;