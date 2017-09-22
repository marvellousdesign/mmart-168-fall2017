const beyonceTweet = {
	name: 'Beyoncé',
	handle: '@beyonce',
	text: '#LEMONADE the Visual Album.'
}

const links = [
	'https://twitter.com/mmart168',
	'https://twitter.com/beyonce',
	'http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg'
]

const modifyText = () => {
	document.querySelector('#freebie').innerHTML = 'Example Freebie!'
	console.log('modifying text')
	// YOUR CODE BELOW THIS LINE.
	document.querySelector('#message2').innerHTML = beyonceTweet.text
	document.querySelector('#link2').innerHTML = beyonceTweet.name
	document.querySelector('#user2').innerHTML = beyonceTweet.handle
}

const changeLinkAndImageAttributes = () => {
	console.log('changing link attribute')
	// YOUR CODE BELOW THIS LINE
	document.querySelector('#link1').href = links[0]
	document.querySelector('#link2').href = links[1]
	document.querySelector('#beyonce').src = links[2]
}

const changeClassAttribute = () => {
	console.log('changing class attribute')
	// YOUR CODE BELOW THIS LINE
	const tweets = document.querySelectorAll('.tweet')
	for (const i = 0; i < tweets.length; i++) {
		tweets[i].className = 'tweet-pink'
	}
	// This 'getElementsByClassName' doesn't change both of them at the same time, but have to click the button twice..
}

const appendElements = () => {
	console.log('appending element')
	// YOUR CODE BELOW THIS LINE
	// document.querySelector('#message1').innerHTML += '<br><a href="https://f17.ebook.mmart.us/">Intro to JavaScript</a>'

	const tweet1 = document.querySelector('#tweet1')
	const a = document.createElement('a')
	a.appendChild(document.createTextNode('Intro to JavaScript'))
	a.href = 'https://f17.ebook.mmart.us/'
	const img = document.createElement('img')
	img.src =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png'

	tweet1.appendChild(a)
	tweet1.appendChild(document.createElement('br'))
	tweet1.appendChild(img)
}
