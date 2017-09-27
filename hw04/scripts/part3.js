let language = 'English'
let languageCode = 'en'
let jsonData

const setLanguage = code => {
  //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
  languageCode = code
  if (code === 'ru') {
    language = 'Russian'
  } else if (code === 'es') {
    language = 'Spanish'
  } else {
    language = 'English'
  }
  document.getElementById('language').innerHTML = language

  //clear form:
  getData()
}

const clearData = () => {
  const element = document.getElementById('results')
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

//Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
const getData = () => {
  const term = document.getElementById('term').value
  const baseURL =
    'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' +
    term
  twitterURL = baseURL + '&lang=' + languageCode
  fetch(twitterURL)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      let div
      let textNode
      let status

      // output statuses:
      console.log(json.statuses)

      // clear out existing tweets:
      clearData()
      /*
      // output the text of the first tweet:
      status = json.statuses[0]
      div = document.createElement('div')
      div.className = 'tweet'
      textNode = document.createTextNode(status.text)
      div.appendChild(textNode)
      document.getElementById('results').appendChild(div)

      // output the text of the second tweet:
      status = json.statuses[1]
      div = document.createElement('div')
      div.className = 'tweet'
      textNode = document.createTextNode(status.text)
      div.appendChild(textNode)
      document.getElementById('results').appendChild(div)

      status = json.statuses[2]
      div = document.createElement('div')
      div.className = 'tweet'
      textNode = document.createTextNode(status.text)
      div.appendChild(textNode)
      document.getElementById('results').appendChild(div)

      status = json.statuses[3]
      div = document.createElement('div')
      div.className = 'tweet'
      textNode = document.createTextNode(status.text)
      div.appendChild(textNode)
      document.getElementById('results').appendChild(div)

      status = json.statuses[4]
      div = document.createElement('div')
      div.className = 'tweet'
      textNode = document.createTextNode(status.text)
      div.appendChild(textNode)
      document.getElementById('results').appendChild(div)*/

      // 1. Describe what you think this code is doing.
      // getData is searching the term you inputted from the baseURL's json data and in your specific language. It then returns and creates it's own div with the statuses.

      // term = medium tech
      // 2. output the text of the third tweet: RT @alicegoldfuss: The data on discriminatory hiring in this article accurately mirrors my own experiences https://t.co/fmS9rdWGkZ

      // 3. output the text of the fourth tweet: RT @meshelluh: “Meet the Tech Lady who founded ClearHealthCosts” by @BreanneThomas https://t.co/QiZIbqxvBy #techladies #womenintech

      // 4. output the text of the fifth tweet: RT @aprilwensel: I’ve frequently seen underrepresented candidates forced to jump through additional hoops. @math_rachel https://t.co/GwVDmg…

      // 5. comment the code above, starting from after the clearData,
      //    and ending right before this comment. Then, un-comment the
      //    code below:

      json.statuses.forEach(function(status) {
        div = document.createElement('div')
        div.className = 'tweet'
        textNode = document.createTextNode(status.text)
        div.appendChild(textNode)
        document.getElementById('results').appendChild(div)
      })
      // forEach is another form of the for loop, it calls the function status, loops it and returns as many results from the search and creates a div per results.
    })
}
