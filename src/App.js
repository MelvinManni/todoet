import React from "react";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import SignUp from "./pages/Signup/signup";
import Dashboard from "./pages/Dashboard/dashboard";
import Settings from "./pages/Settings/settings";
import Details from "./pages/Settings/Details/details";
import Password from "./pages/Settings/Password/password";
import { Switch, Route } from "react-router";
import Error404 from "./pages/404/404";
import AuthProvider from "./Context/AuthContext";
import PrivateRoute from "./Private/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

        <PrivateRoute exact path="/dashboard" component={Dashboard} />

        <PrivateRoute exact path="/settings" component={Settings} />

        <PrivateRoute exact path="/settings/details" component={Details} />

        <PrivateRoute exact path="/settings/password" component={Password} />

        <Route exact path="*">
          <Error404 />
        </Route>
      </Switch>
    </AuthProvider>
  );
}

export default App;
