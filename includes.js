#! /usr/bin/node

let soliloquy = 'To be, or not to be, that is the question.';

console.log(soliloquy.includes('To be'));        // Does it include the string "To be"?
console.log(soliloquy.includes('question'));     // What about "question"?
console.log(soliloquy.includes('nonexistent'));  // This string doesn't appear
console.log(soliloquy.includes('TO BE'));        // String inclusion is case-sensitive
console.log(soliloquy.includes('To be', 1));     // Can you guess what this one means?
console.log(soliloquy.includes("o be,", 1));     // A hint for the previous one

console.log(soliloquy);

console.log(soliloquy.charAt(0));
console.log(soliloquy.charAt(1));
console.log(soliloquy.charAt(2));