import React from 'react';
//import logo from './logo.svg';
import './App.css';
import FeetSell from "./FeetSell";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>SmultronFeet.nu</h1>
                <h2>The #1 website for sweet pics of Smultrons feet</h2>
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*  Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*  className="App-link"*/}
                {/*  href="https://reactjs.org"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  Learn React*/}
                {/*</a>*/}
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </header>

            <div id={'quotes'}>
                <div style={{gridRowStart: 2}}>
                <div className={'q-box'}>
                    <q style={{'gridColumnStart':1, 'gridColumnEnd': 3}}>Va har du för färg på dina strumpor?</q>
                    <q style={{'gridRowStart':2, 'gridColumnStart':2, 'gridColumnEnd': 4}}>Är du barfota eller?</q>
                </div>
                These are all questions we have wondered.
                <br />
                <br />
                Finally, we now have the technology to answer these throbbing questions.
                </div>
            </div>

            <FeetSell/>

            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <div style={{'width': '20rem', fontSize: '1rem'}}>
                    <h2 style={{fontSize: '2rem'}}>About our feet</h2>
                    <p>
                        Foot pics are hot hot hot, and you love to see ‘em! At their base level they are pictures of, or that contain, (usually women’s) feet as a prominent visual element. For our purposes here, we are interested mostly in pics in which feet are the central visual element, to the exclusion of other parts of the body, but the term can ecompass more than this.
                    </p>
                    <p>Produced as a niche fetishistic commodity, feet pics have all the perceived transgressive elements of more traditionally recognized pornography, but without relying on specific pornographic or explicit content such nudity, genitalia, or even extensive skin exposure. And therein lies their potential. </p>
                    <p>Because foot pics* can operate in two discrete modes of content consumption simultaneously (i.e. <strong>they can be memes and nudes simultaneously</strong>, in the same public sphere), their perception depends entirely upon the viewer and the context in which the image appears. Thus the foot pic is both highly valuable and almost worthless at the same time - and this creates a highly intriguing supply & demand dynamic when creators/consumers fall on different ends of this valuation scale.</p>
                    <p>The foot pic specifically confounds the famous (and now, it should be noted, obsolete) Supreme Court working definition of pornography* - “[You] Know It When You See It.”
                        <br/>
                        The viewer who does not have a thing for feet, indeed, will NOT “Know It,” and indeed may find the notion that it could be Known ridiculous or unbelievable to such an extreme as to engender the utmost hilarity. By this same virtue, the foot pic may also ghost seamlessly through algorithmic or even human content moderation strategies.
                        <br/>
                        * Jacobellis v. Ohio, 1964 </p>
                    <p>Because the foot pic may be devoid of any mainstream pornographic signifiers it is both low barrier to entry and significantly safer to distribute. The production of the picture may, depending entirely upon the person to whom the foot belongs, be essentially valueless in the mind of the producer - and yet the resulting image strongly valued by the right consumer.
                        <br/>
                        We might posit that the dynamic created mirrors the Arghiri Emmanuel’s Theory of Unequal Exchange. This analysis observes that countries with lower wages export more embodied labor time in their commodities than they import - and that the reverse holds true for countries with higher wages. Crucially, the face monetary value of imported and exported commodities does not capture this metric.
                        With foot pics, then, the presence of a foot fetish, and therefore the psychological investiture in the created/consumed (imported or exported) functions as a parallel metric to labor time. Whether this implies, as Emmanuel theorizes with regard to trade between more-developed and less-developed nations, that the terms of foot pic sales will become less favorable to buyers over time is unclear.
                        <br/>
                        Fundamentally we can view foot pics’ spread, popularity, and accessibility as a kind of arbitrage across a foot-fetishism gradient, which moves foot images from areas of low psychological investiture (non-foot-fetishist producers) to areas of high investiture (foot-fetishist consumers).
                    </p>
                </div>
            </div>

            <footer>
                <br/>
                Brought to you by Smultronfötter AB
                <br/>
                <em>Responsible feet from responsible people.</em>
            </footer>
        </div>
    );
}

export default App;
