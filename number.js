// NUMBER DATA TYPE
const myAge = 87;

// number methods toFixed
const num =9.5678;
console.log(num.toFixed(0));
console.log(num.toFixed(16));
console.log(num.toFixed(2));

const x =7;
const y =7;
console .log(x+y);
console.log(x-y);
console.log(x*y);

// ** raised to power (exponent)
console.log(3**2);
// modulus %( returns the remainder of a division)
console.log(6 % 2);
console.log(100 % 10);

// order of operation(BODMAS)
// PEMDAS
// 4+2*3**2
let likes =0
likes++;
likes++;
likes++;
likes--;
console.log("likes",likes);

let savings =5000;
console.log(savings);
savings = savings +3000;
// savings =savings + 10000;
savings += 10000;
// savings =savings-7000;
savings-=7000;


const fullName ="Gozie Michael";
const accountNumber =56789054;
let myBalance =4000;
console.log(myBalance);
// jan transaction
// credited 10000,debited 200 as sms charges,recieved gift 3000
// Gifted someone 1200
myBalance+= 10000;
myBalance -=200; 
myBalance+=3000;
myBalance -=1200;

console.log("my balance is", myBalance);
// fuullname with account number: accountNumber has a balance of myBalance
const accountStament =`${fullName} with account number ${accountNumber} has  a balance of ${myBalance.toFixed(2)}`;
console.log(accountStament);

// tofixed(3)
// +-*/**% 
// order of operations (bodmas pemdas)
// ++--
// +=-=
console.log("my name is goodness")


const userAge = 16;

if (userAge>=18) {console.log(" user is eligible to drive");} 
else{ console.log(" user ineligible");}


const myScore =90
 
if (myScore>=70 && myScore <=89) {console.log("your score is B");}
 else if( myScore>=89 && myScore<=100) {console.log(" excellent you made an A")}
































