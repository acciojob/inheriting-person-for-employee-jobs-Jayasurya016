function PersonClass() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
  }
  return Person;
}

function EmployeeClass(Person) {
  class Employee extends Person {
    constructor(name, age, jobTitle) {
      super(name, age);
      this.jobTitle = jobTitle;
    }
    jobGreet() {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
    }
  }
  return Employee;
}

// Get classes from functions
const Person = PersonClass();
const Employee = EmployeeClass(Person);

// Test
const person = new Person("Alice", 25);
person.greet();

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();
