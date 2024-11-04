const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const hallyTxt = document.querySelector(".hallyTxt");


// /change the postion of no button
noBtn.addEventListener("click", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});

const firstElement = document.querySelector('.hallyTxt');
const secondElement = document.querySelector('.hallyTxt1')
const letter = document.querySelectorAll('.letter');
;

  // Get the Yes button and all the letter elements
  const yesButton = document.querySelector('.js-yes-btn');
  const letters = document.querySelectorAll('.letter');

  // Event listener for Yes button click
  yesButton.addEventListener('click', () => {
    moveElement(secondElement);
    // Add the 'animate' class to each letter to trigger the animation
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('animate');
      }, index * 100); // Delay each letter animation for a staggered effect
    });
  });




  window.onload = function() {
    // Get both elements

  
    // Get the position of the first element
    const firstElementRect = firstElement.getBoundingClientRect();
  
    // Set the position of the second element to match the first
    secondElement.style.top = `${firstElementRect.top}px`;
    secondElement.style.left = `${firstElementRect.left}px`;
    secondElement.style.position = 'absolute'; // Ensure it's absolute positioned
  };
  


  function moveElement(secondElement) {
  
      
      // Move the element 20px down and 10px to the right
      secondElement.style.transform = 'translate(-30%, calc(-50% + 150px))';
      letters.forEach(letter => {
        letter.style.margin = '13px';
      });

    }



    // JavaScript code for handling the "NO" button click
document.getElementById("noBtn").addEventListener("click", function () {
  // Hide the "NO" button
  this.style.display = "none";

  // Change the text and add typing animation
  const textElement = document.getElementById("displayText");
  textElement.textContent = "NO, I'M sure YOU REMEMBER";
  textElement.style.animation = "typing 3s steps(30) forwards";
});


// JavaScript code
document.getElementById("yesBtn").addEventListener("click", function () {
  // Add fade-out animation to the sevayContainer
  const sevayContainer = document.querySelector(".sevayContainer");
  sevayContainer.classList.add("fade-out");

  // After animation ends, hide sevayContainer and display question-container
  sevayContainer.addEventListener("animationend", function () {
    sevayContainer.style.display = "none";
    document.querySelector(".question-container").style.display = "block";
  });
});




    
