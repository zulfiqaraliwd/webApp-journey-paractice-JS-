console.log("date and time")

//date and time


// Unix epoch

//new keyword BTS(beshid the scene)
// var Date ={
//     getFullYear:"2025",
//     age:20
// }
// console.log(Date.getFullYear)

// var date = new Date();
// console.log("year=>", date.getFullYear());
// console.log("date=>", date.getDate());


// var date = Date()
// console.log(date);


var date = new Date()   //new key word is used for create a object inside the function. it BTS is give above.

// console.log(date.getMilliseconds(),date.getDate(),date.getDay())

// print the date 
console.log("Date ==> "+date.getDay() + "/" +date.getMonth()+ "/" +date.getFullYear(),"Time is ==> " + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" milisec ==> "+date.getMilliseconds())
console.log("Today is ==> "+date.getDay())
if(date.getDay()==3){
    console.log("today is wednesday")
}else if(date.getDay()==4){
    console.log("today is Thursday")
}else if (date.getDay()==5){
    console.log("today is friday")
}else if(date.getDay()==6){
    console.log("today is saturday")
}else if(date.getDay()==0){

console.log("today is sunday , enjoy your self")
}else if(date.getDay()==1){
    console.log("today is monday")
}else if (date.getDay()==2){
    console.log("today is tuesday")
}else{
    console.log("enter any valid day")
}




