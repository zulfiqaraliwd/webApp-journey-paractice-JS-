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


// var obj = {
//     name : "zulfiqar ali",
//     age : 23,
//     id : "77",
//     qualifications : "undergraduate"
// }

// console.log("name" in obj)



//-------------------------------------------
//      object laterals
//-------------------------------------------

// var obj = {};

// obj.name = "zulfiqar ali";
// obj.age = 33;

// console.log(obj)


// ---------------------------------------------------------------------------
// Methods (when in an object the value perform any action is method e.g functions) 
// ---------------------------------------------------------------------------

// var obj = {
//     name : "zulfiqar ali",
//     age : 88,
//     speed: function speedOf(){
// console.log("speeed is average")
//     }
// }

// obj.educaton = "undergraduates"  //method to add elements in obj

// obj["userName"] = "alizulfi"   //another method to add elements in obj

// console.table(obj)

// var obj = new Object()
// var name = "ibrahim"
 
// var obj1 = {
//     name:"zulfiqar ali",
//     age : "55",
//     address : "manzoor colony",
//     working : ()=> {return console.log(`my name is ${name} and i am ${age} years old so i am leaving in ${address}`)}
// }

// console.log(obj1.working())





// -----------------------------------------------------------------
//          advance object(object constructor)
// -----------------------------------------------------------------


//three way to conctruct the object 
// const obj = new Object();
// const obj2 = {}; //object literals
// const obj3 = Object.create(null)


// var obj = {
//     name : ["zulfiqar","ali","sibtain"],
//     bio : {city:"karachi",state : "sindh", country: "pakistan"}
// }
// console.log(obj.name[2])
// console.log(obj.bio.city)

// we can access by this method *(obj["bio"]["city"])* if we operate dynamically like prompt.

// var nameOfStudent = prompt("enter the names/bio as you required")

// var obj = {
//     name : ["zulfiqar","ali","sibtain"],
//     bio : {city:"karachi",state : "sindh", country: "pakistan"}
// }

//  console.log(obj[nameOfStudent])


//  var obj = {
//      name : ["zulfiqar","ali","sibtain"],
//      bio : {city:"karachi",state : "sindh", country: "pakistan"}
// }

// console.log("access by dot name  ",obj.name[0])
// console.log("access by dot bio  ",obj.bio)
// console.log("access by bracket name ",obj["name"])
// console.log("access by bracket bio  ",obj["bio"]["city"])



