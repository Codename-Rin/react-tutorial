import React from 'react';

import * as SpotifyActions from '../actions/SpotifyActions';
import ArtistStore from '../stores/ArtistStore';
import Artist from '../components/Artist';

export default class SearchList extends React.Component {

	constructor() {
		super();
		this.getState = this.getState.bind(this);
		this.state = {
			artists: ArtistStore.getArtists(),
			limit: ArtistStore.getLimit()
		}
	}

	componentWillMount() {
	  ArtistStore.on("change", this.getState);
	}

	componentWillUnmount() {
	  ArtistStore.removeListener("change", this.getState);
	}

	getState() {
		this.setState({
			artists: ArtistStore.getArtists(),
			limit: ArtistStore.getLimit()
		});
	}

	loadMore() {
		SpotifyActions.loadMore();
	}

	render() {
		const artists = this.state.artists.slice(0, this.state.limit);

		const ArtistComponents = artists.map((artist) => {
		    return <Artist key={artist.id} {...artist}/>;
		});

		const btnDisabled = this.state.limit < this.state.artists.length ? '' : 'disabled';

		return (
			<div className="row">
				{ ArtistComponents }
				<div className="col-md-12">
					<button class="btn btn-success" disabled={btnDisabled} onClick={this.loadMore.bind(this)}>Load More</button>
				</div>
			</div>
		);
	}
}