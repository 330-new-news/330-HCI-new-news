const articleHeaderElement = document.querySelector('#container .header')
const articleBodyElement = document.querySelector('#container .body')
const leaveFeedbackElement = document.querySelector('#container .leave-feedback')
const sideBarElement = document.querySelector('#sidebar')

for (let i = 0; i < 4; i++) {
	const feedbackButton = document.querySelector(`#feedback .feedback-${i}`)
	const leaveFeedbackButton = leaveFeedbackElement.querySelector(`.leave-feedback-${i}`)
	feedbackButton.addEventListener('click', setFeedback.bind(null, i))
	leaveFeedbackButton.addEventListener('click', leaveFeedback.bind(null, i))
}

let index
let feedbackFilter = -1

let leaveFeedbackId = ''
let leaveFeedbackSpanElement = null

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
	sideBarElement.innerHTML = getOtherSources()
}

function getBody() {
	if (articles[index].video) {
		return '<div class="embed"><h3>Video</h3><iframe width="560" height="315" src="' + articles[index].video + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
	}
	else {
		if (feedbackFilter === -1) {
			return articles[index].body.map((paragraph, paragraphIndex) => {
				return `<p>${paragraph.split('. ').map((sentence, sentenceIndex) => {
					return `<span class="selectable" data-id="${paragraphIndex}-${sentenceIndex}" onclick="onSentenceSelect(event)">${sentence.trim()}</span>`
				}).join('. ')}</p>`
			}).join('')
		}
		else {
			return articles[index].body.map((paragraph, paragraphIndex) => {
				return `<p>${paragraph.split('. ').map((sentence, sentenceIndex) => {
					return `<span data-id="${paragraphIndex}-${sentenceIndex}" class="highlight-${feedbackFilter}-${articles[index].highlights[paragraphIndex][feedbackFilter][sentenceIndex]}">${sentence.trim()}</span>`
				}).join('. ')}</p>`
			}).join('')
		}
	}
}

function getOtherSources() {
	if (articles[index].otherSources) {
		return `<h2>Other sources</h2><div class="sources">${articles[index].otherSources.map((source) => `<div class="source"><div class="image" style="background-image: url(\'${source.image}\')"></div><h3 class="headline">${source.headline}</h3></div>`).join('')}</div>`
	}
	else {
		return ''
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

function leaveFeedback(filter) {
	leaveFeedbackId = ''
	leaveFeedbackSpanElement.classList = `selectable highlight-${filter}-4`
	leaveFeedbackElement.classList.remove('active')
}

function onSentenceSelect(event) {
	const span = event.currentTarget
	const id = span.getAttribute('data-id')
	if (id === leaveFeedbackId) {
		span.classList.remove('active')
		leaveFeedbackElement.classList.remove('active')

		leaveFeedbackId = ''
		leaveFeedbackSpanElement = null
	}
	else {
		if (leaveFeedbackId) {
			leaveFeedbackSpanElement.classList.remove('active')
		}

		span.classList.add('active')
		leaveFeedbackElement.classList.add('active')

		const x = (span.offsetLeft + span.offsetWidth) / 2
		const y = span.offsetTop
		leaveFeedbackElement.style.top = `${y}px`
		leaveFeedbackElement.style.left = `${x}px`

		leaveFeedbackId = id
		leaveFeedbackSpanElement = span
	}
}

loadArticle()
