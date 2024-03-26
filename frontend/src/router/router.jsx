import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage'; // Ajusta la ruta según sea necesario

function router() {
 return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* añadir otras rutas aquí */}
      </Switch>
    </Router>
 );
}

export default router;