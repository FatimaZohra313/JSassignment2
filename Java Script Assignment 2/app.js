///////// Task no 11 //////


// Changing case
// Question no 1;
// var userInput = prompt("Enter your city ?");
// userInput = userInput.toUpperCase();
// console.log(userInput);
// Question no 2
// var userInput = prompt("Enter your city ?");
// var firstLetter  = userInput.slice(0,1).toUpperCase();
// var restOfTheString = userInput.slice(1,userInput.length).toLowerCase();
// var total= firstLetter + restOfTheString;
// document.write(total + "<br>");


/// Strings: measuring length and extracting parts
// Question no 1
// var yourMobileModel = prompt("Enter your mobile model?");
// var length = yourMobileModel.length;
// document.write(length);
// Question no 2
// var userInput1 = prompt("EnTer your name?");
// var result = userInput1.substr(-1);
// document.write(result);
// ///////Strings: finding segment
// Question no 1
// var myNationality = "Pakistani";
// var index = myNationality.indexOf("n");
// document.write(index);
// Question no 2
// var userName = prompt("Enter your username?");
// var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
// if (userName.match(format)){
//     alert("Enter Valid Username!");
// }
// else{
//     alert("Okay!");
// }
// Question no 3
// var string = "the quick brown fox jumps over the lazy dog";
// var count = (string.match(/the/g)).length;
// console.log(count);
// Strings: finding a character at a location
// Question no 1
// var country = "Pakistan";
// var text = country[3];
// console.log(text);
////Strings: replacing characters
// Question no 1
// var city = "Hyderabad";
// var text = city.replace("Hyder","Islamabad");
// document.write(text);
// Question no 2
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var text = message.replace(/and/g,"&");
// document.write(text);
////// Rounding numbers
//  Questiom mo 1
// var pnumber = parseInt(prompt("Enter your postive number?",3.142));
// var a = Math.round(pnumber);
// document.write(a + "<br>");
// var a = Math.floor(pnumber);
// document.write(a+ "<br>")
// var a = Math.ceil(pnumber);
// document.write(a+ "<br>");
// Question no 2
// var nnumber = parseInt(prompt("Enter your negative number?",-2.686));
// var b = Math.round(nnumber);
// document.write(b + "<br>");
// var b = Math.floor(nnumber);
// document.write(b+ "<br>")
// var b = Math.ceil(nnumber);
// document.write(b+ "<br>");
///////////Generating random numbers
//  Question no 1
// var a = Math.random();
// document.write(a);
// Question no 2
// var toss =Math.round(Math.random()*1);
// document.write(toss);
// Question no 3
// var secretNo = Math.ceil(Math.random()*10);
// var userInput = parseInt(prompt("Enter your no from 1 to 10"));
// if (userInput == secretNo){
//     alert("You guess the right number");
// }
// else {
//     alert ("Try again");
// }
/////////Converting strings to integers and decimals
// Question no 1
// var userInput = parseFloat(prompt("Enter your weight?"));
// document.write(userInput + " Kg");
/////////Converting strings to numbers, numbers to strings
//  Question no 1
// var a = "472";
// a = parseInt(a);
// document.write(typeof(a) + "<br>" + a + "<br>");
// Question no 2
// var num = 37.36;
// num = num.toString();
// document.write(num + "<br>" + typeof(num)); 
//////////Controlling the length of decimals
// Question no 1
// var percentage = 30/45 * 100;
// percentage= percentage.toFixed();
// document.write(percentage);

/////////////Task no 12
// Question no 1
// var a = new Date();
// document.write(a + "<br>");
// Question no 2
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// var d = new Date();
// var name = month[d.getMonth()];
// document.write("Current Month:" + " " + name);

// Question no 3 
// var day = ["Mon","Tuesday","Wed","Thu","Fri","Sat","Sun"];
// var c = new Date();
// var name = day[c.getDay()];
// document.write("Today is " + name);
// Question no 4 
// var a = new Date().getDay();

// if (a == "Saturday" || a == "Sunday") {
//     alert ("Today is a fun day");
// }
// else {
//     alert("Such a boring day");
// }
//  Question no 5
// var a = new Date().getDate();
// if (a <= 15){
//     alert("First fifteen days of the month");
// }
// else {
//     alert ("Last days of the month")
// }
// Question no 6
// var a = new Date();
// document.write("Current Date : " + a + "<br>" );
// var b = new Date("9-10-2022")
// var c = b.getTime(); 
// var d = new Date("1-1-1970");
// var e = d.getTime();
// var f = (b - d)/(1000*60*60*24*365);
// document.write("Elapsed milliseconds since 1 january 1970: " +f*31556952000 + "<br>")
// document.write("Elapsed minutes since 1 january 1970: " +f* 525949.2 + "<br>")
// Question no 7
// var a = new Date();
// if (a <= 12){
//     alert("It's AM");
// }
// else {
//     alert("It's PM");
// }
// Question no 8
// var laterDate = new Date("12-31-2022");
// document.write("Later date: " + laterDate + "<br");
// Question no 9
// var a = new Date("4-2-2022").getTime();
// var b = new Date("7-13-2022").getTime();
// var c = (b - a)/(1000*3600*24) ;
// document.write(c + " Days have passed since 1 Ramadan 2022 " + "<br>")
// Question no 10
// var a = new Date("1-1-2015");
// var b = new Date("12-5-2015");
// var c = (b.getTime()-a.getTime())/(60*24*60);
// document.write("On refrence Date " + b + " "+ c + " seconds had passed since the beginning of 2015");
// Question no 11
// var d = new Date();
// document.write("Current Date : "+d + "<br>");
// d.setHours(19);
// document.write("1 Hour ago , It was " +d + "<br>");

