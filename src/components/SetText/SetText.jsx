import React from 'react';
import { useDispatch } from 'react-redux';

import { setFirstLine } from '../../state/actions';
import './SetText.scss';

const SetText = () => {
    const dispatch = useDispatch();

    const updateFirstLine = e => {
        dispatch(setFirstLine(e.target.value));
    };

    return (
        <>
            <div className="banner-form__label">Text</div>
            <input
                className="set-text__input"
                placeholder="First line"
                onChange={updateFirstLine}
            />
            <input className="set-text__input" placeholder="Second line" />
            <input className="set-text__input" placeholder="Third line" />
        </>
    );
};

export default SetText;
