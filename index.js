import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import App from './App';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('classroom', () => RNRedux);
