import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';

const movies = [
  {
    id: 1,
    title: 'Housefull 5',
    image: 'https://m.media-amazon.com/images/M/MV5BNWQ0ZTM3OTUtMzAxNy00MDI4LTlmOTEtMWE4NDAzYTkyNGY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    id: 2,
    title: 'Maharaja',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maharaja-et00399737-1719557119.jpg',
  },
  {
    id: 3,
    title: 'G.O.A.T',
    image: 'https://www.moviespuzzle.com/wp-content/uploads/2024/09/The-GOAT-Movie-day-1-collections-2.jpg',
  },
  {
    id: 4,
    title: 'Avengers: Endgame',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
  },
  {
    id: 5,
    title: 'Avengers Infinity War',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnbWki0iHFRV3UfJi8W2IxXY_LLRfqUf4Y4d5gEBT0IwLiXsz9'
  },
  {
    id: 6,
    title: 'RRR',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRx0wTDoneV8OuMM6hNfD7vfibB_jt6FcCL-u8H2DljlRXgGCoG',
  },
  {
    id: 7,
    title: 'Star Wars',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmVGbrPTbutvVAiOQtGVoo-jAZawOoog77H02_ReMnfcSXBxtz',
  },
  {
    id: 8,
    title: 'Singham Again',
    image: 'https://media5.bollywoodhungama.in/wp-content/uploads/2024/10/Singham-Again-9.jpg'
  },
  {
    id: 9,
    title: 'Kanguva',
    image: 'https://m.media-amazon.com/images/M/MV5BOTQ4ZmNmZGItYWFhYS00ZjU3LTliNTUtNmRhY2I1ZjU1Nzg4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  {
    id: 10,
    title: 'Mahavatar',
    image: 'https://images.filmibeat.com/ph-big/2024/11/mahavatar-an-epic-saga-starring-vicky-kaushal-as-chiranjeevi-parashurama-first-look-revealed1731478529_1.jpg'
  },
  {
    id: 11,
    title: 'The Dark Knight',
    image: 'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
  },
  {
    id: 12,
    title: 'Interstellar',
    image: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg'
  }
];

const MovieList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A V A I L A B L E  -  M O V I E S</h1>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <img src={movie.image} alt={movie.title} className={styles.image} />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <Link to={`/movies/${movie.id}`} className={styles.detailsLink}>
              View Details or Book
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
