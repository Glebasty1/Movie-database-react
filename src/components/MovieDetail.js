import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieDetail = (props) => {
	return(
		<div className="row">
			<div className="col-md-6 offset-col-md-6">
				<h1>{props.currentMovie.title} Details</h1>
				<h4>Overview: {props.currentMovie.overview}</h4>
				<span>Homepage:</span><a href={props.currentMovie.homepage}>{props.currentMovie.homepage}</a>
				<h4>Budget: {props.currentMovie.budget}$</h4>
				<h4>Release date: {props.currentMovie.release_date}</h4>
				<p>Vote average: {props.currentMovie.vote_average}</p>
				<p>Vote count: {props.currentMovie.vote_count}</p>
				{props.currentMovie.belongs_to_collection !== null && props.currentMovie.belongs_to_collection !== undefined ?
					<p>Belongs to: {props.currentMovie.belongs_to_collection.name}</p> : null
				}
				<Link to="/" className="btn btn-primary">Back</Link>
			</div>
		</div>
	);
};

MovieDetail.propTypes = {
	currenMovie: PropTypes.object,
};


export default MovieDetail;
