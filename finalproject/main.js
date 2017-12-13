// org https://jsfiddle.net/crmardix/zjWaj/
let currentPage = 0
let apiType = 'flickr'

const chooseAPI = () => {
	apiType = document.querySelector('input[name=api]:checked').value
	console.log(`API Selected: ${apiType}`)
	loadPage(0)
	document.getElementById('page').style.display = 'block'
	document.getElementById('initialize').style.display = 'none'
}

const clearPage = () => {
	document.getElementById('pageImg').innerHTML = ''
	document.getElementById('pageText').innerHTML = ''
	document.getElementById('response').innerHTML = ''
	document.getElementById('battle').innerHTML = ''
}

//------------------------------------------------------------------------------

const setPageImg = (data) => {
	const img = document.createElement('img')
	const hardCodedImg = () => {
		//document.getElementById('page').style.backgroundImage = `url(${data.img})`
		document.getElementById('pageImg').innerHTML += `<img src=${data.img} />`
	}
	const webImg = (img) => {
		//document.getElementById('page').style.backgroundImage = `url(${img})`
		document.getElementById('pageImg').appendChild(img)
		console.log(`Image fetched: ${img.src}`)
	}
	const keywords = data.keywords

	//Google Custom Search API has a 100 request a day limit  ------------------
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
					//loads hardCodedImage from the JSON if google reach it's limit (I don't have a hard coded image for everything)
				} else {
					//this will randomly choose a img with the items array
					const random = Math.floor(Math.random() * items.length)
					img.src = items[random].link
					webImg(img)
				}
			})
		}
	} else {
		//flickr public photos feed --------------------------------------------
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
				//this will randomly choose a img with the data.items array
				const random = Math.floor(Math.random() * data.items.length)
				if (data.items[random] === undefined) { // when tagmode all doesn't give anything
					$.getJSON(flickr, {
						tags: keywords.join(','),
						tagmode: 'any', // change to any
						format: 'json'
					},
					(data) => {
						//this will randomly choose a img with the data.items array
						const random = Math.floor(Math.random() * data.items.length)
						if (data.items[random] === undefined) {
							hardCodedImg()
							//loads hardCodedImage from the JSON if flickr doesn't give anything
						} else {
							img.src = data.items[random]['media']['m'].replace('_m', '_b')
							webImg(img)
						}
					})
				} else { //for tagemode all
					img.src = data.items[random]['media']['m'].replace('_m', '_b')
					webImg(img)
				}
			})
		}
	}
}

//------------------------------------------------------------------------------

const setPageText = (text) => {
	document.getElementById('pageText').innerHTML = `<p> ${text} </p>`
}

const toggle = choice => {
	choice.classList.toggle('choice')
	const target = choice.getAttribute('data-target')
	loadPage(target)
	console.log(`Selected Target #: ${target}`)
}

const addChoice = (text, target) => {
	document.getElementById('battle').style.display = 'none'
	const response = document.getElementById('response')
	response.style.display = 'flex'
	response.innerHTML += `<button class=choice data-target=${target} onClick="toggle(this)"> ${text} </button>`
}

const battleResults = (text, target) => {
	document.getElementById('response').style.display = 'none'
	const battle = document.getElementById('battle')
	battle.style.display = 'block'
	battle.innerHTML = `<button class=choice data-target=${target} onClick="toggle(this)"> ${text} </button>`
}

//------------------------------------------------------------------------------

const loadPage = (target) => {
	// Fetch JSON for page data associated with given data-target
	const pageData = PAGES[target]

	const randomPage = (pageData) => {
		const randomTarget = (pageChoiceOrBattle) => {
			const random = pageChoiceOrBattle[Math.floor(Math.random() * pageChoiceOrBattle.length)]
			console.log(`${random.text} Target page: ${random.target}`)
			battleResults(random.text, random.target)
		}
		if (pageData.type === 'battle') {
			randomTarget(pageData.battles)
		} else {
			randomTarget(pageData.choices)
		}
	}

	const battle = (target) => {
		let pageData = PAGES[target].choices[0]
		console.log(`Page Data: ${pageData} | Data Type: ${pageData.type}`)
		randomPage(pageData)
	}

	const loadingPage = (target) => {
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

	console.log(pageData)
	if (pageData === undefined) {
		// How to check for target 20 vs target 24 (regular fight vs boss(gameover))
		battle(20)
	} else if ((pageData.target === 17) || (pageData.target === 18)) {
		//randomize from going up a level to a encountering an enemies/monster
		randomPage(pageData)
	} else {
		loadingPage(target)
	}
}
