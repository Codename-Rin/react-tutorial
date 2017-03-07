var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles');

function ArtistDetails (artist) {
	return (
		<div className="container-fluid">
			<div className="row">
				<li className="list-group-item text-center"> <h3>{artist.artistInfo.artistInfo[0][0].name}</h3></li>
				<li className="list-group-item"> <img src={artist.artistInfo.artistInfo[0][0].images[1].url} className="img-rounded img-responsive" style={styles.fullWidth}/></li>
				<li className="text-center"> <a target="_blank" href={artist.artistInfo.artistInfo[0][0].external_urls.spotify} className="text-center">View on Spotify </a><span>| follower count {artist.artistInfo.artistInfo[0][0].followers.total}</span></li>
			</div>
			<div className="row">
				<div className="text-center">
					<Link to='/artistSearch'>
	          <button type='button' className='text-center btn btn-lg btn-success' style={styles.space}>Search Again</button>
	        </Link>
	      </div>
			</div>
		</div>
	)
}

ArtistDetails.propTypes = {
  artistInfo: PropTypes.shape({
    images: PropTypes.string,
    name: PropTypes.string,
    followers: PropTypes.number,
  })
}

module.exports = ArtistDetails;