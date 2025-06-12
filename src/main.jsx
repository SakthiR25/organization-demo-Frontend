// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import 'antd/dist/reset.css'; // Ant Design reset styles (AntD v5+)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18+ style
import { Provider } from 'react-redux';
import App from './App';
import store from './components/Redux/Store/Login/Login.store';
import './index.css';  

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
