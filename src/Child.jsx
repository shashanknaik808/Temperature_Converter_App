import React from "react";

function Child(props) {

    function handleChange(e) {
        let num = null;
        if (e.target.value === '') {
            num = 0;
        }
        else {
            num.parseInt(e.target.value);
        }

        props.onTemperatureChange(num);
    }
    return (
        <input style={{ "padding": "10px", "border-radius": "5px" }}
            value={props.temperature}
            onChange={handleChange}
        />
    )
}

export default Child;