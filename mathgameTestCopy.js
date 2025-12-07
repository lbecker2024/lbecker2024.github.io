/* CVTC finals2.js is not being used
* login 
*1st prompt. 
for the prompt 1 "What type of simple math do you want to perform?" if you--
do not give a valid answer it says "Wrong! Retype your password." instead of--
"Retype mathematical operation correctly."

*2nd prompt
for prompt 2 it is the same as 1st prompt exept if you get the right password--
it starts you at the 1st prompt instead of 2nd prompt

*/ 

// Function startGame starts the game.
function passwordStart() {
    let setUpPass = "";
    let password = "";
    setUpPass = prompt("Set up your password.", "testPassword");
    //Cancel returns null
    if (setUpPass === null) {
    alert("Cancelled. Going back to the start.");
    return; // exits the function
    }
    password = prompt("What is your password?", "testPassword");
    if (password === null) {
    alert("Cancelled. Going back to the start.");
    return; // exits the function
    }
    while (setUpPass !== password){
        let password2 = prompt("Wrong! Retype your password.");
        if (password2 === null) {
            alert("Cancelled! Going back to the start.");
            return;
            }
            // something is wrong in this while state,ent and the if else statement.
            if (setUpPass === password2) {
            mathGame();
            } else if (setUpPass !== password2) {
            password2++
            }
        } 
    
    if (password === setUpPass){
    mathGame();
    }
    while (setUpPass !== setUpPass){
    setUpPass++
} 

}

