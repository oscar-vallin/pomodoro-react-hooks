import React from 'react';

import './style/style.css'

const Inputs = props => (
    <div className="inputs">
        <input 
            type="number" min="1" 
            name="minu" 
            placeholder="minutes"
            value={props.valueMinu}
            onChange={props.valueInp}/>
        <input 
            type="number" 
            min="1" name="seco" 
            placeholder="seconds"
            value={props.valueSeco}
            onChange={props.valueInp}/>
    </div>
);
export default Inputs;