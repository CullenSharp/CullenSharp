/* eslint-disable no-undef */
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

// Views
import Home from './views/Home';
import Writings from './views/Writings';
import Post from './views/Post';
import Projects from './views/Projects';
import Slider from './components/Slider';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<header className='m-12 flex flex-row-reverse items-center'>
				<Slider />
			</header>
			<Switch>
				<Route component={Home} exact path='/' />
				<Route component={Writings} exact path='/Writings' />
				<Route component={Post} path='/Writings/:slug' />
				<Route component={Projects} exact path='/Projects' />
			</Switch>
		</Router>
	);
}

export default App;
