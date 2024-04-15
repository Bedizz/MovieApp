import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import MoviesList from '../moviesList'

class MoviesPage extends Component {
  static propTypes = {
    movies: PropTypes.array.isRequired
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Movies</h2>
        <MoviesList movies={this.props.movies} />

      </div>
    )
  }
}
const mapStateToProps = ({movies} ) => {
  return {
    movies
  }
}

export default connect(mapStateToProps)(MoviesPage)