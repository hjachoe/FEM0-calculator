let calculatedTotal = 0;
let input = "0";
let prevOperator = null;
const output = document.querySelector(".output");

document.querySelector(".calculator").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
})

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        operatorOperation(value);
    }
    else {
        numberOperation(value);
    }
    refresh();
}

function operatorOperation(value) {
    operator = value;
    if (input === "0") {
        // allows user to re-select operator
        operator = value;
        return;
    }
    switch (value) {
        case "+":
        case "-":
        case "*":
        case "/":
            calculation(value);
            break;
        case "C":
            calculatedTotal = 0;
            input = "0"
            break;
        case "=":
            calculation(value);
            input = calculatedTotal;
            break;
        case "←":
            if (input.length > 1) {
                input = input.substr(0, (input.length) - 1);
                console.log("if", input);
                console.log("if length", input.length)
            } else {
                input = "0";
            }
    }
}

function numberOperation(value) {
    if (input === "0") {
        input = value;
    }
    else {
        input += value;
    }
}

function calculation(value) {
    if (input === "0") {
        return;
    }
    const intInput = parseInt(input);
    if (calculatedTotal === 0) {
        calculatedTotal = intInput;
    }
    else {
        if (prevOperator === "+") {
            calculatedTotal += intInput;
        }
        else if (prevOperator === "-") {
            calculatedTotal -= intInput;
        }
        else if (prevOperator === "*") {
            calculatedTotal *= intInput;
        }
        else if (prevOperator === "/") {
            calculatedTotal /= intInput;
        }
    }

    prevOperator = value;
    input = "0";
}

function refresh() {
    output.innerText = input;
}