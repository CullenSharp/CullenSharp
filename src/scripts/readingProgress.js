/**
 *  Calculates reading progress from window height, window position on the Y, and view height.
 *  clamped between 0 and 100.
 *  @returns {number}
 */
function readingProgress() {
	const viewHeight = document.querySelector('article').offsetHeight;
	const windowHeight = window.innerHeight;
	const yPosition = window.scrollY;

	const progress = Math.round((windowHeight/(viewHeight - yPosition) * 100));

	return progress < 100 && progress >= 0
		? progress 
		: 100;
}

export default readingProgress;