// This is the main code named mathGame. This is where the math game is.
function mathGame() {
// Initializing all the vairiables for mathGame().
let math = "";
let actualProbAnswer = 0;
let problemAnswer = 0;
let firstProbTerm;
let secondProbTerm;
let problemNumb = 1;
let coefficient;
let exponent;
let output = "";




// This asks the user the type of math they want to do.
math = prompt("What type of simple math do you want to perform?", "D");
if (math === null) {
    alert("Cancelled! Going back to the menu.");
    return; // exits the function
}
// This forces their answer to be capitillized.
math = math.toUpperCase();
// Swith case for all the simple math types.
switch (math) {
    // This is the addition section of the code.
    // This is for if the user spells out addition.
    case "ADDITION":
    // This is for if the user puts only the addition symbol in.
    case "+":
    while (actualProbAnswer === problemAnswer) {
        //Look into what the +1 does in each of these firsrtProbTerm
        firstProbTerm = (Math.floor(Math.random() * 10) + 1);
        secondProbTerm = Math.ceil(Math.random() * 10);
        // This asks the user the math problem and calculates it.
        problemAnswer = prompt("What is " + firstProbTerm + " + " + 
        secondProbTerm + "?");
        problemAnswer = Number(problemAnswer);
        actualProbAnswer = firstProbTerm + secondProbTerm;
        // This part tells compares the users answer with the calculated answer.
        // It tells whether they got the answer correct or wrong.
        if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        output += ("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + firstProbTerm + " + " + secondProbTerm + 
            " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is correct!" + 
            "</br>" + "</br>");
        } else {
            alert("Wrong!");
        output += ("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + firstProbTerm + " + " + secondProbTerm + 
            " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is wrong!" + 
            "</br>" + "</br>");
        }
        // This increments it by one to loop it.
        
        problemNumb++
    }
        output += ("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            output +=("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            output +=("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
    }
        localStorage.setItem("gameResults", output);

        // Redirect to the rules page
        window.location.href = "rulesCopy.html"; // Redirect to another page (rulesCopy.html)
        
    break;

    // This is the subtraction section
    // This is for if they spell out subtraction.
    case "SUBTRACTION":
    // This is for if the user puts only the subtraction symbol in.
    case "-":
    while (actualProbAnswer === problemAnswer) {
        firstProbTerm = (Math.floor(Math.random() * 10) + 1);
        secondProbTerm = Math.ceil(Math.random() * 10);
        // This asks the user the math problem and calculates it.
        problemAnswer = prompt("What is " + (secondProbTerm + firstProbTerm) +
        " - " + (firstProbTerm - 3) + "?");
        problemAnswer = Number(problemAnswer);
        actualProbAnswer = (secondProbTerm + firstProbTerm) - 
        (firstProbTerm - 3);
        // This part tells compares the users answer with the calculated answer.
        // It tells whether they got the answer correct or wrong.
        if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + (secondProbTerm + firstProbTerm) + " - " + 
            (firstProbTerm - 3) + " is " + actualProbAnswer + "</br>" + "<br>" 
            + "Your answer: " + problemAnswer + "</br>" + "<br>" + 
            "Your answer is correct!" + "</br>" + "</br>");
        } else {
            alert("Wrong!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + (secondProbTerm + firstProbTerm) + " - " + 
            (firstProbTerm - 3) + " is " + actualProbAnswer + "</br>" + "<br>" 
            + "Your answer: " + problemAnswer + "</br>" + "<br>" + 
            "Your answer is wrong!" + "</br>" + "</br>");
        }
        // This increments it by one to loop it.
    
        problemNumb++
    }
        document.write("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
        }
    break;
    // This is the multiplication section.
    // This is for if they spell out multiplication.
    case "MULTIPLICATION":
    // This is for if the user puts only the multiplication symbol in.
    case "X":
    case "*":
    while (actualProbAnswer === problemAnswer) {
        firstProbTerm = (Math.floor(Math.random() * 10) + 1);
        secondProbTerm = Math.ceil(Math.random() * 10);
        // This asks the user the math problem and calculates it.
        problemAnswer = prompt("What is " + firstProbTerm + "x" + 
        secondProbTerm + "?");
        problemAnswer = Number(problemAnswer);
        actualProbAnswer = firstProbTerm * secondProbTerm;
        // This part tells compares the users answer with the calculated answer.
        // It tells whether they got the answer correct or wrong.
        if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + firstProbTerm + "x" + secondProbTerm + " is " + 
            actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is correct!" + 
            "</br>" + "</br>");
        } else {
            alert("Wrong!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + firstProbTerm + "x" + secondProbTerm + " is " + 
            actualProbAnswer + "</br>" + "<br>" + "<br>" + "Your answer: " + 
            problemAnswer + "<br>" + "</br>" + "<br>" + "Your answer is wrong!" + 
            "</br>" + "</br>");
        }
        // This increments it by one to loop it.
        
        problemNumb++
    }
        document.write("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
        }
    break;
    
    // This is the division section
    // This is for if they spell out multiplication.
    case "DIVISION":
    // This is for if the user puts only the division symbol in.
    case "/":
    while (actualProbAnswer === problemAnswer) {
        firstProbTerm = (Math.floor(Math.random() * 10) + 1);
        secondProbTerm = Math.ceil(Math.random() * 10);
        // This asks the user the math problem and calculates it.
        problemAnswer = prompt("What is " + (firstProbTerm + 1) + "/" + 
        (secondProbTerm + 1) + "?");
        problemAnswer = Number(problemAnswer).toFixed(1);
        actualProbAnswer = ((firstProbTerm + 1) / 
        (secondProbTerm + 1)).toFixed(1);
        // This part tells compares the users answer with the calculated answer.
        // It tells whether they got the answer correct or wrong.
        if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + (firstProbTerm + 1) + "/" + (secondProbTerm + 1) 
            + " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is correct!" + 
            "</br>" + "</br>");
        } else {
            alert("Wrong!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + (firstProbTerm + 1) + "/" + (secondProbTerm + 1) 
            + " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " +
            problemAnswer + "</br>" + "<br>" + "Your answer is wrong!" + 
            "</br>" + "</br>");
        }
        // This increments it by one to loop it.
        
        problemNumb++
    }
            document.write("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
        }
    break;
// Power Rule derivative------>
    case "POWERRULE":
    case "POWER RULE":
    while (actualProbAnswer === problemAnswer) {
        coefficient = (Math.floor(Math.random() * 10) + 1);
        //the plus +1 avoids 0
        exponent = Math.ceil(Math.random() * 10 + 1);
        //the plus +1 avoids 0
        problemAnswer = prompt("What is the derivative of " + coefficient + "x^" + 
        exponent + "?");
        let newCoefficient = coefficient*exponent;
        let newExponent = exponent-1;
        actualProbAnswer = newCoefficient + "x^" +
        newExponent;
        
        if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + coefficient + "x^" + exponent 
            + " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is correct!" + 
            "</br>" + "</br>");
        } else {
            alert("Wrong!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + coefficient+ "x^" + exponent 
            + " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " +
            problemAnswer + "</br>" + "<br>" + "Your answer is wrong!" + 
            "</br>" + "</br>");
        }
        // This increments it by one to loop it.
        problemNumb++
    }
        document.write("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
        }
    break;
    case "D":

        while (actualProbAnswer === problemAnswer) {
        const obj = new MyClass();
        // if we didnt want onst obj = new MyClass();
        // it would be const results = new MyClass().powerRulVariables();

        const results = new MyClass().powerRulVariables();
        problemAnswer = prompt("What is the derivative of " + results.coefficient + "x^" + 
        results.exponent + "?");
        actualProbAnswer = results.newCoefficient + "x^" + results.newExponent;

       if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
            document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + results.coefficient + "x^" + results.exponent 
            + " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is correct!" + 
            "</br>" + "</br>");
        
        } else {
            alert("Wrong!");
            document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + results.coefficient+ "x^" + results.exponent 
            + " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " +
            problemAnswer + "</br>" + "<br>" + "Your answer is wrong!" + 
            "</br>" + "</br>");
        }
        problemNumb++
    }
        // This increments it by one to loop it.
         document.write("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
        }
    break;
    // This is the message if the user does not type in a simple math operator.
    default:
    // message = "<h2>" + "Retype mathematical operation correctly." + "</h2>"
    // document.write(message);
    
    alert("Retype mathematical operation correctly.");
    break; 
    //you can also do return; instead of break idk why
} //end of switch


