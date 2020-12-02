import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setColor } from '../../state/actions';
import ChooseShape from '../ChooseShape/ChooseShape';
import './BannerForm.scss';

const BannerForm = () => {
    const dispatch = useDispatch();
    const color = useSelector(state => state.banner.color);

    const setMainColor = e => {
        dispatch(setColor(e.target.value));
    };
    // const setGradient = e => {
    //     dispatch(setColor(e.currentTarget.value));
    // };

    return (
        <div className="banner-form">
            <ChooseShape />
            <div className="banner-form__label">Background color</div>
            <input
                className="banner-form__input"
                placeholder="Main color (#FFFFFF)"
                onChange={setMainColor}
                value={color}
            />
            <input className="banner-form__input" placeholder="Extra color (#FFFFFF)" />
            <div className="banner-form__label">Text</div>
            <input className="banner-form__input" />
            <input className="banner-form__input" />
            <input className="banner-form__input" />
            <div className="banner-form__label">Text color</div>
            <input className="banner-form__input" placeholder="#000000" />
        </div>
    );
};

export default BannerForm;
