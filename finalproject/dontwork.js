// A log of APIs that doesn't work/fit my needs/stop working
// they go inside const setPageImg = (data) => {...}

// --------------------------------------------------------------------------------------
// Google Custom Search API
const key = 'AIzaSyA0OwYNa1ng9-5MAUhOpwOc9f2PU_kqeeY'
const searchEngineID = '011931807795810912304:yctplun7xr4'
const google = 'https://www.googleapis.com/customsearch/v1?key='
+ key + '&cx=' + searchEngineID + '&q=' + keywords + '&num=1&safe=medium&searchType=image'
// &num=1 (returns 1 image, but using Math.random() made the API reach its daily limit with error code 403)
if (keywords === undefined) {
	document.getElementById('pageImg').innerHTML += `<img src=${hardCodedImg} />`
} else {
	fetch(google)
	    .then(function(response) {
	    return response.json()
	}).then(function(json) {
	    console.log(json)
	    const items = json.items
		if (items === undefined) {
			document.getElementById('pageImg').innerHTML += `<img src=${hardCodedImg} />`
		} else {
			items.forEach((item) => {
				console.log('Image fetched: ' + item.link)
				const img = document.createElement('img')
				img.src = item.link
				document.getElementById('pageImg').appendChild(img)
			})
		}
	})
}

// --------------------------------------------------------------------------------------
// flickr public photos feed (searching by keywords works now.)
const flickr = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'
// can't use the fetch without throwing CORs error (Cross Orgin Request), only works with jQuery...

if (keywords === undefined) {
	document.getElementById('pageImg').innerHTML += `<img src=${hardCodedImg} />`
} else {
	$.getJSON(flickr, {
		tags: keywords.join(','), // works, but not without .join(',')
		tagmode: 'all',
		format: 'json'
	},
	(data) => {
		const random = Math.floor(Math.random() * data.items.length)
		if (data.items[random] === undefined) { // when tagmode all doesn't give anything
			$.getJSON(flickr, {
				tags: keywords.join(','),
				tagmode: 'any', // change to any
				format: 'json'
			},
			(data) => {
				const random = Math.floor(Math.random() * data.items.length)
				const img = document.createElement('img')
				img.src = data.items[random]['media']['m'].replace('_m', '_b')
				document.getElementById('pageImg').appendChild(img)
				console.log('Image fetched: ' + img.src)
			})
		} else {
			const img = document.createElement('img')
			img.src = data.items[random]['media']['m'].replace('_m', '_b')
			document.getElementById('pageImg').appendChild(img)
			console.log('Image fetched: ' + img.src)
		}
	})
}
