import React from "react";

const UserOutput = (props) => {
    return(
        <div>
            <div style={props.style} className="Output">
            <p>{props.username}</p>
            <p>Paragraph 2</p>
            </div>
        </div>
    );
};

export default UserOutput;