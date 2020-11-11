# More React

## Recap and show migration from vanilla JS to React

## Prop drilling 
- get products at top level, pass list to children

## Hooks
- build a click counter component using useState
- when does a component rerender?

## Challenge: Build a switch component (5 mins)

## Controlled components (5 mins)
- build a controlled textarea component

## Lifecycle methods (10 mins)
### What events occur in the life of a component?
- Mounting
    - constructor (if a class)
    - render
    - didMount
- Updating
    - render
    - didUpdate
- Unmounting
    - willUnmount
### What might you want to do at each of these points in a component's lifecycle?
- get data from backend as soon as app component mounts (on mounting)
- send update to backend as soon as user changes some info a within a component (on updating)
- stop their webcam when they change page (on unmounting)
### useEffect
- get products