//question 1

const words = ['dog', 'cat', 'platypus'];

const lengths = (arrayOfStrings) => {
	const characters = [];
	for (let i = 0; i < arrayOfStrings.length; i++) {
		characters.push(arrayOfStrings[i].length);
	}
	return characters;
}

//question 2

const transmogrifier = (x, y, z) => {
	let prod = x * y;
	return Math.pow(prod, z);
}

transmogrifier(5, 4, 3) === 8000;
transmogrifier(13, 12, 5) === 92389579776;
transmogrifier(42, 13, 7) === 14466001271480793000;

//question 3

const toonify = (accent, sentence) => {
	if (accent = 'daffy') {
		sentence = sentence.replace('s', 'th');
		return sentence;
	} else if (accent = 'elmer') {
		sentence = sentence.replace('r', 'w');
		return sentence;
	} else {
		return sentence;
	}
}

//question 4

const wordReverse = (text) => {
	const textArray = text.split(' ');
	textArray.reverse();
	let answer = '';
	for (let i = 0; i < textArray.length; i++) {
		answer += textArray[i] + ' ';
	}
	const res = answer.slice(0, answer.length - 1)
	return res;
}

//question 5

const letterReverse = (terms) => {
	const termsArray = terms.split (' ');
	let newString = '';
	for (let i = 0; i < termsArray.length; i++) {
		termsArray[i] += ' ';
	}
	for (let i = 0; i < termsArray.length; i++) {
		test = termsArray[i];
		for (let i = test.length - 1; i >= 0; i--) {
			newString += test[i];
		}
	}
	const res = newString.slice(1);
	return res; 
}

//question 6

const longest = (arrayString) => {
	let longestWord = '';

	for (let i = 0; i < arrayString.length; i++) {
		if (arrayString[i].length > longestWord.length) {
			longestWord = arrayString[i];
		};
	}
	return longestWord;
};

//question 7

const repMaster = (text, functionEntry) => {
	return functionEntry(text) + ' proves that I am the rep MASTER!'
}