const fakeWordBank = [
	'bagonta',
	'floobert',
	'gizzab',
	'typhron',
	'zetride',
	'sloobbeerry',
	'paxxie'
]

//each blank is 3 underscores: _ _ _

export class Template {
	constructor(lines, blank_possibilities) {
		this.lines = lines;
		this.blank_possibilities = blank_possibilities;
	}

	getMeaningFor(i) {
		let num = Math.floor(Math.random() * this.blank_possibilities[i].length);
		return this.blank_possibilities[i][num];
	}
}

const templateBank = [
	new Template([
		`I am interested in studying `,  
		`. I became interested when my `,
	    ` showed me how to `
	],
	[
	   ['physics', 'math', 'chemistry'],
	   ['mom', 'dad', 'best friend'],
	   ['experiment', 'investigate', 'learn']
	]
	),
]

function getNDistinctFakeWordStrings(n) {
	let hasUsed = fakeWordBank.map((word) => false);
	
	let results = [];

	while(results.length != n) {
		let index = Math.floor(fakeWordBank.length * Math.random()); 
		if(hasUsed[index]) {
			continue;
		}
		results.push(fakeWordBank[index]);
		hasUsed[index] = true;
	}
	return results;
}

export default class Word {
	// str = the word itself
	// meaning = definition
	// pos = template position 

	constructor(str, meaning, pos) {
		this.str = str
		this.meaning = meaning
		this.pos = pos
	}
}

function getRandomTemplate() {
	let index = Math.floor(templateBank.length * Math.random());
	return templateBank[index];
}

export function getTemplateAndWords() {
	template = getRandomTemplate();

	const n = template.blank_possibilities.length;
	const wordstrings = getNDistinctFakeWordStrings(n);
	let words = [];
	wordstrings.forEach((str, i) => {
	  words.push(new Word(
        str, template.getMeaningFor(i), i
      ))
	});

	return {
		template: template,
		words: words,
	};
}


//return [template, words]
//
//let [template, words] = getRandomTemplate();
//let result = getRandomTemplate();
//let template = result[0]
//let words = result[1]
//
//alternatively
//
//return {
//template: template,
//words: words
//}
//
//let {template: template1, words: words2, k: kval} = getRandomTemplate();
//
//above line and below lines are the exact same
//
//let result = getRandomTemplate();
//let template1 = result.template;
//let words2 = result.words;