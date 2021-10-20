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
		<Router>
			<Switch>
				<Route component={Home} exact path='/CullenSharp' />
				<Route component={Writings} exact path='/CullenSharp/Writings' />
				<Route component={Post} path='CullenSharp/Writings/:slug' />
			</Switch>
		</Router>
	);
}

export default App;
