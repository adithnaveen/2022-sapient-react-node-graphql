import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';


import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer, applyMiddleware(thunk));


const Home = () => {
  return (
    <div>
      <h2>Contact Address Book Application</h2>
    </div>
  );
}


class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <Router>

          <div className="container">
            <h2 className="alert alert-info">React Redux Application </h2>

            <div className="row">
              <div className="col-md-5">
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/add-new-contact">Add New Contact</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/view-all-contacts">View Contacts</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-7">
                <Route path="/" exact component={Home} />
                <Route path="/add-new-contact" exact component={ContactForm} />
                <Route path="/view-all-contacts" exact component={ContactList} />
                <Route path="/view-contact/:id" exact component={ContactDetails} />

              </div>
            </div>
          </div>

        </Router>

      </Provider >
    );
  }
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
