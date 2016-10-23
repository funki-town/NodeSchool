//Load the fs module from the Node core library
var fs = require('fs');
//read the file, beggining at index 3 of the command line and store in input variable
//returns buffer type object
var input = fs.readFileSync(process.argv[2]);
//convert data to type string
var strings = input.toString();
//split the string, return number of new lines minus one
var result = strings.split("\n");
result = result.length;
result = result - 1;
//output number of line
console.log(result);