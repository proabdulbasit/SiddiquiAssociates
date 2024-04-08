import React from 'react'

import Styles from "./button.module.scss"

const Button = ({ onClick, msg, type }) => {
    return (
        <button onClick={onClick} type={type} className={Styles.btnStyle}>{msg}</button>
    )
}

export default Button