//Задача 1
function getSolutions(a,b,c){
    let D = b ** 2 - 4 * a * c;
    let x1;
    let x2;

    if (D < 0) {
    	return {D: D, roots: []};
    } else if (D === 0) {
    	x1 = -b / 2 * a;
    	return {D: D, roots: [x1]};
    } else {
    	x1 = (-b + Math.sqrt(D)) / (2 * a);
    	x2 = (-b - Math.sqrt(D)) / (2 * a);
    	return {D: D, roots: [x1, x2]};
    }
}

function showSolutionMessage(a,b,c){
	let result = getSolutions(a,b,c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
		return 'Уравнение не имеет вещественных корней';
	} else if (result.D === 0) {
		return `Уравнение имеет один корень X₁ = ${result.roots}`;
	}  else {
		return `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
	}
}

//Задача 2
function getAverageScore(data){
	let averageSumm = 0;
	let dataKeys = Object.keys(data);
	let subjectsAmount = dataKeys.length;

	for (let prop in data) {
		let marks = data[prop];
		
		let subjectAverage = getAverageMarks(marks);

		averageSumm += subjectAverage;
		// data.average.push(subjectAverage);
	}
	data.average = averageSumm / subjectsAmount;
	// console.log(data.prop);
	return {
		
		average: data.average,

	}
}

function getAverageMarks(marks){
	let marksSum = 0;

    for (let i = 0; i < marks.length; i++) {
    	marksSum += marks[i];
    };

    return marksSum / marks.length;
}




