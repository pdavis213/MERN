import React from 'react';
import './BoxBuilder.css';

const BoxBuilder = (props) => {
    return(
            <div className="boxContainer">

                {props.color.map((color) => {
                    return(

                        <div className= "boxBuilder" style={{backgroundColor: color }}></div>
                    )
                })}
            </div>
    );
}

export default BoxBuilder;