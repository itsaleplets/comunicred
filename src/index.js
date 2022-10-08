import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import Provider from './services/context/Provider'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <div className='App'>
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();