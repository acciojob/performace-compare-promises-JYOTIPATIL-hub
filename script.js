// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
//const urls = [/* ...array of API URLs... */];
const promises = urls.map(url => fetch(url));

const startTimeAny = Date.now();
Promise.any(promises)
  .then(result => {
    const endTimeAny = Date.now();
    // Process the first successful result and display time taken
    // ...
  })
  .catch(error => {
    // Handle errors (when all promises are rejected)
  });

// You can write your code here
