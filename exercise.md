### TypeScript Fundamentals Exercise

#### **Objective:**
This exercise will help you practice basic TypeScript concepts, including type annotations, interfaces, union types, and functions. By the end of this exercise, you should feel more comfortable with these fundamental concepts in TypeScript.

#### **Part 1: Type Annotations and Variables**

1. **Define the following variables with appropriate TypeScript types:**
   - `fullName`: A string that represents a user's full name.
   - `age`: A number that represents a user's age.
   - `isStudent`: A boolean that indicates whether the user is a student.
   - `favoriteNumbers`: An array of numbers that represents the user's favorite numbers.

2. **Assign values to these variables**.

#### **Part 2: Creating and Using Interfaces**

1. **Create an interface `Person`** that includes the following properties:
   - `name`: A string representing the person's name.
   - `age`: A number representing the person's age.
   - `email`: A string representing the person's email.
   - `isStudent`: An optional boolean that indicates if the person is a student.

2. **Create an object** named `person1` using the `Person` interface.

#### **Part 3: Working with Union Types**

1. **Define a union type** called `ID` that can be either a string or a number.

2. **Create a function** `printID` that takes a parameter of type `ID` and logs it to the console with a message indicating whether the ID is a string or a number.

   - If the ID is a string, the message should be: `"The ID is a string: [value]"`.
   - If the ID is a number, the message should be: `"The ID is a number: [value]"`.

#### **Part 4: Creating and Using Functions**

1. **Create a function `greetPerson`** that takes a `Person` object as a parameter and returns a greeting message. The message should include the person's name and age.

   Example: `"Hello, Alice! You are 25 years old."`

2. **Extend the `greetPerson` function** to handle the case where the person is a student. If the `isStudent` property is `true`, the message should include `"and you are a student."`

   Example: `"Hello, Alice! You are 25 years old and you are a student."`
