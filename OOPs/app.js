console.log("js")


// // there are four pillars of oops

// // abstruction
// // encapsulation
// // polymorphism
// // inheritance


class Student{
    constructor(name,rollNo,age){
        this.name = name
        this.rollNo = rollNo
        this.age = age
    }

    StudentData(){
        console.log(`his name is ${this.name} , his rollno is ${this.rollNo} and his age is ${this.age}`)
    }
}


//object instance for that obj

const student1 = new Student("zufiqar ali",33,77)

student1.StudentData()