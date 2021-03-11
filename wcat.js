
let readfile = require("./display");
let help = require("./help")
let sdisplay = require("./single_line_break")
let n = require("./no_line");
let b = require("./cmd_b");

let input = process.argv.slice(2);
let cmd = input[0];


switch (cmd){
    case "-s":
        sdisplay.onebreak(input[1]);
        break;
        
    case "-n":
        n.no_line(input[1]);
        break;

    case "-b":
        b.bcommand(input[1])
        break;
    
    case "-help":
        help.helpfunction();
        break;

    default :
        readfile.displayfunction(input);
}

