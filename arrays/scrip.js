//create an array in which we collec user data and add in our array

let = addArray =  prompt('Enter Your Value want to add in array');
let = addArray2 = prompt('Enter Your Value want to add in array');
let = addArray3 = prompt('Enter Your Value want to add in array');
let = addArray4 = prompt('Enter Your Value want to add in array');
let = addArray5 = prompt('Enter Your Value want to add in array');
// console.log('emptyArray--> is', emptyArray);
let emptyArray = [];
 emptyArray.push (addArray) ; 
 emptyArray.push (addArray2) ; 
 emptyArray.push (addArray3) ; 
 emptyArray.push (addArray4) ; 
 emptyArray.push (addArray5) ; 
 console.log('after take prompt emptyArray is --> ', emptyArray)

 emptyArray.pop();
 console.log('after used pop method emptyArray is -->', emptyArray);

 emptyArray.shift();
 console.log('after used shift method emptyArray is -->', emptyArray);

 emptyArray.unshift(addArray5);
 console.log('after used unshift method emptyArray is -->', emptyArray);

 let element5Array = ['Ramadan', 'Eid-ul-Fitr', 30, true, false];

console.log ('This Array contain 5 element different data types ==>', element5Array);
console.log ('length of this array is ==>', element5Array.length);
console.log ('First Index of this array is ==>', element5Array[0]);
console.log ('last Index of this array is ==>', element5Array[4]);

let studentNameArray = ['Shadan-Shakil', 'Rumi-Bin-Fahad', 'Ahad-Jan'];
let studentScores = [446, 373, 413];

console.log (studentNameArray[0] ,'takes', studentScores[0], 'Number into 500 and his percentage is', studentScores[0]/500*100,'%');

console.log (studentNameArray[1] ,'takes', studentScores[1], 'Number into 500 and his percentage is', studentScores[1]/500*100,'%');


console.log (studentNameArray[2] ,'takes', studentScores[2], 'Number into 500 and his percentage is', studentScores[2]/500*100,'%');

let anotherStudent = prompt('Enter Your name');
let anotherStudentNumber = +prompt('Enter Your Marks from 500');

studentNameArray.push(anotherStudent);
studentScores.push(anotherStudentNumber);

console.log(studentNameArray[3] ,'takes', studentScores[3], 'Number into 500 and his percentage is', studentScores[3]/500*100,'%');

console.log('Student name array length is', studentNameArray.length);
console.log('student score arrya length is', studentScores.length);
