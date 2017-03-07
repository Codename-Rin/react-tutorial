import React from 'react';

export default class Article extends React.Component {

	render() {
		const { title } = this.props;

		return (
			<div className="col-md-4">
				<h2>{title}</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Atque iusto illo in fuga vitae tenetur tempora dicta, mollitia 
				id quasi ipsum sapiente quam laudantium nostrum, dolorem alias! 
				Nisi in, repellendus?</p>
				<a href="#" class="btn btn-default">More Info</a>
			</div>
		);
	}
}