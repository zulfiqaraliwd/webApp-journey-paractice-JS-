console.table("revision of js")

//post and pre-increment in js

// var num = 5;
//                 console.log(num++ + num + ++num + num++ + num)
//understanding by visually  5    +  6  +   7   +  7    +  8


// var num = (1 * 2) * (3 + 2);
// console.log(num);


// var num1 = 1*2+4-5/6;      //i think that , js follows the bodmas rule by itself very strickly
// console.log(num1)


// Variables
// vary(change) ables(able)
// var uname = {
//   names: "ibrahim",
//   roll: 30,
//   age: 18,
// };
// var myName = "ibrahim";  //assign
// var myName ="khan"
// const lastName = "khan";

// console.warn(myName);
// console.error(myName);
// console.table(uname);

// var test;
// test ="tofy"
// console.log(test)

// var empty = null
// // console.log(empty)
// // console.log(myFirstName)
// let myFirstName = "ibrahim"  //reserved
// myFirstName //reinitialized
// myFirstName = "ibrahim change" //reassign


// let cannot access(TDZ = temporal dead zone)

// variable name convention
// pascal case 
// camel case (easy to read and write)
// snake case 
// train case



// var arr =[]

// arr[200] = "ali" //length 201 (200 index)
// arr[150] = "asad" // 151
// console.log(arr[arr.length-1])

// console.log(arr[arr.length-51])
// console.log(arr.length)


// var arr = []
// arr[200] = "ali";
// arr[100] = "zulfiqar ali";

// //i think there are two methods to access array 1) access by index 2) access by length

// //access by index;
// console.log(arr[200]);
// console.log(arr[100])

// //accsess by arrY'S  length
// console.log(arr[arr.length-1])
// console.log(arr[arr.length-101]) //because we know that "zulfiqar ali " is at index 100 and total length of an array.


// -----------------------array methods-------------------------------

// var arr = ["zulfi","danish","tariq"]
// console.log(arr)

// // arr.push("ali")
// // console.log(arr)

// console.log(arr.push("ali"))  ///it will return the length of an array not the array


// var arr = ["ali","usman","malik","wali"]
// arr.pop()
// console.log(arr)

// var num = arr.push(3)
// console.log(num)


// // arr[3] = "asad"
// // arr.push("last value")
// // arr.pop()
// // arr.pop()
// // push(last in) pop (last out)
// // LIFO (last in last out)
// // FIFO (first in first out)
// // arr.unshift("first in")
// // arr.shift()
// // console.log(arr)

// var myName = prompt("enter your name");

// var myNameLentgh = myName.length;
// if (myNameLentgh > 3) {
//   var result = myName.slice(0, 3);
//   console.log("result=>", result);
// }

// var name = prompt("enter your name")
// var nameLength = name.length;
// if(nameLength<3){
//     console.log("enter valid name having more than 3 letters")
// }
// else{
//     console.log(name)
// }



// var myName = prompt("enter your name");

// var myNameLentgh = myName.length;
// if (myNameLentgh > 3) {
//   var result = myName.slice(0, 3);
//   console.log("result=>", result);
// }


// Q1

// Create an array of 5 numbers.
// Use slice() to get elements from index 1 to index 3.
// 👉 Check:

// What is returned?

// Does the original array change?

// Q2

// Create an array of strings (fruits).
// Use slice() with only one argument (start index).
// 👉 Observe:

// From where to where elements are copied?

// Q3

// Create an array and make a copy of it using slice() with no arguments.
// 👉 Check:

// Is it a new array?

// Are both arrays equal by reference?

// Q4

// Use slice() with a negative index on an array.
// 👉 Observe:

// From which side counting starts?

// 🔵 splice() Practice (Instructions Only)

//  var arr = [1,2,3,4,5]
//  arr.splice(-1,2)
//  console.log(arr)

// Q5

