function help(){
    console.log(`
        List of all commands :-
        1. node wcat.js filepath
        2. node wcat.js -s filepath
        3. node wcat.js -b filepath
        4. node wcat.js -n filepath
        5. node wcat.js -help
    `);
}

module.exports = {
    helpfunction : help
}