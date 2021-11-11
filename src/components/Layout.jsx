import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Drawer from './Drawer'
import layoutStyles from '../../styles/Layout.module.css'

export default function Layout({ children }) {
	const [show, setShow] = useState(false)
	const [checked, setChecked] = useState(false)

	const toggleDrawer = () => {
		setShow(!show)
	}

	return (
		<>
			<Drawer
				toggleDrawer={toggleDrawer}
				show={show}
				setChecked={setChecked}
				checked={checked}
			/>
			<Nav 
				toggleDrawer={toggleDrawer}
				checked={checked}
				setChecked={setChecked}
			/> 
			<div className={layoutStyles.container}>
				<main className={layoutStyles.main}>
					{children}
				</main>
			</div>
		</>
	)
}
