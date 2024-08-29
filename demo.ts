// Inferens och primitiva typer
// Om vi assignar till en annan typ så klagar compilern.
let firstName = "Kristian";
firstName = 123;

//TS vet också vilka metoder ett objekt har. Du får bättre IntelliSense.
firstName.toLowerCase();
firstName.toExponential(); // Fungerar ej

// Även i funktioner så kan vi lägga till typer för parametrarna.
function add(a: number, b: number) {
  return a + b;
}

// Vi kan också definiera parametrar som optional med ?:.
function greet(name?: string) {
  console.log(`Hello, ${name || "Anonymous"}!`);
}

// Vi kan också definiera return-typen
// Notera returntypen i ovanstående funktioner.
// Void innebär att det inte returnerar något.
function createGreet(name?: string): string {
  return `Hello, ${name || "Anonymous"}!`;
}

//Arrayer kan också definieras i TS.
const numbers: number[] = [1, 2, 3];
numbers.push("123");

//Arrayer kan ha hur många dimensioner som helst.
const twoDimensionalNumbers: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//När du skickar in objekt kan du behöva beskriva objektet för TS.
type User = {
  name: string;
  age: number;
  email: string;
  isAdmin: boolean;
};

// Funktion som tar en användare av typen 'User' som parameter och returnerar en formaterad sträng
function describeUser(user: User): string {
  // Bygger en sträng baserad på användarens information
  const role = user.isAdmin ? "Administratör" : "Användare";
  return `${user.name} är ${user.age} år gammal, har e-postadressen ${user.email} och är ${role}.`;
}
