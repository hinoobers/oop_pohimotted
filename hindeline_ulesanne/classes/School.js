const Student = require("./Student.js");
const Course = require("./Course.js");

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }

    addStudent(student) {
        if(this.students.includes(student)) return;
        student.setId(this.students.length + 1);
        this.students.push(student);
    }

    addStudentGrade(student, course, grade) {
        student.addGrade(course, grade);
        course.addGrade(student, grade);
    }

    getStudents() {
        return this.students;
    }

    getCourses() {
        return this.courses;
    }

    getStudentsOrderedByAverageGrade() {
        return this.students.slice().sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }
}

module.exports = School;