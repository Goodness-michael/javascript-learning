
// OBJECTS

// {key:value, keys:value2}
// key and value pairs are called object properties

const person ={
    firstName:"Ade",
    lastName:"Wale",
    age:64,
    isMarried: true,
    friends:[ "John", "Jane"],
    workHours:{
        monday:"8 hours",
    }
};
console.log(person);
// accesssing propertis inside an object
// dot notation objNamepropertyName
console.log(person.age);
console.log(person.friends);

 
// bracket notation objName["propertyName"]
console.log(person["age"]);
console.log(person["friends"][1]);
console.log(person["workHours"]["monday"]);
// adding a new property to an object
person.car ="Benz";
person.hobbies =["running","sleeping"];
console .log(person);

// removing a property from an object delete
delete person.isMarried
console.log(person);

// object methods are functions the developer writes himself.
const book ={
    title: "in the shadow",
    author:"John Doe",
    yearPublished:2000,
    genre:"Fiction",
    isBestseller: false,
    rating:3.5,
    
    summary: function(){
        console.log(`this is titled ${this.title} and it is written by john doe and has arating of 3.5`);
    },
};

book.summary();
book.title;

// this keyword -inside  of a function declaration in an object
// it refers to the object

// OBJECT DESTRUCTURING
// IT IS A  mordern and faster way of picking properties in an object

const user = {
    userName:"user001",
    fullName:"peter pan",
    password:"*********",
    profilepic: "avatar",
    followers: ["wale","John", "Jane"],
    following:[ "Elon musk","T-pain","Ronaldo"],
    dateOfAccount :2020,
    post:{
        title:"js is fun",
        desc: "i love learning javascript",
    }

}

// Array destructuring

const peoplesName =[ "Susan", "Joy","Mercy","Ade"];
const[two,,one] =peoplesName;
console.log(one,two);


















































