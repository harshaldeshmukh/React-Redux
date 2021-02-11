import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//For redux (Wrapper)
import { createStore } from 'redux';
import {Provider} from  'react-redux'
import rootReducer from './Services/Reducers/index'
const store=createStore(rootReducer);
console.warn("store "+store)
//provider kya karega? : Jo redux ka data hoga na vo pure application me flow karega 

ReactDOM.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
