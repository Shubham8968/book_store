import React from 'react';
import ReactDOM from 'react-dom';
import Bookstore from './Bookstore';
//import FirstComponent from './firstcomponent';
//import SecondComponent from './second component';

ReactDOM.render(
  <React.StrictMode>
    <Bookstore />
    {/*<SecondComponent/>
    <FirstComponent /> {/* this is how i use components */}
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
