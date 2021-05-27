import React, { useState } from 'react';

function Time() {
    const timer = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    const [dated, updateDate] = useState(date);
    const [time, updateTime] = useState(timer);

    setInterval(() => {
        const timerupdate = new Date().toLocaleTimeString();
        const dateupdate = new Date().toLocaleDateString();
        updateDate(dateupdate);
        updateTime(timerupdate);
    }, 1000);

    const style = {
        position: "absolute",
        left: "1200px",
        top: "20px",
        fontFamily: "Caveat"
    };
    const style1 = {
        position: "absolute",
        left: "1200px",
        top: "-10px",
        fontFamily: "Caveat"
    };


    return (
        <div>
            <h3 style={style} ><b>{time}</b>
            </h3>
            <h3 style={style1}>{dated}</h3>
        </div>

    );
}

export default Time;