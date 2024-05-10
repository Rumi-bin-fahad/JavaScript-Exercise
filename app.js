let arr = [9, 1.2, 2, 0.3, 4, 5, 6, 7, 8];
let lrgNum = arr[0];

for ( let i = 0; i < arr.length; i++){
    console.log(i);
    if ( arr[i] > lrgNum){
        lrgNum = arr[i];
    }
    
}
console.log(`Largest Number is ${lrgNum}`);

// console.log('Finds Smallest Number');
let smlNum = arr[0];

for (let i = 0; i < arr.length; i++){
    console.log(i);
    if (arr[i] < smlNum){
    smlNum = arr[i]
}
}
console.log(`Smallest Number is ${smlNum}`)

