console.log("array")

// array // datatype (non-premitive)

// var arr = ["danish","muntazir","tariq"];
// console.log("original array " + arr)

// var newArr = arr.slice(0,2)
// console.log("slice wala array " + arr)




// var newArr1 = arr.splice(0,2)
// console.log( "splice wala array " + arr)


var arr = ["a","b","c","d","e"];


// var newArr2 = arr.slice(1,2)
// console.log("slice =>" + newArr2,arr)

// var newArr = arr.splice(1,2,"ali")
// console.log("splice =>" + newArr,arr)


// we can insert an element in an arry
var insertArray = arr.splice(1,0,"z");    //??????????????????????????????
console.log(insertArray);

arr.splice(1,0,"z");
console.log(arr)
//????????????????????????????????????????????????????????????????????????????????




//loops in js
//ICU

// for(var i = 0; i<10; i++){
//     console.log("hellow")
// }

//print of two table

for (var i = 1 ; i < 20 ; i++ ){
    console.log("2  " + "*  " + i + "  =  " + (i*2))
}

console.log("table of 2 in reverce")// table of 2 in reverce

for (var i = 20 ; i > 0 ; i--){
     console.log("2  " + "*  " + i + "  =  " + (i*2))
}
