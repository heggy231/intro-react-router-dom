import React, { useEffect } from 'react'

const MovieDetails = (props) => {

  // page for movie ID
  // wait until component mounts so to get the MovieID fetched
  useEffect(() => {
    // first check what is inside of props
    console.log('props', props);
  }, [])

  return (
    <div>
      MovieDetails
    </div>
  )
}

export default MovieDetails;