import { createStore } from 'redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = ['Hemanth', 'Ayush'];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      console.log('Data got for storing', action.data);
      return [...state, action.data];

    case 'DELETE_NAME':
      let names = [...state];
      names.splice(action.data, 1);
      return names;

    default:
      return state;
  }
}

// as of now store is local variable we need to put it in window scope 
const store = createStore(reducer);

window['store'] = store; 