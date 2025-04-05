class Ride {
  private static _activeRides: number = 0;
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

class Person {
  constructor(public firstname: string, public lastname: string) {}
  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  walk() {
    console.log(`${this.fullName} is walking`);
  }
}

class Student extends Person {
  constructor(firstname: string, lastname: string, public studentId: number) {
    super(firstname, lastname);
  }

  get studentInfo() {
    return `Student ID: ${this.studentId}`;
  }

  study() {
    console.log(`${this.fullName} is studying`);
  }
}

const student = new Student("John", "Doe", 12345);
student.walk(); // John Doe is walking
student.study(); // John Doe is studying
console.log(student.studentInfo); // Student ID: 12345

class Teacher extends Person {
  constructor(firstname: string, lastname: string, public subject: string) {
    super(firstname, lastname);
  }
  teach() {
    console.log(`${this.fullName} is teaching ${this.subject}`);
  }

  override get fullName() {
    return `Prof. ${super.fullName} `;
  }
}

const teacher = new Teacher("Jane", "Smith", "Mathematics");
teacher.walk(); // Jane Smith is walking
teacher.teach(); // Jane Smith is teaching Mathematics
