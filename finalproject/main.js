// org https://jsfiddle.net/crmardix/zjWaj/
const clearPage = () => {
	document.getElementById('pageImg').innerHTML = ''
	document.getElementById('pageText').innerHTML = ''
	document.getElementById('response').innerHTML = ''
}

const setPageText = (text) => {
	document.getElementById('pageText').innerHTML = `<p> ${text} </p>`
}

const setPageImg = (data) => {
	const hardCodedImg = data.img
	const keywords = data.keywords

	//flickr public photos feed
	const flickr = `https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?`
	// can't use the fetch without throwing CORs error (Cross Orgin Request), only works with jQuery...

	$.getJSON( flickr, {
        tags: keywords, 	// Can't seem to search by keywords, it's just random recently upload images
        tagmode: "any",
        format: "json"
    },
    function(data) {
		const random = Math.floor(Math.random() * data.items.length)
		const img = document.createElement('img')
		img.src = data.items[random]['media']['m'].replace('_m', '_b')
		document.getElementById('pageImg').appendChild(img)
		console.log('Image fetched: ' + img.src)
    })
}

const addChoice = (text, target) => {
	document.getElementById('response').innerHTML +=
        `<button class=choice data-target=${target} onClick="toggle(this)"> ${text} </button>`
}

const loadPage = (target) => {
	// Fetch JSON for page data associated with given data-target
	const pageData = PAGES[target]
	console.log('Current Page Keyword: ' + PAGES[target].keywords + ' | Current Page: ' + PAGES[target])

	clearPage()
	setPageText(pageData.text)
	setPageImg(pageData)
	console.log('Page Text: ' + pageData.text + ' | Keywords: ' + pageData.keywords + ' | Img: ' + pageData.img)

	if (pageData.type === 'choice') {
		for (let choice in pageData.choices) {
			const CYOA = pageData.choices[choice]
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
	console.log('Selected Target #: ' + target)
}
