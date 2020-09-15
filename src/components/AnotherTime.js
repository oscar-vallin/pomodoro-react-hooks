import React from 'react';

import './style/style.css';

const AnotherTime = ({submit}) => (
    <div className="button-start">
        <button className="btn-reset" onClick={submit}>Another Time</button>
    </div>
)
export default AnotherTime;