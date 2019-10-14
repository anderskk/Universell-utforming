import React from 'react';

const InputText = ({ label }) => (
    <div className="input-text">
        <div>{ label }</div>
        <input type="text" id="input-text" />
    </div>
);

export default InputText;
