// import React, { useState } from 'react';
import Styles from "./card.module.scss";
import Button from "../button";
// import ModalView from '../modal';
import { Link } from 'react-router-dom';

const Card = ({ cardImg, heading, content,link,alt }) => {
// const Card = () => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <div className={Styles.cardWrapper}>
                <div>
                    <img src={cardImg} alt={alt} />
                </div>
                <div>
                    <h2>{heading}</h2>
                    <p>{content}</p>
                    <Link to={link}><Button msg={"View More"}  /></Link>
                    
                </div>
            </div>
            {/* <ModalView show={show} handleClose={handleClose} modalContent={modalContent} title={heading} /> */}
        </>
    )
}

export default Card