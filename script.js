function operate()







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

function sum(array) {
    return array.reduce(((total, num) => total + num), 0);
}

function multiply(array) {
    return array.reduce(((total, num) => total * num), 1);

}