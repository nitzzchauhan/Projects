

# Procedural Programming

```python
import math

# Function to calculate the area of a circle
def calculate_area(radius):
    return math.pi * radius ** 2

# Function to calculate the circumference of a circle
def calculate_circumference(radius):
    return 2 * math.pi * radius

# Main procedure
def main():
    # Input: Get radius from the user
    radius = float(input("Enter the radius of the circle: "))

    # Calculate area and circumference
    area = calculate_area(radius)
    circumference = calculate_circumference(radius)

    # Output: Display the results
    print(f"Area: {area}")
    print(f"Circumference: {circumference}")

# Run the program
if __name__ == "__main__":
    main()
```

---

# OOP Programming

```python
import math

# Define a Circle class
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return math.pi * self.radius ** 2

    def calculate_circumference(self):
        return 2 * math.pi * self.radius

    def display_results(self):
        area = self.calculate_area()
        circumference = self.calculate_circumference()
        print(f"Area: {area}")
        print(f"Circumference: {circumference}")

# Main program
def main():
    # Input: Get radius from the user
    radius = float(input("Enter the radius of the circle: "))

    # Create a Circle object
    circle = Circle(radius)

    # Output: Display the results using the Circle object
    circle.display_results()

# Run the program
if __name__ == "__main__":
    main()
```


In programming, paradigms are fundamental styles or approaches to solving problems and structuring code. Besides **Procedural Programming** and **Object-Oriented Programming (OOP)**, several other paradigms exist, each with its own principles and use cases. Here are some common programming paradigms:

### 1. **Functional Programming (FP)**
   - **Description**: In functional programming, computation is treated as the evaluation of mathematical functions. Functions are first-class citizens, meaning they can be passed as arguments, returned from other functions, and assigned to variables. FP avoids changing state and mutable data, promoting immutability and stateless functions.
   - **Key Features**:
     - Pure functions (no side effects)
     - First-class and higher-order functions
     - Recursion instead of loops
     - Immutability
   - **Languages**: Haskell, Erlang, Lisp, Scala, F#, and Python (supports FP features).
   
   **Example**:
   ```python
   # Functional approach in Python (with map and lambda)
   numbers = [1, 2, 3, 4, 5]
   squares = list(map(lambda x: x ** 2, numbers))
   print(squares)  # Output: [1, 4, 9, 16, 25]
   ```

### 2. **Declarative Programming**
   - **Description**: Declarative programming expresses **what** the program should accomplish rather than **how** to accomplish it. The focus is on defining the desired result, leaving the underlying mechanics to the language or system to handle.
   - **Key Features**:
     - High-level description of the desired output
     - Emphasis on logic and constraints rather than control flow
     - Common in database query languages and UI frameworks
   - **Languages**: SQL, HTML, CSS, Prolog.

   **Example** (SQL):
   ```sql
   SELECT name, age FROM students WHERE age > 18;
   ```

### 3. **Logical Programming**
   - **Description**: Logic programming is based on formal logic. A program consists of a set of facts and rules, and execution is the process of making logical inferences to answer queries. Instead of executing sequential steps, the program uses logic to search for solutions.
   - **Key Features**:
     - Based on first-order logic
     - Declarative approach (express logic, not procedures)
     - Problem-solving via logical inference and pattern matching
   - **Languages**: Prolog, Datalog.

   **Example** (Prolog):
   ```prolog
   father(john, mary).
   father(john, tom).
   parent(X, Y) :- father(X, Y).
   ```

### 4. **Event-Driven Programming**
   - **Description**: In event-driven programming, the flow of the program is determined by events such as user actions (clicks, keystrokes), sensor outputs, or messages from other programs. Code execution happens in response to specific events rather than in a predetermined order.
   - **Key Features**:
     - Use of event handlers or listeners
     - Asynchronous programming for handling multiple events
     - Common in GUIs, web development, and IoT
   - **Languages**: JavaScript, Visual Basic, Swift, Node.js.

   **Example** (JavaScript):
   ```javascript
   document.getElementById("myButton").addEventListener("click", function() {
       alert("Button clicked!");
   });
   ```

### 5. **Concurrent Programming**
   - **Description**: Concurrent programming involves multiple computations running simultaneously, which may interact or share resources. This paradigm is used to write programs that can handle multiple tasks at the same time, often necessary for high-performance or real-time systems.
   - **Key Features**:
     - Concurrency and parallelism
     - Threads, processes, or coroutines
     - Synchronization and communication between threads
   - **Languages**: Java (with threads), Go, Python (asyncio), Erlang.

   **Example** (Python with threading):
   ```python
   import threading

   def print_numbers():
       for i in range(1, 6):
           print(i)

   thread = threading.Thread(target=print_numbers)
   thread.start()
   ```

