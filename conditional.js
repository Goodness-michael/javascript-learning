// CONDITIONAL STATEMENT
// CONTROL FLOW

const myBalance =3000;
const transaction =3000 ;
// if statement
// if(condition){ lines of code}
// if(yes ) {console.log("yes")}
if(myBalance >= transaction) {console.log("transaction successful");}

// 18+
const age = 12;
if (age >=18) { console.log("you are eligible to vote");}

// if the length of the password is 7 and above and has @ -good password
const password ="e67e6dgdg@";
if (password.length >= 7&& password.includes("@")) {console.log("good password");}

// if else statement
// if (condition){first action} else {second action}
// EXAMPPLE=======
const age2 =25;
if (age2>= 18){ console.log("you are eligible to vote");}
else{console.log("yoy are ineligible to vote,you must be 18+");}

// youth/underaged 0-40 or aged 41
const age3=40;
if (age3>=0 && age3 <= 40) { console.log("you are in the youth/underaged category");}
else { console.log("you are in the aged category");}



// write an if else statement to check if a number is even or odd and log to the console
const num =90;
if(num % 2===0) { console.log("this is an even number");} else{ console.log("this is an odd number")}

// declare two variables 1. savings 2. transactionAmount
// write an if else statement to check if transaction will be successful or not.

let savings = 5000
let transactionAmount =2500
if(transactionAmount <= savings) { 
    console.log("transaction successful");
}else { 
    console.log ("in-sufficient funds");
}

// MULTIPLE CONDITIONS ELSE IF STATEMENT

let myNum =98;

if (myNum>0) {
    console.log("this is a positive number")
}else if(myNum<0) {
    console.log("this is a negative");
}else{
    console.log("this is zero");
}

//  underage 0-12 teens 13-19 adults 20  aged 41 

const age4 =20;

if(age4 >=0 && age4 <=12) {
    console.log("underage")
} else if (age4 >= 13 && age4 <=19){
    console.log("teens ")
}else if( age4 >=20 && age <= 40){
    console.log("Adult");
}else if( age4 >=41){
    console.log("Aged");
} else{
    console.log("invalid age try again");
}













