import * as React from "react";
import Tooltip from "@mui/material/Tooltip";


const ToolTips = ({ position }) => {
    var sentence = position.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return (
        <Tooltip title={"Thanks For Hovering..! I'am A Tooltip On " +sentence.join(" ") + " Position"} placement={position}
            arrow>
            <button className="hover header">Hover Over Me.!!</button>
        </Tooltip>
    );
}
export default ToolTips;