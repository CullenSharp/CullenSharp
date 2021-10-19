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

// Styles
import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route component={Home} exact path='/' />
				<Route component={Writings} exact path='/Writings' />
				<Route component={Post} path='/Writings/:slug' />
			</Switch>
		</Router>
	);
}

export default App;
