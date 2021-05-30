const ADD_TO_FAVORITE = 'ADD-TO-FAVORITE';
const DELETE_FROM_FAVORITE = 'DELETE-FROM-FAVORITE';

let initialState = {
    characters: [
        { 'name': 'luke' },
        { 'name': 'Darth Vader' },
        { 'name': 'Leya' },
        { 'name': 'ObiVan' },
        { 'name': 'Khan Solo' },
    ],
    favoriteCharacters: [
        { 'name': 'luke' },
    ]
}

const characterReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVORITE:
            let newFavoriteCharacter = {
                'name': 'Luke'
            }
            state.favoriteCharacters.push(newFavoriteCharacter);
            return state;
        case DELETE_FROM_FAVORITE:
            state.favoriteCharacters.pop();
            return state;
        default:
            return state;
    }
}

export const addToFavoriteActionCreator = () => ({ type: ADD_TO_FAVORITE });
export const deleteFromFavoriteActionCreator = () => ({ type: DELETE_FROM_FAVORITE });

export default characterReducer;