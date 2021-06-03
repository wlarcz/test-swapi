const ADD_TO_FAVORITE = 'ADD-TO-FAVORITE';
const DELETE_FROM_FAVORITE = 'DELETE-FROM-FAVORITE';
const SET_CHARACTERS = 'SET-CHARACTERS';
const SET_CURRNET_PAGE = 'SET-CURRNET-PAGE';
const SET_TOTAL_CHARACTERS_COUNT = 'SET_TOTAL_CHARACTERS_COUNT';
const SET_FILTER = 'SET-FILTER';

let initialState = {
    characters: [],
    favoriteCharacters: [
        // { 'name': 'luke', favorite: true },
    ],
    pageSize: 10,
    totalCharactersCount: 0,
    currentPage: 1,
    filter: {
        term: ''
    }
}

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            return {...state, favoriteCharacters: [...state.favoriteCharacters, {name: action.character, imgUrl: action.imgUrl, isFavorite: true}]}
        }
        case DELETE_FROM_FAVORITE: {
            let stateCopy = { ...state };
            stateCopy.favoriteCharacters = [...state.favoriteCharacters]
            stateCopy.favoriteCharacters.pop();
            return stateCopy;
        }
        case SET_CHARACTERS:
            return { ...state, characters: action.characters, term: action.term }
        case SET_CURRNET_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_CHARACTERS_COUNT:
            return { ...state, totalCharactersCount: action.totalCharactersCount }
        case SET_FILTER: {
            return {...state, filter: {term: action.filter.term}}
        }
        default:
            return state;
    }
}

export const addToFavoriteActionCreator = (character, imgUrl, isFavorite) => ({ type: ADD_TO_FAVORITE, character, imgUrl, isFavorite });
export const deleteFromFavoriteActionCreator = () => ({ type: DELETE_FROM_FAVORITE });
export const setCharactersActionCreator = (characters) => ({ type: SET_CHARACTERS, characters });
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRNET_PAGE, currentPage });
export const setFilterActionCreator = (filter) => ({ type: SET_FILTER, filter });
export const setTotalCharactersCountActionCreator = (totalCharactersCount) => ({ type: SET_TOTAL_CHARACTERS_COUNT, totalCharactersCount });


export default characterReducer;