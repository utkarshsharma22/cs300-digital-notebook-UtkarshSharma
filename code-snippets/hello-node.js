// hello-node.js
// Simple Node.js example from Week 1

console.log("Hello from Node.js!");
console.log(`Running on Node version: ${process.version}`);

// Arrow function example
const greet = (name) => {
    return `Welcome to CS 300, ${name}!`;
};

console.log(greet("Student"));
