// console.log("call method")


// function test(information){
//       return  console.log(`My name is ${this.name} ,last name is ${this.lname}`)
//     }

// const obj1 = {
//     name : "zulfiqar",
//     lname : "ali"
// }

// const obj2 = {
//     age : 22,
//     education : "undergraduate"
// }

// test.call(obj1,"lname")





// const person1 = { name: "John" };
// const person2 = { name: "Paul" };
// const person3 = { name: "Ringo" };
// function greet(greeting) {
//   return console.log(this.name);
// }
// greet.call(person3, "Hello");



const obj = {
    student : function test(){
return this.fname  + " " + this.lname  + " " + this.age  + " " + this.education
    }
}

const obj1 = {
    fname : "zulfiqar",
    lname : "ali"
}

const obj2 = {
    age : 22,
   education : "undergraduate"
 }
console.log(obj.student.call(obj1),obj.student.call(obj2))