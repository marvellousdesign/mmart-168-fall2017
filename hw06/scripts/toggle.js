// ------------------------------------
// PART 1
// ------------------------------------
// Write a function called toggleLike. It takes no parameters
// toggleLike should find the DOM element with the id 'like'
// Now, write a conditional statement. It should check to see if the classList
// on the element contains the 'active' class
// If it does, remove the 'active' class. If it doesn't add the 'active' class.

const likes = document.querySelector('#like')

const toggleLike = () => {
  if (likes.classList.contains('active')) {
    likes.classList.remove('active')
    console.log('removed star!')
  } else {
    likes.classList.add('active')
    console.log('added star!')
  }
}

// ------------------------------------
// PART 2
// ------------------------------------
// Write a function called toggle that takes no parameters
// It should find a DOM element with the id 'like'
// Without writing a conditional statement,
// use the classList to toggle the 'active class'

const toggle = likes => {
  console.log('toggles stars!')
  likes.classList.toggle('active')
}

// Finally able to toggle this without trigger the above, and the above without
// trigger the below. Have to use toggle(this) though on the html side..
