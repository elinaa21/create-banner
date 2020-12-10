import React from 'react';

import ChooseColor from '../ChooseColor/ChooseColor';
import ChooseShape from '../ChooseShape/ChooseShape';
import SetText from '../SetText/SetText';
import './BannerForm.scss';

const BannerForm = () => {
    return (
        <div className="banner-form">
            <ChooseShape />
            <ChooseColor />
            <SetText />
            <div className="banner-form__label">Text color (css)</div>
            <input className="banner-form__input" placeholder="#000000" />
        </div>
    );
};

export default BannerForm;
