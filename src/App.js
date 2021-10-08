import "./styles/App.scss";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  //Toggle theme hook
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={`duration-200 ease-in-out h-full ${isDark ? 'bg-main-dark' : 'bg-main-light'}`}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            path="/dashboard"
            render={(props) => <Dashboard {...props} isDark={isDark} setIsDark={setIsDark} />}
          />
          {/*<Route exact path="/dashboard" component={Dashboard} />*/}
          <Route path="*">
            <Redirect from="/" to="dashboard" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
