import React, { useState } from 'react';

function Input(props) {

    const [state, updateState] = useState({
        title: "",
        description: ""
    });

    function changed(e) {

        const { name, value } = e.target;
        updateState((prev) => {
            return {
                ...prev,
                [name]: value
            };

        });

    }

    function submitted(e) {
        e.preventDefault();
        props.onAdd(state);



    }

    return (
        <div className="inpdiv">
            <form>
                <input type="text" name="title" className="inp" placeholder="Title" onChange={changed} value={state.title} />
                <input className="inp" type="text" name="description" placeholder="Description" id="inp2" onChange={changed} value={state.description} />
                <button className="btn" type="submit" onClick={submitted}>add</button>
            </form>
        </div>
    );
}

export default Input;