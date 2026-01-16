console.log("objects")

// Objects are the method or source to communicate the frontend and backend or backend to frontend

// in arrays we access elements by its index but in objects we give name for index which is key that identifies the value


// way to write the object ==> {key:value}

// var obj = {
//     name : "zulfiqar ali",
//     age : 23,
//     id : {id1 : "01",obj2 : "02"},    //it is nested object
//     qualifications : "undergraduate"
// }

// console.log(obj)

// if we send data from front to backend it will send in json form.

// var obj = '{name : "zulfiqar ali", age : 23, id : "CSC-22F-146", qualifications :"undergraduate"}'

// let front = JSON.parse(obj)
// console.log(front)


// var newObject = {
//     name : "zulfi",
//     rollNO : 22,
//     functionInObj : function student(){      //object takes two pair key:value if value is function then it will called method
//         console.log("inside the function")
//     }
// }

// console.log(newObject)


// --------------------------------------------------------------
//                    object constructor
//---------------------------------------------------------------


// var obj = new Object();
// obj.name = "zulfiqar ali";
// obj.age = 33;
// obj.rollNo = "22F-146";

// console.log(obj)



// ----------------------------------------------------
//          adding key and value in object
//-----------------------------------------------------


// var obj = {
//     name:"zulfiqar ali"
// }

// obj.rollNO = 33;
// obj.qualification = "undergraduate"

// console.log(obj)


// ----------------------------------------------------
//          deletion in objects
//-----------------------------------------------------

// var obj = {
//     name : "zulfiqar ali",
//     age : 23,
//     id : {id1 : "01",obj2 : "02"},    //it is nested object
//     qualifications : "undergraduate"
// }

// delete obj.name
// delete obj.qualifications

// console.log(obj)



// -----------------------------------------------------------------------
//          for loop in object and target only key not value
//------------------------------------------------------------------------

// var obj = {
//     name : "zulfiqar ali",
//     age : 23,
//     id : "77",
//     qualifications : "undergraduate"
// }

// for (var key in obj){
//     console.log(key) if you console the obj due to loop it run equal to the loop iteration.
// }

//----------------------------------------------------
//flage in object
//---------------------------------------------------


var obj = {
    name : "zulfiqar ali",
    age : 23,
    id : "77",
    qualifications : "undergraduate"
}

console.log("name" in obj)