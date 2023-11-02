import React from "react";

function Child(props) {
    return (
        <input style={{ "padding": "10px", "border-radius": "5px" }}
            value={props.temperature}
            onChange={handleChange}
)    
}

export default Child;