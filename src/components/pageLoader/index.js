import React from 'react'
import Styles from "./pageLoader.module.scss"

const PageLoader = () => {
    return (
        <div className={Styles.spinnerWrapper}>
            <div className={Styles.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default PageLoader