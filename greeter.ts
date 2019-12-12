// Import stylesheets
import './style.css';

class Student implements Person {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

// let user = "Jane User";
// let user = [0, 1, 2];
// let user = { firstName: "Jane", lastName: "Doe" };
let user = new Student("John", "Wick");

document.body.textContent = greeter(user);