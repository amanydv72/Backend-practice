const fs = require('fs');
const transformStream = require('stream');

let fileStream = fs.createReadStream(__dirname + "/input.text");
let writeStream = process.stdout;
// console.log(fileStream);

let middleStream = new transformStream.Transform({
    transform(chunk, enco, nextCB){
        console.log(chunk);
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCB, 1000);
        // nextCB();
    }
})

let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(writeStream);

// Detailed Flow:

// 1 File Reading Starts: fileStream begins reading the contents of input.text.
// 2 Data Transformation:
//  a) Data chunks are read from fileStream and passed to middleStream.
//  b) In middleStream, each chunk is converted to a string, transformed to uppercase, and then pushed to the readable side of middleStream.
//  c) A 1-second delay is introduced using setTimeout before processing the next chunk.
// 3 Data Writing: The transformed chunks from middleStream are piped to writeStream, which writes them to the terminal.

// Summary

// The code reads the contents of a file named input.text, converts each chunk of data to uppercase, introduces a 1-second delay after processing each chunk, and then outputs the modified data to the terminal. This is achieved using Node.js streams: a readable stream to read the file, a transform stream to modify the data, and a writable stream to output the data to the terminal. The pipe method is used to connect these streams and handle the data flow automatically.