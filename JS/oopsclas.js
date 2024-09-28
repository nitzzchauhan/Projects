// // // Defining the Car class
// // class Car {
// //     // Constructor to initialize properties
// //     constructor(brand, model, year) {
// //       this.brand = brand;
// //       this.model = model;
// //       this.year = year;
// //     }

// //     // Method to display car details
// //     displayDetails() {
// //       console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
// //     }

// //     map(){
// //         return "mapped"
// //     }

// //     // Method to calculate the car's age
// //     calculateAge() {
// //       const currentYear = new Date().getFullYear();
// //       const age = currentYear - this.year;
// //       return age;
// //     }
// //   }

// //   // Creating an instance of the Car class
// //   const myCar = new Car('Toyota', 'Corolla', 2015);

// //   // Calling methods on the class instance
// //   myCar.displayDetails(); // Outputs: Car: Toyota Corolla, Year: 2015
// //   console.log(`Car Age: ${myCar.calculateAge()} years`, myCar.map(), myCar.brand); // Outputs: Car Age: (current year - 2015) years

// class Car {
//     // Private fields (cannot be accessed outside the class)
//     #brand;
//     #model;
//     #year;

//     constructor(brand, model, year) {
//         this.#brand = brand;  // Private property
//         this.#model = model;  // Private property
//         this.#year = year;    // Private property
//     }

//     // Public method to display car details (controlled access)
//     displayDetails() {
//         console.log(`Car: ${this.#brand} ${this.#model}, Year: ${this.#year}`);
//     }

//     // Public method to calculate car's age (controlled access)
//     calculateAge() {
//         const currentYear = new Date().getFullYear();
//         const age = currentYear - this.#year;
//         return age;
//     }
// }

// const myCar = new Car('Honda', 'Civic', 2015);
// myCar.displayDetails(); // Outputs: Car: Honda Civic, Year: 2015
// console.log(myCar.calculateAge()); // Outputs the age of the car
// console.log(myCar.#brand); // Error: Private field '#brand' must not be accessed outside the class


// // Base class: Car
// class Car {
//     constructor(brand, model, year) {
//       this.brand = brand;
//       this.model = model;
//       this.year = year;
//     }
  
//     // Method to display car details
//     displayDetails() {
//       console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
//     }
  
//     // Method to calculate car's age
//     calculateAge() {
//       const currentYear = new Date().getFullYear();
//       return currentYear - this.year;
//     }
//   }
  
//   // Subclass: ElectricCar inherits from Car
//   class ElectricCar extends Car {
//     constructor(brand, model, year, batteryCapacity) {
//       // Call the parent class constructor to inherit brand, model, and year
//       super(brand, model, year);
//       this.batteryCapacity = batteryCapacity; // New property specific to electric cars
//     }
  
//     // Method to display electric car details (overriding parent method)
//     displayDetails() {
//       super.displayDetails(); // Call the parent method
//       console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
//     }
  
//     // New method specific to electric cars
//     displayRange() {
//       const range = this.batteryCapacity * 5; // Assume each kWh gives 5 miles of range
//       console.log(`Range: ${range} miles`);
//     }
//   }
  
//   // Creating an instance of the ElectricCar class
//   const myElectricCar = new ElectricCar('Tesla', 'Model 3', 2020, 75);
  
//   // Using inherited and overridden methods
//   myElectricCar.displayDetails();
//   // Outputs:
//   // Car: Tesla Model 3, Year: 2020
//   // Battery Capacity: 75 kWh
  
//   console.log(`Car Age: ${myElectricCar.calculateAge()} years`); // Outputs the age of the car
  
//   myElectricCar.displayRange(); // Outputs: Range: 375 miles
  








// // Parent class: Animal
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     // Method in the parent class
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   // Child class: Dog inherits from Animal
//   class Dog extends Animal {
//     // Method specific to the Dog class (overrides speak method)
//     speaks() {
//       console.log(`${this.name} barks.`);
//     }
   
//   }
  
//   // Create an instance of the Dog class
//   const myDog = new Dog('Buddy');
  
//   // Using the inherited and overridden method
//   myDog.speak(); // Outputs: Buddy barks.


// // Parent object (prototype)
// let person = {
//     greet: function() {
//         console.log("Hello, I am " + this.name);
//     }
// };

// // Child object inheriting from parent
// let student = Object.create(person);
// student.name = "John";

// student.greet(); // Outputs: "Hello, I am John"

// // Constructor function
// function Person(name) {
//     this.name = name;
// }

// // Adding method to prototype
// Person.prototype.greet = function() {
//     console.log("Hello, I am " + this.name);
// };

// // Creating an instance
// let student = new Person("John");

// student.greet(); // Outputs: "Hello, I am John"


  