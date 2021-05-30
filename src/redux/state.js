import characterReducer from "./character-reducer";

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

        this._state.favoriteCharacters = characterReducer(this._state.favoriteCharacters, action);
        this.rerenderEntireTree(this._state);
    }
}

export default store;