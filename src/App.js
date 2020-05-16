import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("Ant Man")

  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString  = "https://api.themoviedb.org/3/search/movie?api_key=2467dce511fdcda39e23dc31bd304371&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetch Data Succes")
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({rows : movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50px" src="movie-db.svg"></img>
              </td>
              <td width="8" />
              <td>
                <h1>Yogaap MovieDB</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input onChange={this.searchChangeHandler.bind(this)} className="search" placeholder="Enter Search" />

        {this.state.rows}

      </div>
    );
  }
}

export default App;
