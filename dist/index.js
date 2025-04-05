"use strict";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    walk() {
        console.log(`${this.fullName} is walking`);
    }
}
class Student extends Person {
    constructor(firstname, lastname, studentId) {
        super(firstname, lastname);
        this.studentId = studentId;
    }
    get studentInfo() {
        return `Student ID: ${this.studentId}`;
    }
    study() {
        console.log(`${this.fullName} is studying`);
    }
}
const student = new Student("John", "Doe", 12345);
student.walk();
student.study();
console.log(student.studentInfo);
class Teacher extends Person {
    constructor(firstname, lastname, subject) {
        super(firstname, lastname);
        this.subject = subject;
    }
    teach() {
        console.log(`${this.fullName} is teaching ${this.subject}`);
    }
    get fullName() {
        return `Prof. ${super.fullName} `;
    }
}
const teacher = new Teacher("Jane", "Smith", "Mathematics");
teacher.walk();
teacher.teach();
//# sourceMappingURL=index.js.map