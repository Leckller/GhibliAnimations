import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HEADER, UP } from '../styles';

function Header() {
  const [eye, setEye] = useState(false);
  useEffect(() => {
    const timer = () => {
      return setTimeout(() => {
        setEye(!eye);
      }, eye ? 4000 : 1000);
    };
    timer();
    return clearTimeout(timer());
  }, [eye]);
  const loc = useLocation().pathname;
  const path = '/favorites';
  return (
    <>
      <HEADER id="header">
        <img
          src={ eye ? '/src/assets/totoro.png' : '/src/assets/totoroclose.png' }
          alt="totoro"
        />
        <h1>Films</h1>
        <nav>
          <Link
            to={ loc === path ? '/' : path }
          >
            {loc === path ? 'Home' : 'Favorites'}
          </Link>
        </nav>
      </HEADER>
      <UP href="#header">
        {' '}
        <i className="bi bi-arrow-up" />
      </UP>
    </>
  );
}

export default Header;
