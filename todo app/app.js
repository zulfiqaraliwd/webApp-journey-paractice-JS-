var input = document.getElementById("input")
var btn = document.getElementById("btn")
var show = document.getElementById("ul")

btn.addEventListener('click', ()=>{
var li = document.createElement("li")
var text = document.createTextNode(input.value)
li.appendChild(text)
var res = document.body.appendChild(li)

input.value  = "";

})


