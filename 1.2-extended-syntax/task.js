"use strict";

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let x;
    let D = b ** 2 - 4 * a * c;

    if (D < 0) {
    	x = [];
    } else if (D === 0) {
    	x = [-b / 2 * a];
    } else {
    	x = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
    }
	
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let averageMark;
    let marksSum = 0;
    
    function calcAverageMark() {
    	for (let i = 0; i < marks.length; i++) {
    		marksSum += marks[i]
    	};
    	averageMark = marksSum / marks.length;
    }
    

    if (marks.length == 0) {
    	averageMark = 0;
    } else  if (marks.length <= 5) {
    	calcAverageMark();
    } else {
    	console.log('Количество оценок больше 5.');
    	marks = marks.slice(0,5);
    	calcAverageMark();
    }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь

    let yearOfBirth = dateOfBirthday.getFullYear();
    const year = new Date().getFullYear();
    let age = year - yearOfBirth;
    let result;

    if (age >= 18) {
    	result = ['Не желаете ли олд-фэшн', name];
    } else {
    	result = ['Сожалею', name, 'но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!']; 
    }
    

    return result;
}