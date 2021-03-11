let fs = require("fs");

function line_number(input){
    let data = fs.readFileSync(input, "utf-8");
    let sdata = data.split("\n");
    for(let i = 1; i <= sdata.length; i++){
        let line = sdata[i - 1];
        console.log(i,line);
    }
}

module.exports = {
    no_line : line_number
}