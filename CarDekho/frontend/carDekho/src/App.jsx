import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Component/UserRegistration.jsx';
import Login from './Component/UserLogin.jsx';
import RefreshToken from './Component/RefreshAccessToken.jsx';
import Cars from './Component/Cars.jsx';
import Dealerships from './Component/Dealerships.jsx';
import Deals from './Component/Deals.jsx';
import Vehicles from './Component/Vehicles.jsx';

function App() {
  return (
    <Router>
      <div>
        <h1>Car Dealership App</h1>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/refresh-token" component={RefreshToken} />
          <Route exact path="/cars" component={Cars} />
          <Route exact path="/dealerships" component={Dealerships} />
          <Route exact path="/deals" component={Deals} />
          <Route exact path="/vehicles" component={Vehicles} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
