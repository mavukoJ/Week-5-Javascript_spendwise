
# SpendWise - JavaScript Foundation

## Project Description

SpendWise is a simple budget tracking application designed to help users manage their money and monitor their expenses.

The application allows users to enter their total budget and expenses. It then calculates the remaining balance and displays the results on the webpage and in the browser console.

The project uses HTML, CSS, and JavaScript.

## Features

- Enter a personal budget.
- Enter total expenses.
- Calculate the remaining balance.
- Display budget information on the webpage.
- Display a detailed budget report in the browser console.
- Identify whether the user is within or over budget.
- Responsive webpage design.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## JavaScript Concepts Implemented

### 1. Variables

The application uses variables to store budgeting information.

Examples:

- `totalBudget` stores the user's total budget.
- `totalExpenses` stores the user's expenses.
- `remainingBalance` stores the calculated balance.
- `currency` stores the currency used by the application.

The `let` keyword is used for values that can change, while `const` is used for values that remain constant.

### 2. Data Types

The application uses different JavaScript data types:

- Number: Used for budgets and expenses.
- String: Used for currency and user input.
- Boolean: Used in conditional expressions to evaluate budget status.

### 3. User Input

The `prompt()` function collects budgeting information from users.

The user enters their budget and expenses.

The `Number()` function converts the input strings into numbers so that mathematical calculations can be performed.

### 4. Budget Calculations

The application calculates the remaining balance using:

Remaining Balance = Total Budget - Total Expenses

For example:

- Total Budget: KES 20,000
- Total Expenses: KES 8,000
- Remaining Balance: KES 12,000

### 5. Functions

Functions organize the JavaScript code into reusable sections.

The application includes:

- `startBudget()`: Collects and validates user input.
- `calculateBalance()`: Calculates the remaining balance.
- `displayResults()`: Displays the calculated information.

### 6. Conditional Statements

The application uses `if`, `else if`, and `else` statements to determine whether the user:

- Is within budget.
- Has used the entire budget.
- Has exceeded the budget.

### 7. Console Output

The `console.log()` method displays the budget report in the browser developer console.

The report includes the total budget, total expenses, remaining balance, and budget status.

## How to Run the Project

1. Download or clone the SpendWise repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Click the Start Budget Tracking button.
5. Enter your total budget.
6. Enter your total expenses.
7. View the results on the webpage.
8. Open the browser developer tools using F12.
9. Select the Console tab to view the detailed budget report.

## Project Structure

SpendWise/
- index.html
- style.css
- script.js
- README.md

## Author

SpendWise JavaScript Foundation Project.

## Conclusion

SpendWise demonstrates the practical application of JavaScript fundamentals, including variables, data types, user input, calculations, functions, conditional statements, and console output.
