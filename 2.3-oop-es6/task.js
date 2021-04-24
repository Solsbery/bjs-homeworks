//Задача 1
class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		return this.state *= 1.5
	}
	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}
	get state() {
		return this._state
	}
}

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

//Задача 2
class Library {
	constructor (name) {
		this.name = name;
		this.books = [];
	}
	addBook(book) {
		if (book.state > 30) this.books.push(book);
	}
	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) return this.books[i];
		}
		return null
	}
	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) return this.books.splice(i, 1)[0];
		}
		return null
	}
}

//Задача 3
class StudentLog {
	constructor (name) {
		this.name = name;
		this.grades = {};
	}
	getName() {
		return this.name;
	}
	addGrade(grade, subject) {
		if (this.grades[subject] == null) {
			switch (grade) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				this.grades[subject] = [grade];
			break;
			default:
				this.grades[subject] = [];
				console.log(`Вы пытались поставить оценку '${grade}' по предмету '${subject}'. Допускаются только числа от 1 до 5.`);
			}
		} else {
			switch (grade) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				return this.grades[subject].push(grade)
			break;
			default:
				console.log(`Вы пытались поставить оценку '${grade}' по предмету '${subject}'. Допускаются только числа от 1 до 5.`);
			}
		}
		return this.grades[subject].length
	}
	getAverageBySubject(subject) {
		if (this.grades[subject] != undefined) {
			let marksSum = 0;
			for (let i = 0; i < this.grades[subject].length; i++) {
    			marksSum += this.grades[subject][i];
    		};
    		return marksSum / this.grades[subject].length
		} else {
			return 0
		};
	}
	getTotalAverage() {
		let marks = [];
		for (let subject in this.grades) {
			for (let i = 0; i < this.grades[subject].length; i++) {
				marks.push(this.grades[subject][i]);
			};
		}
		let marksSum = 0;
		for (let i = 0; i < marks.length; i++) {
			marksSum += marks[i];
		};
		return marksSum / marks.length
	}
}




