import './App.css';
import Header from './shared/header';
import RentalListing from './components/rental/rental-listing/rentallisting';
import RentalSearchListing from './components/rental/rental-listing/rentalSearchListing';
import RentalDetail from './components/rental/rental-detail/rentalDetal';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Register } from './components/register/register';
import Login from './components/login/login';
import { useEffect } from 'react';
import * as action from './actions/index';
import AuthService from "./services/auth-service";
import { RentalCreate } from './components/rental/rental-create/RentalCreate';

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
            <Route  exact path='/rentals/:city/homes?' component={RentalSearchListing}  />
            <Route  exact path='/rentals/:city/homes' component={RentalSearchListing} />
      
            <Route exact path='/rentals/create/new' component={RentalCreate} />
            {/* {(authService.isAuthenticated()) ?
              <Route exact path='/rentals/:id' component={RentalDetail} />
              : <Redirect to='/login' />
            }
            
            {(authService.isAuthenticated()) ?
              <Redirect exect to='/rentals' />
              : <Route exact path='/register' component={Register} />
            } */}
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/rentals/:id' component={RentalDetail} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
