import React, { useState } from 'react'
import Header from './Header'
import Drawer from './Drawer'
import layoutStyles from '../../styles/Layout.module.css'

export default function Layout({ children }) {
	const [show, setShow] = useState(false)

	const openDrawer = () => {
		setShow(!show)
	}

	return (
		<>
			<Drawer show={show}/>
			<Header openDrawer={openDrawer}/> 
			<div className={layoutStyles.container}>
				<main className={layoutStyles.main}>
					{children}
				</main>
			</div>
		</>
	)
}
