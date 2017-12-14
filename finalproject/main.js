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
		document.getElementById('pageImg').classList.add('transparent')
		document.getElementById('pageImg').innerHTML = ''
	},50)
	document.getElementById('pageText').innerHTML = ''
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
		img.src = data.img
		imgElement.appendChild(img)
		//document.getElementById('pageImg').innerHTML = `<img src=${data.img} />`
	}
	const webImg = (img) => {
		//document.getElementById('page').style.backgroundImage = `url(${img})`
		imgElement.appendChild(img)
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
	document.getElementById('pageText').innerHTML = `<p>${text}</p>`
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
	response.classList.add('fadeIn')
	setTimeout(() => { //fading in/delay
		response.innerHTML += `<button class='choice ${color}' data-target=${target} onClick="toggle(this)">${text}</button>`
	},500)
}

//Adds battle choice
const battleResults = (text, target, color) => {
	document.getElementById('response').style.display = 'none'
	const battle = document.getElementById('battle')
	battle.style.display = 'block'
	battle.classList.add('fadeIn')
	setTimeout(() => { //fading in/delay
		battle.innerHTML = `<button class='choice ${color}' data-target=${target} onClick="toggle(this)">${text}</button>`
	},500)
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
			setPageText(pageData.text)
			setTimeout(() => { //fading in/delay
				document.getElementById('pageImg').classList.remove('transparent')
				setPageImg(pageData)
			},50)
			randomTarget(pageData.choices)
		}
	}

	const battle = (target) => {
		let pageData = PAGES[target].choices[0]
		randomPage(pageData)
	}

	const loadingPage = (target) => {
		clearPage()
		setPageText(pageData.text)
		setTimeout(() => { //fading in/delay
			document.getElementById('pageImg').classList.remove('transparent')
			setPageImg(pageData)
		},50)

		if (pageData.type === 'choice') {
			for (let choice in pageData.choices) {
				const CYOA = pageData.choices[choice]
				addChoice(CYOA.text, CYOA.target, CYOA.color)
			}
		}
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
