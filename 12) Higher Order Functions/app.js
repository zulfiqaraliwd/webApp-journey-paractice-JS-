console.log("high order functions")

// function test(a,b,callback){
// return callback(a,b)
// }
// function sum(q,p){
// return q+p
// }
// function minus(q,p){
// return q-p
// }
// console.log(sum(3,4))
// console.log(minus(3,4))





// highg order function with arrow function

// function hof(a,b,callback){

//     return callback(a,b)

// }

// sum = (p,q)=>p+q

// sub = (p,q) =>p-q

// multiply = (p,q) =>p*q

// division = (p,q) =>p/q

// console.log(hof(3,4,sum))
// console.log(hof(3,7,sub))


// **************************************************************************


// function highOrderFunction(a,b,callback){
// return callback(a,b)

// }
// function add(x,y){
//     return x+y
// }
// console.log(highOrderFunction(1,3,add))



// function hof(a,b,cb){
//     return cb(a,b)
// }

// function sum(x,y){
// return x+y;
// }

// console.log(hof(4,3,sum))


// ************************************************************************************

// function high(a,b,callback){
// return callback(a,b)
// }

// function sum(x,y){
//     return x+y ;
// }

// result = console.log(high(4,4,sum))




// var arr = [1,2,3,,4,5,6,7,8,9];

// const result = arr.filter((num)=> (num >= 3))

// console.log(result)

// **********OR************
// const result = arr.filter((num)=>(num <= 3))

// console.log(result)


// const items = [
//   { id: 1, name: "Item One", price: 100, inStock: true },
//   { id: 2, name: "Item Two", price: 150, inStock: false },
//   { id: 3, name: "Item Three", price: 200, inStock: true },
//   { id: 4, name: "Item Four", price: 120, inStock: true },
//   { id: 5, name: "Item Five", price: 180, inStock: false },
//   { id: 6, name: "Item Six", price: 220, inStock: true },
//   { id: 7, name: "Item Seven", price: 90, inStock: true },
//   { id: 8, name: "Item Eight", price: 300, inStock: false },
//   { id: 9, name: "Item Nine", price: 250, inStock: true },
//   { id: 10, name: "Item Ten", price: 110, inStock: true },
//   { id: 11, name: "Item Eleven", price: 95, inStock: false },
//   { id: 12, name: "Item Twelve", price: 160, inStock: true },
//   { id: 13, name: "Item Thirteen", price: 175, inStock: true },
//   { id: 14, name: "Item Fourteen", price: 210, inStock: false },
//   { id: 15, name: "Item Fifteen", price: 130, inStock: true },
//   { id: 16, name: "Item Sixteen", price: 270, inStock: true },
//   { id: 17, name: "Item Seventeen", price: 190, inStock: false },
//   { id: 18, name: "Item Eighteen", price: 140, inStock: true },
//   { id: 19, name: "Item Nineteen", price: 320, inStock: false },
//   { id: 20, name: "Item Twenty", price: 400, inStock: true }
// ];

// console.log(items);



// const arr = items.filter((product)=>(product.inStock===true && product.id<=8))

// console.log(arr)




// =============================map in js=====================
var arr = [1,2,3,4,5,6,7,8,9]

const newMap = arr.map((num)=> num * 2)

console.log(newMap)


