import React from 'react';

const InputText = ({ id, label }) => (
    <div className="input-text">
        <label for={ id }>{ label }</label>
        <input type="text" name={ id } id={ id } />
    </div>
);

export default InputText;
