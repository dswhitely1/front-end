import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utilities/PrivateRoute';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Register from './components/Register';
import UserHome from './components/UserHome';
import NewTicket from './components/NewTicket';
import Ticket from './components/Ticket';

function App() {
  let id = 0;
  return (
    <div className="App">
      <Navigation />
      
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute path="/user" component={UserHome} />
      <PrivateRoute path="/create-ticket/" component={NewTicket} /> 
      <PrivateRoute path={`/ticket/${id}`} component={Ticket} />
      {/* ticket will have an edit state within it */}
    </div>
  );
}

export default App;