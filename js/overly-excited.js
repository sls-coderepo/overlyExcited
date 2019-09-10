console.log("Hello, I am excited to learn javaScript!")

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// concatinating the strings
function addExcitement(theWordArray) {
    let buildMeUp = " "
    for (let i = 0; i < theWordArray.length; i++){
        buildMeUp = buildMeUp.concat(theWordArray[i], " ");
        console.log(buildMeUp);       
    }
}
addExcitement(sentence);

// concatinating the character
function addExcitement_char(theWordArray) {
    let buildMeUp = " "
    for (let i = 0; i < theWordArray.length; i++){
        buildMeUp = buildMeUp.concat(theWordArray[i]);
        if ((i + 1) % 3 === 0) {
            buildMeUp = buildMeUp.concat("! ");
        }
        console.log(buildMeUp);       
    }
}
addExcitement_char(sentence);

 //adding new argument
function addExcitement_separator(theWordArray, seperator) {
    let buildMeUp = " "
    for (let i = 0; i < theWordArray.length; i++){
        buildMeUp = buildMeUp.concat(theWordArray[i]);
        if ((i + 1) % 3 === 0) {
            buildMeUp = buildMeUp.concat(seperator," ");
        }
        console.log(buildMeUp);       
    }
}
addExcitement_separator(sentence, "?")


// repeat string multiple times
function addExcitement_times(theWordArray, seperator, numOfTimes) {
    let buildMeUp = " "
    for (let i = 0; i < theWordArray.length; i++){
        buildMeUp = buildMeUp.concat(theWordArray[i]);
        if ((i + 1) % 3 === 0) {
            buildMeUp = buildMeUp.concat(seperator.repeat(numOfTimes), " ");
        }
        console.log(buildMeUp);       
    }
}

addExcitement_times(sentence, "*", 4)



