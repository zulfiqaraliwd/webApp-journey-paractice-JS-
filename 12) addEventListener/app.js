var d = document.getElementById("deer").addEventListener('click',function(){
    console.log("there is a deer running")
    alert("deer show in the console")
})



// var p = document.getElementById("put")
// p.addEventListener('blur', ()=> console.log(p.value))


// var p = document.getElementById("put")
// p.addEventListener('blur', (e)=> console.log(e.type)) //blur



var form = document.getElementById('form')
addEventListener('click', (e)=> e.preventDefault(console.log('print')))