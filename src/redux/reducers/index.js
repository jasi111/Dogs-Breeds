import {combineReducers} from "redux"; 
import {breedReducer,clickedBreedReducer} from "./breedReducer";


const reducers = combineReducers({
    breedList: breedReducer,
    breedImage:clickedBreedReducer,

})

export default reducers

