/**
 * A script that generates a post's estimated read time based on images and words.
 * @param {NodeList} paragraphs
 * @param {NodeList} images
 * @returns {string}
 */
function readTime(paragraphs, images, wordCount = 0) {
	for(let { textContent } of paragraphs) {
		wordCount += textContent.split(' ').length;
	}

	let readTime = Math.ceil((wordCount / 275) + (images.length * .2));
	return `${readTime} min read`;
}

export default readTime;