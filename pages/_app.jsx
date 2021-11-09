/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../src/components/Layout';
import '../styles/globals.css';
import reportWebVitals from '../src/reportWebVitals';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

reportWebVitals();

export default MyApp;
