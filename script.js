var eachChar = 0;
var list = ["Learner", "Designer", "Creative"];
var speed = 150;
var pauseBeforeDelete = 1000;
var currentWord = 0;

function typeWriter() { 
    //Type current word
    if(eachChar < list[currentWord].length) {
        document.getElementById("characteristics").innerHTML += list[currentWord].charAt(eachChar);
        eachChar++;   
        setTimeout(typeWriter, 150);
    }
    else {
        // Finished typing the word, pause then delete
        setTimeout(deleteWord, pauseBeforeDelete);
    }  
} 

function deleteWord() {
    // Get current word
    var word = list[currentWord];
    // Delete current word
    if(eachChar > 0) {
        // Obtain one character 
        document.getElementById("characteristics").innerHTML = word.substring(0, eachChar - 1);
        eachChar--;
        setTimeout(deleteWord, 150);
    }
    //Move to the next word
    else {
        //Get the index of the next word 
        currentWord = (currentWord + 1) % list.length;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();
