var React = require('react');
var Search = require('../components/Search');

var SearchContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			artistName: ''
		}
	},
	handleUpdateArtist: function (e) {
		this.setState({
			artistName: e.target.value
		})
	},
	handleSubmitArtist: function (e) {
		e.preventDefault();
		var artistName = this.state.artistName;
		this.setState({
			artistName: ''
		});

		if (this.props.routeParams.artistSearch) {
			
			this.context.router.push({
				pathname: '/artist',
				query: {
					artist: this.props.routeParams.artist
				}
			})
		} else {
			console.log(this.context);
			this.context.router.push('/search/' + this.state.artistName)
		}
	},
	render: function () {
		return (
			<Search
				onSubmitArtist={this.handleSubmitArtist}
				onUpdateArtist={this.handleUpdateArtist}
				header={this.props.route.header}
				artistName={this.state.artistName}/>
		)
	}
})

module.exports = SearchContainer;