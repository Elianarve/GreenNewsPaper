import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import router from './router/router.jsx';
import './main.css';
import UserProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        {router}
      </Router>
    </UserProvider>
  </React.StrictMode>
);
