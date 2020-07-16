import React from 'react';
import './FootPic.css';


const FootPic = (props) => (
    <div className={'foot-pic'}>
        <img alt={props.name} src={props.pic}/>
        <h4>{props.name}</h4>
        <div className={'price'}>
                <strong>420.69 kr</strong>
                <a style={{display: 'flex', textDecoration: 'none'}} href={'https://www.systembolaget.se/dryck/aperitif-dessert/caprice-kir-296601'}>
                        <button>Buy now</button>
                </a>

        </div>
    </div>
)

export default FootPic;