import React from 'react';

import './style/style.css';

const Reset = props => (
    <div className="button-start">
        <button className="btn-reset" onClick={props.reset}>Reset</button>
    </div>
);
export default Reset;