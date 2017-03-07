var axios = require('axios');

var id = "5bed15b648b64c79a0fa87e02f1c1d8d";
var sec = "506bec2dc05b440a9236ed142ff4c3e2";
var param = "?client_id" + id + "&client_secret=" + sec;

function getArtistInfo (artistName) {
	return axios.get('https://api.spotify.com/v1/search?q='+ artistName +'&type=artist&limit=3')
}

var helpers = {
	getArtistInfo: function (artists) {
		return axios.all(artists.map(function (artistName){
			return getArtistInfo(artistName);
		})).then(function (info) {
			return info.map(function (artist) {
				return artist.data.artists.items;
			})
		}).catch(function (err) {
			console.warn('Error in getArtistInfo', err)
		})
	}
}

module.exports = helpers;