// Question is we have two variables x = 10 and y = 5 and we want to change the value
// of both variables to be x = 5 and y = 10 how can we do that without third variable?

// Answer:

let x = 10, y = 5

x = x + y

y = x - y

x = x - y

console.log(`x = ${x} and y = ${y}`)