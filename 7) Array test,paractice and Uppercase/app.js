console.log("hellow");

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i=0; i < 0; i++){
//     console.log(arr[i])
// }
    
// var arr =[1,2,3,4,5,6,7,8,9,10,11];
// for(i=0; i<arr.length; i++){
//     console.log(arr[i])
// }


//print table of 3 using for loops

// for (i=0; i<=10; i++){
//     console.log("3" + "x" + i + "=" + i*3)
// }


// print the array in reverse
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(var i =arr.length-1; i >=0; i--){
//     console.log(arr[i])
// }


// ----------------------------------------------------------------------------
// some paractice questions
// --------------------------------------------------------------------------------

// 1 Print all elements of an array

// Q: Given var arr = [10,20,30,40,50];
// Print all values using a loop

// var arr = [10,20,30,40,50];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


// 2 Print array in reverse order

// Q: Reverse order me print karo using a loop, without using .reverse()

// var arr = [1,2,3,4,5,6];
// for(var i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
// }


// 3 Sum of array

// Q: Array ke saare numbers ka sum find karo.

// var arr = [1,2,3,4,5,6];
// var sumArr = 0;
// for(var i=0; i<arr.length; i++){
//      sumArr = sumArr+arr[i]
   
// }
// console.log(sumArr);


// 4 Count even numbers

// Q: Array me kitne even numbers hain? Count print karo.

// var arr = [1,9,4,5,6,9,2];
// var even = 0;
// for(var i=0; i<arr.length; i++){
//     if(arr[i] %2 === 0){
// even++;
//     }
// }
// console.log(even)

//----------------------------------------------------------------------------------------
//upperCase
//----------------------------------------------------------------------------------------

// var checkStndt = prompt("enter your name");
// var firstChar = checkStndt.slice(0, 1);
// var firstChar = firstChar.toUpperCase();
// // console.log(firstChar);
// var RemainingCharacters = checkStndt.slice(1);
// var RemainingCharacters = RemainingCharacters.toLowerCase();
// var result = firstChar + RemainingCharacters;
// console.log(result);
// var stdnts = ["Ali Ahmed", "Ahmed", "Asad", "Bilal", "Ibrahim"];
// // for (var i = 0; i < stdnts.length; i++) {
//     if(stdnts[i] == checkStndtWithCapitalLetter){
//         console.log(checkStndtWithCapitalLetter);
//     }
// }
//----------------------------------------------------------------------------------
// var std = prompt("enter your name");
// var upperName = std.slice(0,1);
// var upperName = upperName.toUpperCase();
// console.log(upperName);

// var remainingChar = std.slice(1)
// var remainingChar = remainingChar.toLocaleLowerCase()
// console.log(remainingChar)

// console.log(upperName+remainingChar)



//------------------------------------------------
// first letter capital and remaining small
//------------------------------------------------

// var studentName = prompt("enter your name")
// var firstCapital = studentName.slice(0,1)
// var firstCapital = firstCapital.toLocaleUpperCase()
// // console.log(firstCapital)

// var remainingLetter = studentName.slice(1)
// var remainingLetter = remainingLetter.toLocaleLowerCase()
// // console.log(remainingLetter)

// console.log(firstCapital+remainingLetter)




// var myName = prompt("enter your name");

// var myNameLentgh = myName.length;
// if (myNameLentgh > 3) {
//   var result = myName.slice(0, 3);
//   console.log("result=>", result);
// }else{
//     console.log("enter the name which has at least 4 character")
// }




// var cityName = prompt("enter city name")
// var cityNames = cityName.length;
// for (i = 0; i < cityNames; i++) {
//   if (cityName.slice(i, i+2) === "  ") {
//     console.log("hey , double space not allowed");
//     break
//   } else {
//     console.log("there is no double space try again");
//
// }

var cityName = prompt("enter your name");
var city =  cityName.length;
for( i = 0;i<city; i++){
    if(cityName.slice(i,i+2)== "  "){
        console.log("hey double space not allowed")
    }else{
    console.log("there is not any double space")
}
} 