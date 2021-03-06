const numbers = document.querySelectorAll('.num');
const decimal = document.querySelector('.dec');
const zero = document.querySelector('.zero');
const screen = document.querySelector('#screen');
const operators = document.querySelectorAll('.op');
const equals = document.querySelector('.eq');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');

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
    if (screen.textContent !== 0) {
        screen.textContent = screen.textContent.concat(zero.textContent);
        numString = screen.textContent;
        console.log(numString);
    }
});


operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (opClicked === false) {
            opClicked = true;

            if (number1 === undefined || screen.textContent == answer) {
                number1 = +(screen.textContent);
            } else if (number1 !== undefined) {
                number2 = parseInt(screen.textContent);
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
        }


    })
})


equals.addEventListener('click', () => {
    if (number1 !== undefined && opClicked === false) {
        eqClicked = true;
        number2 = parseInt(screen.textContent);
        answer = operate(operation, number1, number2);
        screen.textContent = answer;
        number1 = undefined;
        number2 = undefined;
    }

})

clear.addEventListener('click', () => {
    number1 = undefined;
    number2 = undefined;
    screen.textContent = '0';
})

del.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1);
})

function clearScreen() {
    if (opClicked || eqClicked) {
        screen.textContent = '0';
        opClicked = false;
        eqClicked = false;
    }
}

//keyup event listeners
document.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 49:
        case 97:
            event.preventDefault();
            document.getElementById('num1').click();
            break;
        case 50:
        case 98:
            event.preventDefault();
            document.getElementById('num2').click();
            break;
        case 51:
        case 99:
            event.preventDefault();
            document.getElementById('num3').click();
            break;
        case 52:
        case 100:
            event.preventDefault();
            document.getElementById('num4').click();
            break;
        case 53:
        case 101:
            event.preventDefault();
            document.getElementById('num5').click();
            break;
        case 54:
        case 102:
            event.preventDefault();
            document.getElementById('num6').click();
            break;
        case 55:
        case 103:
            event.preventDefault();
            document.getElementById('num7').click();
            break;
        case 56:
        case 104:
            event.preventDefault();
            document.getElementById('num8').click();
            break;
        case 57:
        case 105:
            event.preventDefault();
            document.getElementById('num9').click();
            break;
        case 48:
        case 96:
            event.preventDefault();
            document.getElementById('num0').click();
            break;
        case 110:
        case 190:
            event.preventDefault();
            document.getElementById('decimal').click();
            break;
        case 107:
        case 187:
            event.preventDefault();
            document.getElementById('plus').click();
            break;
        case 109:
        case 189:
            event.preventDefault();
            document.getElementById('minus').click();
            break;
        case 56:
        case 106:
            event.preventDefault();
            document.getElementById('times').click();
            break;
        case 111:
        case 191:
            event.preventDefault();
            document.getElementById('divide').click();
            break;
        case 67:
            event.preventDefault();
            document.getElementById('clear').click();
            break;
        case 8:
        case 46:
            event.preventDefault();
            document.getElementById('delete').click();
            break;
        case 13:
            event.preventDefault();
            document.getElementById('equals').click();
    }
})


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
    if (arguments[1] == 0) {
        return "the limit does not exist"
    } else {
        let total = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            total /= arguments[i];
        }
        return total;
    }

}