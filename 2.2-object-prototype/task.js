//Задача 1
String.prototype.isPalindrome = function() {

	let string = this.toLowerCase().split(' ').join('');

	let arrString = [];
	for (let i = 0; i < string.length; i++) {
		arrString.push(string.charAt(i));
	}
	let reverseString = [];
	for (let i = string.length - 1; i >= 0; i--) {
		reverseString.push(string.charAt(i));
	}

	if (arrString.join('') === reverseString.join('')) return true;
	return false
	
}
console.log(this.isPalindrome);

//Задача 2
function getAverageMark(marks) {
	let marksSum = 0;

    for (let i = 0; i < marks.length; i++) {
    	marksSum += marks[i];
    };

    let roundedAverage = Math.round(marksSum / marks.length);
    return roundedAverage
}

//Задача 3
function checkBirthday(birthday) {
	const now = Date.now();
	birthday = birthday.Date();
	console.log(birthday);
    // return verdict
}