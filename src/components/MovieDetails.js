import React, { useEffect } from "react";

const MovieDetails = (props) => {
  // useEffect to get access to `:movieId`
  useEffect(() => {
    console.log("movid id", props.match.params.movieId);
    /**
 * props = { 
    location: { pathname: "/movies/45" },
    match: { params: { movieId: "45" }, 
  }
  Therefore, when path is /movies/:movieId then we can access it using `props.match.params.movieId`
*/
  });

  const handleGoHomeClick = () => {
    props.history.push("/");
  }

  return (
    <div>
      <h1>
        MovieDetails Component Page!
        <button onClick={handleGoHomeClick}>Back to Home</button>
      </h1>
    </div>
  );
};

export default MovieDetails;
