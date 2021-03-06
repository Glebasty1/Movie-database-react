import React from 'react';
import PropTypes from 'prop-types';
import DebounceInput from 'react-debounce-input';

const SearchBar = (props) => {
	return (
		<form>
			<DebounceInput
				type="text"
				debounceTimeout={500}
				value={props.searchFilter}
				placeholder="Search Movie..."
				onChange={(e) => props.changeSearchFilter(e)}
			/>
			<br />
			<br />
			<p>
				<label htmlFor="filter">Filter By Popular: {'  '}</label>
				<input
					type="checkbox"
					id="filter"
					checked={props.filterByPopular}
					onChange={() => props.changeFilter()}
				/>
			</p>
		</form>
	);
};

SearchBar.propTypes = {
	searchFilter: PropTypes.string.isRequired,
	filterByPopular: PropTypes.bool.isRequired,
	changeSearchFilter: PropTypes.func.isRequired,
	changeFilter: PropTypes.func.isRequired
};

export default SearchBar;
