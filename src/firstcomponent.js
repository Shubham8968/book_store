import React from "react";
import{render} from "react-dom";

function FirstComponent()
{
    return(
        <React.Fragment>
            <div>
                <h2>This is my first component </h2>
                <img src="pug_dog_blanket_110448_3840x2400.jpg" widht="700" height="500"></img>
            </div>
        </React.Fragment>
    )
}

export default FirstComponent