// Question no 12
// var d = new Date();
// document.write("Current Date : "+d + "<br>");
// d.setFullYear(1922);
// document.write("100 year back, It was " +d + "<br>");


// Question no 13
// var yourAge = parseInt(prompt("Enter your age"))
// var a = new Date();
// var birthyearr = a.getFullYear() - yourAge;
// document.write("Your age is " + yourAge + "<br>" + "Your Birth year is " + birthyearr + "<br>");
// QUuestion no 14
// document.write("<h1>K-Electric Bill</h1><br>");
// var customerName = prompt("Enter the customer name: ");
// var monthOf = prompt("Enter the billing month: ");
// var month;
// var currentDate = new Date();
// var units = parseInt(prompt("Enter the units: "));
// var chargesPerUnit = parseInt(prompt("Enter the charges per unit: "));
// var netAmount = units * chargesPerUnit;
// var latePaySubcharge = 350;
// var afterDueAmount = units * chargesPerUnit + latePaySubcharge;

// document.write("Customer Name: <b>" + customerName + "</b><br>");
// document.write("Month: <b>" + monthOf + "</b><br>");
// document.write("Number of units: <b>" + units + "</b><br>");
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");
// document.write(
//   "Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>"
// );
// document.write("Late Payment surcharge: <b>" + latePaySubcharge + "</b><br>");
// document.write(
//   "Gross amount Payable (after Due Date): <b>" + afterDueAmount + "</b>"
// );
















///////// Task no 13
// Question no 1
// function abc(){
//     var a = new Date();
//     document.write(a + "<br>");
// }
// abc();

///// Question no 2
// function name(firstname,lastname){
//     alert(firstname + " " + lastname);
// }
// name("Fatima","Zohra");

//// Question no 3
// function sum(a,b){
//     return a + b;
// }
// var sum1 = sum(parseInt(prompt("ENTER YOUR NO")),parseInt(prompt("ENTER YOUR NO")));
// document.write(sum1);
// Question no 4
// function abc(num1,num2,operator){
//     if (operator == "+"){
//         document.write(num1 + num2)
//     }
//     else if (operator == "-"){
//         document.write(num1 - num2)
//     }
//     else if (operator == "*"){
//         document.write(num1 * num2)
//     }
//     else if (operator == "/"){
//         document.write(num1 / num2)
//     }

// }
// abc(2,4,"*")



// Question no 5
// function square(num){
//     var sq = num * num;
//     document.write(sq);

// }
// square(4);
// Question no 6
// function abc(fact){
//     for (var i = 0 ; i <3 ; i++){
//         fact*=i;
//         document.write(fact + "<br>");
//     }
    
// }
// abc(2);
// Question no 7 
// function abc(startno,lastno){
//     for(var i = startno; i<=lastno; i++){
//         document.write(i  + "<br>")
//     } 
// }
// abc(1,10);
// Question no 8
// function Hypotenous(base, perpendicular){
//     var hyp= square(base)+square(perpendicular);
//     function square(numb){
//       return numb**2
//     } 
//     document.write("Hypotenous: "+hyp+"<br>")
//   }
//   Hypotenous(2,4);

// Question no 9
// function abc(height,width){
//     var a = width* height;
//     document.write(a);
// }
// abc(4,4);
// Question no 10
// function checkPalindrome(string) {
//     const arrayValues = string.split('');
//     const reverseArrayValues = arrayValues.reverse();
//     const reverseString = reverseArrayValues.join('');

//     if(string == reverseString) {
//         console.log('It is a palindrome');
//     }
//     else {
//         console.log('It is not a palindrome');
//     }
// }

// //take input
// const string = prompt('Enter a string: ');

// checkPalindrome(string);






// Question no 11
// function titleCase(string){
//     var sent=string.toLowerCase().split(" ");
//     for(var i=0;i<sent.length; i++){
//       sent[i]=sent[i][0].toUpperCase()+sent[i].slice(1);
//     }
//     return sent.join(" ");
//   }
//   var titleCased= titleCase('the quick brown fox');
//   document.write("The original string: 'the quick brown fox' "+"<br> The TitledCase String: "+titleCased);









// Question no 12
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     str.forEach(function(str) {
//         if (longest < str.length) {
//             longest = str.length;
//             word = str;
//         }
//     });
//     return word;
// }
// console.log(longestWord("Web development tutorial"));
// Question no 3
// var string = "the quick brown fox jumps over the lazy dog";
// var count = (string.match(/the/g)).length;
///  Question no 13
// function abc(string){
//     var count= (string.match(/o/g)).length;
//     console.log(count);
// }
// abc('JSResourceS.com');

// Question no 14
function calccircumference(pi,r){
    var a = 2 * pi * r;
    document.write ("The circumference is " +  a + "<br>");
}
calccircumference(3.142,3);
function calcArea(pi,r){
    var b = pi *(r*r);
    document.write ("The Area of circle is " +  b + "<br>");
}
calcArea(3.142,7);