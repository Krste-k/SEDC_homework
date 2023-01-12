class Calculator {
    constructor(previousOperandButton, currentOperantButton) {
        this.previousOperandButton = previousOperandButton 
        this.currentOperantButton = currentOperantButton
        this.clear()
    }
    clear() {
        this.currentOperand = ''   
        this.previousOperand = ''  
        this.operation = undefined 
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendnumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return 
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }
    choseOperation(operation) {
        if (this.currentOperand === '') return 
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand =  this.currentOperand
        this.currentOperand = ''
    }
    compute() {
        let computation 
        let prev = parseFloat(this.previousOperand)
        let current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '/':
                computation = prev / current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev  * current;

                break;
            case '+':
                computation = prev + current;
                break;

                //treba da dopravam za koren //06.01.23
                // case '/':
                //     computation = prev + (computation / current )
                // break;
            default:
            

        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    
    getDisplayNumber(number) {
        let stringToNumber = number.toString()
        let integerNum = parseFloat(stringToNumber.split('.')[0])
        let decimalNum = stringToNumber.split('.')[1]
        let intigerDisplay
        if (isNaN(integerNum)) {
            intigerDisplay = ''
        } else {
            intigerDisplay = integerNum.toLocaleString('en', { maximumFractionDigits: 0 }) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
        }
        if (decimalNum != null) {
            return `${intigerDisplay}. ${decimalNum}`
        } else {
            return intigerDisplay
        }


    }
    updateDispaly() {
        this.currentOperantButton.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null ) {
            this.previousOperandButton.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }
        else {
            this.previousOperandButton.innerText = ''
        }

    }

}

//https://www.w3schools.com/tags/att_data-.asp 


let numbersButtons = document.querySelectorAll('[data-number]');
let operatorsButtons = document.querySelectorAll('[data-operator]');
let equalButon = document.querySelector('[data-equals]');
let deleteButton = document.querySelector('[data-delete]');
let refreshButton = document.querySelector('[data-refresh]');
let previousOperandButton = document.querySelector('[data-previousOperand]');
let currentOperantButton = document.querySelector('[data-currentOperant]');

let calculator = new Calculator(previousOperandButton, currentOperantButton);
//
numbersButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendnumber(button.innerText);
        calculator.updateDispaly();
    });
});
// operatori+-/*
operatorsButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.choseOperation(button.innerText);
        calculator.updateDispaly();
    });
});
//ednakvo na
equalButon.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDispaly()
});
//refresiraj 
refreshButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDispaly();
});
//izbriasi go brojot
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDispaly();
});

//audio
let beepp = document.getElementsByTagName('button');


for (let i = 0; i < beepp.length; i++) {
    console.log(beepp[i]);
};
function pip() {
    let sound = new Audio('beep.mp3');
    sound.play();

};



beepp = addEventListener('click', pip);
