import React from "react"
import "./Product.css"

const style = {
    backgroundColor: 'red',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column'
}

const Product = (props) => {
    return <div className="product" style={style}>
        {/* <img src={props.img} /> */}
        <div>
            {props.title}
        </div>
        <div>
            £{
                props.deal ? props.price / 2 : props.price
            }
        </div>
    </div>
}


export default Product
export const num = 4