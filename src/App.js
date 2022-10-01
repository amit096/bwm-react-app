import './App.css';
import Header from './shared/header';
import RentalListing from './components/rental/rental-listing/rentallisting';
import RentalDetail from './components/rental/rental-detail/rentalDetal';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Register } from './components/register/register';
import Login from './components/login/login';
import { useEffect } from 'react';
import * as action from './actions/index';
import AuthService from "./services/auth-service";

function App() {
  const store = require('./reducers').init();
  useEffect(() => {
    store.dispatch(action.checkAuthState());
  }, []);

  function logout() {
    store.dispatch(action.logout());
  }
  const authService = new AuthService();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header logout={logout} />
          <div className='container'>
            <Route exact path='/' render={() => { return <Redirect to='/rentals' /> }} />
            <Route exact path='/rentals' component={RentalListing} />

            {(authService.isAuthenticated()) ?
              <Route exact path='/rentals/:id' component={RentalDetail} />
              : <Redirect to='/login' />
            }
            <Route exact path='/login' component={Login} />
            {(authService.isAuthenticated()) ?
              <Redirect exect to='/rentals' />
              : <Route exact path='/register' component={Register} />
            }
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
