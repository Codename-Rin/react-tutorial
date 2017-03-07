var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var SearchContainer = require('../containers/SearchContainer');
var ArtistContainer = require('../containers/ArtistContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='artistSearch' header='Artist Search' component={SearchContainer} />
      <Route path='/search/:artist' component={ArtistContainer} />
    </Route>
  </Router>
);

module.exports = routes;