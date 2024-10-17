class Student {
    constructor(name) {
        this.name = name
        this.finished = false
    }
}

const student = new Student("John")
console.log(student.name)       // John
console.log(student.finished)   // false
