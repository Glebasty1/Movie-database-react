import React from 'react';

import Movie from './Movie';

const MoviesList = (props) => {
	return (
		<div className="container">
			<h1 className="text-center">{props.title}</h1>
			<div className="row">
				{props.movies.map((movie) => {
					if(movie.title.toLowerCase().indexOf(props.searchFilter) !== -1) {
						return <Movie movie={movie} key={movie.id} />;
					}
				})
				}
			</div>
			<hr />
		</div>
	);
};

export default MoviesList;
