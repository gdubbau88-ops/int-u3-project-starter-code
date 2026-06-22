// Declare variables below to save the different divs of your story.
let option1 = document.querySelector(".option-one");
let option2 = document.querySelector(".option-two");
let option3 = document.querySelector(".option-three");
let option4 = document.querySelector(".option-four");
let image1 = document.querySelector(".image-one");
let image2 = document.querySelector(".image-two");
let question1 = document.querySelector(".question-one");
let question2 = document.querySelector(".question-two");
let option2Screen = document.querySelector(".option-two-screen");
let option1Screen = document.querySelector(".option-one-screen");
let opening = document.querySelector(".story-opening");
let endScreen = document.querySelector(".end-screen");
let peta = document.querySelector(".option-end-peta");
let felon = document.querySelector(".option-end-felon");




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


option1.addEventListener('click', function () {
    option1.style.display = "none";
    option2.style.display = "none";
    opening.style.display = "none";
    // image1.style.display = "none";
    // question1.style.display = "none";
    question2.style.display = "block";
    option1Screen.style.display = "block";
    option3.style.display = "block";
});
option2.addEventListener('click', function () {
    option1.style.display = "none";
    option2.style.display = "none";
    opening.style.display = "none";
    // image1.style.display = "none";
    // question1.style.display = "none";
    endScreen.style.display = "block";
    option2Screen.style.display = "block";

});


option3.addEventListener('click', function () {
    option3.style.display = "none";
    option4.style.display = "none";
    opening.style.display = "none";
    // image1.style.display = "none";
    // question1.style.display = "none";
    question2.style.display = "none";
    endScreen.style.display = "none";
    option2Screen.style.display = "none";
    image2.style.display = "none";
    peta.style.display = "block";
});
option4.addEventListener("click", function () {
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    opening.style.display = "none";
    // image1.style.display = "none";
    // question1.style.display = "none";
    endScreen.style.display = "none";
    option2Screen.style.display = "none";
    image2.style.display = "none";
    question2.style.display = "none";
    felon.style.display = "block";
});