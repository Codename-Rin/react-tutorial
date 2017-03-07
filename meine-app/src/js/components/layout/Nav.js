import React from 'react';

import { Link, IndexLink } from 'react-router';

export default class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			collapsed: true
		};
	}

	toggleCollapse() {
		const collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}

	render() {
		const {location} = this.props;
		const {collapsed} = this.state;
		const {homeClass} = location.pathname === '/' ? 'active' : '';
		const {searchClass} = location.pathname.match(/^\/search/) ? 'active' : '';
		const {settingsClass} = location.pathname.match(/^\/settings/) ? 'active' : '';
		const navClass = collapsed ? 'collapse' : '';

		return (
			<nav class="navbar navbar-inverse navbar-fixed-top">
				<div class="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<div class="navbar-header">
							  <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
							    <span class="sr-only">Toggle navigation</span>
							    <span class="icon-bar"></span>
							    <span class="icon-bar"></span>
							    <span class="icon-bar"></span>
							  </button>
							</div>
							<div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
							  <ul class="nav navbar-nav">
							    <li class={homeClass}>
							      <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
							    </li>
							    <li class={searchClass}>
							      <Link to="search" onClick={this.toggleCollapse.bind(this)}>Search</Link>
							    </li>
							    <li class={settingsClass}>
							      <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
							    </li>
							  </ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}