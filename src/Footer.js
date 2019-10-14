import React from 'react';
import InputText from './InputText';

const Footer = () => (
    <div className="footer">
        <div className="big-text">Meld deg på nyhetsbrevet!</div>
        <div className="row">
            <InputText label="Ditt navn" />
            <InputText label="Din e-postadresse" />
        </div>
        <div>Hvor awesome er denne siden?</div>
        <label>
            <input type="radio" />
            Mega awesome
        </label>
        <label>
            <input type="radio" />
            Superduper awesome
        </label>
        <div className="button" onClick={ () => window.confirm('Du har nettopp gjort den beste avgjørelsen i livet ditt!') }>
            Meld på!
        </div>
    </div>
);

export default Footer;
