
var filters = []
var topics = ['business', 'politics', 'science', 'sports', 'tech']

var articlesElement = document.querySelector('#articles')
topics.forEach(function (topic) {
	var element = document.querySelector('#filter-' + topic)
	element.addEventListener('click', toggleFilter.bind(null, topic, element))
})

function toggleFilter(topic, element) {
	var index = filters.indexOf(topic)
	if (index > -1) {
		filters.splice(index, 1)
		element.classList.remove('active')
	}
	else {
		filters.push(topic)
		element.classList.add('active')
	}

	render()
}

function render() {
	var filteredArticles = articles.slice()
	if (filters.length > 0) {
		filteredArticles = filteredArticles.filter(function (article) {
			return filters.indexOf(article.tag) > -1
		})
	}

	var articlesHTML = filteredArticles.map(function (article) {
		if (article.headline.length > 80) {
			article.headline = article.headline.substring(0, 79).concat("...");
		}
		return '<a class="article" href="article.html#' + article.index + '"><div class="image" style="background-image: url(\'' + article.image + '\')"></div><h3 class="headline">' + article.headline + '</h3></a>'
	})

	articlesElement.innerHTML = articlesHTML.join('')
}

window.addEventListener('load', render)
