import React, { useEffect, useState } from 'react';
import FilmsContext from './FilmsContext';
import { FilmsType } from '../types';
import Fetch from '../services/Fetch';

function FilmsProvider({ children }: { children: React.ReactNode }) {
  const [films, setFilms] = useState<FilmsType[]>([]);
  const [favFilms, setFavFilms] = useState<FilmsType[]>([]);
  useEffect(() => {
    const effect = async () => {
      const response = await Fetch();
      setFilms(response);
    };
    effect();
  }, []);

  function togleFilms(element: FilmsType) {
    if (favFilms.some((e) => e.id === element.id)) {
      setFavFilms(favFilms.filter((e) => e.id !== element.id));
    } else {
      setFavFilms((previus) => [...previus, element]);
    }
    // favFilms.some((e) => e.id === element.id)
    //   ? setFavFilms(favFilms.filter((e) => e.id !== element.id))
    //   : setFavFilms((previus) => [...previus, element]);
  }
  return (
    <FilmsContext.Provider value={ { films, togleFilms, favFilms } }>
      {children}
    </FilmsContext.Provider>
  );
}

export default FilmsProvider;
