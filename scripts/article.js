const articleHeaderElement = document.querySelector('#container .header')
const articleBodyElement = document.querySelector('#container .body')

for (let i = 0; i < 4; i++) {
	const feedbackButton = document.querySelector(`#feedback .feedback-${i}`)
	feedbackButton.addEventListener('click', setFeedback.bind(null, i))
}

let index
let feedbackFilter = -1

function loadArticle() {
	if (window.location.hash) {
		index = parseInt(window.location.hash.substring(1)) || 0
	}
	else {
		index = 0
	}

	article = articles[index]

	articleHeaderElement.innerHTML = `
		<h1>${article.headline}</h1>
		<div class="picture" style="background-image: url('${article.image}')"></div>
	`
	articleBodyElement.innerHTML = getBody()
}

function getBody() {
	if (feedbackFilter === -1) {
		return articles[index].body.map(text => `<p>${text}</p>`).join('')
	}
	else {
		return articles[index].body.map((paragraph, paragraphIndex) => {
			return `<p>${paragraph.split('. ').map((sentence, sentenceIndex) => {
				return `<span class="highlight-${feedbackFilter}-${articles[index].highlights[paragraphIndex][feedbackFilter][sentenceIndex]}">${sentence.trim()}</span>`
			}).join('. ')}</p>`
		}).join('')
	}
}

function setFeedback(filter) {
	if (feedbackFilter === filter) {
		document.querySelector(`#feedback .feedback-${feedbackFilter}`).classList.remove('active')
		feedbackFilter = -1
	}
	else {
		if (feedbackFilter >= 0) {
			document.querySelector(`#feedback .feedback-${feedbackFilter}`).classList.remove('active')
		}
		feedbackFilter = filter
		document.querySelector(`#feedback .feedback-${feedbackFilter}`).classList.add('active')
	}

	articleBodyElement.innerHTML = getBody()
}

loadArticle()
