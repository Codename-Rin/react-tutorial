import React from 'react';
import { uniqueId } from 'lodash';

export default class Artist extends React.Component {

	constructor(props) {
		super();
	}

	render() {
		const { external_urls, images, name, popularity, genres } = this.props;

		const thumb = images.length > 0 ? images[1].url : "http://placekitten.com/g/300/300",
			url = external_urls.spotify;

		const genreList = genres.map((genre) => {
		    return <span key={_.uniqueId(['tag_'])} class="label label-default">{genre}</span>;
		});

		return (
			<div class="col-md-12">
				<div class="media">
					<div class="media-left media-top">
						<a href="#">
							<img src={thumb} alt={name} class="media-object"/>
						</a>
					</div>
					<div class="media-body">
						<h3 class="media-heading"><a target="_blank" href={url}>{name}</a></h3>
						<p>Popularity: {popularity}</p>
						{genreList}
					</div>
				</div>
			</div>
		);
	}
}