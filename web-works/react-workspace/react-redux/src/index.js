import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';


import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <div className="container">
          <h2 className="alert alert-info">React Redux Application </h2>

          <div className="row">
            <div className="col-md-5">
              <ContactForm />
            </div>
            <div className="col-md-7">
              <ContactList />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
