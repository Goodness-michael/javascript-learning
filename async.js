

// asynchronous

// synchronous/blocking
const url = "https://jsonplaceholder.typicode.com/users";

// async
// promises -fulfilled,rejected,pending

// .then method======
fetch(url)
.then((response)=> response.json())
    

.then((data) =>{
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// async await method
const getUser =async () => {
    try{const response =await fetch(url);
        const data = await response. json();
        console.log(data);
    } catch (error){ console.log(error)}
};
getUser();

// REQUEST METHODS

// GET - retrieve data,
// POST- Creating a data,
// patch - updating,
// DELETE - removing data,
// PUT -updating(total overhaul)