### 6. **Scripting Programming**
   - **Description**: Scripting is typically used for automating tasks and controlling other software. Scripts are interpreted, and scripting languages are often dynamically typed and flexible, with quick development cycles.
   - **Key Features**:
     - Usually interpreted rather than compiled
     - Often used for automating tasks or glueing other programs together
     - Suitable for rapid prototyping and small-scale tasks
   - **Languages**: Python, Bash, Perl, JavaScript, Ruby.

   **Example** (Bash Script):
   ```bash
   #!/bin/bash
   for i in {1..5}; do
     echo "Number: $i"
   done
   ```

### 7. **Dataflow Programming**
   - **Description**: Dataflow programming focuses on the flow of data between operations. In this paradigm, the program is represented as a directed graph, where nodes are operations and edges represent the data that flows between them.
   - **Key Features**:
     - Graph-based data flow
     - Emphasis on how data is processed rather than how tasks are scheduled
     - Popular in signal processing, IoT, and hardware design
   - **Languages**: LabVIEW, TensorFlow, Simulink.

   **Example** (Dataflow in TensorFlow):
   ```python
   import tensorflow as tf

   a = tf.constant(2)
   b = tf.constant(3)
   result = tf.add(a, b)
   print(result)  # TensorFlow manages data flow computation
   ```

