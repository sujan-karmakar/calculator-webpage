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
    if(inputVal.length === 1 && operators.includes(inputVal)) {
        alert("Start with a digit.");
        input.value = inputVal.slice(0, inputVal.length - 1);
    }
    if( operators.includes(inputVal[inputVal.length - 1]) &&  operators.includes(inputVal[inputVal.length - 2])) {
        alert("One operator cannot follow another.");
        input.value = inputVal.slice(0, inputVal.length - 1);
    }
}


//Add only digits and operator to input
input.addEventListener("input", function () {
    input.value = input.value.replace(/[^0-9.+-x/]/g, '');

    validInput();
});

//Enter is equal to
input.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        let equal = document.querySelector("#equal");
        equal.click();
    } else if (event.key === '*') {
        input.value += 'x';
    }
});



for (let btn of btns) {
    btn.addEventListener("click", () => {
        if (btn.innerText != '=') {
            input.value += `${btn.innerText}`;
            validInput();
        } else {
            calculation();
        }
    })
}

let calculation = () => {
    let str = input.value;
    
}

