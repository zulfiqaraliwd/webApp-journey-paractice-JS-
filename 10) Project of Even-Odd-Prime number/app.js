// console.log("numbers")

const { jsx } = require("react/jsx-runtime");

// function increment(){
// var inc = document.getElementById("inc")
// var increase = Number(inc.innerHTML);
// increase++
// console.log("increase")
// var inc = document.getElementById("inc").innerHTML=increase;
// }

function increment(){
    var inc = document.getElementById("incH")
    var increase = (inc.innerHTML)
    increase++;
    console.log(increase)
    var inc = document.getElementById("incH").innerHTML = increase
}



function decrement(){
    var inc = document.getElementById("incH")
    var increase = (inc.innerHTML)
    increase--;
    console.log(increase)
    var inc = document.getElementById("incH").innerHTML = increase
}



function reset(){


 }