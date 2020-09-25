import React from "react"
import './NameBadge.css'

const NameBadge = props => {
    return <div className="container">
        <div className="heading">
            The name is
        </div>
        <div className="body">
            {props.name}
        </div>
    </div>
}

export default NameBadge