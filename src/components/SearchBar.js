import React from 'react';

const SearchBar = (props) => {
	return (
		<form>
			<input
				type="text"
				value={props.searchFilter}
				placeholder="Search Movie..." onChange={(e) => props.changeSearchFilter(e)}
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

export default SearchBar;
