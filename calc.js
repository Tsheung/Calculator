function add(a,b) {
    return (a+b);
}

function subtract(a,b) {
    return(a-b);
}

function multiply(a,b) {
    return(a*b);
}

function divide(a,b) {
    return(a/b);
}

function operate(operator, a, b) {
    if(operator == "add") {
        return add(a,b);
    } else if(operator == "subtract") {
        return subtract(a,b);
    } else if(operator == 'multiply') {
        return multiply(a,b);
    } else if(operator == "divide") {
        return divide(a,b);
    }
}

//Holds Display Number
let displayNum = 0;

//Holds Number in Memory



//Click Reaction to Only Numbers 
const button = document.querySelectorAll(".num");
button.forEach((b) => {
    b.addEventListener("click", () => {
        //Each click saves to displayNum
        if(displayNum == 0) {
            displayNum = b.innerHTML;
        } else {
            displayNum = displayNum + b.innerHTML;
        }
    })
})




