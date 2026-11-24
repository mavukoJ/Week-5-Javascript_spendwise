
// ========================================
// SPENDWISE JAVASCRIPT FOUNDATION
// ========================================


// QUESTION 1: STORE APPLICATION DATA

// Variables to store budgeting information
let totalBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Variable to store the currency
const currency = "KES";


// QUESTION 2: CREATE A BUDGET CALCULATION FUNCTION

function calculateBalance(budget, expenses) {
    return budget - expenses;
}


// QUESTION 3: CREATE A FUNCTION TO DISPLAY RESULTS

function displayResults() {

    // Update the remaining balance
    remainingBalance = calculateBalance(totalBudget, totalExpenses);

    // Display results in the browser console
    console.log("===== SPENDWISE BUDGET REPORT =====");

    console.log("Total Budget: " + currency + " " + totalBudget.toFixed(2));

    console.log("Total Expenses: " + currency + " " + totalExpenses.toFixed(2));

    console.log("Remaining Balance: " + currency + " " + remainingBalance.toFixed(2));

    // Display results on the webpage
    document.getElementById("budget").textContent =
        currency + " " + totalBudget.toFixed(2);

    document.getElementById("expenses").textContent =
        currency + " " + totalExpenses.toFixed(2);

    document.getElementById("balance").textContent =
        currency + " " + remainingBalance.toFixed(2);

    // Check the budget status
    if (remainingBalance > 0) {
        console.log("Status: You are within your budget!");
    } else if (remainingBalance === 0) {
        console.log("Status: You have used your entire budget.");
    } else {
        console.log("Status: Warning! You have exceeded your budget.");
    }

}


// QUESTION 4: COLLECT USER INPUT

function startBudget() {

    // Ask the user to enter their budget
    let budgetInput = prompt("Enter your total budget in KES:");

    // Check whether the user cancelled
    if (budgetInput === null) {
        console.log("Budget tracking cancelled.");
        return;
    }

    // Convert budget input into a number
    totalBudget = Number(budgetInput);

    // Validate budget
    if (budgetInput.trim() === "" ||
        !Number.isFinite(totalBudget) ||
        totalBudget <= 0) {

        alert("Please enter a valid budget greater than zero.");
        return;
    }

    // Ask the user to enter total expenses
    let expenseInput = prompt("Enter your total expenses in KES:");

    if (expenseInput === null) {
        console.log("Expense entry cancelled.");
        return;
    }

    // Convert expense input into a number
    totalExpenses = Number(expenseInput);

    // Validate expenses
    if (expenseInput.trim() === "" ||
        !Number.isFinite(totalExpenses) ||
        totalExpenses < 0) {

        alert("Please enter valid expenses (zero or more).");
        return;
    }

    // Perform calculations and display results
    displayResults();

    // Notify the user
    alert("Your SpendWise budget report has been generated!");
}


// ========================================
// END OF SPENDWISE JAVASCRIPT
// ========================================
