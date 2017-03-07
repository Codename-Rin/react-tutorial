import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "./vendor/bootstrap-without-jquery.js";

import Search from './pages/Search';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Settings from './pages/Settings';

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="search" name="search" component={Search}></Route>
			<Route path="settings" name="settings" component={Settings}></Route>
		</Route>
	</Router>,
app);