let userName = prompt('Please enter your name: ');

console.log(userName);

document.write('<h2> Hello '+userName+'</h2>');

let userAnswer = prompt('Would you jump out of an airplane?: ');

console.log(userAnswer);

if (userAnswer == 'yes'){
    document.write['<h3>Cool ' + userName + '</h3>'];
} else {
    document.write['<h3>Thats Lame ' + userName + '</h3>'];
}