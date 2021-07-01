let userAnswer = prompt('Would you jump out of an airplane?: ')

console.log(userAnswer);

if (userAnswer == 'yes'){  
   document.write('<h3>Lets Go ' + userName + '</h3>');
} else {
    document.write('<h3>Fine, Be LAME ' + userName + '</h3>');
}
