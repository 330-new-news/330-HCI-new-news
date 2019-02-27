
var articles = [{ "headline": "Bradley Beal Had the Toughest Job at All-Star Weekend", "image": "https://cdn.vox-cdn.com/thumbor/yCyR8BldRXdGfdWte62ZEF7FFwc=/0x0:3000x2000/1820x1213/filters:focal(1531x310:2011x790):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63072582/brad_beal_haley_getty_ringer.0.jpg", "tag": "sports" }, { "headline": "The next big market catalyst will be what the Fed says about its balance sheet this week", "image": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2019/01/30/105710010-1548882733569rts2cz42.530x298.jpg?v=1548882786", "tag": "business" }, { "headline": "Michael Cohen's entire Trump testimony to the House Oversight Committee", "video": "https://www.youtube.com/embed/TEvaN_F4iiE", "tag": "politics" }, { "headline": "The Amazon deal is DOA, but the political fallout is just beginning", "image": "https://s3-prod.crainsnewyork.com/styles/width_792/s3/0218p15_Gianaris%20Michael%20_Buck%20Ennis.jpg", "tag": "business" }, { "headline": "Varjo's super high-resolution VR headset promises virtual worlds that actually look real", "image": "https://cdn.vox-cdn.com/thumbor/tCyTPwZ0PPJvnlih97vMGOYuoUU=/0x0:4217x3097/1820x1213/filters:focal(2213x1004:2887x1678):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63076404/Varjo_VR_1_2.0.jpg", "tag": "tech" }, { "headline": "MIT scientists are using lobsters to develop a new form of flexible body armor", "image": "https://www.washingtonpost.com/resizer/EiYqOIhXtiRhpTURxu7SYxkRuH0=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XNUKSLWT3AI6PGWZZIDBT3P2AU.jpg", "tag": "science" }, { "headline": "Donald Trump rushing to sell Saudi Arabia nuclear technology", "image": "https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2018/11/24/4bc1a6c967194960a88422630f3472f5_18.jpg", "tag": "politics" }, { "headline": "Honda installation is Red Bull's best ever - Horner", "image": "https://racerdigital.files.wordpress.com/2019/02/1017346362-lat-20190219-_2st0654.jpg?w=2000&h=1200&crop=1", "tag": "sports" }, { "headline": "New sky survey reveals hundreds of thousands of galaxies", "image": "https://cdn.cnn.com/cnnnext/dam/assets/190219124033-01-lofar-new-galaxies-discoveries-exlarge-169.jpg", "tag": "science" }, { "headline": "Ancient humans hunted monkeys for tens of thousands of years", "image": "https://www.sciencemag.org/sites/default/files/styles/inline__699w__no_aspect/public/bones_16x9_1.jpg?itok=h54LPoLC", "tag": "science" }, { "headline": "Samsung's foldable phone? Meet the Galaxy Fold", "image": "https://techcrunch.com/wp-content/uploads/2019/02/trippy.png?w=1390&crop=1", "tag": "tech" }, { "headline": "Mel Kiper mock drafts a running back to the Ravens in Round 1", "image": "https://cdn.vox-cdn.com/thumbor/FAh7SRxCoQ-8xjGPB916ntjKF08=/0x667:2588x3370/1820x1213/filters:focal(1031x1046:1445x1460):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63074668/usa_today_11968087.0.jpg", "tag": "sports" }, { "headline": "Elon Musk: Tesla will have all its self-driving car features by the end of the year", "image": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/10/04/104060375-1538677732633gettyimages-532422786.530x298.jpg?v=1538677759", "tag": "business" }, { "headline": "McCabe told Congress 'Gang of 8' leaders about FBI probe into Trump. They had no objection.", "image": "https://media1.s-nbcnews.com/j/newscms/2019_08/2757946/190219-andrew-mccabe-al-0922_c9fdbb51a5b0d333ef5cd6d598c82379.fit-2000w.jpg", "tag": "politics" }, { "headline": "Google Keep puts notes on your Apple Watch", "image": "https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1066%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1066%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-02%252F10c2f8c0-3472-11e9-b33b-0727eabd2330%26client%3Da1acac3e1b3290917d92%26signature%3D9328d71e1f140d38524714514466139057a499f2&client=amp-blogside-v2&signature=e77b1b518606d1c4de49517f2b6ff593fc45270a", "tag": "tech" }]
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
		if(typeof article.image != "undefined") {
			return '<div class="article"><div class="image" style="background-image: url(\'' + article.image + '\')"></div><h3 class="headline">' + article.headline + '</h3></div>'
		} else {
			return '<div class="article"><iframe class="video" src="' + article.video + '"></iframe><h3 class="headline">' + article.headline + '</h3></div>'
		}
	})

	articlesElement.innerHTML = articlesHTML.join('')
}

window.addEventListener('load', render)
