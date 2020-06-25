import React from 'react';
import Footer from './components/Footer/footer';
import Container from './components/Container/container';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import SignUp from './pages/Signup/signup';
import Dashboard from './pages/Dashboard/dashboard';
import Settings from './pages/Settings/settings';
import Details from './pages/Settings/Details/details';
import Password from './pages/Settings/Password/password';
import { Switch, Route } from 'react-router';
import Error404 from './pages/404/404';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/signup'>
          <SignUp />
        </Route>

        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>

        <Route exact path='/settings'>
          <Settings />
        </Route>

        <Route exact path='/settings/details'>
          <Details />
        </Route>

        <Route exact path='/settings/password'>
          <Password />
        </Route>

        <Route exact path='*'>
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
