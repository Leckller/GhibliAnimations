/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FilmsContext from '../context/FilmsContext';
import { GLOBAL_BG } from '../styles';

export default function Favorites() {
  const { favFilms, togleFilms } = useContext(FilmsContext);
  return (
    <GLOBAL_BG>
      <header>
        <img src="/src/assets/totoro.png" alt="" />
        <h1>Films</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <section>
          {favFilms && favFilms.map((e) => (
            <article key={ e.id }>
              <h2>{e.title}</h2>
              <img src={ e.image } alt={ e.title } />
              <label htmlFor={ e.id }>
                {favFilms.some(({ id }) => id === e.id)
                  ? <i className="bi bi-heart-fill" />
                  : <i className="bi bi-heart" />}
                <button
                  id={ e.id }
                  onClick={ () => togleFilms(e) }
                />
              </label>
            </article>
          ))}
        </section>
      </main>
    </GLOBAL_BG>
  );
}
