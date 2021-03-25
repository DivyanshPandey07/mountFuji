function main() {
    let readline = require ('readLine');
    console.log(readline)
    let r = readline.question("Enter radius", (radius) => console.log(radius))
    const PI = Math.PI;
    let area = PI * r;
    console.log(area);
    let perimeter = 2 * PI * r;
    console.log(perimeter);
}