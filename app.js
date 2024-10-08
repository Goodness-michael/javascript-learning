// Rest and Spread Operators
// Optional Chaining
// Nullish Coalescence
// leftExpression n(null|| undefined?? defaultValue

const userName =null;
console.log(username?? "unknown User");

// optional cchaining
const user={
    name: "John Doe",
    age:45,
    gender: "Male",
    previousJobs:{
        one:"jumia",
        two:"paystack"
        three:"meta"
    },
};

console.log(user?.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);
if(user.profilepic){display }


// rest and spread
const countries =["cuba","algeria","Mexico", "usa"];
const [one,...others] =countries;
console.log(one);
console.log(others);

const country ={
    name:"Nigeria",
    yearOfIndependence:1960,
    officialLanguage:"English",
    isIsland:false,
};
const{name,isisland,...remaining} =country;
console.log(remaining);

// spread operators
const africanCountries =["Mali","Togo","Kenya","uganda"];
const asianCountries =["China","Japan","Bangaladesh","vietnam"];




