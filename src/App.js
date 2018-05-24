import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        return (
          <Provider store={createStore(reducers)}>
              <LoginForm />
          </Provider>
        );
    }
}

export default App;