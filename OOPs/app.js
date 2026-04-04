console.log("js")


// // there are four pillars of oops

// // abstruction
// // encapsulation
// // polymorphism
// // inheritance


// class Student{
//     constructor(name,rollNo,age){
//         this.name = name
//         this.rollNo = rollNo
//         this.age = age
//     }

//     StudentData(){
//         console.log(`his name is ${this.name} , his rollno is ${this.rollNo} and his age is ${this.age}`)
//     }
// }


// //object instance for that obj

// const student1 = new Student("zufiqar ali",33,77)

// student1.StudentData()



// ------------------------------------------------------------------


// class Vehicles{
//     constructor(cname , cmodel, ccolor, cengine){
//         this.cname = cname
//         this.cmodel= cmodel
//         this.ccolor=ccolor
//         this.cengine=cengine
//     }
//     car(){
//         console.log(`the name of car is ${this.cname} , it model is ${this.cmodel} ,their color is ${this.ccolor} and the engine of this car is ${this.cengine}`)
//     }
// }
// //instance of an object
// const car1 = new Vehicles("corolla",2001,"white","B-engine")

// car1.car()





// abstruction

// class Student{
// constructor(sname , age , education){
// this.sname = sname
// this.age = age 
// this.education = education

// }
// data(){
//     console.log(`the name of student is ${this.sname} , his age is ${this.age} and his education is ${this.education}`)
// }
// }
// const student2 = new Student("ali",44,"matric")
// student2.data()



// inheritance

class Animals{
    constructor(name){
        this.name = name 
    }
    eat(){
        console.log(`the ${this.name} is eating`)
    }
}

class Dog extends Animals{
    constructor(name){
        super(name)
    }
    bark(){
        console.log("dog barking")
    }
}

const animalbeh = new Dog("tommy")
animalbeh.bark()
animalbeh.eat()
