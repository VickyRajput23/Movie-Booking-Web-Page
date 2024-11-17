import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';

// Sample movie details (extend as needed)
const movieDetails = {
  1: {
    title: 'HOUSEFULL 5',
    description: 'Housefull 5, biggest comedy franchise.',
    image: 'https://m.media-amazon.com/images/M/MV5BNWQ0ZTM3OTUtMzAxNy00MDI4LTlmOTEtMWE4NDAzYTkyNGY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    genre: 'Drama, Comedy'
  },
  2: {
    title: 'MAHARAJA',
    description: 'A barber seeks vengeance after his home is burglarized, cryptically telling police his "lakshmi" has been taken, leaving them uncertain if its a person or object.',
    genre: 'Action, Crime',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maharaja-et00399737-1719557119.jpg',
  },
  3: {
    title: 'G.O.A.T',
    description: 'The Greatest of All Time (also marketed as GOAT) is a 2024 Indian Tamil-language action thriller film directed by Venkat Prabhu and produced by AGS Entertainment.',
    genre: 'Crime, Action, Thriller',
      image: 'https://www.moviespuzzle.com/wp-content/uploads/2024/09/The-GOAT-Movie-day-1-collections-2.jpg',
    },
  4: {
    title: 'AVENGERS: ENDGAME',
    description: 'The Avengers assemble to reverse the damage caused by Thanos in the previous film.',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
  },
  5: {
    title: 'AVENGERS: INFINITY WAR',
    description: 'Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers.',
    genre: 'Action, Crime, Thriller',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnbWki0iHFRV3UfJi8W2IxXY_LLRfqUf4Y4d5gEBT0IwLiXsz9'
  },
  6: {
    title: 'RRR',
    description: 'A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.',
    genre: 'Action Epic, Adventure, Period Drama',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRx0wTDoneV8OuMM6hNfD7vfibB_jt6FcCL-u8H2DljlRXgGCoG',
  },
  7: {
    title: 'STAR WARS',
    description: 'The surviving Resistance faces the First Order once again in the conclusion of the Skywalker saga.',
    genre: 'Action, Adventure, Sci-Fi Epic',
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmVGbrPTbutvVAiOQtGVoo-jAZawOoog77H02_ReMnfcSXBxtz',
  },
  8: {
    title: 'SINGHAM AGAIN',
    description: 'A new chase is coming - with reference to the epic Ramayana, Singham and his team face an ambiguous villain in order to save his wife.',
    genre: 'Action, Drama',
    image: 'https://media5.bollywoodhungama.in/wp-content/uploads/2024/10/Singham-Again-9.jpg'
  },
  9: {
    title: 'KANGUVA',
    description: 'A tribal warriors fierce struggle to save his people a millennium ago is mysteriously linked to a shadow cops perilous quest in the present.',
    genre: 'Fantasy, Thriller, Action',
    image: 'https://m.media-amazon.com/images/M/MV5BOTQ4ZmNmZGItYWFhYS00ZjU3LTliNTUtNmRhY2I1ZjU1Nzg4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
  },
  10: {
    title: 'MAHAVATAR',
    description: 'The makers shared a motion poster of the film on social media. It features Kaushal in a fiery makeover, with flowy locks and beard.',
    genre: 'Action, Historic',
    image: 'https://images.filmibeat.com/ph-big/2024/11/mahavatar-an-epic-saga-starring-vicky-kaushal-as-chiranjeevi-parashurama-first-look-revealed1731478529_1.jpg'
  },
  11: {
    title: 'THE DARK KNIGHT',
    description: 'When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.',
    genre: 'Crime, Thriller, Action Epic',
    image: 'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
  },
  12: {
    title: 'INTERSTELLAR',
    description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    genre: 'Quest, Sci-Fi, Space Sci-Fi',
    image: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg'
  }
 
};

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieDetails[id];

  if (!movie) {
    return <div className={styles.container}><h2>Movie not found</h2></div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie.title}</h1>
      <div className={styles.details}>
        <img src={movie.image} alt={movie.title} className={styles.image} />
        <div className={styles.des}>
        <p className={styles.description}>{movie.description}</p>
        <p className={styles.description2}>Genre : {movie.genre}</p>
        <Link to={`/book/${id}`} className={styles.bookButton}>
        BOOK TICKET
      </Link>
        </div>
      </div>
      
    </div>
  );
};

export default MovieDetails;
