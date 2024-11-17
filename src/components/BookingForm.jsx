import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation here if needed
    navigate(`/confirmation/${id}`, { state: { ...formData, movieId: id } });
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
      <h2 className={styles.title}>ENTER YOUR DETAILS TO BOOK A TICKET</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mobile" className={styles.label}>Number of Seats:</label>
          <input
            type="number"
            id="number"
            name="number"
            className={styles.input}
            value={formData.number}
            onChange={handleChange}
            required
            placeholder="Enter number of seats"
          />
        </div>
        <button  type="submit"  className={styles.submitButton}>Book My Seat</button>
      </form>
    </div>
    </div>
  );
};

export default BookingForm;
