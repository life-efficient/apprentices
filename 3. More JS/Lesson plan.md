
# More JS

## Intro to ES6
- what are ES6 and ES5 and how are they different?
- fire ES6 syntax
    - arrow functions
        - compare arrow function and non-arrow function side by side
    - spread
        - demo extending a list
        - demo updating an object
    - destructuring & rest
        

## Challenge: ES6 migration
- convert all of your old functions to arrow functions

## Callbacks
- simple example using setTimeout in a ```getProducts``` function

## Promises - another ES6 feature
- write another function with a setTimeout in called ```getLatestOffers``` 
- explain the problem that these 2 function should be called immediately, but are currently having to wait
- How can JS do multiple things at once? Promises
- write a function that returns a promise
- explain ```reject``` and ```resolve```
- use ```.then``` to execute a callback once the promise resolves
- what if the 
- use ```.catch``` to handle errors that occur in the promise
- demo chaining ```.then``` and ```.catch```

## Challenge: Write your own promise
- write a function that returns a promise that randomly fails 50% of the time, after waiting for 3 seconds
- 
- if it fails, pop up an alert on the screen warning the user

## async/await 🔥
- demo the ugliness of promise chains

## Challenge: replace your ```.then```s with ```await```s inside an ```async``` function