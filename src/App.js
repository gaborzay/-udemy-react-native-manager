import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAQqwgZ3kIueyXkBdvuZKhD1JDRgAojfeM",
            authDomain: "manager-e340d.firebaseapp.com",
            databaseURL: "https://manager-e340d.firebaseio.com",
            projectId: "manager-e340d",
            storageBucket: "manager-e340d.appspot.com",
            messagingSenderId: "713064229467"
        };

        firebase.initializeApp(config);
    }

    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
          <Provider store={store}>
              <Router/>
          </Provider>
        );
    }
}

export default App;