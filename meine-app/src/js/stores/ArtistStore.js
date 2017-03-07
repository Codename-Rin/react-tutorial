import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class ArtistStore extends EventEmitter {
	constructor() {
		super();
		this.artists = []
	};

	getAll() {
		return this.artists;
	}

	setArtists(newArtists) {
		this.artists = newArtists;
	}

	handleActions(action) {
		console.log('ArtistStore received an action', action);
		switch(action.type) {
			case "FETCH_ARTISTS": {
				this.setArtists(action.artists);
				this.emit('change');
				break;
			}
		}
	}
}

const artistStore = new ArtistStore;
dispatcher.register(artistStore.handleActions.bind(artistStore));

export default artistStore;