import React from "react";
import ReactDOM from "react-dom";

import {TabsNav} from "../components/Tabs.jsx";

//import {actions} from '../app.jsx';

const App = React.createClass({

	getInitialState: function(){
		return this.props.store.state;
	},

	componentDidMount: function(){
		this.props.store.addListener((state) => {
			this.setState({
				page: state.page,
				quotes_list: state.quotes_list,
				activeTab: state.activeTab
			})
		})
	},

	render: function(){
		return (
			<div>
				<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<TabsNav onChange={actions.navigateTo} 
							activeTab={this.state.activeTab}
						>
							<Tab name="Home"></Tab>
							<Tab name="About"></Tab>
							<Tab name="Offer"></Tab>
							<Tab name="Contact"></Tab>
						</TabsNav>
					</div>
				</div>
					<div className="row">
						<div className="col-xs-12">
							<Tabs activeTab={this.state.activeTab}>
								<TabPanel name="Home">
									<TextContent title="Home">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias 
										odit asperiores, necessitatibus, perferendis labore ab animi beatae voluptatum 
										rerum distinctio quod architecto facilis corporis magnam numquam illo 
										accusamus eveniet.</p>
									</TextContent>
								</TabPanel>
								<TabPanel name="About">
									<TextContent title="About">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque alias 
										odit asperiores, necessitatibus, perferendis labore ab animi beatae voluptatum 
										rerum distinctio quod architecto facilis corporis magnam numquam illo 
										accusamus eveniet.</p>
									</TextContent>
								</TabPanel>
								<TabPanel name="Offer">
									<TextContent title="Offer"></TextContent>
									<QuotesList list={this.state.quotes_list} />
									<button className="btn btn-default btn-block" onClick={actions.loadMore}> Pokaż więcej ... </button>
								</TabPanel>
								<TabPanel name="Contact">
									<TextContent title="Contact Form"></TextContent>
								</TabPanel>
							</Tabs>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export default App;