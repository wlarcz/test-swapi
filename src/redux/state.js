const ADD_TO_FAVORITE = 'ADD-TO-FAVORITE'
const DELETE_FROM_FAVORITE = 'DELETE-FROM-FAVORITE'

let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_TO_FAVORITE) {
            let newFavoriteCharacter = {
                'name': 'Luke'
            }
            this._state.favoriteCharacters.push(newFavoriteCharacter);
            this.rerenderEntireTree(this._state);
        } else if (action.type === DELETE_FROM_FAVORITE) {
            this._state.favoriteCharacters.pop();
            this.rerenderEntireTree(this._state);
        }
    }
}

export const addToFavoriteActionCreator = () => ({ type: ADD_TO_FAVORITE });
export const deleteFromFavoriteActionCreator = () => ({ type: DELETE_FROM_FAVORITE });

export default store;