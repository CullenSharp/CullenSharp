/* eslint-disable react/prop-types */
import React from 'react'
import Header from './Header'
import layoutStyles from '../../styles/Layout.module.css'

export default function Layout({ children }) {
	return (
		<>
			<Header /> 
			<div className={layoutStyles.container}>
				<main className={layoutStyles.main}>
					{children}
				</main>
			</div>
		</>
	)
}
