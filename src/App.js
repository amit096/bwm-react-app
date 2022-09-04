import './App.css';
import { Header } from './shared/header';
import { RentalCard } from './components/rental/rentalcard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <section id='rentalListing'>
          <h1 className='page-title'>Your Home All Around the World</h1>
          <div className='row'>
            <RentalCard />
            <RentalCard />
            <RentalCard />
            <RentalCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
