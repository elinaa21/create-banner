import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setTextColor } from '../../state/actions';
import './ChooseTextColor.scss';

const ChooseTextColor = () => {
    const dispatch = useDispatch();
    const textColor = useSelector(state => state.banner.textColor);
    const changeTextColor = e => {
        dispatch(setTextColor(e.target.value));
    };

    return (
        <>
            <div className="banner-form__label">Text color (css)</div>
            <label className="color-selector">
                <span className="color-selector__circle" style={{ background: textColor }} />
                <span className="color-selector__span">{textColor}</span>
                <input
                    type="color"
                    value={textColor}
                    onChange={changeTextColor}
                    className="color-selector__hidden"
                />
            </label>
        </>
    );
};

export default ChooseTextColor;
