import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

    return (
        <div>
            <button id='stateChangeButton' onClick={}>Change State</button>
            &nbsp; &nbsp;
            <button id='styleChangeButton' onClick={}>Change Style</button>
            <br/>
            <span id='data' className={ 
                /** Add class 'content' to add styles based on style */
                /** It should be toggled when Change Style is clicked */
                /** Initially it should not be there */
            }>
                {
                    /** Write 'True' or 'False' here based on conditions */
                    /** It should be toggled when Change State button is clicked */
                    /** Initially it should be 'False' */
                }
            </span>
        </div>
    )
}


export default App;
