const ADD_TO_FAVORITE = 'ADD-TO-FAVORITE';
const DELETE_FROM_FAVORITE = 'DELETE-FROM-FAVORITE';
const SET_CHARACTERS = 'SET-CHARACTERS';

let initialState = {
    characters: [],
    favoriteCharacters: [
        { 'name': 'luke', favorite: true },
    ]
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
            debugger
            return {...state, characters: [...state.characters, ...action.characters]}
        default:
            return state;
    }
}

export const addToFavoriteActionCreator = () => ({ type: ADD_TO_FAVORITE });
export const deleteFromFavoriteActionCreator = () => ({ type: DELETE_FROM_FAVORITE });
export const setCharactersActionCreator = (characters) => ({ type: SET_CHARACTERS, characters });


export default characterReducer;