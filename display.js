let fs = require("fs");
let p = require("path");
function display(input){
    for(let i = 0; i < input.length; i++){
        let path = input[i];
        console.log("-------------------------------- " + p.basename(path) + " --------------------------------");
        console.log(fs.readFileSync(path, "utf-8"));
        console.log("\n");
    }
}

module.exports = {
    displayfunction : display
}