const numbers = document.querySelectorAll('.num');
const decimal = document.querySelector('.dec');
const zero = document.querySelector('.zero');
const screen = document.querySelector('#screen');
const operators = document.querySelectorAll('.op');
const equals = document.querySelector('.eq');

let numString;
let number1;
let number2;
let operation;
let opClicked = false;
let eqClicked = false;
let answer;



numbers.forEach(number => {
    number.addEventListener('click', () => {
        clearScreen();
        screen.textContent = +(screen.textContent.concat(number.textContent));
        numString = screen.textContent;
        console.log(numString);
    })
});

decimal.addEventListener('click', () => {
    clearScreen();
    if (!screen.textContent.includes('.')) {
        screen.textContent = screen.textContent.concat(decimal.textContent);
        numString = screen.textContent;
        console.log(numString);
    }
});

zero.addEventListener('click', () => {
    clearScreen();
    if (screen.textContent != 0) {
        screen.textContent = screen.textContent.concat(zero.textContent);
        numString = screen.textContent;
        console.log(numString);
    }
});


operators.forEach(operator => {
    operator.addEventListener('click', () => {
        opClicked = true;

        if (number1 === undefined || screen.textContent == answer) {
            number1 = +(screen.textContent);
        } else if (number1 !== undefined) {
            number2 = +numString;
            answer = operate(operation, number1, number2);
            screen.textContent = answer;
            number1 = answer;
        }


        switch (operator.getAttribute('id')) {
            case 'plus':
                operation = add;
                break;
            case 'minus':
                operation = subtract;
                break;
            case 'times':
                operation = multiply;
                break;
            case 'divide':
                operation = divide;
                break;
        }

        // else if (number1 == numString) {
        //     number2 = +numString;
        //     answer = operate(operation, number1, number2);
        //     screen.textContent = answer;
        //     number1 = answer;
        // }


    })
})


equals.addEventListener('click', () => {
    eqClicked = true;
    number2 = +numString;
    answer = operate(operation, number1, number2);
    screen.textContent = answer;
    number1 = undefined;
    number2 = undefined;
})


function clearScreen() {
    if (opClicked || eqClicked) {
        screen.textContent = '0';
        opClicked = false;
        eqClicked = false;
    }
}





// OPERATOR FUNCTIONS BELOW ~~~~~~~~~~~~~~~`

function operate(func, num1, num2) {
    return func(num1, num2);
}

function add() {
    let i;
    let total = 0;
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

function subtract() {
    let i;
    let total = arguments[0];
    for (i = 1; i < arguments.length; i++) {
        total -= arguments[i];
    }
    return total;
}

function multiply() {
    let total = 1;
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i];
    }
    return total;
}

function divide() {
    let total = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        total /= arguments[i];
    }
    return total;
}