/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import Layout from '../src/components/Layout'
import '../styles/globals.css'
import reportWebVitals from '../src/reportWebVitals'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const body = document.querySelector('body')
		const theme = window.localStorage.getItem('theme')
		if (theme === null) {
			window.localStorage.setItem('theme', '')
		}

		body.className = theme
	}, [])

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

reportWebVitals()

export default MyApp
