import React from 'react'
import './App.css';


class MovieRow extends React.Component {

    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={this.props.movie.poster_src}/>
            </td>
            <td>
              <h2>{this.props.movie.title}</h2>
              <p>{this.props.movie.overview}</p>
              <input class="viewButton" type="button" onClick={this.viewMovie.bind(this)} value="View" />
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow