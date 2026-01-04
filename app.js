let input = document.querySelector("input");

let btns = document.querySelectorAll(".selectJS");


let operators = ['+', '-', 'x', '/'];


input.focus();
input.addEventListener("blur", () => {
    input.focus();
});

//Operators shouldn't follow each other and first char is digit
let validInput = () => {
    let inputVal = input.value;
    if (inputVal.length === 1 && operators.includes(inputVal)) {
        alert("Equation cannot start with a operator");
        input.value = inputVal.slice(0, inputVal.length - 1);
    }
    if (operators.includes(inputVal[inputVal.length - 3]) && inputVal[inputVal.length - 2] === '.' && operators.includes(inputVal[inputVal.length - 1])) {
        alert("Operator cannot preceed and proceed decimal point simultaneously");
        input.value = inputVal.slice(0, inputVal.length - 1);
    }
    if (operators.includes(inputVal[inputVal.length - 1]) && operators.includes(inputVal[inputVal.length - 2])) {
        alert("One operator cannot follow another.");
        input.value = inputVal.slice(0, inputVal.length - 1);
    }
}


//Add only digits and operator to input
input.addEventListener("input", function () {
    input.value = input.value.replace(/[^0-9.+-x/]/g, '');

    validInput();
});

//Equation should not end with operator
input.addEventListener("change", function () {
    let inputVal = input.value;
    if (operators.includes(inputVal[inputVal.length - 1])) {
        alert("Equation cannot end with a operator.");
        input.value = inputVal.slice(0, inputVal.length - 1);
    }
});

//Enter is equal to
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let equal = document.querySelector("#equal");
        equal.click();
    } else if (event.key === '*') {
        input.value += 'x';
    }
});


// HTML Buttons event Listener
for (let btn of btns) {
    btn.addEventListener("click", () => {
        if (btn.innerText != '=') {
            input.value += `${btn.innerText}`;
            validInput();
        } else {
            let arr = numAndOperatorArr();
            calculation(arr);
        }
    })
}

//Store ops and nums in a array for infix calculation
let numAndOperatorArr = () => {
    let inputVal = input.value;
    let nums = inputVal.split(/[+\-x\/]/);
    let ops = [];

    for (let i = 0; i < inputVal.length; i++) {
        if (operators.includes(inputVal[i])) {
            ops.push(inputVal[i]);
        }
    }

    let numIdx = 0;
    let opsIdx = 0;

    let finalArr = [];

    for (let i = 0; i < nums.length + ops.length; i++) {
        if (i % 2) {
            finalArr.push(ops[opsIdx++]);
        } else {
            finalArr.push(nums[numIdx++]);
        }
    }
    return finalArr;
}


// Infix Calculation
let calculation = (arr) => {
    console.log(arr);
}