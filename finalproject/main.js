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
	setTimeout(() => { //fading out/delay
		document.getElementById('pageImg').classList.remove('fadeIn')
		document.getElementById('pageImg').innerHTML = ''
		document.getElementById('pageText').innerHTML = ''
	},50)
	document.getElementById('response').innerHTML = ''
	document.getElementById('battle').innerHTML = ''
}

//------------------------------------------------------------------------------

const setPageImg = (data) => {
	let imgElement = document.getElementById('pageImg')
	let img = document.createElement('img')
	// setTimeout & removeChild / innerHTML = '' is bugged if I put it here
	const hardCodedImg = () => {
		//document.getElementById('page').style.backgroundImage = `url(${data.img})`
		imgElement.classList.add('fadeIn')
		img.src = data.img
		imgElement.appendChild(img)
		//document.getElementById('pageImg').innerHTML = `<img src=${data.img} />`
	}
	let imgContext
	const webImg = (img, imgContext) => {
		//document.getElementById('page').style.backgroundImage = `url(${img})`
		setTimeout(() => { //fading in/delay
			imgElement.classList.add('fadeIn')
			imgElement.appendChild(img)
			console.log(`Image fetched: ${img.src} | Context Link: ${imgContext}`)
		},50)
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
			    .then((response) => {
			    return response.json()
			}).then((json) => {
			    console.log(json)
			    const items = json.items
				if (items === undefined) {
					hardCodedImg()
					//loads hardCodedImage from the JSON if google reach it's limit (I don't have a hard coded image for everything)
				} else {
					//this will randomly choose a img with the items array
					const random = Math.floor(Math.random() * items.length)
					imgContext = items[random].image.contextLink
					img.src = items[random].link
					webImg(img, imgContext)
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
				tags: keywords.join(','), // works now to search by keywords, but not without .join(',')
				tagmode: 'all',
				format: 'json'
			},
			(data) => {
				console.log(data)
				//this will randomly choose a img within the data.items array
				const random = Math.floor(Math.random() * data.items.length)
				if (data.items[random] === undefined) { // when tagmode all doesn't give anything
					$.getJSON(flickr, {
						tags: keywords.join(','),
						tagmode: 'any', // change to any
						format: 'json'
					},
					(data) => {
						console.log(data)
						//this will randomly choose a img within the data.items array
						const random = Math.floor(Math.random() * data.items.length)
						if (data.items[random] === undefined) {
							hardCodedImg()
							//loads hardCodedImage from the JSON if flickr doesn't give anything
						} else {
							imgContext = data.items[random].link
							img.src = data.items[random]['media']['m'].replace('_m', '_b')
							webImg(img, imgContext)
						}
					})
				} else { //for tagemode all
					imgContext = data.items[random].link
					img.src = data.items[random]['media']['m'].replace('_m', '_b')
					webImg(img, imgContext)
				}
			})
		}
	}
}

//------------------------------------------------------------------------------

const setPageText = (text) => {
	const pageTexts = document.getElementById('pageText')
	setTimeout(() => { //fading in/delay
		//pageTexts.classList.add('fadeIn')
		pageTexts.innerHTML = `<p>${text}</p>`
	},1000)
}

const toggle = (choice) => {
	choice.classList.toggle('choice')
	const target = choice.getAttribute('data-target')
	loadPage(target)
}

//Adds response choices
const addChoice = (text, target, color) => {
	document.getElementById('battle').style.display = 'none'
	const response = document.getElementById('response')
	response.style.display = 'flex'
	setTimeout(() => { //fading in/delay
		response.innerHTML += `<button class='choice ${color}' data-target=${target} onClick="toggle(this)">${text}</button>`
	},1000)
}

//Adds battle choice
const battleResults = (text, target, color) => {
	document.getElementById('response').style.display = 'none'
	const battle = document.getElementById('battle')
	battle.style.display = 'block'
	setTimeout(() => { //fading in/delay
		battle.innerHTML = `<button class='choice ${color}' data-target=${target} onClick="toggle(this)">${text}</button>`
	},1000)
}

//------------------------------------------------------------------------------

const loadPage = (target) => {
	// Fetch JSON for page data associated with given data-target
	const pageData = PAGES[target]

	const randomPage = (pageData) => {
		const randomTarget = (pageChoiceOrBattle) => { //Randomly chooses 1 choice/battle results
			const random = pageChoiceOrBattle[Math.floor(Math.random() * pageChoiceOrBattle.length)]
			battleResults(random.text, random.target, random.color)
		}
		if (pageData.type === 'battle') {
			randomTarget(pageData.battles)
		} else {
			clearPage()
			setTimeout(() => { //fading in/delay
				setPageImg(pageData)
				setPageText(pageData.text)
				randomTarget(pageData.choices)
			},50)
		}
	}

	const battle = (target) => {
		let pageData = PAGES[target].choices[0]
		randomPage(pageData)
	}

	const loadingPage = (target) => {
		clearPage()
		setTimeout(() => { //fading in/delay
			setPageImg(pageData)
			setPageText(pageData.text)
			if (pageData.type === 'choice') {
				for (let choice in pageData.choices) {
					const CYOA = pageData.choices[choice]
					addChoice(CYOA.text, CYOA.target, CYOA.color)
				}
			}
		},50)
	}

	console.log('----------------------------------------------------------------------------------------------------------------------------------------------------------------')
	console.log(pageData)
	if (pageData === undefined) {
		// How to check for target 20 vs target 24 (regular fight vs boss(gameover))
		battle(20)
	} else if ((pageData.target === 17) || (pageData.target === 18) || (pageData.target === 14)) {
		//randomize from going up a level to a encountering an enemies/monster
		randomPage(pageData)
	} else {
		loadingPage(target)
	}
}
