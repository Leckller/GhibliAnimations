/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FilmsContext from '../context/FilmsContext';
import { GLOBAL_BG, MAIN } from '../styles';
import Header from '../components/Header';

export default function Home() {
  const { films, togleFilms, favFilms } = useContext(FilmsContext);
  return (
    <GLOBAL_BG id="globalBg">
      <Header />
      <MAIN>
        <section>
          {films && films.map((e) => (
            <article key={ e.id }>
              <h2>{e.title}</h2>
              <img src={ e.image } alt={ e.title } />
              <Link to={ `/Animation/${e.id}` }>
                More
              </Link>
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
      </MAIN>
    </GLOBAL_BG>
  );
}
