import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Brands from './components/Brands';
import BrandDetails from './components/BrandDetails';
import BookingPage from './components/BookingPage';
import BookingSummary from './components/BookingSummary';
import ThankYou from './components/ThankYou';


function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/:name" element={<BrandDetails />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/summary" element={<BookingSummary />} />
        <Route path="/thankyou" element={<ThankYou />} />


      </Routes>
    </Router>
  );
}

export default App;
