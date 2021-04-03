import React, { Component } from 'react'
import Posters from './posters'
import './app.css'


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Movie Posters</h1>
        <Posters />
      </div>
    )
  }
}

