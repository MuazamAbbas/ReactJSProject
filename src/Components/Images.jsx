import React from 'react'

const Images = (props) => {
    return (
        <>
        <div>
        <img src={props.imgscr} alt="myPic" className="card__img" />
        </div>
        </>
    );
}

export default Images
