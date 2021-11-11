import React, { useState, useEffect } from 'react'
import sliderStyles from '../../styles/Slider.module.css'

function Slider() {
	const [toggle, setToggle] = useState(false)
	const [slide, setSlide] = useState(0)

	function handleToggle() {
		setToggle(!toggle)
	}

	function savePreference() {
		const theme = window.localStorage.getItem('theme')
		
		theme === ''
			? window.localStorage.setItem('theme', 'dark')
			: window.localStorage.setItem('theme', '')
	}

	function handleSlide() {
		slide === 1
			? setSlide(0)
			: setSlide(1)
	}

	useEffect(() => {
		const body = document.querySelector('body')
    
		body.className === 'dark'
			? body.className = ''
			: body.className = 'dark'
	}, [toggle])

	return(
		<div className={sliderStyles.toggle}>
			<div className={sliderStyles.track}></div>
			<div
				className={sliderStyles.thumb}
				onClick={() => {
					handleToggle()
					handleSlide()
					savePreference()
				}}
				slide={slide}
			></div>
			<input className='sr-only' type='checkbox' aria-label='Switch between Dark and Light mode'/>
		</div>
	)
}

export default Slider