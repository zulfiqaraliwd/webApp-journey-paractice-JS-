
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



function res(){
 var inc = document.getElementById("incH")
 var increase = (inc.innerHTML)
document.getElementById("incH").innerHTML = 0
 }