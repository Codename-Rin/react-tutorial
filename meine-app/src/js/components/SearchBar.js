import React from "react";

import * as SpotifyActions from '../actions/SpotifyActions';
import ArtistStore from '../stores/ArtistStore';

export default class SearchBar extends React.Component {
	
	constructor() {
		super();
		this.getArtists = this.getArtists.bind(this);
		this.state = {
			artistName: '',
			artists: ArtistStore.getAll()
		}
	}

	componentWillMount() {
	  ArtistStore.on("change", this.getArtists);
	}

	componentWillUnmount() {
	  ArtistStore.removeListener("change", this.getArtists);
	}

	setArtist(newArtist) {
		this.state.artistName = newArtist;
	}

	getArtists() {
		this.setState({
			artists: ArtistStore.getAll()
		});
	}

	loadArtists(artistName) {
		console.log(this.state.artistName);
		SpotifyActions.loadArtists(this.state.artistName);
	}

	handleChange(e) {
		const artistName = e.target.value;
		this.setArtist(artistName);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.loadArtists.bind(this)}>
				  <div class="form-group">
				    <label for="searchArtist">Artist Name</label>
				    <input onChange={this.handleChange.bind(this)} type="text" class="form-control" id="searchArtist" placeholder="Type artist name..." />
				  </div>
				  <button type="submit" class="btn btn-default">Submit</button>
				</form>
			</div>
		)
	}
}