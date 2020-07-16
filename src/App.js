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
                    <path fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </header>

            <div id={'quotes'}>
                <div style={{gridRowStart: 2}}>
                <div class={'q-box'}>
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

            <footer>
                Brought to you by Smultronfötter AB
                <br/>
                <em>Responsible feet from responsible people.</em>
            </footer>
        </div>
    );
}

export default App;
