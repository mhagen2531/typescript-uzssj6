// Import stylesheets
import './style.css';

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

// let user = "Jane User";
// let user = [0, 1, 2];
let user = { firstName: "John", lastName: "Doe" };

// document.body.textContent = greeter(user);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = greeter(user);