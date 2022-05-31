import React from "react";
import '../styles/Contador.css'

function Contador( { numclics } ){
    return(
        <div className="contador">
            {numclics}
        </div>
    );
}

export default Contador;