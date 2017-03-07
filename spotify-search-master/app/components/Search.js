var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function Search (props) {
	return (
		<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
			<h1>{props.header}</h1>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitArtist}>
					<div className="form-group">
						<input
							className="form-control"
							placeholder="Artist name"
							onChange={props.onUpdateArtist}
							value={props.artistName}
							type="test" />
					</div>
					<div className="form-group col-sm-4 col-sm-offset-4">
						<button 
							className="btn btn-block btn-success"
							type="submit">
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

Search.propTypes = {
	onUpdateArtist: PropTypes.func.isRequired,
	onSubmitArtist: PropTypes.func.isRequired,
	header: PropTypes.string.isRequired,
	artistName: PropTypes.string.isRequired
}
module.exports = Search;