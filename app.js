let enteredNum = document.getElementById('guess-input');
const submitButton = document.getElementById('guess-value');
let statusMessage = document.getElementsByClassName('message');
let p = document.querySelector('.message');
const maxPlayNum = 3;
let playCount = 0;
let chances = 3;



let randomNum = Math.round(Math.random() * 10);

submitButton.addEventListener('click', guessNumValidator);

function guessNumValidator(e) {

  // Check if the target value is PLAY AGAIN or SUBMIT
  if (e.target.value === 'PLAY AGAIN') {
    enteredNum.disabled = false;
    submitButton.value = 'Submit';
    chances = 3;

    statusMessage[0].innerHTML = '';

  } else {
    if (playCount < maxPlayNum) {
      if (Number(enteredNum.value) === randomNum) {

  
        playCount = 0;
        randomNum = Math.round(Math.random() * 10);

        // Convert message color to green
        p.className = 'message correct-answer';

        enteredNum.id = 'guess-input correct-answer';

        


        statusMessage[0].innerHTML = `${Number(enteredNum.value)} is correct, YOU WIN!`
        enteredNum.disabled = true;
        submitButton.value = 'PLAY AGAIN';
  
      } else {
        playCount += 1;
        chances -= 1;

        // Convert message color to red
        p.className = 'message warning';
        enteredNum.id = 'guess-input warning';

        statusMessage[0].innerHTML = `${Number(enteredNum.value)} is not correct, ${chances} guesses left`;
  
   
        if (playCount === maxPlayNum) {
  
          
          playCount = 0;
          randomNum = Math.round(Math.random() * 10);
  
          enteredNum.disabled = true;

          statusMessage[0].innerHTML = `Sorry, game over, the correct answer was ${randomNum}`;
          submitButton.value = 'PLAY AGAIN';

        }
      }
    } 
  }

  // Clean the input field after SUBMIT button clicked
  enteredNum.value = '';

}