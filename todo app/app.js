var input = document.getElementById("input")
var btn = document.getElementById("btn")

btn.addEventListener('click', ()=>{
var render = document.getElementById('show').innerHTML += `<li>${input.value}</li>`
})