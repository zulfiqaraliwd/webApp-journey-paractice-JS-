console.log("high order functions")

function test(a,b,callback){
return callback(a,b)
}

function sum(q,p){
return q+p

}

function minus(q,p){
return q-p

}

console.log(sum(3,4))
console.log(minus(3,4))
