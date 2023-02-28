let soliloquy = 'To be, or not to be, that is the question.';

soliloquy.includes('To be');        // Does it include the string "To be"?
soliloquy.includes('question');     // What about "question"?
soliloquy.includes('nonexistent');  // This string doesn't appear
soliloquy.includes('TO BE');        // String inclusion is case-sensitive
soliloquy.includes('To be', 1);     // Can you guess what this one means?
soliloquy.includes("o be,", 1);     // A hint for the previous one