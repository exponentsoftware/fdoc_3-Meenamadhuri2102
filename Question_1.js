/*A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.

  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  console.log(name, skills, scores)
  console.log(jsScore, reactScore)
Write a function called convertArrayToObject which can convert the array to a structured object.

		const students = [
				['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
				['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
			]

		console.log(convertArrayToObject(students))
		[
			{
				name: 'David',
				skills: ['HTM','CSS','JS','React'],
				scores: [98,85,90,95]
			},
			{
				name: 'John',
				skills: ['HTM','CSS','JS','React'],
				scores: [85, 80,85,80]
			}
		]
Copy the student object to newStudent without mutating the original object. In the new object add the following ?

Add Bootstrap with level 8 to the front end skill sets
Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets
		const student = {
			name: 'David',
			age: 25,
			skills: {
				frontEnd: [
					{ skill: 'HTML', level: 10 },
					{ skill: 'CSS', level: 8 },
					{ skill: 'JS', level: 8 },
					{ skill: 'React', level: 9 }
				],
				backEnd: [
					{ skill: 'Node',level: 7 },
					{ skill: 'GraphQL', level: 8 },
				],
				dataBase:[
					{ skill: 'MongoDB', level: 7.5 },
				],
				dataScience:['Python', 'R', 'D3.js']
			}
		}
The copied object output should look like this:

		{
		name: 'David',
		age: 25,
		skills: {
			frontEnd: [
				{skill: 'HTML',level: 10},
				{skill: 'CSS',level: 8},
				{skill: 'JS',level: 8},
				{skill: 'React',level: 9},
				{skill: 'BootStrap',level: 8}
			],
			backEnd: [
				{skill: 'Node',level: 7},
				{skill: 'GraphQL',level: 8},
				{skill: 'Express',level: 9}
			],
			dataBase: [
				{ skill: 'MongoDB',level: 7.5},
				{ skill: 'SQL',level: 8}
			],
			dataScience: ['Python','R','D3.js','SQL']
		}
	}
Use the student object to solve the following questions: a. Find the length of student object keys b. Find the length of the student object values c. Find the length of skills object keys d. check if the student object has graphicDesign property e. Iterate the keys of the student object
*/

let student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

//Destructuring array

let [Name, skills, scores] = student;
console.log(Name) 
console.log(skills);
console.log(scores);
console.log(skills[2],":", scores[2])
console.log(skills[3],":", scores[3])

// Write a function called convertArrayToObject which can convert the array to a structured object.

var students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(){
    // newObject = Object.assign({}, students)
    // console.log(newObject);
    // let newObj = Object.fromEntries(students);
    // console.log(newObj);
    let obj = {};
    obj.push(students[0][0]);
    obj.push(students[0][1]);
    obj.push(students[0][2]);
}
console.log(obj)
convertArrayToObject(students)

// Copy the student1 object to newStudent without mutating the original object.

const student1 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

// Copy the student1 object to newStudent without mutating the original object.

console.log(student1);
const newStudent = Object.create(student1);
console.log(newStudent);

// Add Bootstrap with level 8 to the front end skill sets
newStudent.skills.frontEnd.push({'skill':'Bootstrap','level':8});
// Add Express with level 9 to the back end skill sets
newStudent.skills.backEnd.push({'skill':'Express','level':9});
// Add SQL with level 8 to the data base skill sets
newStudent.skills.dataBase.push({'skill':'SQL','level':8});
// Add SQL without level to the data science skill sets
newStudent.skills.dataScience.push('SQL');

console.log(newStudent.skills);