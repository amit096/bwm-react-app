import './App.css';
import { Header } from './shared/header';
import RentalList from './components/rental/rentallist';
import { RentalDetail } from './components/rental/rentalDetal';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  const store = require('./reducers').init();
  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className='container'>
            <Route exact path='/' render={() => { return <Redirect to='/rentals' /> }} />
            <Route exact path='/rentals' component={RentalList} />
            <Route exact path='/rentals/:id' component={RentalDetail} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