### 8. **Aspect-Oriented Programming (AOP)**
   - **Description**: AOP focuses on separating cross-cutting concerns, like logging, security, or error handling, from the main logic of the program. It allows for the clean separation of concerns by adding behavior to existing code without modifying it directly.
   - **Key Features**:
     - Modularization of cross-cutting concerns
     - Use of "aspects" to inject code at certain points in the program (join points)
   - **Languages**: AspectJ (extension of Java), Spring AOP (framework in Java), PostSharp (C#).

   **Example** (AspectJ Pseudo-code):
   ```java
   aspect Logging {
       before(): call(void Circle.draw()) {
           System.out.println("A circle is about to be drawn.");
       }
   }
   ```

### 9. **Reactive Programming**
   - **Description**: Reactive programming is based on data streams and the propagation of change. It is particularly useful in environments where responsiveness and asynchronous event handling are important.
   - **Key Features**:
     - Asynchronous data streams
     - Focus on reacting to changes in data
   - **Languages**: RxJS (JavaScript), Reactor (Java), Akka (Scala), ReactiveX.

   **Example** (RxJS):
   ```javascript
   const { fromEvent } = rxjs;
   const { map } = rxjs.operators;

   fromEvent(document, 'click')
     .pipe(map(event => `Clicked at: ${event.clientX}, ${event.clientY}`))
     .subscribe(console.log);
   ```

---

### Summary of Paradigms:
- **Procedural**: Step-by-step instructions, focus on functions.
- **Object-Oriented**: Organizes code around objects with properties and methods.
- **Functional**: Focus on pure functions and immutability.
- **Declarative**: Focus on what to do, not how to do it.
- **Logical**: Uses formal logic and inference.
- **Event-Driven**: Execution based on events or user actions.
- **Concurrent**: Multiple computations running simultaneously.
- **Scripting**: Automates tasks, typically interpreted languages.
- **Dataflow**: Focus on data passing between nodes in a flow.
- **Aspect-Oriented**: Separates cross-cutting concerns like logging or security.
- **Reactive**: Focus on data streams and reacting to data changes. 

Each paradigm is suited to different types of problems, offering a unique way to think about structuring and solving problems in code.


Object-Oriented Programming (OOP) can be understood easily with a few simple concepts. Here’s a layman's explanation:

### What is OOP?

**Object-Oriented Programming (OOP)** is a way to organize and design computer programs using objects. Imagine you’re trying to describe a car. Instead of just writing a long list of features and actions, you think of the car as an object that has specific characteristics and behaviors.

### Key Concepts of OOP in Simple Terms:

1. **Objects**:
   - Think of objects as things in the real world. For example, a **car** is an object. It has properties (like color, make, model) and behaviors (like drive, honk, park).
   - In programming, an object is a bundle of data and functions that operate on that data.

2. **Classes**:
   - A **class** is like a blueprint for creating objects. Using our car example, a "Car" class defines what a car is (its properties and behaviors), but it’s not a car itself. It’s just a template.
   - You can create many cars (objects) from the Car class blueprint, each with its own characteristics.




The core principles of Object-Oriented Programming (OOP) provide a foundation for designing and structuring software in a way that promotes code reusability, maintainability, and scalability. Here are the four main principles of OOP:

### 1. **Encapsulation**
- **Definition**: Encapsulation is the concept of bundling the data (attributes) and methods (functions) that operate on that data into a single unit or class. It restricts direct access to some of the object’s components and can prevent the accidental modification of data.
- **Purpose**: It helps to keep the internal workings of an object hidden from the outside world. This way, you can change the internal implementation without affecting external code that uses the object.
- **Example**: A `BankAccount` class can have private attributes like `balance`, and provide public methods like `deposit()` and `withdraw()` to manipulate the balance while keeping the balance itself hidden.



```python
class BankAccount:
    def __init__(self, initial_balance=0):
        # Private attribute to hold the balance
        self.__balance = initial_balance

    def deposit(self, amount):
        """Deposit a certain amount into the account."""
        if amount > 0:
            self.__balance += amount
            print(f"Deposited: ${amount:.2f}. New balance: ${self.__balance:.2f}.")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        """Withdraw a certain amount from the account if sufficient balance exists."""
        if amount > 0:
            if amount <= self.__balance:
                self.__balance -= amount
                print(f"Withdrew: ${amount:.2f}. New balance: ${self.__balance:.2f}.")
            else:
                print("Insufficient balance.")
        else:
            print("Withdrawal amount must be positive.")

    def get_balance(self):
        """Return the current balance (for demonstration purposes)."""
        return self.__balance


# Example usage
if __name__ == "__main__":
    # Create a new bank account with an initial balance of $100
    account = BankAccount(100)

    # Deposit some money
    account.deposit(50)

    # Try to withdraw money
    account.withdraw(30)

    # Attempt to withdraw more than the balance
    account.withdraw(150)

    # Check balance (using a method)
    print(f"Current balance: ${account.get_balance():.2f}.")
```

### Explanation of the Code:
1. **Private Attribute**:
   - The `__balance` attribute is private, meaning it cannot be accessed directly from outside the class.

2. **Public Methods**:
   - `deposit(amount)`: Adds a specified amount to the balance if it's positive.
   - `withdraw(amount)`: Deducts a specified amount from the balance if there are sufficient funds and the amount is positive.
   - `get_balance()`: A public method that returns the current balance (for demonstration purposes).

3. **Example Usage**:
   - An example usage is provided in the `if __name__ == "__main__":` block, which demonstrates how to create a `BankAccount`, deposit money, and withdraw money while managing the balance correctly.

   Absolutely! Here’s an even shorter version of the `BankAccount` class, streamlined to include only essential functionality:

### Minimal BankAccount Code

```python
class BankAccount:
    def __init__(self, holder, balance=0):
        self.holder = holder
        self.balance = balance

    def deposit(self, amount):
        if amount > 0: self.balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.balance: self.balance -= amount

if __name__ == "__main__":
    account = BankAccount(input("Name: "), float(input("Initial balance: ")))
    account.deposit(float(input("Deposit: ")))
    account.withdraw(float(input("Withdraw: ")))
    print(f"Balance: ${account.balance:.2f}")
```








### 2. **Abstraction**
- **Definition**: Abstraction is the principle of simplifying complex reality by modeling classes based on the essential properties and behaviors of an object while hiding unnecessary details.
- **Purpose**: It allows you to focus on what an object does instead of how it does it. This reduces complexity and enhances efficiency.
- **Example**: In a `Car` class, you might define methods like `start()`, `stop()`, and `drive()`, without exposing the underlying mechanics of how the engine or brakes work.




Sure! Here’s a simpliVfied and shorter version of the abstraction concept in OOP using an abstract class for shapes. This version maintains clarity while minimizing the code complexity.

### Simplified Abstraction Code

```python
from abc import ABC, abstractmethod
import math

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

    def perimeter(self):
        return 2 * math.pi * self.radius

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

if __name__ == "__main__":
    shapes = [
        Circle(5),
        Rectangle(4, 6)
    ]
    
    for shape in shapes:
        print(f"{shape.__class__.__name__}: Area = {shape.area():.2f}, Perimeter = {shape.perimeter():.2f}")
```









### 3. **Inheritance**
- **Definition**: Inheritance is the mechanism by which one class (called the **subclass** or **child class**) can inherit attributes and methods from another class (called the **superclass** or **parent class**). This allows for the creation of a new class based on an existing one.
- **Purpose**: It promotes code reusability and establishes a hierarchical relationship between classes. Child classes can extend or modify behaviors of parent classes.
- **Example**: If you have a `Vehicle` class, you can create subclasses like `Car`, `Truck`, and `Motorcycle`, each inheriting common properties like `wheels` and `fuelType` from `Vehicle` but implementing their own specific features.




In Python, inheritance is a key feature of object-oriented programming that allows a class (known as a child or derived class) to inherit attributes and methods from another class (known as a parent or base class). There are several types of inheritance in Python, each with its own characteristics:

### Types of Inheritance in Python

1. **Single Inheritance**:
   - A child class inherits from a single parent class.
   - **Example**:
     ```python
     class Parent:
         def show(self):
             print("This is the parent class.")

     class Child(Parent):
         def display(self):
             print("This is the child class.")
     ```

2. **Multiple Inheritance**:
   - A child class inherits from multiple parent classes.
   - **Example**:
     ```python
     class Parent1:
         def show(self):
             print("This is parent class 1.")

     class Parent2:
         def display(self):
             print("This is parent class 2.")

     class Child(Parent1, Parent2):
         def greet(self):
             print("This is the child class.")
     ```

3. **Multilevel Inheritance**:
   - A child class inherits from a parent class, which is itself a child of another class. This forms a chain of inheritance.
   - **Example**:
     ```python
     class Grandparent:
         def show(self):
             print("This is the grandparent class.")

     class Parent(Grandparent):
         def display(self):
             print("This is the parent class.")

     class Child(Parent):
         def greet(self):
             print("This is the child class.")
     ```

4. **Hierarchical Inheritance**:
   - Multiple child classes inherit from a single parent class.
   - **Example**:
     ```python
     class Parent:
         def show(self):
             print("This is the parent class.")

     class Child1(Parent):
         def display(self):
             print("This is child class 1.")

     class Child2(Parent):
         def greet(self):
             print("This is child class 2.")
     ```

5. **Hybrid Inheritance**:
   - A combination of two or more types of inheritance. It can involve multiple inheritance and multilevel inheritance, for example.
   - **Example**:
     ```python
      class Parent:
       def show(self):
        print("This is the parent class.")

      class Parent1:
       def display(self):
        print("This is parent class 1.")

      class Parent2:
       def announce(self):
        print("This is parent class 2.")

      class Child(Parent, Parent1):  # Multiple Inheritance
       def greet(self):
        print("This is the child class.")

      class GrandChild(Child, Parent2):  # Further inheriting from Child
       def say_hello(self):
        print("Hello from GrandChild.")
     ```

### Summary of Inheritance Types
- **Single Inheritance**: One parent, one child.
- **Multiple Inheritance**: One child, multiple parents.
- **Multilevel Inheritance**: A chain of inheritance (grandparent -> parent -> child).
- **Hierarchical Inheritance**: One parent, multiple children.
- **Hybrid Inheritance**: A mix of various inheritance types.

### Considerations
- Python supports multiple inheritance, which can lead to complexities like the **Diamond Problem**. This occurs when a class inherits from two classes that have a common ancestor, and the derived class does not know which parent's method to invoke. Python resolves this using the **Method Resolution Order (MRO)**, which you can check using the `.__mro__` attribute or the `mro()` method.

Feel free to ask if you want more details or examples on any specific type of inheritance!

### 4. **Polymorphism**
- **Definition**: Polymorphism means “many forms.” It allows methods to do different things based on the object that it is acting upon. This can occur through method overriding (in subclasses) and method overloading (same method name with different parameters).
- **Purpose**: It enables objects of different classes to be treated as objects of a common superclass, promoting flexibility and the ability to write more generic and reusable code.
- **Example**: If both a `Dog` class and a `Cat` class have a method called `sound()`, calling `sound()` on an object of type `Animal` (the superclass) will execute the appropriate method based on the actual object type (Dog or Cat).

### Summary of OOP Principles

- **Encapsulation**: Hides the internal state and requires all interaction to be performed through an object’s methods.
- **Abstraction**: Simplifies complex systems by modeling classes based on essential features and ignoring irrelevant details.
- **Inheritance**: Allows new classes to inherit attributes and methods from existing classes, facilitating code reuse and establishing relationships.
- **Polymorphism**: Enables objects to be treated as instances of their parent class while allowing for different behaviors based on the actual object.

Together, these principles create a powerful programming paradigm that helps developers manage complexity and build robust applications.









