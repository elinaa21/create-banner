import React from 'react';

import ChooseColor from '../ChooseColor/ChooseColor';
import ChooseShape from '../ChooseShape/ChooseShape';
import './BannerForm.scss';

const BannerForm = () => {
    return (
        <div className="banner-form">
            <ChooseShape />
            <ChooseColor />
            <div className="banner-form__label">Text</div>
            <input className="banner-form__input" />
            <input className="banner-form__input" />
            <input className="banner-form__input" />
            <div className="banner-form__label">Text color (css)</div>
            <input className="banner-form__input" placeholder="#000000" />
        </div>
    );
};

export default BannerForm;
