import React from 'react';

const Form = (props) => {

    const handleSubmit = (e, bgColor) => {
        e.preventDefault();
        props.onNewColor( bgColor );
        e.target[0].value = ''
    };

    return(
        <div>
                <form onSubmit={ (e) => handleSubmit(e, e.target[0].value) }>
                    <label>Enter a color:</label>
                    <input className= 'btn' type="text" name="color"/>
                    <input className= 'btn' type="submit"/>
                </form>
            </div>
    );
}

export default Form;