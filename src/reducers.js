import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        
        case CHANGE_SEARCH_FIELD:
            console.log('paso1')
            return Object.assign({}, state, {searchField:action.payload});
        default:
            console.log('paso2')
            return state;
    }
}