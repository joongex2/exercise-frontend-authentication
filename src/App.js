import React, { useState } from 'react';
import './App.css';
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import localStorageService from './services/localStorageService'

function App() {
  const [role, setRole] = useState(localStorageService.getRole());

  return (
    <div className="App">
      <PrivateRoutes role={role} setRole={setRole} />
      {/* <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch> */}
    </div>
  );
}

export default App;
