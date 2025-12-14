console.log("loops");



//loop is used for an iteration in  an array 
// loop id made for arrays
// to find index of an array (array.length-1) also it use to find last element


// Two dimensional array

// var arr = [[1,2,3],[4,5,6],[7,8,9]];

// console.log(arr);

// console.log(arr[0]);
//  console.log(arr[0][2])   //double braket is used for nested array

// console.log(arr[0][0])
// console.log(arr[0][1])
// console.log(arr[0][2])
// console.log(arr[1][0])
// console.log(arr[1][1])
// console.log(arr[1][2])
// console.log(arr[2][0])   //it is difficult to use console at every element of an array so we use loops for arry.




//Assignment
//add these two array with relatives indexes.
// arr1 = [[1,2,3],[4,5,6],[7,,9]]
// arr2 = [[9,8,7],[6,5,4],[3,2,1]]

// var arr1 = [[1,2,3],[4,5,6],[7,8,9]]
// var arr2 = [[9,8,7],[6,5,4],[3,2,1]]

// console.log(arr1[0][0] + arr2[0][0])
// console.log(arr1[0][1] + arr2[0][1])
// console.log(arr1[0][2] + arr2[0][2])
// console.log(arr1[1][0] + arr2[1][0])
// console.log(arr1[1][1] + arr2[1][1])
// console.log(arr1[1][2] + arr2[1][2])
// console.log(arr1[2][0] + arr2[2][0])
// console.log(arr1[2][1] + arr2[2][1])
// console.log(arr1[2][2] + arr2[2][2])

//simple loop

// var arr = [1,2,3,4,5];

// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


//nested loop
// var arr = [[1,2,3],[4,5,6],[7,8,9]];
// for (var i=0; i< arr.length; i++){
//     for(var j=0; j<arr[i].length; j++){ //here is [i] represents the index of an array which further execute in next time.
//         console.log(arr[i][j])
//     }
// }

// another example

// var arr1 = [[5,4,5],[8,2,3],[5,5,6],[5,1,2]]


// for ( var k = 0;k<arr1.length;k++){
//     for(l=0;l<arr1[k].length;l++){
//         console.log(arr1[k][l])
//     }
// }



// 3 nested loops 


// var arr = [[[12,13,14],[15,16,17,18],[88,55,66]]]

// for (var i=0; i<arr.length; i++){
//     for(var j=0; j<arr[i].length; j++){
//         for(var k=0; k<arr[i].length; k++){
// console.log(arr[i][j][k])
//         }
//     }
// }



// var firstName = ["zulfiqar","tariq","muntazir","danish","awais"]
// var lastName = ["ali","rafiq","sahil","meerza"]
// fullNames = [];

// for(var i=0; i<firstName.length;i++){
//     for(var j=0;j<lastName.length;j++){
// fullNames.push(firstName[i]+lastName[j])
//     }
// }
// console.log(fullNames)

//first name and last name combinition

// var firstName = ["zulfiqar","tariq","awais","danish","muntazir"]
// var lastName = ["ali","rafiq","khan","meerza","sahil"]

// for(var i=0;i<firstName.length;i++){
//     console.log(firstName[i]+" "+lastName[i])
// }