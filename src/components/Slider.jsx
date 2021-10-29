import React, { useState, useEffect } from 'react';

function Slider() {
	const [toggle, setToggle] = useState(false);
	const [slide, setSlide] = useState(0);

	function handleToggle() {
		setToggle(!toggle);
	}

	function handleSlide() {
		slide === 1
			? setSlide(0)
			: setSlide(1);
	}

	useEffect(() => {
		const body = document.querySelector('body');
    
		body.className === 'dark'
			? body.className = ''
			: body.className = 'dark';
	}, [toggle]);

	return(
		<div className='toggle'>
			<div className='track'></div>
			<div
				className='thumb'
				onClick={() => {
					handleToggle();
					handleSlide();
				}}
				slide={slide}
			></div>
			<input className='sr-only' type='checkbox' aria-label='Switch between Dark and Light mode'/>
		</div>
	);
}

export default Slider;