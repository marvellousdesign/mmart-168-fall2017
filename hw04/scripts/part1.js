let language
let languageCode

const setLanguage = code => {
  //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
  languageCode = code
  if (code === 'ja') {
    language = 'Japanese'
  } else if (code === 'zh') {
    language = 'Chinese'
  } else {
    language = 'Greek'
  }
  document.getElementById('language').innerHTML = language
}

// setLanguage function finds the languageCode and set the language to its approperate language.
