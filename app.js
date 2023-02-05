
///////////////suc

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("The promise has been resolved");
    }, 1000);
});

myPromise.then(result => console.log(result));

///////////////reject
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("The promise has been rejected");
    }, 1000);
});

myPromise.catch(error => console.log(error));

//////////////////////meth
const myPromise = new Promise((resolve, reject) => {
    const result = 2 + 2;
    if (result === 4) {
        resolve(result);
    } else {
        reject("The calculation is incorrect");
    }
});

myPromise
    .then(result => console.log(`The result is ${result}`))
    .catch(error => console.log(error));

/////////////////////////// data
const myPromise = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
});

myPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));
    