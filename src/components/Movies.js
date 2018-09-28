import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  return (
    <div>
        Movies Page
        movies.map((movie) => {
          <div>{movie.title}</div>
        })
    </div>
  );
};

export default Movies;
