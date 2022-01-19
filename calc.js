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



//Click Reaction
const button = document.querySelectorAll("p");
button.forEach((b) => {
    b.addEventListener("click", () => {
        console.log(b.innerHTML);

    })
})



