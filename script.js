const symbolBtn = document.querySelector('.material-symbols-outlined')
const darkmodeBtn = document.querySelector('#darkmode-btn')
const body = document.body
const nav = document.getElementById('navbar')
const link = document.getElementsByTagName('a')

darkmodeBtn.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    changeToDark()
  } else {
    changeToLight()
  }
})

function changeToDark(){
  // Body and Nav section
  body.classList.remove('light-mode')
  body.classList.add('dark-mode')
  nav.style.color = 'white'
  nav.style.backgroundColor = 'black'
  nav.style.borderColor = 'white'

  // Nav Links
  for (let i = 0, len = link.length; i < len; i++) {
    link[i].style.color = 'white'
    link[i].style.backgroundColor = 'black'
    link[i].style.borderColor = 'white'
  }
  
  // Dark mode button
  symbolBtn.innerHTML = 'light_mode'
  symbolBtn.style.color = 'yellow'
  darkmodeBtn.style.backgroundColor = 'blue'
  darkmodeBtn.title = "Change to light mode"
}

function changeToLight(){
  // Body and Nav section
  body.classList.remove('dark-mode')
  body.classList.add('light-mode')
  nav.style.color = 'black'
  nav.style.backgroundColor = 'white'
  nav.style.borderColor = 'black'
  
  // Nav Links
  for (let i = 0, len = link.length; i < len; i++) {
    link[i].style.color = 'black'
    link[i].style.backgroundColor = 'white'
    link[i].style.borderColor = 'black'
  }
  
  // Dark mode button
  symbolBtn.innerHTML = 'dark_mode'
  symbolBtn.style.color = 'gray'
  darkmodeBtn.style.backgroundColor = 'black'
  darkmodeBtn.title = "Change to dark mode"
}