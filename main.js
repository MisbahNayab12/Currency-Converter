#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    PKR: 278,
    INR: 83,
    EUR: 0.93,
    POUND: 0.79
};
let answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Choose your 'from' amount",
        choices: ["USD", "PKR", "INR", "EUR", "POUND"]
    },
    {
        name: "to",
        type: "list",
        message: "Choose your 'to' amount",
        choices: ["USD", "PKR", "INR", "EUR", "POUND"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount",
    },
]);
let userFromCurrency = answer.from;
let userToCurrency = answer.to;
let amount = answer.amount;
//to get the exchange rate of both currencies
let fromAmount = currency[userFromCurrency];
let toAmount = currency[userToCurrency];
let baseCurrency = amount / fromAmount;
let convertCurrency = baseCurrency * toAmount;
console.log(convertCurrency);
