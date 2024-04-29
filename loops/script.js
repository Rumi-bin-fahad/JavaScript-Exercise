

// // Q1
// for (Q1=1; Q1<=10; Q1++){
//     console.log(Q1)
// };

// // Q2
// for (Q2=1; Q2 <=10; Q2++){
//     console.log('7 x ', Q2 , ' = ', Q2*7)
// }

// // Q3
// for (Q3=0; Q3<=20; Q3 += 2){
//     console.log('Even Number', Q3)
// };
// //  Q4
// for (Q4=1 ; Q4 <= 15 ; Q4 = Q4 + 2){
//     console.log('Odd Number',Q4)
// }

// // Q5
// // Question5 = 'Salam un Alikum'
// for (Q5=1; Q5<=10; Q5++){
//     console.log(Q5, 'Salam-un-Alikum');
// }

// // Q6
// for (let i=1; i<=10; i++){
//     console.log(' Square of ', i, 'is', i**2)
// }
// // program to generate fibonacci series up to n terms

// const number =prompt('Enter the number of terms: ');
// let num1 = 0, num2 = 1, nextnum;

// console.log('Fibonacci Series:');

// for (let fibonacci = 1; fibonacci <= number; fibonacci++) {
//     nextnum = num1 + num2;
//     num1 = num2;
//     num2 = nextnum;
//     console.log(num1);
// }




// // Q9
// document.write(`<h2>Let Takes Number from User and Find Largest Number</h2>`)
// let emptyArray = [];
// alert('Add Fives Values one by one')
// let addNum1 = +prompt('Enter Number');
// let addNum2 = +prompt('Enter Number');
// let addNum3 = +prompt('Enter Number');
// let addNum4 = +prompt('Enter Number');
// let addNum5 = +prompt('Enter Number');
// alert('Stop Wait for Result')
// emptyArray.push (addNum1)
// emptyArray.push (addNum2)
// emptyArray.push (addNum3)
// emptyArray.push (addNum4)
// emptyArray.push (addNum5)
// let LNum = 0;
// let SNum = emptyArray[0]
// document.write(`<h2>Users Number is  ${emptyArray}</h2>`);
// for (Q9=0;Q9 <= 5; Q9++){
//     if (emptyArray[Q9] > LNum){
//         LNum = emptyArray[Q9]
//     }
// }
// document.write(`<h2>Largest Number is ${LNum}</h2>` )

// // Q8
// let unknown = +prompt('Enter Your number want to calculate')
// let Q8 = 100
// console.log(unknown , 'number divided by', Q8, 'then reminder is' , Q8%unknown )
// // // console.log('reminder is ',Q8%unknown)

// // Q10 

// document.write('Print Number Like This\n 1, 12, 123, 1234, 12345,')

// let UserInput = +prompt('Enter Value How Many times to print number like this')
// let numString = ''
// for (let Q10 = 1; Q10 <= UserInput; Q10++){
//     numString = numString + Q10
//     document.write(`<li>${numString}</li>`)
// }

// Q11
document.write(`<h2>Check Prize Bond</h2>`)
let prizebond = [245, 255, 678, 123, 567, 99, 1579, 45, 568, 1111,]

let usernum2 = prompt ('Your Prize Bond Number')
let userWin = false;
for ( let i = 0; i < prizebond.length ; i++ ){
    if (usernum2 == prizebond[i]){
        userWin = True
    }
}
if (userWin){
    document.write('Mubarak Hoo Apka Prize Bond Nikla Hye')
}
else {
    document.write('Mauf Kryn !! Agli dafa try Karen. <br>')
}


// finsh work