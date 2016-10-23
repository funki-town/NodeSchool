//Load the fs module from the Node core library
var fs = require('fs');
var result = undefined;

function readText(callback) {
    //read the file, when finished perform split operation
    fs.readFile(process.argv[2], 'utf8', function processFile(err, fileContents) {
        //split the string, return number of new lines minus one
        result = fileContents.split("\n");
        result = result.length;
        result--;
        callback()
    });
};
//output function - to log the result to console.
function output() {
    console.log(result);
}
//when readText finishes invoke the output function with the result
readText(output);