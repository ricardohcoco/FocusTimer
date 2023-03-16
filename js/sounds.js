export default function () {

  const buttonPressForest = new Audio("https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export=download")

  const buttonPressRain = new Audio("https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download")

  const buttonPressCoffeeshop = new Audio("https://drive.google.com/u/0/uc?id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA&export=download")

  const buttonPressFireplace = new Audio("https://drive.google.com/u/0/uc?id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB&export=download")



function defaultSound (){
  buttonPressForest.play()
  buttonPressCoffeeshop.pause()
  buttonPressFireplace.pause()
  buttonPressRain.pause()
} 

function Forest() {
  localStorage.setItem('som', 'forest')
  buttonPressForest.play()
  buttonPressCoffeeshop.pause()
  buttonPressFireplace.pause()
  buttonPressRain.pause()
}

function Rain() {
  localStorage.setItem('som', 'rain')
  buttonPressRain.play()
  buttonPressCoffeeshop.pause()
  buttonPressFireplace.pause()
  buttonPressForest.pause()
}

function Coffeeshop() {
  localStorage.setItem('som', 'coffeeshop')
  buttonPressCoffeeshop.play()
  buttonPressFireplace.pause()
  buttonPressForest.pause()
  buttonPressRain.pause()
}

function Fireplace() {
  localStorage.setItem('som', 'fireplace')
  buttonPressFireplace.play()
  buttonPressCoffeeshop.pause()
  buttonPressForest.pause()
  buttonPressRain.pause()
}

function StopSound() {
  buttonPressFireplace.pause()
  buttonPressCoffeeshop.pause()
  buttonPressForest.pause()
  buttonPressRain.pause()
}

return {
  Forest,
  Rain,
  Coffeeshop,
  Fireplace,
  StopSound,
  defaultSound
}
}