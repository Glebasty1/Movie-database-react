import React from 'react';
import axios from 'axios';

import Movie from './../components/Movie';
import MovieDetail from './../components/MovieDetail';

class DetailPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMovie: {},
			recommendations: [],
			error: '',
			isLoading: true,
		};
	}

	componentDidMount() {
		// Make a API request for movies
		axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=2bffc68560bcf99a67d3ea8fa8f937b4&language=en-US`)
			.then((res) => {
				this.setState({
					currentMovie: res.data,
					isLoading: false,
				});
				console.log('currentMovie', this.state.currentMovie);
			})
			.catch((err) => {
				this.setState({
					error: 'Server Error. Cant load data.',
					isLoading: false,
				});
				console.log(err);
			});
		axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/recommendations?api_key=2bffc68560bcf99a67d3ea8fa8f937b4&language=en-US&page=1`)
			.then((res) => {
				this.setState({
					recommendations: res.data.results,
					isLoading: false,
				});
				console.log('recommendations', this.state.recommendations);
			})
			.catch((err) => {
				this.setState({
					error: 'Server Error. Cant load data.',
					isLoading: false,
				});
				console.log(err);
			});
	}


	render() {
		return(
		  <div>
				{this.state.isLoading ? <h1 className="text-center">Loading page...</h1> :
			  <div className="container">
						<h1>Movie Detail</h1>
						{this.state.error.length > 1 ?
							<div className="alert alert-danger">
								{this.state.error}
							</div> :
							<div>
								<MovieDetail currentMovie={this.state.currentMovie} />
								<hr />
								<div className="row">
									<h1>Recommendation Movies List:</h1>
									{this.state.recommendations.map((movie) => {
										return (
											<Movie movie={movie} key={movie.id} />
										);
									})
									}
								</div>
							</div>
						}
					</div>
				}
			</div>
		);
	}
}

export default DetailPage;
