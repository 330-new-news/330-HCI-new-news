
var articles = [
	{
		headline: 'Donald Trump rushing to sell Saudi Arabia nuclear technology',
		image: 'https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2018/11/24/4bc1a6c967194960a88422630f3472f5_18.jpg',
		tag: 'political'
	},
	{
		headline: 'McCabe told Congress \'Gang of 8\' leaders about FBI probe into Trump. They had no objection.',
		image: 'https://media1.s-nbcnews.com/j/newscms/2019_08/2757946/190219-andrew-mccabe-al-0922_c9fdbb51a5b0d333ef5cd6d598c82379.fit-2000w.jpg',
		tag: 'political'
	},
	{
		headline: 'Andrew McCabe Couldn\'t Believe the Things Trump Said About Putin',
		image: 'https://cdn.theatlantic.com/assets/media/img/mt/2019/02/RTS167OE/lead_720_405.jpg?mod=1550518531',
		tag: 'political'
	},
	{
		headline: 'Bradley Beal Had the Toughest Job at All-Star Weekend',
		image: 'https://cdn.vox-cdn.com/thumbor/yCyR8BldRXdGfdWte62ZEF7FFwc=/0x0:3000x2000/1820x1213/filters:focal(1531x310:2011x790):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63072582/brad_beal_haley_getty_ringer.0.jpg',
		tag: 'sports'
	},
	{
		headline: 'Honda installation is Red Bull\'s best ever - Horner',
		image: 'https://racerdigital.files.wordpress.com/2019/02/1017346362-lat-20190219-_2st0654.jpg?w=2000&h=1200&crop=1',
		tag: 'sports'
	},
	{
		headline: 'Mel Kiper mock drafts a running back to the Ravens in Round 1',
		image: 'https://cdn.vox-cdn.com/thumbor/FAh7SRxCoQ-8xjGPB916ntjKF08=/0x667:2588x3370/1820x1213/filters:focal(1031x1046:1445x1460):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63074668/usa_today_11968087.0.jpg',
		tag: 'sports'
	},
	{
		headline: 'Samsung\'s foldable phone? Meet the Galaxy Fold',
		image: 'https://techcrunch.com/wp-content/uploads/2019/02/trippy.png?w=1390&crop=1',
		tag: 'tech'
	},
	{
		headline: 'Varjo\'s super high-resolution VR headset promises virtual worlds that actually look real',
		image: 'https://cdn.vox-cdn.com/thumbor/tCyTPwZ0PPJvnlih97vMGOYuoUU=/0x0:4217x3097/1820x1213/filters:focal(2213x1004:2887x1678):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63076404/Varjo_VR_1_2.0.jpg',
		tag: 'tech'
	},
	{
		headline: 'Google Keep puts notes on your Apple Watch',
		image: 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1066%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1066%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-02%252F10c2f8c0-3472-11e9-b33b-0727eabd2330%26client%3Da1acac3e1b3290917d92%26signature%3D9328d71e1f140d38524714514466139057a499f2&client=amp-blogside-v2&signature=e77b1b518606d1c4de49517f2b6ff593fc45270a',
		tag: 'tech'
	}
]
var filter = ''

var articlesElement = document.querySelector('#articles')

function render() {
	var filteredArticles = articles.slice()
	if (filter !== '') {
		filteredArticles = filteredArticles.filter(function (article) {
			return article.tag === filter
		})
	}

	var articlesHTML = filteredArticles.map(function (article) {
		return '<div class="article"><div class="image" style="background-image: url(\'' + article.image + '\')"></div><h3 class="headline">' + article.headline + '</h3></div>'
	})

	articlesElement.innerHTML = articlesHTML.join('')
}

window.addEventListener('load', render)
