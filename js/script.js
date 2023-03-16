import Sound from "./sounds.js"

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.addMinutes')
const buttonRemoveMinutes = document.querySelector('.removeMinutes')
const buttonSoundForest = document.querySelector('.forest')
const buttonSoundRain = document.querySelector('.rain')
const buttonSoundCoffeeShop = document.querySelector('.coffeeshop')
const buttonSoundFireplace = document.querySelector('.fireplace')
const sounds = Sound()
const secondsDisplay = document.querySelector('.seconds')
const forestimg = document.querySelector('.forestimg')
const rainimg = document.querySelector('.rainimg')
const coffeeshopimg = document.querySelector('.coffeeshopimg')
const fireplaceimg = document.querySelector('.fireplaceimg')
let minutesDisplay = document.querySelector('.minutes')
let timerTimeOut


function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(25, 0)
  clearTimeout(timerTimeOut)
}

function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0) {
      return resetTimer()
    }


    if( seconds <= 0 ) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function incrementar() {
 let tagHTML = document.getElementById('numero')
 let num = Number(tagHTML.innerText) + 5
 tagHTML.innerText = String(num).padStart(2, "0")
}

function decrementar() {
  let tagHTML = document.getElementById('numero')
  let num = Number(tagHTML.innerText) - 5
  tagHTML.innerText = String(num).padStart(2, "0")
  let zero = 0
    if (tagHTML.innerText <= 0) {
      tagHTML.innerText = String(zero).padStart(2, "0")
    } 
}

buttonPlay.addEventListener('click', function() {
  const sound = localStorage.getItem('som')
  console.log(sound)
  if (sound === 'forest') {
    sounds.Forest()
    paintForest()
    countdown()
  }
  if (sound === 'rain') {
    sounds.Rain()
    paintRain()
    countdown()
  }
  if (sound === 'coffeeshop') {
    sounds.Coffeeshop()
    paintCoffeeshop()
    countdown()
  }
  if (sound === 'fireplace') {
    sounds.Fireplace()
    paintFireplace ()
    countdown()
  } 
  if (sound === null || sound === undefined) {
  sounds.defaultSound()
  paintForest()
  countdown()
}
  
})
buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
  sounds.StopSound()
})

function paintForest () {
  const forest = document.querySelector('.forest1')
  const rain = document.querySelector('.rain1')
  const coffeeshop = document.querySelector('.coffeeshop1')
  const fireplace = document.querySelector('.fireplace1')
  forest.style.backgroundColor='#02799D'
  rain.style.backgroundColor='#E1E1E6'
  coffeeshop.style.backgroundColor='#E1E1E6'
  fireplace.style.backgroundColor='#E1E1E6'
  forestimg.style.fill = "white"
  rainimg.style.fill = "#323238"
  coffeeshopimg.style.fill = "#323238"
  fireplaceimg.style.fill = "#323238"
}

function paintRain () {
  const forest = document.querySelector('.forest1')
  const rain = document.querySelector('.rain1')
  const coffeeshop = document.querySelector('.coffeeshop1')
  const fireplace = document.querySelector('.fireplace1')
  forest.style.backgroundColor='#E1E1E6'
  rain.style.backgroundColor='#02799D'
  coffeeshop.style.backgroundColor='#E1E1E6'
  fireplace.style.backgroundColor='#E1E1E6'
  forestimg.style.fill = "#323238"
  rainimg.style.fill = "white"
  coffeeshopimg.style.fill = "#323238"
  fireplaceimg.style.fill = "#323238"
}

function paintCoffeeshop () {
  const forest = document.querySelector('.forest1')
  const rain = document.querySelector('.rain1')
  const coffeeshop = document.querySelector('.coffeeshop1')
  const fireplace = document.querySelector('.fireplace1')
  forest.style.backgroundColor='#E1E1E6'
  rain.style.backgroundColor='#E1E1E6'
  coffeeshop.style.backgroundColor='#02799D'
  fireplace.style.backgroundColor='#E1E1E6'
  forestimg.style.fill = "#323238"
  rainimg.style.fill = "#323238"
  coffeeshopimg.style.fill = "white"
  fireplaceimg.style.fill = "#323238"
}

function paintFireplace () {
  const forest = document.querySelector('.forest1');
  const rain = document.querySelector('.rain1');
  const coffeeshop = document.querySelector('.coffeeshop1');
  const fireplace = document.querySelector('.fireplace1');
  forest.style.backgroundColor='#E1E1E6'
  rain.style.backgroundColor='#E1E1E6'
  coffeeshop.style.backgroundColor='#E1E1E6'
  fireplace.style.backgroundColor='#02799D'
  forestimg.style.fill = "#323238"
  rainimg.style.fill = "#323238"
  coffeeshopimg.style.fill = "#323238"
  fireplaceimg.style.fill = "white"
}

buttonAddMinutes.addEventListener('click', incrementar)

buttonRemoveMinutes.addEventListener('click', decrementar)

buttonSoundForest.addEventListener('click', function() {
  paintForest()
  sounds.Forest()
})

buttonSoundRain.addEventListener('click', function() {
  paintRain()
  sounds.Rain()
})

buttonSoundCoffeeShop.addEventListener('click', function() {
  paintCoffeeshop()
  sounds.Coffeeshop()
})

buttonSoundFireplace.addEventListener('click', function() {
  paintFireplace()
  sounds.Fireplace()
})


