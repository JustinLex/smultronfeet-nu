import React from 'react';
import './FootPic.css';


const FootPic = (props) => (
    <div className={'foot-pic'}>
        <img alt={props.name} src={props.pic}/>
        <h4>{props.name}</h4>
        <div className={'price'}>
        <strong>420.69 kr</strong> <button>Buy now</button>
        </div>
    </div>
)

export default FootPic;