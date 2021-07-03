function getUserName(){
    let userName = prompt('Please enter your name: ');
    console.log(userName); 
    document.write('<h2> Hello '+userName+'</h2>');
}

function getSkydiveAnswer(){
    let havefun = prompt('Would you jump out of an airplane?')

    if (havefun.toLowerCase() == 'yes'){
        document.write('<h3> Hang Loose!</h3>')
    } else {
        confirm ('I am a scardy-cat')
    }
}

function getSurferAnswer(){
    let userAnswer = prompt('Would you go surfing?')
    console.log(userAnswer);

    if (userAnswer.toLowerCase() == 'yes'){  
    document.write('<h3>Lets Go ' + userName + '</h3>');
    } else {
        document.write('<h3>Fine, Be LAME ' + userName + '</h3>');
    }
}

// Creating a number guessing game
// Figure the numbr to be gusesed (and the range)
// How many chances do they get
// Message for wrong guesses
// Prompt the user
// Validate the input before checking
// Counter for guesses
// Got the random number code from w3 schools

function userGuessingGame(){
    correctAnswer = Math.floor(Math.random() * 100) + 1;;
    console.log(correctAnswer)
    userAttempts = 5;
    for (i=0; i < userAttempts; i++){
        let userGuess = prompt ('Please enter a number between 1-100')
        while (userGuess < 1 || userGuess > 100){
            userGuess = prompt ('Wrong Range. Please Enter a number 1-100');
        }
        if (userGuess == correctAnswer){
            alert('You got it right!');
            break;
        } else if(userGuess < correctAnswer){
            alert ('Too Low Try again.')
        } else if (userGuess>correctAnswer){
            alert ('Too High Try Again.')
        } else {
            alert ('Something went wrong, please try again!');
        }
        console.log(i);
        if (i == userAttempts - 1){
            alert('You did not win. Correct Answer is '+ correctAnswer);
        }
    }
}

function AirplaneJump(){
    let numberOfPlanes = prompt('How many times between 1-10 would you jump out of an airplane?')
    for (let i=0; i<numberOfPlanes; i ++){
        document.write('<img src="Airplane.jpg">')
    }
}
