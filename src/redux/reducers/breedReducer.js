import { ActionTypes } from "../actions/actionTypes";


const initialState = {
    breeds: [],
    breed: []
}

export const breedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_BREEDS:
            return { ...state, breeds: payload };
        default:
            return state;

    }

}



export const clickedBreedReducer = (state = initialState, { type, payload }) => {


    switch (type) {
        case ActionTypes.CLICKED_BREED:
            return { ...state, breed: payload };//...takes all the existing state data, ones we have the state we are going to add the products with th payload
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default: return state;

    }

}
