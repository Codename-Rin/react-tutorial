import React from 'react';

import { Link } from "react-router";

import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

export default class Layout extends React.Component {
	render() {
		const {location} = this.props,
		containerStyle = {
			marginTop: "80px",
			marginBottom: "60px"
		};

		return (
			<div>
				<Nav location={location} />
				<div class="container" style={containerStyle}>
				  <div class="row">
				    <div class="col-md-8 col-md-offset-2">

						{this.props.children}
					
					</div>
				  </div>
				</div>
				<Footer />
			</div>
		);
	}
}