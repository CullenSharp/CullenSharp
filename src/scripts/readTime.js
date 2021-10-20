/**
 * A script that generates a post's estimated read time based on images and words.
 * @returns {string}
 */
function readTime(wordCount = 0) {
	const paragraphs = document.querySelectorAll('p');
	const images = document.querySelectorAll('img');
	
	for(let { textContent } of paragraphs) {
		wordCount += textContent.split(' ').length;
	}

	let readTime = Math.ceil((wordCount / 275) + (images.length * .2));
	return `${readTime} min read`;
}

export default readTime;