import React from 'react';

import * as SpotifyActions from '../actions/SpotifyActions';
import ArtistStore from '../stores/ArtistStore';
import Artist from '../components/Artist';

export default class SearchList extends React.Component {

	constructor() {
		super();
		this.getArtists = this.getArtists.bind(this);
		this.state = {
			artists: ArtistStore.getAll(),
			limit: 2
		}
	}

	componentWillMount() {
	  ArtistStore.on("change", this.getArtists);
	}

	componentWillUnmount() {
	  ArtistStore.removeListener("change", this.getArtists);
	}

	getArtists() {
		this.setState({
			artists: ArtistStore.getAll()
		});
	}

	render() {
		const { artists } = this.state;

		const ArtistComponents = artists.map((artist) => {
		    return <Artist key={artist.id} {...artist}/>;
		});

		return (
			<div className="row">
				{ ArtistComponents }
			</div>
		);
	}
}