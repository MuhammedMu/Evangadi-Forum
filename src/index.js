import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StateProvider from './Components/StateProvider/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>
);

