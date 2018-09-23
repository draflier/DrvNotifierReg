import axios from 'axios';
import {ADD_TODO,GET_TODO,GET_ALL_TODO,UPDATE_TODO,DELETE_TODO} from './types';

export function addTodo(itemsTodo){
    return function(dispatch) {
        console.log('adding')
        axios.post('/todo/add',itemsTodo)
        .then(res =>
            dispatch({
              type: ADD_TODO,
              payload: res.data
            })
        )
        .catch(function(error)
        {
            console.log(error);       
        });
    };
}

export function getTodo(id){
    return function(dispatch) {
        console.log('getting')
        console.log(id)
        axios.get('/todo/' + id)
        .then(
            res =>
            dispatch({
              type: GET_TODO,
              payload: res.data
            })
        )
        .catch(function(error)
        {
            console.log(error);       
        });
    };
}

export const updateTodo = (id,itemsTodo) => dispatch => {
    console.log('updating');
    console.log('itemsTodo ==> ');
    console.log(itemsTodo);
    //dispatch(setItemsLoading());
    axios.post('/todo/update/' + id,itemsTodo)
    .then(res =>
      dispatch({
        type: UPDATE_TODO,
        payload: res.data
      })
    )
    .catch(function(error)
    {
        console.log(error);       
    });
  };





export const getAllTodo = () => dispatch => {
    console.log('fetching');
    //dispatch(setItemsLoading());
    axios.get('/todo').then(res =>
      dispatch({
        type: GET_ALL_TODO,
        payload: res.data
      })
    );
  };

export const deleteTodoItems = (id) => dispatch => {
    console.log("deleting");
    axios.get('/todo/delete/' + id)
    .then(res =>
        dispatch({
          type: DELETE_TODO,
          payload: id
        })
    )
    .catch(function(error)
    {
        console.log(error);       
    });
};
/*
export function getAllTodo(){    
    return function(dispatch) {
        console.log('fetching');
        //dispatch(setItemsLoading());
        axios.get('/todo').then(res =>
          dispatch({
            type: GET_ALL_TODO,
            payload: res.data
          })
        );
    };
}
*/
