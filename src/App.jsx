/* eslint-disable no-undef */
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

// Views
import Home from './views/Home';
import Writings from './views/Writings';
import Post from './views/Post';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route component={Home} exact path='/' />
				<Route component={Writings} exact path='/Writings' />
				<Route component={Post} path='/Writings/:slug' />
			</Switch>
		</Router>
	);
}

export default App;
