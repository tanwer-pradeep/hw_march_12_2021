function help(){
    console.log(`
        List of all commands :-
        1. node wcat.js filepath --> (to read the data from file)
        2. node wcat.js -s filepath --> (to change all multiple line breaks to single line break)
        3. node wcat.js -b filepath --> (to numbered the non empty lines)
        4. node wcat.js -n filepath --> (to numbered all lines in the file)
        5. node wcat.js filepath1 > filepath2 --> (to overwrite the data of filepath2 
                                                    by the data of filepath1)
        6. node wcat.js filepath1 >> filepath2 --> (to append all the data of filepath1 to filepath2)
        7. node wcat.js -help --> (for help)
        
    `);
}

module.exports = {
    helpfunction : help
}