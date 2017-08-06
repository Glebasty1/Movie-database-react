import React from 'react';
import axios from 'axios';

import MovieList from './../components/MovieList';
import SearchBar from './../components/SearchBar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      upcomingMovies: [],
      filterByPopular: true,
      searchFilter: '',
      error: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    // Make a API request for movies
    axios.all([
      this.popularMoviesRequest(),
      this.upcomingMoviesRequest()
    ])
      .then(axios.spread((popularMovies, upcomingMovies) => {
        this.setState({
          popularMovies: popularMovies.data.results,
          upcomingMovies: upcomingMovies.data.results,
          isLoading: false,
        })
      }))
      .catch((err) => {
        this.setState({
          error: 'Server Error. Cant load data.',
          isLoading: false,
        });
        console.log(err);
      });
  }

  popularMoviesRequest = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2bffc68560bcf99a67d3ea8fa8f937b4&language=en-US&page=1`);
  };

  upcomingMoviesRequest = () => {
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2bffc68560bcf99a67d3ea8fa8f937b4&language=en-US&page=1');
  };

  changeFilter = () => {
    this.setState(prevState => ({
      filterByPopular: !prevState.filterByPopular
    }));
  };

  changeSearchFilter = (e) => {
    this.setState({
      searchFilter: e.target.value.toLowerCase(),
    });
  };

  render() {
    return (
      <div>
        {this.state.isLoading === true ? <h1 className="text-center">Loading page...</h1> :
          <div className="container">
            <h1 className="text-center">Movies Database</h1>
            {this.state.error.length > 1 ?
              <div className="alert alert-danger">
                {this.state.error}
              </div> :
              <div>
                <SearchBar
                  searchFilter={this.state.searchFilter}
                  filterByPopular={this.state.filterByPopular}
                  changeFilter={this.changeFilter}
                  changeSearchFilter={this.changeSearchFilter}
                />
                {this.state.filterByPopular ?
                  <MovieList
                    title="Popular Movies List"
                    movies={this.state.popularMovies}
                    searchFilter={this.state.searchFilter}
                  />:
                  <MovieList
                    title="Upcoming Movies List"
                    movies={this.state.upcomingMovies}
                    searchFilter={this.state.searchFilter}
                  />
                }
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

export default App;
