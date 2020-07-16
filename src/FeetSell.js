import React from 'react';
import './FeetSell.css';
import FootPic from "./FootPic";


const FeetSell = (props) => {
    const footpicsDict = {

    };
    const footpics = [];

    return (
        <div>
            <h2>Feet pics currently on sale</h2>
            <div id={'feet'}>
                <FootPic name={'cool foot'}/>
                <FootPic name={'cool foot'}/>
                <FootPic name={'cool foot'}/>
                <FootPic name={'cool foot'}/>
                <FootPic name={'cool foot'}/>
                <FootPic name={'cool foot'}/>
            </div>
        </div>
    )
};

export default FeetSell;