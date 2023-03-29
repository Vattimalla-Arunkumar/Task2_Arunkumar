import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import CreateUser from './components/CreateUser/CreateUser';
import Customers from './components/Customers/Customers';
import CreateBooking from './components/CreateBooking/CreateBooking';
import Bookings from './components/Bookings/Bookings';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/createCustomer" element={<CreateUser/> } />
           <Route path="/customers" element={<Customers/> } />
           
          <Route path="/createBooking" element={<CreateBooking/> } />
          
          <Route path="/bookings" element={<Bookings/> } />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
