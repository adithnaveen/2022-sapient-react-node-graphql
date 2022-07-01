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

const submitHandler = (evt) => {
  evt.preventDefault();
  const name = document.getElementById("name").value;

  const action = { type: 'ADD_NAME', data: name };
  store.dispatch(action);
  document.getElementById('name').value = '';
  document.getElementById('name').focus();
}

document.getElementById("frmName").onsubmit = submitHandler;


const updateList = () => {
  let names = store.getState();

  const list = names.map((name, index) => '<li class="list-group-item"><button class="btn btn-danger" onclick="deleteName(' + index + ')">X</button>' + name + '</li>');

  const listItems = list.join("");
  document.getElementById("namesList").innerHTML = listItems;

}

window['updateList'] = updateList;
updateList();

store.subscribe(updateList);


// delete part 
window['deleteName'] = (index) => {
  const action = { type: 'DELETE_NAME', data: index };
  store.dispatch(action);
}

