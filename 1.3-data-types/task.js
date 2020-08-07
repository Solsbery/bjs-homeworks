'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    
   if (isNaN(percent)) {
   	return `Параметр <процентная ставка> содержит неправильное значение ${percent}`;
   }
   	const parsedPercent = parseFloat(percent);

   if (isNaN(contribution)) {
   	return `Параметр <сумма первоначального взноса> содержит неправильное значение ${contribution}`;
   }
   	const parsedContribution = parseFloat(contribution);

   if (isNaN(amount)) {
   	return `Параметр <сумма кредита> содержит неправильное значение ${amount}`;
   }
   	const parsedAmount = parseFloat(amount);

   let creditAmount = parsedAmount - parsedContribution;
   let term = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
   let monthPercent = parsedPercent / 100 / 12;
   let monthPayment = creditAmount * (monthPercent + monthPercent / (((1 + monthPercent) ** term) - 1));
   let totalAmount = monthPayment * term;
   console.log(totalAmount.toFixed(2));

   return parseFloat(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь

    // if (name == false) name = 'Аноним'

    return `Привет, мир! Меня зовут ${name || 'Аноним'}.`;
}