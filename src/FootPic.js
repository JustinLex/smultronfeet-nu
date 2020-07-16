import React from 'react';
import './FootPic.css';


const FootPic = (props) => (
    <div class={'foot-pic'}>
        <img src={props.pic}></img>
        <h4>{props.name}</h4>
        <div class={'price'}>
        <strong>420.69 kr</strong> <button>Buy now</button>
        </div>
        {/*image*/}
        {/*name of image*/}
        {/*[price] [buy here button]*/}
        {props.children}
    </div>
)

export default FootPic;