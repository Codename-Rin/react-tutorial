import React from 'react';
import ReactDOM from 'react-dom';
import quotes_data from './quotes_data.js';
import App from './components/App.jsx';

var StateStore = require('./StateStore.js');

var AppState = new StateStore();

AppState.setState({
	page: 1,
	quotes_source: quotes_data,

	quotes_list: quotes_data.slice(0,6),

	activeTab: "Home"
})


var actions = AppState.createActions({
	loadMore: function(event){
		var page = this.page + 1;

		this.page = page,
		this.quotes_list = this.quotes_source.slice(0, this.page * 6)
	},
	navigateTo: function(tabName) {
		this.activeTab = tabName;
	}
})


ReactDOM.render(<App store={AppState} actions={actions}/>, document.getElementById('root'));

export { AppState, actions };
