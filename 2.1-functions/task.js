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

	for (let subject in data) {
		let marks = data[subject];
		// console.log(`${subject}: ${marks}`);

		let average = [];
		average.push(getAverageMarks(marks));
		console.log(average);
	
		// for (average in data) {
		// 	data.average.push(subjectAverage);
		// 	console.log(data.average);
		// }
	}



	function getAverageMarks(marks){
		let marksSum = 0;

    	if (marks.length == 0) {
    		return 0;
    	} else {
    		for (let i = 0; i < marks.length; i++) {
    			marksSum += marks[i];
    		};
    	} 

    	return marksSum / marks.length;
	}

}



