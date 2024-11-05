//ternary operator is a shortcut to if{} and else {} statements.
//it helps to assign a variable based on a condition.
// example: Condition? CodeIfTrue: CodeIfFalse;
//let age=12;
//let message = age >=18? "You are an adult": "You are a minor!"
//console.log(message)
//let time = 16;
//let greeting = time<12? "Good morning.": "Good evening."
//console.log(greeting)
//let isStudent = true;
//let message = isStudent? "You are a student": "You are not a student";
//console.log(message)
//let purchaseAmount = 98;
//let discount = purchaseAmount>=100? 10: 0;
//console.log(`Your total is $${purchaseAmount-purchaseAmount*discount/100}`)
//console.log(purchaseAmount)
 //what is a switch?
//A switch can be a good alternative to using many else If statements.
//let day = 90;
//if (day == 1){
 //  console.log(`It is Monday, the first day of the week`)
//}
//else if (day == 2){
//console.log(`It is Tuesday, the second day of the week`)
//}
//else if (day == 3){
   // console.log(`It is Wednesday, the third day of the week`)
//}
//else if (day == 4){
   // console.log(`It is Thursday, the fourth day of the week`)
//}
//else if (day == 5){
   // console.log(`It is Friday, the fifth day of the Week`)
//}
//else if (day == 6){
   // console.log(`It is Saturday, the fifth day of the week`)
//}
//else if (day == 7){
    //console.log(`It is Sunday, the 7th day of the week.`)
//}
//else {
   // console.log(`${day} is not a day of the week`)
//}
// Instead of using the above many else if statements, then we can create a switch. Here is how to create a switch.
//let day = 16;
//switch (day){
    //case 1:
        //console.log(`It is Monday`);
        //break
    //case 2:
       // console.log(`It is Tuesday`);
        //break
    //case 3:
        //console.log(`It is Wednesday`);
        //break
    //case 4:
        //console.log(`It is Thursday`);
        //break
    //case 5:
        //console.log(`It is Friday`);
        //break
    //case 6:
        //console.log(`It is Saturday`);
        //break
    //case 7:
        //console.log(`It is Sunday`);
        //break
    //default: console.log(`${day} is not a day`);
    //break
//}
//let testScore = 44;
//let letterGrade;

//switch(true){
    //case testScore >= 90:
    //letterGrade = `A`;
    //break

    //case testScore >= 80:
    //letterGrade = `B`;
   // break

    //case testScore >= 70:
    //letterGrade = `C`;
    //break

    //case testScore >= 60:
    //letterGrade = `D`;
    //break

    //case testScore <= 59:
    //letterGrade = `FAIL`;
    //}
//console.log (letterGrade);
//What are string methods? they allow you to manipulate and work with text strings.(texts)
//let userName = "PaschalineNdoti";
//console.log (userName.charAt(0));
//
//const email = "paschndoti@gmail.com";
//let userName = email.slice(0, email.indexOf("@"));
//let extension = email.slice(email.indexOf("@"));

//console.log(userName);
//console.log(extension);
//Method Chaining: calling one method after another in one continous line of code.
//We have method chaining and No method chaining.
 //let userName = window.prompt("What is your Name:")
//userName = userName.trim();
//let letter = userName.charAt(0);
//letter = userName.toUpperCase();
//let extraChars = userName.slice(1);
//extraChars = extraChars.toLowerCase();
//userName = letter + extraChars;
//console.log(userName);
//userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
//console.log(userName);
const temp = 0;
if (temp > 0){
console.log("The Weather is warm and good");
}
else if(temp<=0){
    console.log("It is a very cold and chilly day")
}