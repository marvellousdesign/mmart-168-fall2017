// org https://jsfiddle.net/crmardix/zjWaj/
let currentPage = 0
let apiType = 'flickr'
const clearPage = () => {
	document.getElementById('pageText').innerHTML = ''
	document.getElementById('response').innerHTML = ''
}

const setPageText = (text) => {
	document.getElementById('pageText').innerHTML = `<p> ${text} </p>`
}

const setPageImg = (data) => {
	const hardCodedImg = () => {
		document.getElementById('page').style.backgroundImage = `url(${data.img})`
	}
	const keywords = data.keywords

	if (apiType === 'google') {
		const key = 'AIzaSyA0OwYNa1ng9-5MAUhOpwOc9f2PU_kqeeY'
		const searchEngineID = '011931807795810912304:yctplun7xr4'
		const google = 'https://www.googleapis.com/customsearch/v1?key='
		+ key + '&cx=' + searchEngineID + '&q=' + keywords + '&safe=medium&searchType=image'
		if (keywords === undefined) {
			hardCodedImg()
		} else {
			fetch(google)
			    .then(function(response) {
			    return response.json()
			}).then(function(json) {
			    console.log(json)
			    const items = json.items
				if (items === undefined) {
					hardCodedImg()
				} else {
					const random = Math.floor(Math.random() * items.length)
					const img = items[random].link
					document.getElementById('page').style.backgroundImage = `url(${img})`
					console.log(`Image fetched: ${img}`)

					// items.forEach((item) => {
					// 	console.log('Image fetched: ' + item.link)
					// 	document.getElementById('page').style.backgroundImage = `url(${item.link})`
					// })
				}
			})
		}
	} else {
		//flickr public photos feed
		const flickr = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?'
		// can't use the fetch without throwing CORs error (Cross Orgin Request), only works with jQuery...
		if (keywords === undefined) {
			hardCodedImg()
		} else {
			$.getJSON(flickr, {
				tags: keywords.join(','), // works now, but not without .join(',')
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
						if (data.items[random] === undefined) {
							hardCodedImg()
						} else {
							const img = data.items[random]['media']['m'].replace('_m', '_b')
							document.getElementById('page').style.backgroundImage = `url(${img})`
							console.log('Image fetched: ' + img)
						}
					})
				} else {
					const img = data.items[random]['media']['m'].replace('_m', '_b')
					document.getElementById('page').style.backgroundImage = `url(${img})`
					console.log('Image fetched: ' + img)
				}
			})
		}
	}
}

const addChoice = (text, target) => {
	document.getElementById('response').innerHTML +=
        `<button class=choice data-target=${target} onClick="toggle(this)"> ${text} </button>`
}

const loadPage = (target) => {
	// Fetch JSON for page data associated with given data-target
	const pageData = PAGES[target]

	const battle = (target) => {
		let pageData = PAGES[target].choices[0]
		console.log(`Page Data: ${pageData} | Data Type: ${pageData.type}`)
		if (pageData.type === 'battle') {
			const random = pageData.battles[Math.floor(Math.random() * pageData.battles.length)]
			console.log(`${random.text} Target page: ${random.target}`)
			addChoice(random.text, random.target)
			// how to hide this classless fight button after the above have been executed??
		}
		console.log(pageData.battles)
	}
	console.log(pageData)
	if (pageData === undefined) {
		// How to check for target 7 vs target 9 (regular fight vs boss(gameover))
		battle(7)
	} else {
		console.log('-------------------------------------------------------------------------------------------------')
		console.log(`Current Page Keyword: ${PAGES[target].keywords} | Current Page: ${target}`)

		clearPage()
		setPageText(pageData.text)
		setPageImg(pageData)
		console.log(`Page Text: ${pageData.text} | Keywords: ${pageData.keywords} | Img: ${pageData.img} | Data Type: ${pageData.type}`)

		if (pageData.type === 'choice') {
			for (let choice in pageData.choices) {
				const CYOA = pageData.choices[choice]
				addChoice(CYOA.text, CYOA.target)
			}
		}
	}
}

const chooseAPI = () => {
	apiType = document.querySelector('input[name=api]:checked').value
	console.log(`API Selected: ${apiType}`)
	loadPage(0)
	document.getElementById('page').style.display = 'block'
	document.getElementById('initialize').style.display = 'none'
}

const toggle = choice => {
	choice.classList.toggle('choice')
	const target = choice.getAttribute('data-target')
	loadPage(target)
	console.log(`Selected Target #: ${target}`)
}
