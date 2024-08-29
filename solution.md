### **Solutions:**

```typescript
// Part 1: Type Annotations and Variables
let fullName: string = "Alice Johnson";
let age: number = 25;
let isStudent: boolean = true;
let favoriteNumbers: number[] = [3, 7, 21];

// Part 2: Creating and Using Interfaces
interface Person {
  name: string;
  age: number;
  email: string;
  isStudent?: boolean; // Optional property
}

const person1: Person = {
  name: "Alice Johnson",
  age: 25,
  email: "alice.johnson@example.com",
  isStudent: true,
};

// Part 3: Working with Union Types
type ID = string | number;

function printID(id: ID): void {
  if (typeof id === "string") {
    console.log(`The ID is a string: ${id}`);
  } else {
    console.log(`The ID is a number: ${id}`);
  }
}

printID("abc123"); // The ID is a string: abc123
printID(987654); // The ID is a number: 987654

// Part 4: Creating and Using Functions
function greetPerson(person: Person): string {
  let greeting = `Hello, ${person.name}! You are ${person.age} years old.`;
  if (person.isStudent) {
    greeting += " and you are a student.";
  }
  return greeting;
}

console.log(greetPerson(person1)); // Output: "Hello, Alice Johnson! You are 25 years old and you are a student."
```

### **Explanation:**

1. **Type Annotations and Variables**:

   - You declare variables with explicit types and assign values to them, practicing the basics of TypeScript's type system.

2. **Interfaces**:

   - You define an interface `Person` to structure the data and ensure that objects conform to this structure.

3. **Union Types**:

   - The `ID` type allows flexibility in accepting either a string or a number. The function `printID` demonstrates type checking with `typeof` and handling different types within the union.

4. **Functions**:
   - You create a function `greetPerson` that constructs a personalized greeting message based on the data provided by a `Person` object. This function is then extended to include optional logic based on the `isStudent` property.
