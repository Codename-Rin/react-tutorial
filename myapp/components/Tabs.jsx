import React from "react";
import ReactDOM from "react-dom";

const Tabs = (props) => {
	let tabs = React.Children.toArray(props.children)

	return <div>{tabs.filter(tab => props.activeTab === tab.props.name )}</div>
}

const TabPanel = (props) => {
	return <div>{props.children}</div>
}

const TabsNav = (props) => {
	let tabs = React.Children.toArray(props.children)

	return <ul className={props.className || "nav nav-tabs"}>
		{tabs.map(tab => <li 
			key={tab.props.name}
			className={props.activeTab === tab.props.name ? 'active': ''}
			onClick={(e) => props.onChange(tab.props.name, e)}
		>
			<a href="#">{tab.props.name}</a>
		</li>)}
	</ul>
}

const Tab = (props) => {
	return props.children
}

export {Tabs, TabsNav, Tab, TabPanel};