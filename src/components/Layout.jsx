import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
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
			<NextSeo 
				title='Cullen Sharp'
				description="Full-stack developer Cullen Sharp\'s homepage" 
				canonical='https://cullen-sharp.com/'
				twitter={{
					handle: '@CullenSharp',
					cardType: 'summary_large_image'
				}}
			/>
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
