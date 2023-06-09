The Open-Closed Principle (OCP) is a software development principle that states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. In other words, the behavior of a class should be easily extended without modifying its existing code.



In the refactored example, we define a base Shape class with a calculateArea method that does nothing. We then create specific shape classes (Circle, Rectangle, Triangle) that inherit from Shape and override the calculateArea method with their respective calculation logic.

By doing this, we adhere to the OCP. If a new shape needs to be added, we can create a new class that extends Shape and implement the specific calculation logic for that shape without modifying existing code. This allows for easy extension of behavior while keeping existing code untouched.

The OCP promotes code reusability, maintainability, and flexibility, as new functionality can be added by extending existing entities rather than modifying them, reducing the risk of introducing bugs or breaking existing code.