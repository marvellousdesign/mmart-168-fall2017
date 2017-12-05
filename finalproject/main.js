const key = 'AIzaSyA0OwYNa1ng9-5MAUhOpwOc9f2PU_kqeeY'
const searchEngineID = '011931807795810912304:yctplun7xr4'

// org https://jsfiddle.net/crmardix/zjWaj/
const clearPage = () => {
	document.getElementById('pageImg').innerHTML = ''
	document.getElementById('pageText').innerHTML = ''
	document.getElementById('response').innerHTML = ''
}

const setPageText = (text) => {
	document.getElementById('pageText').innerHTML = `<p> ${text} </p>`
}

const setPageImg = (img) => {
	const keywords = PAGES.keywords
	const googleImage = 'https://www.googleapis.com/customsearch/v1?key='
	+ key + '&cx=' + searchEngineID + '&q=' + keywords + '&num=1&safe=medium&searchType=image'
	const fetchImg = () => {
		fetch(googleImage)
		    .then(function(response) {
		    return response.json();
		}).then(function(json) {
		    console.log(json)
		    const items = json.items
			items.forEach((item) => {
		        console.log(item.link)
		        const img = document.createElement('img')
		        img.src = item.link
				document.getElementById('pageImg').appendChild(img)
		    })
		});
	}

	if (keywords === undefined) {
		document.getElementById('pageImg').innerHTML += `<img src=${img} />`
	} else if (img === undefine) {
		fetchImg()
	} else {
		fetchImg()
	}
}

const addChoice = (text, target) => {
	document.getElementById('response').innerHTML +=
        `<button class=choice data-target= ${target} onClick="toggle(this)"> ${text} </button>`
}

const loadPage = (target) => {
	// Fetch JSON for page data associated with given data-target
	const data = PAGES[target]
	console.log('Current Page Keyword: ' + PAGES[target].keywords + ', Current Page: ' + PAGES[target])

	clearPage()
	setPageText(data.text)
	setPageImg(data.img)
	console.log('Page Text: ' + data.text + ', Keywords: ' + data.keywords + ', Img: ' + data.img)

	if (data.type === 'choice') {
		for (let choice in data.choices) {
			const CYOA = data.choices[choice]
			addChoice(CYOA.text, CYOA.target)
		}
	}
}

let currentPage = 0
loadPage(0)
const toggle = choice => {
	choice.classList.toggle('choice')
	const target = choice.getAttribute('data-target')
	loadPage(target)
	console.log('Selected Target: ' + target)
}
