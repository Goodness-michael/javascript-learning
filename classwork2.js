// class work
// 















const marksMass = 78;
const marksHeight =1.69;
const johnsMass =92;
const johnsHeight = 1.95;


const marksBmi = marksMass/ marksHeight ** 2;
const johnsBmi = johnsMass/ johnsHeight **2;
const marksHigherBmi =marksBmi > johnsBmi;

console.log( marksBmi,johnsBmi);
console.log(marksHigherBmi);

// print a nice output to the console saying who has the higher BMI.
// The message is either Marks bmi is higher than johns
// or johns bmi higher than marks

if(marksHigherBmi){
    console.log(" marks bmi is higher than johns")
}else{console.log(" johns bmi is higher than mmarks");}

// comment out the first conditional statement
// improve it to cater for if the marks bmi and johns bmi are equal
if(marksBmi>johnsBmi){
    console.log(" marks bmi is higher than johns");
} else if (johnsBmi> marksBmi){
    console.log("johns bmi is higher than marks")
} else{
    console.log("johns bmi and marks bmi equal");
}











