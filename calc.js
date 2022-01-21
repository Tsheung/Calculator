function add(a,b) {
    return (Number(a) + Number(b));
}

function subtract(a,b) {
    return (Number(a) - Number(b));
}

function multiply(a,b) {
    return (Number(a) * Number(b));
}

function divide(a,b) {
    return (Number(a) / Number(b));
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
            displayNum = displayNum + n.innerHTML;
            calculate.innerHTML = displayNum;
        }
    })
})


/*
const special = document.querySelectorAll(".sp");
special.forEach((s) => {
    s.addEventListener("click", () => {


    })
})
*/

//Needs to capture the operation button for future use of =
const math = document.querySelectorAll(".op");
math.forEach((m) => {
    m.addEventListener("click", () => {
        if(m.innerHTML == "+") {
            action = "add";
            if(memoryNum != 0) {
                displayNum = operate(action, memoryNum, displayNum);
                //console.log("Calc", displayNum);
                calculate.innerHTML = displayNum;
                memoryNum = displayNum;
                displayNum = 0;
            } else {
                memoryNum = displayNum;
                displayNum = 0;
            }
        } else if(m.innerHTML == "-") {
            action = "subtract";
            if(memoryNum != 0) {
                displayNum = operate(action, memoryNum, displayNum);
                //console.log(displayNum);
                calculate.innerHTML = displayNum;
                memoryNum = displayNum;
                displayNum = 0;
            } else {
                memoryNum = displayNum;
                displayNum = 0;

            }
        } else if(m.innerHTML == "x") {
            action = "multiply";
            if(memoryNum != 0) {
                displayNum = operate(action, memoryNum, displayNum);
                //console.log(displayNum);
                calculate.innerHTML = displayNum;
                memoryNum = displayNum;
                displayNum = 0;
            } else {
                memoryNum = displayNum;
                displayNum = 0;

            }
        } else if(m.innerHTML == "÷") {
            action = "divide";
            if(memoryNum != 0) {
                displayNum = operate(action, memoryNum, displayNum);
                //console.log(displayNum);
                calculate.innerHTML = displayNum;
                memoryNum = displayNum;
                displayNum = 0;
            } else {
                memoryNum = displayNum;
                displayNum = 0;

            }
        } else if(m.innerHTML == "=") {
            displayNum = operate(action, memoryNum, displayNum);
            memoryNum = 0;
            //console.log("Final:", displayNum);
            calculate.innerHTML = displayNum;

        }
    })
})



//% moves decimals left twice
//Click for - click again for + or nothing
//CE to clear displayNum not saved array
//C to clear everything
//Click only once for decimal

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


