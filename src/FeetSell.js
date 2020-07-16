import React from 'react';
import './FeetSell.css';
import FootPic from "./FootPic";


const FeetSell = (props) => {
    const footpicsDict = {
        'Actually not a foot': 'feet-pics/Actually not a foot.jpg',
        'Bone Apple Feet': 'feet-pics/Bone Apple Feet.jpg',
        'Caps Feet': 'feet-pics/Caps Feet.jpg',
        'Cat Feet': 'feet-pics/Cat Feet.jpg',
        'Däckad Feet': 'feet-pics/Däckad Feet.jpg',
        'Fancy Feet': 'feet-pics/Fancy Feet.jpg',
        'Far Away Foot': 'feet-pics/Far Away Foot.jpg',
        'Group Footplay': 'feet-pics/Group Footplay.jpg',
        'Hobbit Feet': 'feet-pics/Hobbit Feet.jpg',
        'Looks like a foot': 'feet-pics/Looks like a foot.jpg',
        'Scientific Measurement Foot': 'feet-pics/Measurement Foot.jpg',
        'Ninja Foot': 'feet-pics/Ninja Foot.jpg',
        'Park Foot': 'feet-pics/Park Foot.png',
        'Party Foot': 'feet-pics/Party Foot.jpg',
        'Puke Feet': 'feet-pics/Puke Feet.jpg',
        'Rainbow Feet': 'feet-pics/Rainbow Feet.png',
        'Sandal Foot': 'feet-pics/Sandal Foot.jpg',
        'Sauna Feet': 'feet-pics/Sauna Feet.jpg',
        'Shoe Foot': 'feet-pics/Shoe Foot.jpg',
        'Shy Foot': 'feet-pics/Shy Foot.jpg',
        'Titty Feet': 'feet-pics/Titty Feet.jpg',
        'VMFOT': 'feet-pics/VMFOT.png',
        'Wet feet 😢': 'feet-pics/Wet feet.jpg',

    };
    const footpics = [];

    const numberOfPics = Object.keys(footpicsDict).length;
    for(let i = 0; i < numberOfPics; i++) {
        const index = Math.floor(Math.random() * Object.keys(footpicsDict).length);
        const picName = Object.keys(footpicsDict)[index];
        const imgPath = footpicsDict[picName].replace(' ', '%20');
        footpics.push(
            <FootPic key={'footpic' + i} name={picName} pic={imgPath}/>
        );
        delete footpicsDict[picName]
    }

    return (
        <div>
            <h2>Feet pics currently on sale</h2>
            <div id={'feet'}>
                {footpics}
            </div>
        </div>
    )
};

export default FeetSell;