class Person {
    constructor() {
        this.firstname = this.lastname = ""
        this.age = 0
    }
}

class Student {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

let person1 = new Person()
person1.firstname = "John"
person1.lastname = "David"
person1.age = 22
let person2 = new Person()
person2.firstname = "Bill"
person2.lastname = "Smith"
person2.age = 53
let person3 = new Person()
person3.firstname = "Jones"
person3.lastname = "Myles"
person3.age = 39
console.log(person1, person2, person3)

let student1 = new Student("Fabian", "Smith", 33)
let student2 = new Student("Jasper", "Shepard", 22)
let student3 = new Student("Don", "Holland", 55)
console.log(student1, student2, student3)