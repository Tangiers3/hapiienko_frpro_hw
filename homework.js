let action = prompt('What do you want to do? Choose an operation:\ add, sub, mult, div') ;
let firstNumber = +prompt ('Enter the first number:');
let secondNumber = +prompt ('Enter the second number:');
let addition = Number (firstNumber + secondNumber);
let subtraction = Number (firstNumber - secondNumber);
let multiplication = Number (firstNumber * secondNumber);
let division = Number (firstNumber / secondNumber);

switch (action) {
    case 'add' :
        alert(firstNumber + '+' + secondNumber + '=' + addition);
        break;
    case 'sub' :
        alert(firstNumber + '-' + secondNumber + '=' + subtraction);
        break;
    case 'mult' :
        alert(firstNumber + '*' + secondNumber + '=' + multiplication);
        break;
    case 'div' :
        alert(firstNumber + '/' + secondNumber + '=' + division);
        break;
    default:
        alert('Please put the correct action');
        break;
}
