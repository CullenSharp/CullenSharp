import React from 'react';

function Slider() {
	function toggle(e) {
		if (e.target.className === 'thumb checked') {
			e.target.className = 'thumb';
		} else {
			e.target.className = 'thumb checked';
		}
	}

	return(
		<div className='toggle'>
			<div className='track'></div>
			<div className='thumb' onClick={toggle}></div>
		</div>
	);
}

export default Slider;