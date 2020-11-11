import React, { useState } from "react"

const HelloWorld = (props) => {

    const [num_clicks, setNumClicks] = useState(0)

    const func = () => {
        console.log('yo')
        setNumClicks(num_clicks + 1)
    }

  return <>
  <button onClick={func}>click</button>
    <div>{num_clicks}</div>
    <div>{props.name}</div>
    <div>{props.surname}</div>
  </>
}

export default HelloWorld
