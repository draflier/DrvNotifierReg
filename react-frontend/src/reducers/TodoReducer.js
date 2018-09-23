import {ADD_TODO,GET_TODO,GET_ALL_TODO,UPDATE_TODO,DELETE_TODO} from '../actions/types';


const initialState = {
    itemsTodo: [],
    recTodo: {}
};

export default function(state = initialState, action) {
    switch(action.type)
    {
        case GET_ALL_TODO:            
            return {
                ...state,
                itemsTodo: action.payload
            }

        case GET_TODO:            
            console.log("Inside GET_TODO");
            console.log(state);
            return {                
                ...state,
                itemsTodo: [...state.itemsTodo, action.payload]
            }
        case ADD_TODO:
            return{
                ...state,
                itemsTodo: [...state.itemsTodo, action.payload]
            }

        case UPDATE_TODO:
            console.log("Inside UPDATE_TODO");
            return{            
                itemsTodo: [action.payload]
            }

        case DELETE_TODO:
            return{
                ...state,
                itemsTodo: state.itemsTodo.filter(
                    itemsTodo => itemsTodo._id !== action.payload
                )
            }
        default:
            return state;
    }
}