let fs = require("fs");
let p = require("path");


function display(input){  
        console.log("-------------------------------- " + p.basename(input) + " --------------------------------");
        let data = (fs.readFileSync(input, "utf-8"));
        let text = data.replace(/(\r\n|\r|\n){2,}/g, '$1\n');
        console.log(text.trim());
        console.log("\n");
}

module.exports = {
    onebreak : display
}

