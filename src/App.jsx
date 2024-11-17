import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation/:id" element={<Confirmation />} />
        
        <Route path="*" element={<div style={{ padding: '20px', textAlign: 'center' }}><h2>Page Not Found</h2></div>} />
      </Routes>
    </Router>
  );
};

export default App;
