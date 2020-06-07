import React from 'react';
import './search-box.styles.css';

// destructuring el prop en 2 variables para usarlas dentro de input
export const SearchBox = ({ placeholder, handleChange }) => (
	<input className=" search" type="search" placeholder={placeholder} onChange={handleChange} />
);
