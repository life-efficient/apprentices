# React

## Limitations of vanilla JS
- JS mainly relates to certain part of the HTML, yet the JS and HTML are separate

## NPM
- what is NPM? Comparison to pip or apt
- ```npm install create-react-app -g```
- ```npm vs npx```
- ```npm init```
- what is ```package.json```?
- ```npm install <package> -S```
- what is node_modules?

## An intro to how a React project works and is structured 
- Run CRA (```npx create-react-app <app_name>```)
- Follow instructions (```cd demo```, ```npm start```)
- Explore the file structure and show what's happening
- Show ```index.html``` and change it to prove that that is what the browser is showing
- explain ```npm start``` (not build in) vs ```npm install``` (built in), show scripts attribute of ```package.json```
- [what is ```react-scripts```](npmjs.com/package/react-scripts)?
- ```npm start``` starts a hot-reloading web server preview of ```public/index.html``` and runs ```src/index.js```
- [src vs public vs build](https://stackoverflow.com/questions/52266892/meaning-of-src-public-and-build-folders)?
- Show App.js which contains our first React component

## Let's build some muthafuckin React
- Disect the ```App.js``` component. 
    - Explain the imports at the top of the file
        - default exports
        - named exports
    - Show how it is being "called" in ```index.js```. 
    - Explain how CSS is being applied
- Create a new functional "hello world" component in the same file
- make the component into a "name badge" component which says "hello my name is <name>"
- start off by defining the name as a const inside the component
- Introduce JSX. Show combined HTML and JS by using the name constant.
- Introduce props
- Explain how components are analagous to functions and props are analagous to arguments
- Move the component to a new file and import it

## Challenge: Make your own product component
- remake the product element that you made in vanilla HTML and JS as a standalone React component
