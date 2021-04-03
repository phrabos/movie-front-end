import React, { Component } from 'react'
import request from 'superagent';


export default class Posters extends Component {
  state = {
    movies: [],
    query: '',
  }

  componentDidMount = async () => {
    const response = await request.get(`https://lit-bayou-91192.herokuapp.com/api/v1/movies/search?query=star%20wars`)
    this.setState({movies: response.body.results})
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const response = await request.get(`https://lit-bayou-91192.herokuapp.com/api/v1/movies/search?query=${this.state.query}`)
    this.setState({movies: response.body.results})
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='search movies'
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
          />
          <button>submit</button>
        </form>
        <ul>
          {this.state.movies.map(movie =>
            <li key={movie.id}>
              <div className='title'>{movie.title}</div>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
            </li>
            )}
        </ul>
      </div>
    )
  }
}
