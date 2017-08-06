import React from 'react';
import PropTypes from 'prop-types';

const RecomendationMovieList = (props) => {
	return(
		<div>
			{props.recommendations.map((movie) => {
				return (
					<div key={movie.id}>
						<h2>{movie.title}</h2>
						<h4>{movie.overview}</h4>
						<h4>{movie.release_date}</h4>
					</div>
				);
			})
			}
		</div>
	);
};

RecomendationMovieList.propTypes = {
	recommendations: PropTypes.arrayOf(PropTypes.object),
};

export default RecomendationMovieList;