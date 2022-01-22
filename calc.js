function add(a,b) {
    return (Number(a) + Number(b));
}

function subtract(a,b) {
    return (Number(a) - Number(b));
}

function multiply(a,b) {
    let multNum = Number(a) * Number(b);
    return threeDecimals(multNum);
}

function divide(a,b) {
    if(Number(b) === 0){
        return "Are you kidding me?";
    } else{
        let divNum = (Number(a) / Number(b));
        return threeDecimals(divNum);
    }
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

function threeDecimals(num) {
    return Math.round((num + Number.EPSILON)*10000)/10000;
}


//Holds Display Number
let displayNum = 0;

//Holds Number in Memory
let memoryNum = 0;

//Holds the Operator
let action;

//Obtains display Number
const calculate = document.querySelector(".mainNum");


//Click Reaction to Only Numbers
const numerical = document.querySelectorAll(".num");
numerical.forEach((n) => {
    n.addEventListener("click", () => {
        //Each click saves to displayNum
        if(displayNum == 0) {
            displayNum = n.innerHTML;
            calculate.innerHTML = displayNum;
        } else {
            //User cannot exceed 12 numbers
            if(displayNum.length < 12){
                displayNum = displayNum + n.innerHTML;
                calculate.innerHTML = displayNum;
            } else {
                displayNum = 0;
                calculate.innerHTML = displayNum;
            }
            
        }
    })
})


function computeMath() {
    if(memoryNum != 0) {
        displayNum = operate(action, memoryNum, displayNum);
        if(displayNum.toString().length > 9) {
            displayNum = displayNum.toExponential(4);
        }
        calculate.innerHTML = displayNum;
        memoryNum = displayNum;
        displayNum = 0;
    } else {
        memoryNum = displayNum;
        displayNum = 0;
    }
}



//Needs to capture the operation button for future use of =
const math = document.querySelectorAll(".op");
math.forEach((m) => {
    m.addEventListener("click", () => {
        if(m.innerHTML == "+") {
            computeMath();
            action = "add";
        } else if(m.innerHTML == "-") {
            computeMath();
            action = "subtract";
        } else if(m.innerHTML == "x") {
            computeMath();
            action = "multiply";
        } else if(m.innerHTML == "÷") {
            computeMath();
            action = "divide";
        } else if(m.innerHTML == "=") {
            displayNum = operate(action, memoryNum, displayNum);
            memoryNum = 0;
            if(displayNum.toString().length > 9) {
                displayNum = displayNum.toExponential(4);
            }
            calculate.innerHTML = displayNum;

        }
    })
})

const special = document.querySelectorAll(".sp");
special.forEach((s) => {
    s.addEventListener("click", () => {
        if(s.innerHTML == "C") {
            displayNum = 0;
            memoryNum = 0;
            calculate.innerHTML = displayNum;
        } else if(s.innerHTML == "CE") {
            displayNum = 0;
            calculate.innerHTML = displayNum;
        } else if(s.innerHTML == "-/+") {
            if(displayNum.includes("-")){
                displayNum = displayNum.substring(1);
                calculate.innerHTML = displayNum;
            } else {
                displayNum = "-" + displayNum;
                calculate.innerHTML = displayNum;
            }
        } else if(s.innerHTML == "%") {
            displayNum = displayNum / 100;
            calculate.innerHTML = displayNum;
        } else if (s.innerHTML == ".") {
            if(!displayNum.includes(".")) {
                displayNum = displayNum + ".";
                calculate.innerHTML = displayNum;
            }
        }

    })
})

const hoverButton = document.querySelectorAll(".sp, .num, .op");
hoverButton.forEach((h) => {
    //Changes background when hovering
    h.addEventListener("mouseover", () => {
        h.style.backgroundColor = "grey";
    })
    //Changes background back
    h.addEventListener("mouseleave", () => {
        h.style.backgroundColor = "white";
    })
})