// Create an array of numbers.
// Use splice() to remove 2 elements starting from index 1.
// 👉 Check:

// What does splice return?

// What happens to the original array?

// Q6

// Create an array of 3 elements.
// Use splice() to add a new element at index 1 without removing anything.
// 👉 Hint: deleteCount = 0
// 👉 Observe array result.

// Q7

// Create an array of languages.
// Use splice() to:

// Remove 1 element

// Add 2 new elements at the same position
// 👉 Observe final array.

// 🟡 slice vs splice (Concept Clear Tasks)
// Q8

// Create an array.
// First use slice() on it, then log the array.
// Then use splice() on the same array and log again.
// 👉 Compare:

// Which method changed the array?

// Q9

// Create an array of 5 numbers.
// Use slice() and store its result in a variable.
// Use splice() and store its result in another variable.
// 👉 Compare:




//paractice of slice and splice

// var arr = [1,2,3,4,5]
// var arr1 = arr.slice(0,3)
// console.log(arr1)

// Ans 01
// var arr = [1,2,3,4,5]
// arr.splice(0,3)
// console.log(arr)

// ans 02
// var arrFruit = ["apple" , "banana", "orange", "pear" , "pineapple"];
// var arrFnew = arrFruit.slice(0,2)
// console.log(arrFnew)


// ans 03
// var arrFruit = ["apple" , "banana", "orange", "pear" , "pineapple"];
// var arrNew = arrFruit.slice()
// console.log("new array  " , arrNew)
// console.log("original array "+arrFruit)
// console.log(arrFruit)

// ans 04
// var arrFruit = ["apple" , "banana", "orange", "pear" , "pineapple"];
// var arrNew = arrFruit.slice(-1,-2)
// console.log(arrNew)

// ans 05
// var arr = ["a","b","c","d","e","f"];
// var newArr = arr.splice(1,2)
// // console.log("new Array  ",newArr)
// console.log("original array  ",arr)

// var arr = ["a",1,"b",2,"c",3,"d",4];
// arr.splice(1,2,"ali","ahmed")
// arr.splice(2,3,"aliii")
// console.log(arr);

// var arr = [1,2,3,4,5]
// var newArr = arr.slice(2,3)
// console.log(newArr)


// var arr = ["q","b","l","s","u"]
// var newArray = arr.slice(1,6)
// console.log(newArray)


// var arr = [1,2,3,4,5,6]
// var newArray = arr.splice(1,8)
// console.log(newArray)



// ------------------Function paractices-------------

// console.log("my name is zuliqar ali")
// function name(){
// }


// name();


// function sum(a,b,c){
//     console.log(a+b+ "ali")
    
// }
// sum(4,5 + "ali")

// ---------------------------------------------------------------
//          some questions which is for paractice
//----------------------------------------------------------------


// 1️⃣ Ek function banao jo console me "Hello JavaScript" print kare
// function first(){
//     console.log("hello")
// }
// first();


// 2️⃣ Ek function likho jo do numbers le aur unka sum return kare.
// function sum(a,b){
//     console.log(a+b)
//     return a+b;
 
// }
// sum(1,9)


// 3️⃣ Ek function banao jo aik naam parameter me le aur console me likhe
// function name(a){
// console.log(a)
// }
// name("zulfiqara ali");


// Function call se pehle aur baad console.log likho, dekhna kaunsa pehle run hota hai.
// call(" up")
// function call(a){
//  console.log(a)
// }
// call("ali")
// console.log("down")



// 5️⃣ Function without return aur with return ka difference example ke sath dikhao.


// function withOutReturn(a){
// console.log(a)
// }
// withOutReturn("without return the function")



// function withReturn(a,b){
//    var result = console.log(a+b);
//     return result;
// }
// withReturn(4,3)

// function name(a,b){
//    a+b;
//   console.log(a-b) 
//    return a+b
// }
// var result = name(4,5)
// console.log(result);
