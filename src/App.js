import './App.css';
import { Header } from './shared/header';
import { RentalList } from './components/rental/rentallist';
import { RentalDetail } from './components/rental/rentalDetal';
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='container'>
          <Route exact path='/' component={RentalList} />
          <Route exact path='/detail' component={RentalDetail} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
