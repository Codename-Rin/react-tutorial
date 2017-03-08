import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class ArtistStore extends EventEmitter {
	constructor() {
		super();
		this.artists = [];
		this.limit = 2;
	};

	getArtists() {
		return this.artists;
	}

	getLimit() {
		return this.limit;
	}

	setArtists(newArtists) {
		this.artists = newArtists;
	}

	addLimit(value) {
		this.limit += value;
	}

	handleActions(action) {
		console.log('ArtistStore received an action', action);
		switch(action.type) {
			case "FETCH_ARTISTS": {
				this.setArtists(action.artists);
				this.emit('change');
				break;
			}
			case "INCREASE_LIMIT": {
				this.addLimit(2);
				this.emit('change');
				break;
			}
		}
	}
}

const artistStore = new ArtistStore;
dispatcher.register(artistStore.handleActions.bind(artistStore));

export default artistStore;