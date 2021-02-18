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

// function sum(array) {
//     return array.reduce(((total, num) => total + num), 0);
// }

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