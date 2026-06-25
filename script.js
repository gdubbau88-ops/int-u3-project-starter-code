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
let answer = document.querySelector(".answer");
let next = document.querySelector(".option-next");
let question3 = document.querySelector(".question-three");
let submit = document.querySelector(".option-submit");
let message = document.querySelector(".message");
let reset = document.querySelector(".option-reset");


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
    option4.style.display = "block";
    next.style.display = "block"
    reset.style.display = "block"
    image2.style.display = "block";
});
option2.addEventListener('click', function () {
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    opening.style.display = "none";
    // image1.style.display = "none";
    // question1.style.display = "none";
    endScreen.style.display = "block";
    option2Screen.style.display = "block";
    reset.style.display = "block"

});


option3.addEventListener('click', function () {
    option3.style.display = "none";
    option4.style.display = "none";
    next.style.display = "none";
    opening.style.display = "none";
    // image1.style.display = "none";
    // question1.style.display = "none";
    question2.style.display = "none";
    endScreen.style.display = "none";
    option2Screen.style.display = "none";
    image2.style.display = "none";
    peta.style.display = "block";
    option1Screen.style.display = "none";
    reset.style.display = "block";
});
option4.addEventListener("click", function () {
    option1.style.display = "none";
    next.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    opening.style.display = "none";
    option1Screen.style.display = "none";
    // image1.style.display = "none";
    // question1.style.display = "none";
    endScreen.style.display = "none";
    option2Screen.style.display = "none";
    image2.style.display = "none";
    question2.style.display = "none";
    felon.style.display = "block";
    reset.style.display = "block";
});
next.addEventListener("dblclick", function () {
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    endScreen.style.display = "none";
    option2Screen.style.display = "none";
    next.style.display = "none";
    peta.style.display = "none";
    felon.style.display = "none";
    question2.style.display = "none";
    option1Screen.style.display = "none";
    question3.style.display = "block";
    answer.style.display = "block";
    submit.style.display = "block";
    reset.style.display = "block";

})
reset.addEventListener("click", function () {
    opening.style.display = "block";
    option1.style.display = "block";
    felon.style.display = "none";
    peta.style.display = "none";
    option2.style.display = "block";
    next.style.display = "none";
    reset.style.display = "none";
    option2Screen.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    answer.style.display = "none";
    submit.style.display = "none";
    option1Screen.style.display = "none";
    image2.style.display = "none";
})
submit.addEventListener("click", function () {
    let answer = Number(document.querySelector(".answer").value);
    answer.value;
    console.log(answer.value)
    if (answer < 1) {
        message.innerHTML = "you value babies more than adults."
    } else if (answer === 1) {
        message.innerHTML = "correct!! You value as much as adults"
    } else if (answer > 1) {
        message.innerHTML = "you value adults more than babies you monster"
    } else {
        message.innerHTML = "please input number"
    }
});