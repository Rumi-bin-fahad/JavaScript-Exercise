alert('All Marks You will Enter is under 100 so the result and percentage will show')
let StudentName = prompt ('Enter Your Full Name')
let maths = +prompt ('Enter Your Maths Subject Number');
let English = +prompt ('Enter Your English Subject Number');
let Islam = +prompt ('Enter Your Islam Subject Number');
let Phycis = +prompt ('Enter Your Phycis Subject Number');
let Chemistry = +prompt ('Enter Your Chemistry Subject Number');
let Urdu = +prompt ('Enter Your Urdu Subject Number');

let percentage = (maths + English + Islam + Phycis + Chemistry + Urdu)/600 *100;

let totalMarks = (maths+English+Islam+Phycis+Chemistry+Urdu);

if (percentage > 80){
    document.write('<p>Maths Number is</p>',maths);
    document.write('<p>English Number is</p>',English);
    document.write('<p>Islam Number is</p>',Islam);
    document.write('<p>Pysics Number is</p>',Phycis);
    document.write('<p>Chemistry Number is</p>',Chemistry);
    document.write('<p>Urdu Number is</p>',Urdu);
    document.write('<p></p>',StudentName)
    document.write('<p>Passed!! with flying colors</p>')
    document.write('<h2>Your Grade is A+ </h2>');
    document.write('<h2>Your Total Marks is </h2>', totalMarks, 'from 600')
    document.write('<h1>Your Percentage is </h1>', percentage, '%')
}else if (percentage > 60){
    document.write('<p>Maths Number is</p>',maths);
    document.write('<p>English Number is</p>',English);
    document.write('<p>Islam Number is</p>',Islam);
    document.write('<p>Pysics Number is</p>',Phycis);
    document.write('<p>Chemistry Number is</p>',Chemistry);
    document.write('<p>Urdu Number is</p>',Urdu);
    document.write('<p></p>',StudentName)
    document.write('<p>Passed!! with flying colors</p>')
    document.write('<h2>Your Grade is B+ </h2>');
    document.write('<h2>Your Total Marks is </h2>', totalMarks, 'from 600')
    document.write('<h1>Your Percentage is </h1>', percentage, '%')
}
else if (percentage > 40){
    document.write('<p>Maths Number is</p>',maths);
    document.write('<p>English Number is</p>',English);
    document.write('<p>Islam Number is</p>',Islam);
    document.write('<p>Pysics Number is</p>',Phycis);
    document.write('<p>Chemistry Number is</p>',Chemistry);
    document.write('<p>Urdu Number is</p>',Urdu);
    document.write('<p></p>',StudentName)
    document.write('<p>Passed!! Good Effort</p>')
    document.write('<h2>Your Grade is B </h2>');
    document.write('<h2>Your Total Marks is </h2>', totalMarks, 'from 600')
    document.write('<h1>Your Percentage is </h1>', percentage, '%')
}
else if(percentage > 20){
    document.write('<p>Maths Number is</p>',maths);
    document.write('<p>English Number is</p>',English);
    document.write('<p>Islam Number is</p>',Islam);
    document.write('<p>Pysics Number is</p>',Phycis);
    document.write('<p>Chemistry Number is</p>',Chemistry);
    document.write('<p>Urdu Number is</p>',Urdu);
    document.write('<p></p>',StudentName)
    document.write(StudentName)
    document.write('<p>Passed!!</p>')
    document.write('<h2>Your Total Marks is </h2>', totalMarks, 'from 600');
    document.write('<h1>Your Percentage is </h1>', percentage, '%')
}
else {
    document.write('<p>Maths Number is</p>',maths);
    document.write('<p>English Number is</p>',English);
    document.write('<p>Islam Number is</p>',Islam);
    document.write('<p>Pysics Number is</p>',Phycis);
    document.write('<p>Chemistry Number is</p>',Chemistry);
    document.write('<p>Urdu Number is</p>',Urdu);
    document.write('<p></p>',StudentName)
    document.write('<h1> You are Fail! </h1>')
    document.write('<h2>Your Total Marks is </h2>', totalMarks, 'from 600')
    document.write('<h1>Your Percentage is </h1>', percentage, '%')
}


