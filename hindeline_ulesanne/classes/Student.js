const Person = require("./Person.js");

class Student extends Person {
    constructor(name) {
        super(name);
        this.grades = [];
        this.id = null;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    addGrade(course, grade) {
        this.grades.push({course, grade})
    }

    getGrades() {
        return this.grades
    }

    getAverageGrade() {
        if(this.grades.length == 0) return -1;

        let total = 0;
        this.grades.forEach(a => {
            total += a.grade;
        })

        return total / this.grades.length;
    }

    description() {
        return `Student {name: ${this.name},avg_hinne:${this.getAverageGrade()}}`
    }
}

module.exports = Student;