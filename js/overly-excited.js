console.log("Hello, I am excited to learn javaScript!")

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
// concatinating the string
function addExcitement(theWordArray) {
    let buildMeUp = " "
    for (let i = 0; i < theWordArray.length; i++){
        buildMeUp = buildMeUp.concat(theWordArray[i], " ");
        console.log(buildMeUp);       
    }
}

addExcitement(sentence);