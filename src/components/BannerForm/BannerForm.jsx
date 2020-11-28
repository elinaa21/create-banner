import React from 'react';

import './BannerForm.scss';

const BannerForm = () => {
    return (
        <div className="banner-form">
            <div className="banner-form__label">Shape</div>
            <div className="shapes-container">
                <div className="shapes-container__shape-square" />
                <div className="shapes-container__shape-vertical" />
                <div className="shapes-container__shape-gorizontal" />
            </div>
            <div className="banner-form__label">Background color</div>
            <input className="banner-form__input" />
            <input className="banner-form__input" />
            <div className="banner-form__label">Text</div>
            <input className="banner-form__input" />
            <input className="banner-form__input" />
            <input className="banner-form__input" />
            <div className="banner-form__label">Text color</div>
            <input className="banner-form__input" />
        </div>
    );
};

export default BannerForm;
