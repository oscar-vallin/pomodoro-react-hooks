import React,{useState, useEffect} from 'react';

import './style/style.css';

import Time from './Time';
import Reset from './Reset';
import Inputs from './Inputs';
import AnotherTime from './AnotherTime';

const Timer = ({start}) => {
    const [startAgain, getStartAgain] =useState(false);
    const [second, getSecond] =useState(10);
    const [minutes, getMinutes] =useState(0)
    const [valueInput, getValueInput] =useState({ minu: '', seco: '' });
       
    const {minu, seco} = valueInput;

    useEffect(() => {
        if(start){
            const interval = setInterval(startCount, 1000);
            return () => clearInterval(interval)
        }   
    },[second,start])
    const startCount = () => {
        if(minutes > 0 && second === 0) {
            getMinutes(prev => prev-1);
            getSecond(60);
        }else if(minutes === 0 && second === 0){
            getMinutes(0);
            getSecond(21);
            getStartAgain(!startAgain);
        }
        getSecond(prev => prev-1);
    }
    const handleChange = values =>{
        getValueInput({
            ...valueInput,
            [values.target.name] : values.target.value
        });
    };
    const submit = () => {
        if(+minu < 0 || +minu > 30 || +seco < 0 || +seco > 60){
            alert("Incorrect Number")
        }else{
            getMinutes(+minu);
            getSecond(+seco)
        } 
        getValueInput({minu: '', seco:''});
    };
    const reset = () =>{
        getMinutes(0);
        getSecond(20);
    }
    return(
        <div className="startWork">
            <p>{!startAgain ? "Time To Work" : "Time to Breack"}</p>
            <Time minu={minutes} seco={second}/>
            <Inputs 
             valueInp={handleChange}
             valueMinu={minu}
             valueSeco={seco}
            />
            <div>
           { start ? <Reset reset={reset}/> : <AnotherTime submit={submit} />}
            </div>
        </div>
    );
};
export default Timer;