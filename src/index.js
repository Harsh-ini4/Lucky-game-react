import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/Luck-game-webapp">  {/* Add the basename here */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
