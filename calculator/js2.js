function appendToDisplay(input) {
    // Define the operators
    const operators = ['+', '-', '*', '/'];

    // If the input is an operator
    if (operators.includes(input)) {
        // If the display is empty or the last character is an operator, replace it
        if (display.value === '' || operators.includes(display.value.slice(-1))) {
            // Replace the last operator with the new one if it's not the first input
            if (display.value.length > 0) {
                display.value = display.value.slice(0, -1) + input;
            } else {
                // If the display is empty, just add the operator
                display.value += input;
            }
            console.log("Replaced operator: " + display.value); // Debugging log
            return; // Exit the function after replacing
        }
    }

    // Prevent multiple decimal points in a single number
    if (input === '.') {
        // Split the current input by operators and check the last number
        const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes('.')) {
            console.log("Prevented multiple decimal points"); // Debugging log
            return; // Do not append if the last number already has a decimal point
        }
    }

    // Append the input to the display
    display.value += input;
    console.log("Current display value: " + display.value); // Debugging log
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function clearAll() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}



















































