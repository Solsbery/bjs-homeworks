"use strict";

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let x;
    let D = b ** 2 - 4 * a * c;

    if (D < 0) {
    	return [];
    } else if (D === 0) {
    	return [-b / 2 * a];
    } else {
    	return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
    }
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let marksSum = 0;

    if (marks.length == 0) {
    	return 0;
    } else if (marks.length > 5) {
    	console.log('Количество оценок больше 5.');
    	marks.splice(5);
    } 

    for (let i = 0; i < marks.length; i++) {
    		marksSum += marks[i];
    	};
    let averageMark = marksSum / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();

    if (age >= 18) {
    	return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
    	return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`; 
    }
}