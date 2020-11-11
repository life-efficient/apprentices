# React

## Limitations of vanilla JS - 5 mins
- JS mainly relates to certain part of the HTML, yet the JS and HTML are separate

## NPM - 5 mins
- what is NPM? Comparison to pip or apt
- ```npm install create-react-app -g```
- ```npm vs npx```
- ```npm init```
- what is ```package.json```?
- ```npm install <package> -S```
- what is node_modules?

## An intro to how a React project works and is structured - 15 mins
- Run CRA (```npx create-react-app <app_name>```)
- Follow instructions (```cd demo```, ```npm start```)
- Explore the file structure and show what's happening
- Show ```index.html``` and change it to prove that that is what the browser is showing
- explain ```npm start``` (not build in) vs ```npm install``` (built in), show scripts attribute of ```package.json```
- [what is ```react-scripts```](npmjs.com/package/react-scripts)?
- ```npm start``` starts a hot-reloading web server preview of ```public/index.html``` and runs ```src/index.js```
- ```npm run build``` build the project
    - transpiles the ES6 into ES5 so any browser can read it
    - creates the build folder
    - this is what we serve to the users
- [src vs public vs build](https://stackoverflow.com/questions/52266892/meaning-of-src-public-and-build-folders)?
- Show App.js which contains our first React component

## Let's build some muthafuckin React - 15 mins
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
- What if we wanted to have different name badge components for each of us? Introduce props
- Explain how components are analagous to functions and props are analagous to arguments
- React components are like custom HTML elements, which we can program how to deal with custom props
- Move the component to a new file and import it

## Challenge: Make your own product component
- remake the product element that you made in vanilla HTML and JS as a standalone React component

## Styling in React using Emotion
- Inline styling - just the equivalent of native inline styling
- the issues with .css files
    - name clashes as stylesheets are applied globally
    - files getting pretty big (if we want all styling in one place so it's easy to check for name clashes)
- Styling with emotion
    - without explaining, show the required importjsx and pragma 
    - show how the css import is used
    - add style to top level element as css attribute
- what's the ```jsx``` import for if we don't use it? 
    - jsx must be in scope
- what's the pragma for?
    - configures the jsx babel plugin to use the jsx function, which knows how to treat the ```css``` attribute of JSX elements, instead of React.createElement, which doesn't know how to treat it
    - (stack overflow)[https://stackoverflow.com/questions/53803466/what-does-the-comment-jsx-jsx-do-in-the-emotion-css-in-js-library]
    - (emotion docs)[https://emotion.sh/docs/css-prop#jsx-pragma]
- nested styling

## Styling in React using MaterialUI styling
