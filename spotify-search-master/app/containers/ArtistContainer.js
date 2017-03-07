var React = require('react');
var Artist = require('../components/Artist');
var spotifyHelper = require('../utils/spotifyHelper');

var ArtistContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			isLoading: true,
			artistInfo: []
		}
	},
	componentDidMount: function () {
		var query = this.props.params;

		spotifyHelper.getArtistInfo([query.artist]).then(function (artists) {
				this.setState({
					isLoading: false,
					artistInfo: [artists[0]]
				})
		}.bind(this))
	},
	render: function () {
		return(
			<Artist
				isLoading={this.state.isLoading}
				artistInfo={this.state.artistInfo}
			/>
		)
	}
})

module.exports = ArtistContainer;