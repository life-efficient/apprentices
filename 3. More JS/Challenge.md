## Challenge: get products using JS, as if they were loading

In the real world, all of our products probably won't be stored on the front end (lots of products means lots of data which will make the page slow to load). Instead, JavaScript would be used to get them, and then add them to the page. The aim of this challenge is to have JS do this.

- put all of the info about your products into the javascript file
    - the format should be a list of objects, where each object represents a product
- use JS to put these products into the DOM
- put all of the above processing in a timeout function, and show "loading..." instead of the products until it is executed