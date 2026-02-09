

// var input = document.getElementById("input")
// var btn = document.getElementById("btn")
// var show = document.getElementById("ul")

// btn.addEventListener('click', ()=>{
//  var input2 = input.value;   
// var li = document.createElement("li")
// li.textContent = input2;
// var res = show.appendChild(li)
// input.value  = "";
// })


// var name = "zulfiqar alii"   //saved this name in local storage.
// localStorage.setItem("name",name)

// // localStorage.setItem // this is used for give data 
// // localStorage.getItem // thsi is used for take data

// var getdata = localStorage.getItem("name",name)
// console.log(getdata)    
// -----------------------------------------------------------------------------------
// if the data is in the form of Object then it will convert into string 
// var obj = {
//     name : "zulfiqar ali",
//     age : 22
// }
// console.log(obj);
//convert object into the string
// var objInString = JSON.stringify(obj)
// localStorage.setItem("obj",objInString)



// //if we restore the string into original form then use parse

// var obj2 = JSON.parse(objInString)
// console.log(obj2)





var input = document.getElementById("input")
var btn = document.getElementById("btn")
var show = document.getElementById("ul")

btn.addEventListener('click', ()=>{
 var input2 = input.value;   
var li = document.createElement("li")
li.textContent = input2;
var res = show.appendChild(li)
input.value  = "";
})

