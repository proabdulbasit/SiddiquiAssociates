import React from 'react'
import Styles from "./topbar.module.scss"
import { AiFillPhone } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"
// import { FaFax } from "react-icons/fa"

const TopBar = () => {
    return (
        <>
            <div className={Styles.topBarWrapper}>
                <p><AiFillPhone style={{ "marginTop": "3px" }} /> <a href='tel:0292120303'>(02) 9212 0303</a></p>
                {/* <p><FaFax /> (02) 9211 3626</p> */}
                <p><AiOutlineMail style={{ "marginTop": "3px" }} /><a href='mailto:info@siddiquiassociates.com.au'>info@siddiquiassociates.com.au</a></p>
            </div>
        </>
    )
}

export default TopBar