import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/MoviesApi';
import s from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(movies => {
      setMovies(movies.results);
    });
  }, []);

  return (
    <div>
      <ul className={s.movies_list}>
        {movies.map(({ title, poster_path, id }) => {
          return (
            <li className={s.movies_item} key={id}>
              <Link>
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                />
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
