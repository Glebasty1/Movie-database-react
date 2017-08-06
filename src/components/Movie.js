import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = (props) => {
	return(
		<div>
			<br />
			<h2 className="text-center">{props.movie.title}</h2>
			<Link to={'/detail/' + props.movie.id} className="btn btn-primary">Detail</Link>
			<h4>{props.movie.overview}</h4>
			<h4>{props.movie.release_date}</h4>
		</div>
	);
};

Movie.propTypes ={
	movie: PropTypes.object,
};

export default Movie;
