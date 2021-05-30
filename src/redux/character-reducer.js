const ADD_TO_FAVORITE = 'ADD-TO-FAVORITE';
const DELETE_FROM_FAVORITE = 'DELETE-FROM-FAVORITE';

const characterReducer = (state, action) => {
    switch(action.type) {
        case ADD_TO_FAVORITE:
            let newFavoriteCharacter = {
                'name': 'Luke'
            }
            state.push(newFavoriteCharacter);
            return state;
        case DELETE_FROM_FAVORITE:
            state.pop();
            return state;
        default:
            return state;
    }
}

export const addToFavoriteActionCreator = () => ({ type: ADD_TO_FAVORITE });
export const deleteFromFavoriteActionCreator = () => ({ type: DELETE_FROM_FAVORITE });

export default characterReducer;