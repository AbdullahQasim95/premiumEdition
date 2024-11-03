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



     
