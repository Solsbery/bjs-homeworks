'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь

   // if (typeof percent === 'string') {
   // 	parseFloat(percent);
   // } else if (percent == NaN) {
   // 	return `Параметр <процентная ставка> содержит неправильное значение ${percent}`;
   // }

   // if (typeof contribution === 'string') {
   // 	parseFloat(contribution);
   // } else if (typeof percent != 'number') {
   // 	return `Параметр <сумма первоначального взноса> содержит неправильное значение ${contribution}`;
   // }

   // if (typeof amount === 'string') {
   // 	parseFloat(amount);
   // } else if (typeof percent != 'number') {
   // 	return `Параметр <сумма кредита> содержит неправильное значение ${amount}`;
   // }

   let creditAmount = amount - contribution;
   let term = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
   let monthPercent = percent / 100 / 12;
   let monthPayment = creditAmount * (monthPercent + monthPercent / (((1 + monthPercent) ** term) - 1));
   let totalAmount = monthPayment * term;
   console.log(totalAmount.toFixed(2));

   return parseFloat(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь

    if (name == false) name = 'Аноним'

    return `Привет, мир! Меня зовут ${name}.`;
}