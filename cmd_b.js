let fs = require("fs");
function bcmd(input){
    let data = fs.readFileSync(input, "utf-8");
    let line = data.split("\n");

    for(let i = 0, n = 1; i < line.length; i++){
        let l = line[i];
        if(l != "\r"){
            console.log(n, l);
            n++;
        }
        else{
            console.log(l);
        }
    }
}

module.exports ={
    bcommand : bcmd
}