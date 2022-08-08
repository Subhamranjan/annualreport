import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Post from './Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Post /> 
  </React.StrictMode>
);

