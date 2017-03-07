import React from 'react';

import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';

export default class Search extends React.Component {

	render() {
		return (
			<div>
				<h1>Search</h1>
				<SearchBar />
				<SearchList />
			</div>
		);
	}
}