// Calling the static method
//MyClass.greetStatic("This is a static message.");

// Calling a static method to create an instance
//const obj = MyClass.createInstance("New Instance");
//obj.greetInstance(); // Calling an instance method on the created instance

// Attempting to call a static method on an instance will result in an error
// myInstance.greetStatic("This will fail");


/*
class MyClass {
  constructor(value) {
    this.instanceValue = value;
  }

  --Instance method
  greetInstance() {
    console.log(`Hello from instance with value: ${this.instanceValue}`);
  }

  --Static method
  static greetStatic(message) {
    console.log(`Hello from the class: ${message}`);
  }

  --Another static method that accesses other static members
  static createInstance(value) {
    return new MyClass(value);
  }
}

--Calling the static method
MyClass.greetStatic("This is a static message.");
output: Hello from the class: This is a static message.

--Calling a static method to create an instance
const myInstance = MyClass.createInstance("New Instance");
myInstance.greetInstance(); --Calling an instance method on the created instance
output: Hello from instance with value: New Instance

--Attempting to call a static method on an instance will result in an error
--myInstance.greetStatic("This will fail");


*/
}// function mathgame ends here





/*
// Custom prompt function
function customPrompt(message, defaultValue = '') {
    return new Promise((resolve) => {
        const overlay = document.getElementById('custom-prompt-overlay');
        const messageElement = document.getElementById('custom-prompt-message');
        const inputElement = document.getElementById('custom-prompt-input');
        const okButton = document.getElementById('custom-prompt-ok');
        const cancelButton = document.getElementById('custom-prompt-cancel');

        messageElement.innerText = message;
        inputElement.value = defaultValue;
        overlay.style.display = 'flex'; // Show the overlay

        const handleOk = () => {
            overlay.style.display = 'none';
            okButton.removeEventListener('click', handleOk);
            cancelButton.removeEventListener('click', handleCancel);
            resolve(inputElement.value);
        };

        const handleCancel = () => {
            overlay.style.display = 'none';
            okButton.removeEventListener('click', handleOk);
            cancelButton.removeEventListener('click', handleCancel);
            resolve(null);
        };

        okButton.addEventListener('click', handleOk);
        cancelButton.addEventListener('click', handleCancel);
    });
}

// Example usage:
async function getUserInput() {
    const name = await customPrompt('Please enter your name:', 'Guest');
    if (name !== null) {
        console.log('User entered:', name);
    } else {
        console.log('User cancelled.');
    }
}

// Trigger the custom prompt
// getUserInput();
*/




class MyClass {
  constructor() {
    this.exponent = Math.ceil(Math.random() * 10 + 1);
    this.coefficient = (Math.floor(Math.random() * 10) + 1);
    this.newCoefficient = null;
    this.newExponent = null;
    /*
    constructor(exponent, coefficient, newCoefficient, newExponent) {
    exponent = Math.ceil(Math.random() * 10 + 1);
    coefficient = (Math.floor(Math.random() * 10) + 1);
    */
  }
  // Instance method
    powerRulVariables() {
    //console.log(`Hello from instance with value: ${this.instanceValue}`);
    this.newCoefficient = this.coefficient * this.exponent;
    this.newExponent = this.exponent - 1
    return{
        newCoefficient: this.newCoefficient,
      newExponent: this.newExponent,
      //exponent: this.exponent,
      //coefficient: this.coefficient
    };
  }

}