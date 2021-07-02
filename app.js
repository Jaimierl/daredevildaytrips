function getUserName(){
    let userName = prompt('Please enter your name: ');
    console.log(userName); 
    document.write('<h2> Hello '+userName+'</h2>');
    return userName;
}

// let user1 = getUsername();
// console.log(user1);

function getSkydiveAnswer(){
    let havefun = prompt('Would you go surfing?')

    if (havefun.toLowerCase() == 'yes'){
        document.write('<h3> Hang Loose!</h3>')
    } else {
        confirm ('I am a scardy-cat')
    }
}

function getSurferAnswer(){
    let userAnswer = prompt('Would you jump out of an airplane?: ')
    console.log(userAnswer);

    if (userAnswer.toLowerCase() == 'yes'){  
    document.write('<h3>Lets Go ' + user1 + '</h3>');
    } else {
        document.write('<h3>Fine, Be LAME ' + user1 + '</h3>');
    }
}



