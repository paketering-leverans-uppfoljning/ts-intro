// Funktion som beräknar arean av en figur
function calculateArea(shape: any): number {
  // Använd den gemensamma egenskapen 'type' för att skilja mellan typerna
  switch (shape.type) {
    case "square":
      return shape.sideLength ** 2; // Area för kvadrat: sidan^2
    case "circle":
      return Math.PI * shape.radius ** 2; // Area för cirkel: π * radien^2
    default:
      throw new Error("Okänd form"); // Detta hanterar oväntade fall
  }
}
