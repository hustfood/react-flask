import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import reducer from './reducers';
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/one" component={App}/>
                <Route exact path="/two" component={App}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
