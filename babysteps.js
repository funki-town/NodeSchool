//initialise result variable to zero
var result = 0;
//loop through the command line starting at index 3 
for (i = 2; i < process.argv.length; i++) {
    //add the value at index i to the result and convert to number
    result += Number(process.argv[i]);
}
//output
console.log(result);