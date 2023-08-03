import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// IMPORTANT POINTS FOR REDUX 
// 1)- IMPORT FROM REACT-REDUX
import { createStore,combineReducers}from "redux"
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
// 2)- CREATE USER REDUCER FUNCTION
// 3)_ COMBINE MULTUIPLE REDUCERS
// 4)- CREATE REDUX STORE
const store = createStore(rootReducer,composeWithDevTools());
// 5)_ PROVIDE REDUX TO THE ENTIRE APP

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);