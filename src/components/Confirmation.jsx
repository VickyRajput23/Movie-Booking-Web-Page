import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Confirmation.module.css';

const Confirmation = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className={styles.container}>
        <h2>No booking details found.</h2>
        <Link to="/" className={styles.homeLink}>Go to Home</Link>
      </div>
    );
  }

  const bookingId = Math.floor(100000 + Math.random() * 900000); 

  return (
    <div className={styles.background}>
      <div className={styles.container}>
      <h2 className={styles.title}>TICKET CONFIRMED!</h2>
      <div className={styles.details}>
        <p><strong>Name : </strong> {state.name}</p>
        <p><strong>Email :</strong> {state.email}</p>
        <p><strong>Booking ID :</strong> {bookingId}</p>
        <p><strong>Movie ID :</strong> {state.movieId}</p>
        <p><strong>Number of Seats :</strong> {state.number}</p>
      </div>
      <Link to="/" className={styles.homeLink}>Back to Home</Link>
      </div>  
    </div>
  );
};

export default Confirmation;
