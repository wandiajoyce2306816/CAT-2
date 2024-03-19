javascript
// Prompt the user to enter employee name, hours worked and rate per hour
var employeeName = prompt("Enter employee name:");
var hoursWorked = parseFloat(prompt("Enter hours worked:"));
var ratePerHour = parseFloat(prompt("Enter rate per hour:"));

// Calculate the basic pay
var basicPay = hoursWorked * ratePerHour;

// Calculate tax based on basic pay
var tax;
if (basicPay > 50000) {
    tax = 0.2 * basicPay;
} else if (basicPay >= 20000 && basicPay <= 50000) {
    tax = 0.1 * basicPay;
} else {
    tax = 0;
}

// Calculate the net pay
var netPay = basicPay - tax;

// Display the results
console.log("Employee Name: " + employeeName);
console.log("Basic Pay: " + basicPay);
console.log("Tax: " + tax);
console.log("Net Pay: " + netPay);