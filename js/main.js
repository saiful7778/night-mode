var button = document.getElementById('mode-btn')
var backGround = document.body

button.onclick = function(){
  button.classList.toggle("active")
  backGround.classList.toggle("dark")
}