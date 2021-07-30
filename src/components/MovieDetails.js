import React, { useEffect } from "react";

const MovieDetails = (props) => {
  // page for movie ID
  // wait until component mounts so to get the MovieID fetched
  useEffect(() => {
    // first check what is inside of props
    console.log("props", props);
    console.log("params passed in movieId ===>", props.match.params.movieId);
    // props.match.params.movieId
  }, []);

  const handleGoHomeClick = () => (
    props.history.push("/")
  );

  return (
    <div>
      <h1>
        Movie Details
        <button onClick={handleGoHomeClick}>Go to Home</button>
      </h1>
    </div>
  );
};

export default MovieDetails;
