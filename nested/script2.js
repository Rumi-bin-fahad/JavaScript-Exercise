let LongName = ['Fahad','Yaseen','Mustafa','Rehman','Mustaqeem','Abdullah','Yaqoob'];
console.log(LongName);

let arrayLength = LongName.length
console.log(arrayLength);

let arrayIndex = LongName[1];
console.log('arrayindex1 is', arrayIndex);
let LongNameDefine = prompt('Enter Password')
if (LongNameDefine == LongName[4]) {
    console.log('Your Password is Correct');
}
else if (LongNameDefine == LongName[1]){
    console.log('Password is nearer Think More')
}
else {
    console.log('Password is Incorrect')
}