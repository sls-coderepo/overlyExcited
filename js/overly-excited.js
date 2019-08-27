console.log("Hello, I am excited to learn javaScript!")

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// adding new argument
function addExcitement(theWordArray, seperator) {
    let buildMeUp = " "
    for (let i = 0; i < theWordArray.length; i++){
        buildMeUp = buildMeUp.concat(theWordArray[i], " ");
        if ((i + 1) % 3 === 0) {
            buildMeUp = buildMeUp.concat(seperator);
        }
        console.log(buildMeUp);       
    }
}

addExcitement(sentence, "?")

