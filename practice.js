// Rest and Spread Operators
// Optional Chaining
// Nullish Coalescence
// leftExpression n(null|| undefined?? defaultValue

const userName =null;

console.log(userName?? "unknown User");

// optional cchaining
const user1={
    name: "John Doe",
    age:45,
    gender: "Male",
    previousJobs:{
        one:"jumia",
        two:"paystack",
        three :"meta",
    },
};

// console.log(user?.name);
console.log(user1?.car);
console.log(user1?.previousJobs?.three);
if(user1.profilepic){display }


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

const allCountries = [
  "Uk",
  ...africanCountries,
  "Congo",
  ...asianCountries,
  "Austria",
  "France",
];

// console.log(allCountries);

// optional chaining
const user = {
  name: "John Doe",
  age: 45,
  gender: "Male",
  previousJobs: {
    one: "Jumia",
    two: "Paystack",
    three: "Meta",
  },
};
console.log(user?.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);

// if (user.profilePic) {
//display picture
// <img src= {}
// }
// img src= {user?.profilePic}

// nullish coalescence
// leftExpression (null || undefined) ?? defautValue
const username = null;

console.log(username ?? "Unknown User");


const nums = [7, 8, 2, 4];
// complex data structure
//[object, ]
const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
  { id: 2, title: "Mission Impossible", director: "Tom Cruise", rating: 4.5 },
  { id: 3, title: "Little miss forest", director: "John Doe", rating: 4.1 },
];

//
movies.map((movie) => {
  console.log(movie.title.toUpperCase(), movie.rating);
});
//4.0 and above
const topRatedMovies = movies.filter((movie) => {
  return movie.rating >= 4;
});

console.log(topRatedMovies);
// miss
const searchedMovies = movies.filter((movie) => movie.title.includes("miss"));
console.log(searchedMovies);
//MISS -> miss '      MISS     '
const searchMovies = (searchTerm) => {
  const converted = searchTerm.trim().toLowerCase();
  console.log(converted);
};

searchMovies("miss");

// GET MOVIES DIRECTED BY TOM CRUISE

const moviesDirectedByTom =movies.filter(
    (movies) => movies.director.toLocaleLowerCase()==="tomcRuise".toLocaleLowerCase()
);
console.log(moviesDirectedByTom);

// get movies that has i.d of 3
const searchMoviesId = movies.find((movies) =>movies.id=== 3);

// get movies that has rating less than 4
const movieRating4 =movies.filter((movie) => movie.rating< 4);

// classs work=====
const events = [
  {
    id: 1,
    title: "Movie In the Park",
    category: "Party",
    date: "Aug 6th, 2024",
    price: 0,
    location: "Lagos",
  },
  {
    id: 2,
    title: "Burna Live In Concert",
    category: "Party",
    date: "Dec 23rd, 2024",
    price: 25000,
    location: "Lagos",
  },
  {
    id: 3,
    title: "Read With Kuku",
    category: "Education",
    date: "Sept 6th, 2024",
    price: 5000,
    location: "Online",
  },

  {
    id: 4,
    title: "Japa on a Budget",
    category: "Education",
    date: "Nov 6th, 2024",
    price: 10000,
    location: "Abuja",
  },
  {
    id: 5,
    title: "Mainland Block Party",
    category: "Party",
    date: "Dec 6th, 2024",
    price: 12000,
    location: "Lagos",
  },
];

// get total number of event

console.log(events.length);

const eventsInLagos = events.filter((event) => event.location === 'Lagos');
console.log(eventsInLagos);
// get events 15000 or less
const eventsless =events.filter((event) => event.price<= 15000);
console.log(eventsless);

// get parties from the list of arrays
const eventParties =events.filter((event=> event. category =="party"));
console.log(eventParties);


// arange the events alphabetically using their tittle a to z
 const eventAtoZ = events.sort((a,b) => a.title.localeCompare(b.title));
 console.log(eventAtoZ);
 

