import React from 'react';
import { NavLink } from 'react-router-dom';

const AddMovie = () => {
  return (
    <>
      <h1>Add Movie</h1>
      <ul>
        <li>
          <NavLink to="/movies/77">Bogo Ship Da</NavLink>

        </li>
        <li>
          <NavLink to="/movies/88">Sam Soon</NavLink>
        </li>
      </ul>
    </>
  )
}

export default AddMovie;