//------------------------------------------------------------------
// PART I: Using a while loop, print the message provided 100 times
//------------------------------------------------------------------

const name = 'John'

// Creates a list element and appends it to the unordered list in part1
const appendListElement = (text) => {
  const li = document.createElement('li')
  const textNode = document.createTextNode(text)
  li.appendChild(textNode)
  document.querySelector('#part1').appendChild(li)
}

let i = 0
while ( i < 100) {
  appendListElement('Welcome, ' + name + '! Make yourself comfortable.')
  i++
}

//------------------------------------------------------------------
// PART II: Using a for loop, write out each person’s avatar, name, and score, based on the people array
//------------------------------------------------------------------
//The data:
var people = [
  { name: 'Jane', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 300 },
  { name: 'Brenda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 10} ,
  { name: 'Wanda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 60 },
  { name: 'Maria', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 80 },
  { name: 'Jasper', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 600 },
  { name: 'Malik', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 40 }
]


// use a for loop to DRY up the printNames function
// it should loop over the people array and append
// the users avatar pic, a greeting, and their score to the HTML
const printNames = (arr) => {
  const img = document.createElement('img')
  img.src = people[arr].pic
  img.classList.add('avatar')

  const paragraph = document.createElement('p')
  const text = document.createTextNode('Welcome, ' + people[arr].name + '! Your score is: ' + people[arr].score)
  paragraph.appendChild(text)

  document.querySelector('#part2').appendChild(img)
  document.querySelector('#part2').appendChild(paragraph)
}

for (let i = 0; i < people.length; i++) {
  printNames(i)
}
