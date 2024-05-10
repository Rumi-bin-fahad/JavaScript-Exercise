let display = document.getElementById('display');
let mode = 'calculator';

function appendToDisplay(value) {
    if (mode === 'age') {
        if (!isNaN(value)) {
            display.value += value;
        }
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    if (mode === 'age') {
        const birthYear = parseInt(display.value);
        const currentYear = new Date().getFullYear();
        if (!isNaN(birthYear)) {
            const age = currentYear - birthYear;
            display.value = age;
        } else {
            display.value = 'Invalid input';
        }
    } else {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
}

function switchMode() {
    mode = mode === 'calculator' ? 'age' : 'calculator';
    display.value = '';
    if (mode === 'age') {
        display.placeholder = 'Enter birth year';
    } else {
        display.placeholder = '';
    }
}
