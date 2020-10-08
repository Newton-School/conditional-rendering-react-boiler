import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

    return (
        <div>
            <button id='stateChangeButton' onClick={handleStateChange}>Change State</button>
            &nbsp; &nbsp;
            <button id='styleChangeButton' onClick={handleStyleChange}>Change Style</button>
            <br/>
            <span id='data' className={ /**
             * Add class 'content' based on condition
             * which toggles when 'Change Style' button is clicked
             * Initially set 'content' class absent
             */ }>
                {
                    /**
                     * print 'True' or 'False'
                     * based on condition which toggles when 'Change State' button is clicked
                     * Initially set it to 'False'
                     */
                }
            </span>
        </div>
    )
}


export default App;