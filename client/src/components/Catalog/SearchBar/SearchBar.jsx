import React, { useState } from 'react';
import estilos from './SearchBar.module.scss';

const SearchBar = (props) => {
	const { addFilterValue, handleReset, valueState } = props;


	function handleChange(e) {
		e.preventDefault()
		addFilterValue(e.target.name, e.target.value)
	}

	return (
		<section className={`${estilos.searchBar}`}>
				<h3>Nombre</h3>
				<input
					type="text"
					name="name"
					placeholder="Search name..."
					value={valueState}
					onChange={handleChange}
				/>
				
		</section>
	);
};

export default SearchBar;
