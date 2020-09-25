import React from "react"
import { css, jsx } from "@emotion/core"
/* @jsx jsx */

const style = css`
    background-color: blue;

    .content {

        .welcome {
            color: yellow;
        }

        .name {
            color: orange;
        }

    }
`

const Greeting = props => {
    return <div css={style}>
        <div className="content">
            <div className="welcome">
                Welcome
            </div>
            <div className="name">
                Beautiful
            </div>
        </div>
    </div>
}

export default Greeting