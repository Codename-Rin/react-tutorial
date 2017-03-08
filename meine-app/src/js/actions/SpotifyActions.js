import dispatcher from '../dispatcher';

import axios from 'axios';

export function loadArtists(artistName = '') {
	if(artistName) {
		axios('https://api.spotify.com/v1/search?q='+artistName+'&type=artist').then((data) => {
			console.log('Got the data!', data.data.artists.items);
			const artists = data.data.artists.items;
			dispatcher.dispatch({
				type: "FETCH_ARTISTS",
				artistName,
				artists
			});
		})
	}
}