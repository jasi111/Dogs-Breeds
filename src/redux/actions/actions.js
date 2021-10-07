import api from "../../api/api"
import { ActionTypes } from "./actionTypes";


export const getBreeds = () => async (dispatch) => {
    const response = await api.get("/breeds/list/all")
    const breeds = Object.keys(response.data.message)

    dispatch({
        type: ActionTypes.GET_BREEDS,
        payload: breeds
    })
}


export const getBreedImage = (breedName) => async (dispatch) => {
    const response = await api.get(`breed/${breedName}/images`)
    const breed = response.data.message
    dispatch({
        type: ActionTypes.CLICKED_BREED,
        payload: breed

    })
}


export const removeClickedBreed = () => {
    return {
        type: ActionTypes.REMOVE_CLICKED_BREED,
    };
};


