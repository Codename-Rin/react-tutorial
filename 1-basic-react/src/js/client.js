import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
	render() {
		return (
			<div>
				<h1>It's working!</h1>
				<p>As intended.</p>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);