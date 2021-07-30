import React from 'react';

const AddMovie = () => {
  return (
    <>
      <h1>Add Movie</h1>
      <ul>
        <li>
          <title>Bogo Ship Da</title> 
          <video controls width="500">
            <source  src="https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Fbogo.mp4?v=1624090763406" />
          </video>
        </li>
        <li>
          <title>Sam Soon</title>
          <video controls>
            <source src="https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2Fsamsoon-drink.mp4?v=1625736560174" />
          </video>
        </li>
      </ul>
    </>
  )
}

export default AddMovie;