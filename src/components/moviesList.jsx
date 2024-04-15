import React from 'react'
import PropTypes from 'prop-types'

const MoviesList = ({movies}) => {
  return (
    <>
    
    { movies.length === 0 ? ( <p> No movies to display </p> ) : (props.movies.map(movie => <div key={movie.id}>{movie.name}</div>) )  }

    </>


    
    
  )
}

MoviesList.prototype = {
    movies: PropTypes.array.isRequired
}

export default MoviesList