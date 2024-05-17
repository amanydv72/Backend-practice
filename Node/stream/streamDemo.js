const fs = require('fs');

let fileStream = fs.createReadStream(__dirname + '/input.text');

let outputStream = process.stdout;

fileStream.pipe(outputStream);

// Sure, let's break down this Node.js code snippet step by step to understand what it's doing:

// ### 1. Import the `fs` Module

// ```javascript
// const fs = require('fs');
// ```

// - This line imports the built-in `fs` (File System) module in Node.js, which provides an API for interacting with the file system. This module allows you to read and write files, among other things.

// ### 2. Create a Read Stream

// ```javascript
// let fileStream = fs.createReadStream(__dirname + '/input.text');
// ```

// - `fs.createReadStream()` is a method provided by the `fs` module to create a readable stream. A readable stream is an abstraction for a source from which data can be consumed.
// - `__dirname` is a global variable in Node.js that holds the directory name of the current module. By using `__dirname + '/input.text'`, you are specifying the path to a file named `input.text` located in the same directory as the current script.
// - `fileStream` now holds a readable stream object that can be used to read data from the specified file.

// ### 3. Define the Output Stream

// ```javascript
// let outputStream = process.stdout;
// ```

// - `process.stdout` is a writable stream that points to the standard output (stdout), typically the terminal or console where the Node.js process was started.
// - `outputStream` now holds a writable stream object that can be used to write data to the standard output.

// ### 4. Pipe the Read Stream to the Write Stream

// ```javascript
// fileStream.pipe(outputStream);
// ```

// - `fileStream.pipe(outputStream)` connects the readable stream (`fileStream`) to the writable stream (`outputStream`).
// - The `pipe` method is a way to pass data from the source (readable stream) directly to the destination (writable stream). In this case, it means taking the contents of `input.text` and writing it to the terminal or console.
// - When you use `pipe`, it handles the data flow automatically, managing the reading and writing process efficiently, so you don't have to manually read chunks of data and write them.

// ### Detailed Flow

// 1. **File Reading Starts**: When the script runs, `fs.createReadStream` starts reading the contents of `input.text`.
// 2. **Data Transfer**: As data is read from the file, it's passed through the readable stream (`fileStream`).
// 3. **Piping**: The `pipe` method directs this data to `outputStream`, which is `process.stdout`.
// 4. **Output Display**: `process.stdout` writes the incoming data to the terminal or console, effectively displaying the contents of `input.text`.

// ### Summary

// The entire code snippet is designed to read the contents of a file named `input.text` located in the same directory as the script and output those contents directly to the terminal or console. This is achieved by using Node.js streams and the `pipe` method to handle the data flow efficiently.