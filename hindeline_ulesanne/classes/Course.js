class Course {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(student, grade) {
        this.grades.push({student, grade});
    }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if(this.grades.length == 0) return -1;

        let total = 0;
        this.grades.forEach(element => {
            total += element.grade
        });

        return total / this.grades.length;
    }

    description() {
        return `Course {name: ${this.name}, avg_hinne: ${this.getAverageGrade()}}`
    }
}

module.exports = Course;