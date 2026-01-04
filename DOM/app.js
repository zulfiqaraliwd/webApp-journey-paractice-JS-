console.log("DOM manipulation")


// function emailF(){
//     var email = document.getElementById(email)
//     console.log("email has been entered")
// }



function rollNoS(){
    var campus = document.getElementById("studentName").value
   
if (campus == "zulfiqar"){
    console.log("zaitoon ashraf IT park")
}else{
    console.log("he is not enroll in any course")
}

document.getElementById("rollNo").value = campus

}