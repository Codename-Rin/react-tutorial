import React from 'react';
import { uniqueId } from 'lodash';

export default class Artist extends React.Component {

	constructor(props) {
		super();
	}

	render() {
		const artistStyle = {
			marginBottom: "20px"
		},
		tagStyle = {
			marginRight: '5px'
		},
		imageStyle = {
			maxWidth: '300px'
		};

		const { external_urls, images, name, popularity, followers, genres } = this.props;

		const thumb = images.length > 0 ? images[1].url : "http://placekitten.com/g/300/300",
			url = external_urls.spotify;

		const genreList = genres.map((genre) => {
		    return <span key={_.uniqueId(['tag_'])} class="label label-default" style={tagStyle}>{genre}</span>;
		});


		return (
			<div class="col-md-12" style={artistStyle}>
				<div class="media">
					<div class="media-left">
						<a href="#">
							<img src={thumb} alt={name} class="media-object" style={imageStyle}/>
						</a>
					</div>
					<div class="media-body">
						<h3 class="media-heading"><a target="_blank" href={url}>{name}</a></h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum 
						praesentium vero enim est deserunt amet incidunt, consequuntur officia 
						aperiam inventore beatae maxime cumque quibusdam exercitationem ab quae 
						ducimus officiis! Inventore.</p>
						<p><span className="lead">Popularity:</span> {popularity}</p>
						<p><span className="lead">Followers:</span> {followers.total}</p>
						{genreList}
					</div>
				</div>
			</div>
		);
	}
}