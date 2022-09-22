import './App.css';
import { Header } from './shared/header';
import RentalListing from './components/rental/rental-listing/rentallisting';
import RentalDetail from './components/rental/rental-detail/rentalDetal';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Register } from './components/register/register';
import Login  from './components/login/login';

function App() {
  const store = require('./reducers').init();
  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className='container'>
            <Route exact path='/' render={() => { return <Redirect to='/rentals' /> }} />
            <Route exact path='/rentals' component={RentalListing} />
            <Route exact path='/rentals/:id' component={RentalDetail} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
