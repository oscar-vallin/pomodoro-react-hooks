import React from 'react';

import './style/style.css'

const Time = ({minu,seco}) => (
    <div className="show-time">
        <p>{("0"+minu).slice(-2)}:{("0"+seco).slice(-2)}</p>
    </div>
)
export default Time;